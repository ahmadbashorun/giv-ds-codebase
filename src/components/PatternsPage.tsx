import React from 'react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { 
  Layout, 
  FileText,
  Component,
  Grid
} from 'lucide-react';

interface PatternsPageProps {
  onSectionChange: (section: string, subSection?: string) => void;
}

export function PatternsPage({ onSectionChange }: PatternsPageProps) {
  return (
    <div className="p-6 space-y-8">
      <div className="space-y-4">
        <div className="space-y-2">
          <h1 className="h1-heading" style={{ color: 'var(--text-heading-page)' }}>Patterns</h1>
          <p className="paragraph-large-regular" style={{ color: 'var(--text-body)' }}>
            Common design patterns and layouts for consistent user experiences across all platforms
          </p>
        </div>
        
        <div className="flex gap-2">
          <Badge variant="outline" className="gap-1" style={{ gap: '4px' }}>
            <Layout className="h-3 w-3" />
            <span className="caption-large">Page Layouts</span>
          </Badge>
          <Badge variant="outline" className="gap-1" style={{ gap: '4px' }}>
            <Grid className="h-3 w-3" />
            <span className="caption-large">Data Patterns</span>
          </Badge>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="p-6 border" style={{ borderColor: 'var(--border-card)' }}>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div 
                className="w-10 h-10 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: 'var(--primary-p00)' }}
              >
                <Layout className="h-5 w-5" style={{ color: 'var(--primary-p04)' }} />
              </div>
              <h3 className="h6-heading" style={{ color: 'var(--text-heading-section)' }}>Dashboard Layout</h3>
            </div>
            <p className="paragraph-small-regular" style={{ color: 'var(--text-body)' }}>
              Standard dashboard layout with sidebar navigation and content area
            </p>
            <div className="flex gap-2">
              <Badge variant="secondary"><span className="caption-medium">Angular</span></Badge>
              <Badge variant="secondary"><span className="caption-medium">React</span></Badge>
              <Badge variant="secondary"><span className="caption-medium">Ionic</span></Badge>
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
              <h3 className="h6-heading" style={{ color: 'var(--text-heading-section)' }}>Form Layout</h3>
            </div>
            <p className="paragraph-small-regular" style={{ color: 'var(--text-body)' }}>
              Multi-step form patterns with validation and progress indicators
            </p>
            <div className="flex gap-2">
              <Badge variant="secondary"><span className="caption-medium">Angular</span></Badge>
              <Badge variant="secondary"><span className="caption-medium">React</span></Badge>
              <Badge variant="secondary"><span className="caption-medium">Ionic</span></Badge>
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
                <Grid className="h-5 w-5" style={{ color: 'var(--primary-p04)' }} />
              </div>
              <h3 className="h6-heading" style={{ color: 'var(--text-heading-section)' }}>Data Table</h3>
            </div>
            <p className="paragraph-small-regular" style={{ color: 'var(--text-body)' }}>
              Advanced data table with sorting, filtering, and pagination
            </p>
            <div className="flex gap-2">
              <Badge variant="secondary"><span className="caption-medium">Angular</span></Badge>
              <Badge variant="secondary"><span className="caption-medium">React</span></Badge>
            </div>
          </div>
        </Card>
      </div>

      <div className="text-center">
        <p className="paragraph-medium-regular mb-4" style={{ color: 'var(--text-body)' }}>
          More patterns coming soon...
        </p>
        <Button 
          variant="outline" 
          onClick={() => onSectionChange('components')}
          className="gap-2"
        >
          <Component className="h-4 w-4" />
          <span className="paragraph-small-medium">View Components</span>
        </Button>
      </div>
    </div>
  );
}