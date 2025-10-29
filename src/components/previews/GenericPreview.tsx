import React from 'react';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { User, AlertCircle, CheckCircle, XCircle } from 'lucide-react';

interface GenericPreviewProps {
  componentId: string;
}

export function GenericPreview({ componentId }: GenericPreviewProps) {
  if (componentId === 'card') {
    return (
      <Card className="p-6 max-w-sm border" style={{ borderColor: 'var(--border-card)' }}>
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div 
              className="w-10 h-10 rounded-full flex items-center justify-center"
              style={{ backgroundColor: 'var(--primary)' }}
            >
              <User className="h-5 w-5" style={{ color: 'var(--primary-foreground)' }} />
            </div>
            <div>
              <h4 className="paragraph-small-medium" style={{ color: 'var(--text-body)' }}>Sarah Johnson</h4>
              <p className="caption-medium" style={{ color: 'var(--text-metadata)' }}>Senior Caregiver</p>
            </div>
          </div>
          <p className="paragraph-small-regular" style={{ color: 'var(--text-body)' }}>
            Experienced caregiver specializing in developmental disabilities with 5+ years of experience.
          </p>
          <div className="flex gap-2">
            <Button size="sm">View Profile</Button>
            <Button variant="tertiary" size="sm">Message</Button>
          </div>
        </div>
      </Card>
    );
  }

  if (componentId === 'alert') {
    return (
      <div className="space-y-4 w-full max-w-md">
        <div className="flex items-center gap-3 p-4 rounded-lg" style={{ backgroundColor: 'var(--status-success-bg)', color: 'var(--status-success-text)' }}>
          <CheckCircle className="h-4 w-4" />
          <div>
            <h4 className="paragraph-small-medium">Success</h4>
            <p className="caption-medium">Your changes have been saved successfully.</p>
          </div>
        </div>
        <div className="flex items-center gap-3 p-4 rounded-lg" style={{ backgroundColor: 'var(--status-warning-bg)', color: 'var(--status-warning-text)' }}>
          <AlertCircle className="h-4 w-4" />
          <div>
            <h4 className="paragraph-small-medium">Warning</h4>
            <p className="caption-medium">Please review the information before proceeding.</p>
          </div>
        </div>
        <div className="flex items-center gap-3 p-4 rounded-lg" style={{ backgroundColor: 'var(--status-error-bg)', color: 'var(--status-error-text)' }}>
          <XCircle className="h-4 w-4" />
          <div>
            <h4 className="paragraph-small-medium">Error</h4>
            <p className="caption-medium">Something went wrong. Please try again.</p>
          </div>
        </div>
      </div>
    );
  }

  return null;
}