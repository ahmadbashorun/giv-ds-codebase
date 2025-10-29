import { useState, useCallback } from 'react';
import { useToast } from './useToast';

interface UseCopyOptions {
  successDuration?: number;
  onSuccess?: (text: string) => void;
  onError?: (error: Error) => void;
  showToast?: boolean;
}

interface UseCopyReturn {
  copy: (text: string, identifier?: string) => Promise<void>;
  copied: string | null;
  isLoading: boolean;
}

// Enhanced fallback copy function with multiple strategies
const fallbackCopyToClipboard = (text: string): Promise<boolean> => {
  return new Promise((resolve) => {
    try {
      // Strategy 1: Try the legacy execCommand method
      const textArea = document.createElement('textarea');
      textArea.value = text;
      textArea.style.position = 'fixed';
      textArea.style.left = '-999999px';
      textArea.style.top = '-999999px';
      textArea.setAttribute('readonly', '');
      textArea.style.opacity = '0';
      textArea.style.pointerEvents = 'none';
      textArea.tabIndex = -1;
      
      document.body.appendChild(textArea);
      
      // For iOS devices
      if (navigator.userAgent.match(/ipad|iphone/i)) {
        const range = document.createRange();
        range.selectNodeContents(textArea);
        const selection = window.getSelection();
        selection?.removeAllRanges();
        selection?.addRange(range);
        textArea.setSelectionRange(0, 999999);
      } else {
        textArea.focus();
        textArea.select();
      }
      
      // Try execCommand
      let successful = false;
      try {
        successful = document.execCommand('copy');
      } catch (execError) {
        console.warn('execCommand failed:', execError);
      }
      
      document.body.removeChild(textArea);
      
      if (successful) {
        resolve(true);
        return;
      }
    } catch (error) {
      console.warn('Fallback copy method failed:', error);
    }
    
    // Strategy 2: Try creating a temporary input element (sometimes works better)
    try {
      const input = document.createElement('input');
      input.value = text;
      input.style.position = 'fixed';
      input.style.left = '-999999px';
      input.style.top = '-999999px';
      input.style.opacity = '0';
      
      document.body.appendChild(input);
      input.focus();
      input.select();
      input.setSelectionRange(0, input.value.length);
      
      const successful = document.execCommand('copy');
      document.body.removeChild(input);
      
      if (successful) {
        resolve(true);
        return;
      }
    } catch (error) {
      console.warn('Input fallback method failed:', error);
    }
    
    // If all methods fail, resolve false
    resolve(false);
  });
};

export function useCopy(options: UseCopyOptions = {}): UseCopyReturn {
  const { successDuration = 2000, onSuccess, onError, showToast = false } = options;
  const [copied, setCopied] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();

  const copy = useCallback(async (text: string, identifier?: string) => {
    try {
      setIsLoading(true);
      let copySuccessful = false;
      
      // Strategy 1: Try the modern Clipboard API first
      try {
        if (navigator.clipboard && window.isSecureContext) {
          await navigator.clipboard.writeText(text);
          copySuccessful = true;
        }
      } catch (clipboardError) {
        console.warn('Clipboard API failed:', clipboardError);
        // Don't throw here, try fallback
      }
      
      // Strategy 2: If Clipboard API failed or isn't available, try fallback
      if (!copySuccessful) {
        copySuccessful = await fallbackCopyToClipboard(text);
      }
      
      if (copySuccessful) {
        const copyId = identifier || text;
        setCopied(copyId);
        onSuccess?.(text);
        
        // Show success toast if enabled
        if (showToast) {
          const displayText = text.length > 30 ? text.slice(0, 30) + '...' : text;
          toast.success(`Copied: ${displayText}`);
        }
        
        // Clear the copied state after the specified duration
        setTimeout(() => {
          setCopied(null);
        }, successDuration);
      } else {
        throw new Error('All copy methods failed - please copy the text manually');
      }
      
    } catch (error) {
      const copyError = error instanceof Error 
        ? error 
        : new Error('Failed to copy to clipboard');
      
      onError?.(copyError);
      
      // Show helpful error message
      if (showToast) {
        toast.error('Copy failed. Please select and copy the text manually (Ctrl+C or Cmd+C).');
      }
      
      console.error('Copy to clipboard failed:', copyError);
      
      // Still show the "copied" state briefly to indicate the user should copy manually
      const copyId = identifier || text;
      setCopied(copyId);
      setTimeout(() => {
        setCopied(null);
      }, successDuration);
    } finally {
      setIsLoading(false);
    }
  }, [successDuration, onSuccess, onError, showToast, toast]);

  return {
    copy,
    copied,
    isLoading
  };
}

// Utility function for one-off copying without hook
export const copyToClipboard = async (text: string): Promise<boolean> => {
  try {
    // Strategy 1: Try the modern Clipboard API first
    if (navigator.clipboard && window.isSecureContext) {
      try {
        await navigator.clipboard.writeText(text);
        return true;
      } catch (clipboardError) {
        console.warn('Clipboard API failed, trying fallback:', clipboardError);
        // Continue to fallback
      }
    }
    
    // Strategy 2: Try fallback method
    return await fallbackCopyToClipboard(text);
  } catch (error) {
    console.error('All copy methods failed:', error);
    return false;
  }
};