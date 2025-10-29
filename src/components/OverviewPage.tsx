import React from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { 
  Palette, 
  Type, 
  Component, 
  Layout, 
  Book,
  ArrowRight,
  Download,
  ExternalLink,
  Zap,
  Shield,
  Users,
  Smartphone,
  Monitor,
  Code
} from 'lucide-react';

interface OverviewPageProps {
  onSectionChange: (section: string) => void;
}

const sectionCards = [
  {
    id: 'foundations',
    title: 'Foundations',
    description: 'Core design elements including colors, typography, spacing, and visual principles to create high-quality experiences.',
    icon: Palette,
    color: 'var(--primary-p02)',
    bgColor: 'var(--primary-p00)',
    features: ['Color System', 'Typography', 'Spacing', 'Iconography']
  },
  {
    id: 'components',
    title: 'Components',
    description: 'Reusable UI components for Angular, Ionic, and React. Consistent behavior for everyday actions, rules, and experiences.',
    icon: Component,
    color: 'var(--primary-p03)',
    bgColor: 'var(--primary-p00)',
    features: ['Buttons', 'Forms', 'Navigation', 'Data Display']
  },
  {
    id: 'patterns',
    title: 'Patterns',
    description: 'Common design patterns and layouts to ensure consistency across different platforms and use cases.',
    icon: Layout,
    color: 'var(--primary-p04)',
    bgColor: 'var(--primary-p00)',
    features: ['Page Layouts', 'Navigation', 'Data Patterns', 'Workflows']
  },
  {
    id: 'resources',
    title: 'Resources',
    description: 'Access to design assets, development tools, and comprehensive guidelines for implementation.',
    icon: Book,
    color: 'var(--primary-p05)',
    bgColor: 'var(--primary-p00)',
    features: ['Design Tokens', 'Assets', 'Guidelines', 'Tools']
  }
];

const platforms = [
  {
    name: 'Angular',
    description: 'Web application components',
    icon: Code,
    status: 'Current',
    color: 'var(--success-s03)'
  },
  {
    name: 'Ionic',
    description: 'Mobile application components',
    icon: Smartphone,
    status: 'Current',
    color: 'var(--success-s03)'
  },
  {
    name: 'React',
    description: 'Future web migration target',
    icon: Monitor,
    status: 'Planned',
    color: 'var(--warning-sw03)'
  }
];

export function OverviewPage({ onSectionChange }: OverviewPageProps) {
  return (
    <div className="p-6 space-y-8">
      {/* Hero Section */}
      <div className="text-center space-y-4 py-12">
        <div className="space-y-2">
          <h1 className="display-small-semibold">Giv Design System</h1>
          <p className="paragraph-large-regular max-w-3xl mx-auto">
            A comprehensive design system for IDD agencies managing operations across web and mobile platforms. 
            Built for clarity, consistency, and accessibility.
          </p>
        </div>
        
        <div className="flex justify-center gap-4 pt-4">
          <Button 
            size="lg" 
            className="gap-2"
            onClick={() => onSectionChange('components')}
          >
            <Component className="h-4 w-4" />
            Browse Components
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="gap-2"
            onClick={() => onSectionChange('foundations')}
          >
            <Palette className="h-4 w-4" />
            View Foundations
          </Button>
        </div>
      </div>

      {/* Platform Support */}
      <div className="space-y-6">
        <div className="text-center space-y-2">
          <h2 className="h3-heading">Platform Support</h2>
          <p className="paragraph-medium-regular">
            Comprehensive support across current and future technology stacks
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {platforms.map((platform) => {
            const Icon = platform.icon;
            return (
              <Card 
                key={platform.name}
                className="p-6 text-center border"
                style={{ borderColor: 'var(--border-card)' }}
              >
                <div className="space-y-4">
                  <div 
                    className="w-12 h-12 rounded-lg mx-auto flex items-center justify-center"
                    style={{ backgroundColor: platform.color, opacity: 0.1 }}
                  >
                    <Icon className="h-6 w-6" style={{ color: platform.color }} />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-center gap-2">
                      <h3 className="h6-heading">{platform.name}</h3>
                      <Badge 
                        variant={platform.status === 'Current' ? 'default' : 'secondary'}
                        className="text-xs"
                      >
                        {platform.status}
                      </Badge>
                    </div>
                    <p className="caption-large">{platform.description}</p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Main Sections */}
      <div className="space-y-6">
        <div className="text-center space-y-2">
          <h2 className="h3-heading">Explore the Design System</h2>
          <p className="paragraph-medium-regular">
            Everything you need to create consistent, accessible experiences across platforms
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {sectionCards.map((section) => {
            const Icon = section.icon;
            return (
              <Card 
                key={section.id}
                className="p-6 border hover:shadow-lg transition-shadow cursor-pointer"
                style={{ borderColor: 'var(--border-card)' }}
                onClick={() => onSectionChange(section.id)}
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div 
                      className="w-12 h-12 rounded-lg flex items-center justify-center"
                      style={{ backgroundColor: section.bgColor }}
                    >
                      <Icon className="h-6 w-6" style={{ color: section.color }} />
                    </div>
                    <div className="flex-1">
                      <h3 className="h5-heading">{section.title}</h3>
                      <p className="paragraph-small-regular">{section.description}</p>
                    </div>
                    <ArrowRight className="h-5 w-5 text-metadata" />
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {section.features.map((feature) => (
                      <Badge key={feature} variant="secondary" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Design Principles */}
      <div className="space-y-6">
        <div className="text-center space-y-2">
          <h2 className="h3-heading">Design Principles</h2>
          <p className="paragraph-medium-regular">
            Core principles guiding the Giv Design System
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="p-6 text-center border" style={{ borderColor: 'var(--border-card)' }}>
            <div className="space-y-3">
              <div 
                className="w-12 h-12 rounded-lg mx-auto flex items-center justify-center"
                style={{ backgroundColor: 'var(--primary-p00)' }}
              >
                <Zap className="h-6 w-6" style={{ color: 'var(--primary-p04)' }} />
              </div>
              <h4 className="h6-heading">Clarity First</h4>
              <p className="caption-large">
                Reduce cognitive load through clear hierarchy and intuitive interactions
              </p>
            </div>
          </Card>

          <Card className="p-6 text-center border" style={{ borderColor: 'var(--border-card)' }}>
            <div className="space-y-3">
              <div 
                className="w-12 h-12 rounded-lg mx-auto flex items-center justify-center"
                style={{ backgroundColor: 'var(--primary-p00)' }}
              >
                <Shield className="h-6 w-6" style={{ color: 'var(--primary-p04)' }} />
              </div>
              <h4 className="h6-heading">Consistency</h4>
              <p className="caption-large">
                Established patterns and solutions used throughout the system
              </p>
            </div>
          </Card>

          <Card className="p-6 text-center border" style={{ borderColor: 'var(--border-card)' }}>
            <div className="space-y-3">
              <div 
                className="w-12 h-12 rounded-lg mx-auto flex items-center justify-center"
                style={{ backgroundColor: 'var(--primary-p00)' }}
              >
                <Users className="h-6 w-6" style={{ color: 'var(--primary-p04)' }} />
              </div>
              <h4 className="h6-heading">Accessibility</h4>
              <p className="caption-large">
                WCAG AA compliant with full keyboard support and inclusive design
              </p>
            </div>
          </Card>

          <Card className="p-6 text-center border" style={{ borderColor: 'var(--border-card)' }}>
            <div className="space-y-3">
              <div 
                className="w-12 h-12 rounded-lg mx-auto flex items-center justify-center"
                style={{ backgroundColor: 'var(--primary-p00)' }}
              >
                <Zap className="h-6 w-6" style={{ color: 'var(--primary-p04)' }} />
              </div>
              <h4 className="h6-heading">Efficiency</h4>
              <p className="caption-large">
                Optimized for quick task completion and daily operational workflows
              </p>
            </div>
          </Card>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="space-y-6">
        <div className="text-center space-y-2">
          <h2 className="h3-heading">Ready to get started?</h2>
          <p className="paragraph-medium-regular">
            Download design tokens or explore the documentation
          </p>
        </div>

        <div className="flex justify-center gap-4">
          <Button variant="outline" className="gap-2">
            <Download className="h-4 w-4" />
            Download Tokens
          </Button>
          <Button 
            variant="outline" 
            className="gap-2"
            onClick={() => onSectionChange('resources')}
          >
            <ExternalLink className="h-4 w-4" />
            Documentation
          </Button>
        </div>
      </div>
    </div>
  );
}