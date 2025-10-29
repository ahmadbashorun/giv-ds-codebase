import React from 'react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { 
  Book, 
  Download,
  ExternalLink,
  FileText,
  Palette,
  Settings
} from 'lucide-react';

interface ResourcesPageProps {
  onSectionChange: (section: string, subSection?: string) => void;
}

export function ResourcesPage({ onSectionChange }: ResourcesPageProps) {
  return (
    <div className="p-6 space-y-8">
      <div className="space-y-4">
        <div className="space-y-2">
          <h1 className="h1-heading" style={{ color: 'var(--text-heading-page)' }}>Resources</h1>
          <p className="paragraph-large-regular" style={{ color: 'var(--text-body)' }}>
            Design assets, guidelines, and tools for implementing the Giv Design System
          </p>
        </div>
        
        <div className="flex gap-2">
          <Badge variant="outline" className="gap-1" style={{ gap: '4px' }}>
            <Download className="h-3 w-3" />
            <span className="caption-large">Design Tokens</span>
          </Badge>
          <Badge variant="outline" className="gap-1" style={{ gap: '4px' }}>
            <FileText className="h-3 w-3" />
            <span className="caption-large">Guidelines</span>
          </Badge>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="p-6 border" style={{ borderColor: 'var(--border-card)' }}>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div 
                className="w-10 h-10 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: 'var(--primary-p00)' }}
              >
                <Download className="h-5 w-5" style={{ color: 'var(--primary-p04)' }} />
              </div>
              <h3 className="h6-heading" style={{ color: 'var(--text-heading-section)' }}>Design Tokens</h3>
            </div>
            <p className="paragraph-small-regular" style={{ color: 'var(--text-body)' }}>
              CSS variables and design tokens for consistent styling across platforms
            </p>
            <div className="flex gap-2">
              <Button size="sm" className="gap-1">
                <Download className="h-3 w-3" />
                <span className="paragraph-small-medium">Download CSS</span>
              </Button>
              <Button variant="outline" size="sm" className="gap-1">
                <ExternalLink className="h-3 w-3" />
                <span className="paragraph-small-medium">View on GitHub</span>
              </Button>
            </div>
          </div>
        </Card>

        <Card className="p-6 border" style={{ borderColor: 'var(--border-card)' }}>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div 
                className="w-10 h-10 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: 'var(--primary-p00)' }}
              >
                <FileText className="h-5 w-5" style={{ color: 'var(--primary-p04)' }} />
              </div>
              <h3 className="h6-heading" style={{ color: 'var(--text-heading-section)' }}>Implementation Guide</h3>
            </div>
            <p className="paragraph-small-regular" style={{ color: 'var(--text-body)' }}>
              Step-by-step guide for implementing the design system in your project
            </p>
            <div className="flex gap-2">
              <Button 
                size="sm" 
                className="gap-1"
                onClick={() => onSectionChange('foundations')}
              >
                <Book className="h-3 w-3" />
                <span className="paragraph-small-medium">Read Guide</span>
              </Button>
              <Button variant="outline" size="sm" className="gap-1">
                <Download className="h-3 w-3" />
                <span className="paragraph-small-medium">Download PDF</span>
              </Button>
            </div>
          </div>
        </Card>

        <Card className="p-6 border" style={{ borderColor: 'var(--border-card)' }}>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div 
                className="w-10 h-10 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: 'var(--primary-p00)' }}
              >
                <Palette className="h-5 w-5" style={{ color: 'var(--primary-p04)' }} />
              </div>
              <h3 className="h6-heading" style={{ color: 'var(--text-heading-section)' }}>Figma Library</h3>
            </div>
            <p className="paragraph-small-regular" style={{ color: 'var(--text-body)' }}>
              Complete Figma component library with all design assets
            </p>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" className="gap-1">
                <ExternalLink className="h-3 w-3" />
                <span className="paragraph-small-medium">Open in Figma</span>
              </Button>
            </div>
          </div>
        </Card>

        <Card className="p-6 border" style={{ borderColor: 'var(--border-card)' }}>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div 
                className="w-10 h-10 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: 'var(--primary-p00)' }}
              >
                <Settings className="h-5 w-5" style={{ color: 'var(--primary-p04)' }} />
              </div>
              <h3 className="h6-heading" style={{ color: 'var(--text-heading-section)' }}>Development Tools</h3>
            </div>
            <p className="paragraph-small-regular" style={{ color: 'var(--text-body)' }}>
              CLI tools and scaffolding for quick setup and development
            </p>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" className="gap-1">
                <Download className="h-3 w-3" />
                <span className="paragraph-small-medium">Download CLI</span>
              </Button>
              <Button variant="outline" size="sm" className="gap-1">
                <ExternalLink className="h-3 w-3" />
                <span className="paragraph-small-medium">Documentation</span>
              </Button>
            </div>
          </div>
        </Card>
      </div>

      <div className="text-center">
        <p className="paragraph-medium-regular mb-4" style={{ color: 'var(--text-body)' }}>
          Need help implementing the design system?
        </p>
        <Button variant="outline" className="gap-2">
          <ExternalLink className="h-4 w-4" />
          <span className="paragraph-small-medium">Contact Support</span>
        </Button>
      </div>
    </div>
  );
}