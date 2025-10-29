import { useState, useCallback } from 'react';

interface ToastOptions {
  type?: 'success' | 'error' | 'warning' | 'info';
  duration?: number;
  position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'top-center';
}

interface Toast {
  id: string;
  message: string;
  type: 'success' | 'error' | 'warning' | 'info';
  duration: number;
}

const createToastElement = (toast: Toast, onRemove: (id: string) => void) => {
  const toastElement = document.createElement('div');
  toastElement.id = `toast-${toast.id}`;
  
  // Style based on type
  const typeStyles = {
    success: {
      background: 'var(--status-success-bg)',
      color: 'var(--status-success-text)',
      iconColor: 'var(--status-success-text)'
    },
    error: {
      background: 'var(--status-error-bg)',
      color: 'var(--status-error-text)',
      iconColor: 'var(--status-error-text)'
    },
    warning: {
      background: 'var(--status-warning-bg)',
      color: 'var(--status-warning-text)',
      iconColor: 'var(--status-warning-text)'
    },
    info: {
      background: 'var(--accent)',
      color: 'var(--accent-foreground)',
      iconColor: 'var(--accent-foreground)'
    }
  };
  
  const style = typeStyles[toast.type];
  
  toastElement.innerHTML = `
    <div style="
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 12px 16px;
      background: ${style.background};
      color: ${style.color};
      border-radius: 8px;
      box-shadow: var(--elevation-sm);
      font-family: var(--font-family);
      font-size: 14px;
      font-weight: var(--font-weight-roman);
      line-height: 1.3;
      max-width: 320px;
      word-wrap: break-word;
      margin-bottom: 8px;
      transform: translateX(100%);
      transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
      opacity: 0;
    ">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color: ${style.iconColor}; flex-shrink: 0;">
        ${toast.type === 'success' ? '<path d="M9 11l3 3l8-8"/><path d="m21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9c2.12 0 4.07 0.74 5.61 1.97"/>' :
          toast.type === 'error' ? '<circle cx="12" cy="12" r="10"/><path d="m15 9-6 6"/><path d="m9 9 6 6"/>' :
          toast.type === 'warning' ? '<path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><path d="M12 9v4"/><path d="m12 17 .01 0"/>' :
          '<circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/>'
        }
      </svg>
      <span>${toast.message}</span>
    </div>
  `;
  
  // Animate in
  setTimeout(() => {
    const innerDiv = toastElement.firstElementChild as HTMLElement;
    if (innerDiv) {
      innerDiv.style.transform = 'translateX(0)';
      innerDiv.style.opacity = '1';
    }
  }, 10);
  
  // Auto remove
  setTimeout(() => {
    const innerDiv = toastElement.firstElementChild as HTMLElement;
    if (innerDiv) {
      innerDiv.style.transform = 'translateX(100%)';
      innerDiv.style.opacity = '0';
      setTimeout(() => {
        onRemove(toast.id);
      }, 300);
    }
  }, toast.duration);
  
  return toastElement;
};

let toastContainer: HTMLElement | null = null;

const getToastContainer = () => {
  if (!toastContainer) {
    toastContainer = document.createElement('div');
    toastContainer.id = 'toast-container';
    toastContainer.style.cssText = `
      position: fixed;
      top: 80px;
      right: 20px;
      z-index: 10000;
      pointer-events: none;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
    `;
    document.body.appendChild(toastContainer);
  }
  return toastContainer;
};

export function useToast() {
  const [toasts, setToasts] = useState<Toast[]>([]);
  
  const removeToast = useCallback((id: string) => {
    const container = getToastContainer();
    const element = document.getElementById(`toast-${id}`);
    if (element && container.contains(element)) {
      container.removeChild(element);
    }
    setToasts(prev => prev.filter(toast => toast.id !== id));
  }, []);
  
  const showToast = useCallback((message: string, options: ToastOptions = {}) => {
    const {
      type = 'info',
      duration = 3000
    } = options;
    
    const id = Math.random().toString(36).substr(2, 9);
    const toast: Toast = {
      id,
      message,
      type,
      duration
    };
    
    setToasts(prev => [...prev, toast]);
    
    const container = getToastContainer();
    const element = createToastElement(toast, removeToast);
    container.appendChild(element);
    
    return id;
  }, [removeToast]);
  
  const success = useCallback((message: string, duration?: number) => {
    return showToast(message, { type: 'success', duration });
  }, [showToast]);
  
  const error = useCallback((message: string, duration?: number) => {
    return showToast(message, { type: 'error', duration });
  }, [showToast]);
  
  const warning = useCallback((message: string, duration?: number) => {
    return showToast(message, { type: 'warning', duration });
  }, [showToast]);
  
  const info = useCallback((message: string, duration?: number) => {
    return showToast(message, { type: 'info', duration });
  }, [showToast]);
  
  return {
    showToast,
    success,
    error,
    warning,
    info,
    toasts
  };
}