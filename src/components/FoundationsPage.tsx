import React, { useState } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Separator } from './ui/separator';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import { useCopy } from './hooks/useCopy';
import { 
  Palette, 
  Type, 
  Ruler,
  Copy,
  Check,
  Eye,
  Layers,
  Grid,
  Zap,
  ArrowRight,
  Book,
  Target,
  Users,
  Hash
} from 'lucide-react';

interface FoundationsPageProps {
  onSectionChange: (section: string, subSection?: string) => void;
  currentSubSection?: string;
}

const foundationSections = [
  {
    id: 'colors',
    title: 'Color System',
    description: 'A comprehensive color palette designed for accessibility and consistency across all platforms.',
    icon: Palette,
    color: 'var(--primary-p02)',
    bgColor: 'var(--primary-p00)',
    features: ['Primitive Colors', 'Semantic Tokens', 'Status Colors', 'Accessibility Guidelines']
  },
  {
    id: 'typography',
    title: 'Typography',
    description: 'Font families, scales, and weights creating clear hierarchy and readability for all content.',
    icon: Type,
    color: 'var(--primary-p03)',
    bgColor: 'var(--primary-p00)',
    features: ['Display Styles', 'Heading Scales', 'Body Text', 'Caption Styles']
  },
  {
    id: 'spacing',
    title: 'Spacing & Layout',
    description: 'Consistent spacing system based on an 8px grid for rhythm and visual harmony.',
    icon: Ruler,
    color: 'var(--primary-p04)',
    bgColor: 'var(--primary-p00)',
    features: ['Grid System', 'Component Spacing', 'Page Layouts', 'Responsive Rules']
  },
  {
    id: 'principles',
    title: 'Design Principles',
    description: 'Core principles that guide all design decisions and ensure cohesive user experiences.',
    icon: Target,
    color: 'var(--primary-p05)',
    bgColor: 'var(--primary-p00)',
    features: ['Clarity First', 'Consistency', 'Efficiency', 'Accessibility']
  }
];

const primitiveColorSections = [
  {
    name: 'Primary',
    description: 'Main brand colors for buttons, links, and key UI elements',
    colors: [
      { name: 'Primary P00', value: 'var(--primary-p00)', hex: '#E8ECFA', usage: 'Light backgrounds' },
      { name: 'Primary P01', value: 'var(--primary-p01)', hex: '#D6E3FF', usage: 'Subtle highlights' },
      { name: 'Primary P02', value: 'var(--primary-p02)', hex: '#90B9FF', usage: 'Accent elements' },
      { name: 'Primary P03', value: 'var(--primary-p03)', hex: '#4B87ED', usage: 'Interactive states' },
      { name: 'Primary P04', value: 'var(--primary-p04)', hex: '#326DD0', usage: 'Primary actions' },
      { name: 'Primary P05', value: 'var(--primary-p05)', hex: '#255BB8', usage: 'Dark variants' }
    ]
  },
  {
    name: 'Grey',
    description: 'Neutral colors for text, backgrounds, and borders',
    colors: [
      { name: 'White', value: 'var(--grey-white)', hex: '#FFFFFF', usage: 'Pure white' },
      { name: 'Grey G00', value: 'var(--grey-g00)', hex: '#F8F9FB', usage: 'Page backgrounds' },
      { name: 'Grey G01', value: 'var(--grey-g01)', hex: '#F8F9FB', usage: 'Card backgrounds' },
      { name: 'Grey G02', value: 'var(--grey-g02)', hex: '#EFF0F4', usage: 'Subtle backgrounds' },
      { name: 'Grey G03', value: 'var(--grey-g03)', hex: '#E5E6E9', usage: 'Borders' },
      { name: 'Grey G04', value: 'var(--grey-g04)', hex: '#D2D5D9', usage: 'Dividers' },
      { name: 'Grey G05', value: 'var(--grey-g05)', hex: '#A2A5A9', usage: 'Placeholders' },
      { name: 'Grey G06', value: 'var(--grey-g06)', hex: '#73767A', usage: 'Secondary text' },
      { name: 'Grey G07', value: 'var(--grey-g07)', hex: '#54565A', usage: 'Body text' },
      { name: 'Grey G08', value: 'var(--grey-g08)', hex: '#3D3F42', usage: 'Headings' },
      { name: 'Grey G09', value: 'var(--grey-g09)', hex: '#2F3237', usage: 'Page titles' },
      { name: 'Grey G10', value: 'var(--grey-g10)', hex: '#1D1E20', usage: 'High contrast' }
    ]
  },
  {
    name: 'Success',
    description: 'Green colors for positive states, confirmations, and success feedback',
    colors: [
      { name: 'Success S00', value: '#EFFEE8', hex: '#EFFEE8', usage: 'Light success backgrounds' },
      { name: 'Success S01', value: '#DAFFD0', hex: '#DAFFD0', usage: 'Success containers' },
      { name: 'Success S02', value: '#8BD9B8', hex: '#8BD9B8', usage: 'Success accents' },
      { name: 'Success S03', value: '#40A14D', hex: '#40A14D', usage: 'Success primary (base)' },
      { name: 'Success S04', value: '#26612E', hex: '#26612E', usage: 'Success dark' },
      { name: 'Success S05', value: '#1A401F', hex: '#1A401F', usage: 'Success darkest' }
    ]
  },
  {
    name: 'Warning',
    description: 'Orange/yellow colors for caution states and important notices',
    colors: [
      { name: 'Warning SW00', value: '#FFF8D6', hex: '#FFF8D6', usage: 'Light warning backgrounds' },
      { name: 'Warning SW01', value: '#FBECCC', hex: '#FBECCC', usage: 'Warning containers' },
      { name: 'Warning SW02', value: '#F4C666', hex: '#F4C666', usage: 'Warning accents' },
      { name: 'Warning SW03', value: '#ECA000', hex: '#ECA000', usage: 'Warning primary (base)' },
      { name: 'Warning SW04', value: '#8E6000', hex: '#8E6000', usage: 'Warning dark' },
      { name: 'Warning SW05', value: '#5E4000', hex: '#5E4000', usage: 'Warning darkest' }
    ]
  },
  {
    name: 'Error',
    description: 'Red colors for error states, destructive actions, and critical alerts',
    colors: [
      { name: 'Error SE00', value: '#FBEBE8', hex: '#FBEBE8', usage: 'Light error backgrounds' },
      { name: 'Error SE01', value: '#FFE3E1', hex: '#FFE3E1', usage: 'Error containers' },
      { name: 'Error SE02', value: '#E47D65', hex: '#E47D65', usage: 'Error accents' },
      { name: 'Error SE03', value: '#C92F28', hex: '#C92F28', usage: 'Error primary (base)' },
      { name: 'Error SE04', value: '#B33011', hex: '#B33011', usage: 'Error dark' },
      { name: 'Error SE05', value: '#62201B', hex: '#62201B', usage: 'Error darkest' }
    ]
  }
];

const semanticColorTokens = [
  {
    category: 'Text',
    tokens: [
      { element: 'Page Heading', token: '--text-heading-page', colorRef: 'Grey G09', usage: 'Main page headings' },
      { element: 'Section title', token: '--text-heading-section', colorRef: 'Grey G08', usage: 'Card/panel headings' },
      { element: 'Body text', token: '--text-body', colorRef: 'Grey G07', usage: 'Standard content text, form labels' },
      { element: 'Body text [Dynamic]', token: '--text-body-dynamic', colorRef: 'Grey G10', usage: 'Charting, reports' },
      { element: 'Metadata text', token: '--text-metadata', colorRef: 'Grey G06', usage: 'Secondary info (dates, usernames, file types, breadcrumb text)' }
    ]
  },
  {
    category: 'Primary Backgrounds',
    tokens: [
      { element: 'Page background', token: '--background-page', colorRef: 'Grey G00', usage: 'Main application background' },
      { element: 'Card background', token: '--background-card', colorRef: 'Grey White', usage: 'Container elements (cards, panels, modals, dropdowns)' },
      { element: 'Card background hover', token: '--background-card-hover', colorRef: 'Grey G01', usage: 'Hover for container elements (cards, panels, dropdown items)' },
      { element: 'Alt card background hover', token: '--background-card-alt', colorRef: 'Grey G02', usage: 'Hover for container elements & cards, with slightly grayer backgrounds' }
    ]
  },
  {
    category: 'Border and Divider Elements',
    tokens: [
      { element: 'Card Border', token: '--border-card', colorRef: 'Grey G03', usage: 'Subtle borders around cards/panels' },
      { element: 'Section Divider', token: '--border-divider', colorRef: 'Grey G03', usage: 'Lines separating content sections' }
    ]
  },
  {
    category: 'Icons & Avatars',
    tokens: [
      { element: 'Client Avatar', token: '--avatar-bg-client', colorRef: 'Primary P02', usage: 'Client avatars' },
      { element: 'Staff Avatar', token: '--avatar-bg-staff', colorRef: 'Grey G06', usage: 'Staff avatars' },
      { element: 'Text on client avatar', token: '--avatar-text-client', colorRef: 'Grey brand black', usage: 'Text on client avatars' },
      { element: 'Text on staff avatar', token: '--avatar-text-staff', colorRef: 'Grey White', usage: 'Text on staff avatars' },
      { element: 'Contextual icon', token: '--icon-contextual', colorRef: 'Grey G06', usage: 'Icons used to provide extra context' },
      { element: 'Action icon', token: '--icon-action', colorRef: 'Grey G06', usage: 'Icons that perform an action' },
      { element: 'Action icon - disabled', token: '--icon-action-disabled', colorRef: 'Grey G04', usage: 'Disabled state for active icons (undo icon in an empty state)' },
      { element: 'Action icon - active', token: '--icon-action-active', colorRef: 'Primary P03', usage: 'Active icons (undo icon in an active state)' }
    ]
  },
  {
    category: 'Overlays',
    tokens: [
      { element: 'Modal Overlay', token: '--overlay-modal', colorRef: 'Grey Alpha', usage: 'Semi-transparent backdrop behind modals' }
    ]
  },
  {
    category: 'General Statuses',
    tokens: [
      { element: 'Success Bg - Primary', token: '--status-success-bg', colorRef: 'Success S01', usage: 'Main success notifications, confirmations' },
      { element: 'Success Bg - Secondary', token: '--status-success-secondary', colorRef: 'Success S03', usage: 'Subtle success indicators' },
      { element: 'Warning Bg - Primary', token: '--status-warning-bg', colorRef: 'Warning SW01', usage: 'Important warnings requiring attention' },
      { element: 'Warning Bg - Secondary', token: '--status-warning-secondary', colorRef: 'Warning SW03', usage: 'Mild warnings, heads-up notifications' },
      { element: 'Error Bg - Primary', token: '--status-error-bg', colorRef: 'Error SE01', usage: 'Critical error messages' },
      { element: 'Error Bg - Secondary', token: '--status-error-secondary', colorRef: 'Error SE03', usage: 'Mild error states' }
    ]
  },
  {
    category: 'All Tertiary status',
    tokens: [
      { element: 'All Tertiary status', token: '--primary-p00', colorRef: 'Primary P00', usage: 'Tertiary status like ready to bill' }
    ]
  },
  {
    category: 'Status Text Colors',
    tokens: [
      { element: 'Text on primary success bg', token: '--status-success-text', colorRef: 'Success S03', usage: 'Text that sits on dark green success backgrounds' },
      { element: 'Text on primary warning bg', token: '--status-warning-text', colorRef: 'Warning SW03', usage: 'Text that sits on warning backgrounds' },
      { element: 'Text on primary error bg', token: '--status-error-text', colorRef: 'Error SE03', usage: 'Text that sits on error backgrounds' },
      { element: 'Text on Tertiary status', token: '--primary-p04', colorRef: 'Primary P04', usage: 'Tertiary status like ready to bill' },
      { element: 'Text on secondary background of', token: '--grey-white', colorRef: 'Grey White', usage: 'Text on secondary status backgrounds like error toast' }
    ]
  }
];

const typographyStyles = [
  {
    category: 'Display',
    description: 'Large display text for hero sections and major headings',
    styles: [
      { name: 'Display Large Bold', class: 'display-large-bold', size: '56px', weight: 'Bold (700)', usage: 'Hero headlines' },
      { name: 'Display Large Semibold', class: 'display-large-semibold', size: '56px', weight: 'Medium (500)', usage: 'Large titles' },
      { name: 'Display Small Bold', class: 'display-small-bold', size: '48px', weight: 'Bold (700)', usage: 'Section headers' },
      { name: 'Display Small Semibold', class: 'display-small-semibold', size: '48px', weight: 'Medium (500)', usage: 'Page headers' }
    ]
  },
  {
    category: 'Headings',
    description: 'Hierarchical heading styles for content organization',
    styles: [
      { name: 'H1 Heading', class: 'h1-heading', size: '40px', weight: 'Medium (500)', usage: 'Main page titles' },
      { name: 'H2 Heading', class: 'h2-heading', size: '36px', weight: 'Medium (500)', usage: 'Section titles' },
      { name: 'H3 Heading', class: 'h3-heading', size: '32px', weight: 'Medium (500)', usage: 'Subsection titles' },
      { name: 'H4 Heading', class: 'h4-heading', size: '28px', weight: 'Medium (500)', usage: 'Card titles' },
      { name: 'H5 Heading', class: 'h5-heading', size: '24px', weight: 'Medium (500)', usage: 'Component titles' },
      { name: 'H6 Heading', class: 'h6-heading', size: '20px', weight: 'Medium (500)', usage: 'Small titles' }
    ]
  },
  {
    category: 'Body',
    description: 'Body text styles for content and interfaces',
    styles: [
      { name: 'Paragraph Large Regular', class: 'paragraph-large-regular', size: '18px', weight: 'Light (300)', usage: 'Large body text' },
      { name: 'Paragraph Large Medium', class: 'paragraph-large-medium', size: '18px', weight: 'Roman (400)', usage: 'Emphasized text' },
      { name: 'Paragraph Medium Regular', class: 'paragraph-medium-regular', size: '16px', weight: 'Light (300)', usage: 'Standard body text' },
      { name: 'Paragraph Medium Medium', class: 'paragraph-medium-medium', size: '16px', weight: 'Roman (400)', usage: 'Important text' },
      { name: 'Paragraph Small Regular', class: 'paragraph-small-regular', size: '14px', weight: 'Light (300)', usage: 'Small body text' },
      { name: 'Paragraph Small Medium', class: 'paragraph-small-medium', size: '14px', weight: 'Roman (400)', usage: 'UI text' }
    ]
  },
  {
    category: 'Captions',
    description: 'Small text for metadata and secondary information',
    styles: [
      { name: 'Caption Large', class: 'caption-large', size: '14px', weight: 'Light (300)', usage: 'Metadata' },
      { name: 'Caption Medium', class: 'caption-medium', size: '12px', weight: 'Light (300)', usage: 'Secondary info' },
      { name: 'Caption Small', class: 'caption-small', size: '10px', weight: 'Light (300)', usage: 'Micro text' }
    ]
  }
];

const spacingScale = [
  { name: 'XS', value: '4px', rem: '0.25rem', usage: 'Tight spacing between related elements' },
  { name: 'SM', value: '8px', rem: '0.5rem', usage: 'Base unit - minimum touch target spacing' },
  { name: 'MD', value: '16px', rem: '1rem', usage: 'Standard spacing between components' },
  { name: 'LG', value: '24px', rem: '1.5rem', usage: 'Section spacing and card padding' },
  { name: 'XL', value: '32px', rem: '2rem', usage: 'Large spacing between major sections' },
  { name: '2XL', value: '48px', rem: '3rem', usage: 'Extra large spacing for page sections' },
  { name: '3XL', value: '64px', rem: '4rem', usage: 'Maximum spacing for hero sections' }
];

export function FoundationsPage({ onSectionChange, currentSubSection }: FoundationsPageProps) {
  const { copy, copied } = useCopy({
    successDuration: 2000,
    onSuccess: (text) => {
      console.log('Successfully copied:', text);
    },
    onError: (error) => {
      console.error('Copy failed:', error);
    }
  });

  const handleCopy = async (text: string, identifier: string) => {
    try {
      await copy(text, identifier);
    } catch (error) {
      console.error('Copy operation failed:', error);
    }
  };

  const renderColorSwatch = (value: string, size: 'small' | 'medium' = 'medium') => {
    const sizeClass = size === 'small' ? 'w-6 h-6' : 'w-8 h-8';
    return (
      <div 
        className={`${sizeClass} rounded border flex-shrink-0`}
        style={{ 
          backgroundColor: value,
          borderColor: 'var(--border-card)'
        }}
      />
    );
  };

  // Overview page showing all foundation sections
  if (!currentSubSection) {
    return (
      <div className="p-6 space-y-8">
        {/* Header */}
        <div className="space-y-4">
          <div className="space-y-2">
            <h1 className="h1-heading" style={{ color: 'var(--text-heading-page)' }}>Foundations</h1>
            <p className="paragraph-large-regular" style={{ color: 'var(--text-body)' }}>
              Core design elements that form the foundation of the Giv Design System. These principles ensure consistency and quality across all platforms.
            </p>
          </div>
          
          <div className="flex gap-2">
            <Badge variant="outline" className="gap-1" style={{ gap: '4px' }}>
              <Palette className="h-3 w-3" />
              <span className="caption-large">Colors</span>
            </Badge>
            <Badge variant="outline" className="gap-1" style={{ gap: '4px' }}>
              <Type className="h-3 w-3" />
              <span className="caption-large">Typography</span>
            </Badge>
            <Badge variant="outline" className="gap-1" style={{ gap: '4px' }}>
              <Ruler className="h-3 w-3" />
              <span className="caption-large">Spacing</span>
            </Badge>
            <Badge variant="outline" className="gap-1" style={{ gap: '4px' }}>
              <Target className="h-3 w-3" />
              <span className="caption-large">Principles</span>
            </Badge>
          </div>
        </div>

        {/* Foundation Sections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {foundationSections.map((section) => {
            const Icon = section.icon;
            return (
              <Card 
                key={section.id}
                className="p-6 border hover:shadow-lg transition-all duration-200 cursor-pointer group"
                style={{ borderColor: 'var(--border-card)' }}
                onClick={() => onSectionChange('foundations', section.id)}
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div 
                      className="w-12 h-12 rounded-lg flex items-center justify-center transition-colors"
                      style={{ backgroundColor: section.bgColor }}
                    >
                      <Icon className="h-6 w-6" style={{ color: section.color }} />
                    </div>
                    <div className="flex-1">
                      <h3 className="h5-heading" style={{ color: 'var(--text-heading-section)' }}>{section.title}</h3>
                      <p className="paragraph-small-regular" style={{ color: 'var(--text-body)' }}>{section.description}</p>
                    </div>
                    <ArrowRight className="h-5 w-5 text-metadata group-hover:translate-x-1 transition-transform" />
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {section.features.map((feature) => (
                      <Badge key={feature} variant="secondary" className="text-xs">
                        <span className="caption-medium">{feature}</span>
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Quick Access Section */}
        <div className="space-y-6">
          <Separator style={{ backgroundColor: 'var(--border-divider)' }} />
          
          <div className="text-center space-y-4">
            <div className="space-y-2">
              <h2 className="h3-heading" style={{ color: 'var(--text-heading-section)' }}>Quick Access</h2>
              <p className="paragraph-medium-regular" style={{ color: 'var(--text-body)' }}>
                Jump to the most commonly used foundation elements
              </p>
            </div>
            
            <div className="flex justify-center gap-4">
              <Button 
                variant="outline" 
                className="gap-2"
                onClick={() => onSectionChange('foundations', 'colors')}
              >
                <Palette className="h-4 w-4" />
                <span className="paragraph-small-medium">View Colors</span>
              </Button>
              <Button 
                variant="outline" 
                className="gap-2"
                onClick={() => onSectionChange('foundations', 'typography')}
              >
                <Type className="h-4 w-4" />
                <span className="paragraph-small-medium">Typography Scale</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Detailed color system page
  if (currentSubSection === 'colors') {
    return (
      <div className="p-6 space-y-8">
        {/* Header */}
        <div className="space-y-4">
          <div className="space-y-2">
            <h1 className="h1-heading" style={{ color: 'var(--text-heading-page)' }}>Color System</h1>
            <p className="paragraph-large-regular" style={{ color: 'var(--text-body)' }}>
              Our comprehensive color system includes primitive colors for consistency and semantic tokens for meaningful application across all interface elements.
            </p>
          </div>
          
          <div className="flex gap-2">
            <Badge variant="outline" className="gap-1" style={{ gap: '4px' }}>
              <Palette className="h-3 w-3" />
              <span className="caption-large">WCAG AA Compliant</span>
            </Badge>
            <Badge variant="outline" className="gap-1" style={{ gap: '4px' }}>
              <Eye className="h-3 w-3" />
              <span className="caption-large">Accessibility First</span>
            </Badge>
            <Badge variant="outline" className="gap-1" style={{ gap: '4px' }}>
              <Hash className="h-3 w-3" />
              <span className="caption-large">Semantic Tokens</span>
            </Badge>
          </div>
        </div>

        {/* Primitive Colors Section */}
        <div className="space-y-6">
          <div className="space-y-2">
            <h2 className="h3-heading" style={{ color: 'var(--text-heading-section)' }}>Primitive Colors</h2>
            <p className="paragraph-medium-regular" style={{ color: 'var(--text-body)' }}>
              Base color palette with consistent scales and accessibility considerations. These are the foundation colors used to build our semantic color system.
            </p>
          </div>

          {primitiveColorSections.map((section) => (
            <div key={section.name} className="space-y-4">
              <div className="space-y-2">
                <h3 className="h5-heading" style={{ color: 'var(--text-heading-section)' }}>{section.name}</h3>
                <p className="paragraph-small-regular" style={{ color: 'var(--text-body)' }}>{section.description}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {section.colors.map((color) => (
                  <Card 
                    key={color.name}
                    className="border overflow-hidden"
                    style={{ borderColor: 'var(--border-card)' }}
                  >
                    <div 
                      className="h-20 w-full"
                      style={{ backgroundColor: color.value }}
                    />
                    <div className="p-4 space-y-3">
                      <div className="flex items-center justify-between">
                        <h4 className="paragraph-small-medium" style={{ color: 'var(--text-body)' }}>{color.name}</h4>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleCopy(color.hex, color.name)}
                          className="h-8 w-8 p-0 hover:bg-accent transition-colors"
                          title="Copy hex value"
                        >
                          {copied === color.name ? (
                            <Check className="h-4 w-4" style={{ color: 'var(--status-success-text)' }} />
                          ) : (
                            <Copy className="h-4 w-4" />
                          )}
                        </Button>
                      </div>
                      <div className="space-y-1">
                        <p className="caption-medium" style={{ color: 'var(--text-metadata)' }}>{color.hex}</p>
                        <p className="caption-small" style={{ color: 'var(--text-metadata)' }}>{color.usage}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>

        <Separator style={{ backgroundColor: 'var(--border-divider)' }} />

        {/* Semantic Color System Section */}
        <div className="space-y-6">
          <div className="space-y-2">
            <h2 className="h3-heading" style={{ color: 'var(--text-heading-section)' }}>Semantic Color System</h2>
            <p className="paragraph-medium-regular" style={{ color: 'var(--text-body)' }}>
              Role-based color tokens that provide meaningful context and ensure consistent application across all interface elements. These tokens map to our primitive colors but with semantic meaning.
            </p>
          </div>

          {semanticColorTokens.map((category) => (
            <div key={category.category} className="space-y-4">
              <h3 className="h5-heading" style={{ color: 'var(--text-heading-section)' }}>{category.category}</h3>
              
              <Card className="border" style={{ borderColor: 'var(--border-card)' }}>
                <Table>
                  <TableHeader>
                    <TableRow style={{ borderColor: 'var(--border-divider)' }}>
                      <TableHead className="paragraph-small-medium w-[200px]" style={{ color: 'var(--text-body)' }}>Element</TableHead>
                      <TableHead className="paragraph-small-medium" style={{ color: 'var(--text-body)' }}>Color and token</TableHead>
                      <TableHead className="paragraph-small-medium" style={{ color: 'var(--text-body)' }}>Usage</TableHead>
                      <TableHead className="w-12"></TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {category.tokens.map((token, index) => (
                      <TableRow key={index} style={{ borderColor: 'var(--border-divider)' }}>
                        <TableCell className="paragraph-small-regular" style={{ color: 'var(--text-body)' }}>
                          {token.element}
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-3">
                            {renderColorSwatch(`var(${token.token})`, 'small')}
                            <div className="space-y-1">
                              <p className="paragraph-small-medium" style={{ color: 'var(--text-body)' }}>{token.colorRef}</p>
                              <p className="caption-medium font-mono" style={{ color: 'var(--text-metadata)' }}>{token.token}</p>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell className="paragraph-small-regular" style={{ color: 'var(--text-body)' }}>
                          {token.usage}
                        </TableCell>
                        <TableCell>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleCopy(`var(${token.token})`, `${token.element}-token`)}
                            className="h-8 w-8 p-0 hover:bg-accent transition-colors"
                            title="Copy CSS variable"
                          >
                            {copied === `${token.element}-token` ? (
                              <Check className="h-4 w-4" style={{ color: 'var(--status-success-text)' }} />
                            ) : (
                              <Copy className="h-4 w-4" />
                            )}
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Card>
            </div>
          ))}
        </div>

        <Separator style={{ backgroundColor: 'var(--border-divider)' }} />

        {/* Chart Colors Section */}
        <div className="space-y-6">
          <div className="space-y-2">
            <h2 className="h3-heading" style={{ color: 'var(--text-heading-section)' }}>Chart Colors</h2>
            <p className="paragraph-medium-regular" style={{ color: 'var(--text-body)' }}>
              Data visualization color palette based on Chart.js default colors, optimized for clarity and visual distinction in charts and graphs.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {[
              { name: 'Chart 1', token: '--chart-1', value: 'var(--chart-1)', hex: '#54A0FF', usage: 'Primary data series' },
              { name: 'Chart 2', token: '--chart-2', value: 'var(--chart-2)', hex: '#FF6B6B', usage: 'Secondary data series' },
              { name: 'Chart 3', token: '--chart-3', value: 'var(--chart-3)', hex: '#4ECDC4', usage: 'Tertiary data series' },
              { name: 'Chart 4', token: '--chart-4', value: 'var(--chart-4)', hex: '#FFD93D', usage: 'Quaternary data series' },
              { name: 'Chart 5', token: '--chart-5', value: 'var(--chart-5)', hex: '#6C5CE7', usage: 'Quinary data series' },
              { name: 'Chart 6', token: '--chart-6', value: 'var(--chart-6)', hex: '#FFA502', usage: 'Senary data series' },
              { name: 'Chart 7', token: '--chart-7', value: 'var(--chart-7)', hex: '#A4B0BE', usage: 'Septenary data series' }
            ].map((color) => (
              <Card 
                key={color.name}
                className="border overflow-hidden w-[100px]"
                style={{ borderColor: 'var(--border-card)' }}
              >
                <div 
                  className="h-[60px] w-full"
                  style={{ backgroundColor: color.value }}
                />
                <div className="p-2 space-y-1">
                  <div className="flex items-center justify-between">
                    <h4 className="caption-large" style={{ color: 'var(--text-body)' }}>{color.name}</h4>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleCopy(color.hex, color.name)}
                      className="h-5 w-5 p-0 hover:bg-accent transition-colors"
                      title="Copy hex value"
                    >
                      {copied === color.name ? (
                        <Check className="h-3 w-3" style={{ color: 'var(--status-success-text)' }} />
                      ) : (
                        <Copy className="h-3 w-3" />
                      )}
                    </Button>
                  </div>
                  <div className="space-y-1">
                    <p className="caption-small font-mono" style={{ color: 'var(--text-metadata)' }}>
                      {color.hex}
                    </p>
                    <p className="caption-small" style={{ color: 'var(--text-metadata)' }}>{color.usage}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Detailed typography page
  if (currentSubSection === 'typography') {
    return (
      <div className="p-6 space-y-8">
        {/* Header */}
        <div className="space-y-4">
          <div className="space-y-2">
            <h1 className="h1-heading" style={{ color: 'var(--text-heading-page)' }}>Typography</h1>
            <p className="paragraph-large-regular" style={{ color: 'var(--text-body)' }}>
              Our typography system uses the Inter font family with carefully crafted scales and weights to create clear hierarchy and excellent readability.
            </p>
          </div>
          
          <div className="flex gap-2">
            <Badge variant="outline" className="gap-1" style={{ gap: '4px' }}>
              <Type className="h-3 w-3" />
              <span className="caption-large">Inter Font Family</span>
            </Badge>
            <Badge variant="outline" className="gap-1" style={{ gap: '4px' }}>
              <Grid className="h-3 w-3" />
              <span className="caption-large">Modular Scale</span>
            </Badge>
          </div>
        </div>

        {/* Typography Categories */}
        {typographyStyles.map((category) => (
          <div key={category.category} className="space-y-4">
            <div className="space-y-2">
              <h3 className="h5-heading" style={{ color: 'var(--text-heading-section)' }}>{category.category}</h3>
              <p className="paragraph-small-regular" style={{ color: 'var(--text-body)' }}>{category.description}</p>
            </div>
            
            <div className="space-y-4">
              {category.styles.map((style) => (
                <Card 
                  key={style.name}
                  className="p-6 border"
                  style={{ borderColor: 'var(--border-card)' }}
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <h4 className="paragraph-small-medium" style={{ color: 'var(--text-body)' }}>{style.name}</h4>
                        <div className="flex gap-4">
                          <span className="caption-medium" style={{ color: 'var(--text-metadata)' }}>{style.size}</span>
                          <span className="caption-medium" style={{ color: 'var(--text-metadata)' }}>{style.weight}</span>
                        </div>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleCopy(style.class, style.name)}
                        className="h-8 w-8 p-0 hover:bg-accent transition-colors"
                        title="Copy CSS class"
                      >
                        {copied === style.name ? (
                          <Check className="h-4 w-4" style={{ color: 'var(--status-success-text)' }} />
                        ) : (
                          <Copy className="h-4 w-4" />
                        )}
                      </Button>
                    </div>
                    
                    <div className="space-y-2">
                      <div className={style.class}>
                        The quick brown fox jumps over the lazy dog
                      </div>
                      <p className="caption-small" style={{ color: 'var(--text-metadata)' }}>{style.usage}</p>
                    </div>
                    
                    <div className="p-3 rounded border" style={{ backgroundColor: 'var(--background-card-alt)', borderColor: 'var(--border-card)' }}>
                      <code className="caption-medium font-mono" style={{ color: 'var(--text-metadata)' }}>
                        .{style.class}
                      </code>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  }

  // Detailed spacing page
  if (currentSubSection === 'spacing') {
    return (
      <div className="p-6 space-y-8">
        {/* Header */}
        <div className="space-y-4">
          <div className="space-y-2">
            <h1 className="h1-heading" style={{ color: 'var(--text-heading-page)' }}>Spacing & Layout</h1>
            <p className="paragraph-large-regular" style={{ color: 'var(--text-body)' }}>
              Consistent spacing system based on an 8px grid that ensures visual rhythm and harmony across all interface elements.
            </p>
          </div>
          
          <div className="flex gap-2">
            <Badge variant="outline" className="gap-1" style={{ gap: '4px' }}>
              <Grid className="h-3 w-3" />
              <span className="caption-large">8px Base Grid</span>
            </Badge>
            <Badge variant="outline" className="gap-1" style={{ gap: '4px' }}>
              <Ruler className="h-3 w-3" />
              <span className="caption-large">Consistent Scale</span>
            </Badge>
          </div>
        </div>

        {/* Spacing Scale */}
        <div className="space-y-6">
          <div className="space-y-2">
            <h2 className="h3-heading" style={{ color: 'var(--text-heading-section)' }}>Spacing Scale</h2>
            <p className="paragraph-medium-regular" style={{ color: 'var(--text-body)' }}>
              Our spacing system follows a consistent scale that provides hierarchy and visual balance.
            </p>
          </div>

          <div className="space-y-4">
            {spacingScale.map((space) => (
              <Card 
                key={space.name}
                className="p-6 border"
                style={{ borderColor: 'var(--border-card)' }}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <h4 className="paragraph-small-medium" style={{ color: 'var(--text-body)' }}>{space.name}</h4>
                      <div className="flex gap-4">
                        <span className="caption-medium" style={{ color: 'var(--text-metadata)' }}>{space.value}</span>
                        <span className="caption-medium" style={{ color: 'var(--text-metadata)' }}>{space.rem}</span>
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleCopy(space.value, space.name)}
                      className="h-8 w-8 p-0 hover:bg-accent transition-colors"
                      title="Copy spacing value"
                    >
                      {copied === space.name ? (
                        <Check className="h-4 w-4" style={{ color: 'var(--status-success-text)' }} />
                      ) : (
                        <Copy className="h-4 w-4" />
                      )}
                    </Button>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div 
                        className="bg-primary rounded"
                        style={{ 
                          width: space.value,
                          height: '24px',
                          backgroundColor: 'var(--primary-p02)'
                        }}
                      />
                      <span className="caption-medium" style={{ color: 'var(--text-metadata)' }}>Visual representation</span>
                    </div>
                    <p className="caption-small" style={{ color: 'var(--text-metadata)' }}>{space.usage}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Design principles page
  if (currentSubSection === 'principles') {
    return (
      <div className="p-6 space-y-8">
        {/* Header */}
        <div className="space-y-4">
          <div className="space-y-2">
            <h1 className="h1-heading" style={{ color: 'var(--text-heading-page)' }}>Design Principles</h1>
            <p className="paragraph-large-regular" style={{ color: 'var(--text-body)' }}>
              Core principles that guide all design decisions and ensure cohesive, accessible user experiences across the Giv platform.
            </p>
          </div>
          
          <div className="flex gap-2">
            <Badge variant="outline" className="gap-1" style={{ gap: '4px' }}>
              <Target className="h-3 w-3" />
              <span className="caption-large">User-Centered</span>
            </Badge>
            <Badge variant="outline" className="gap-1" style={{ gap: '4px' }}>
              <Eye className="h-3 w-3" />
              <span className="caption-large">Accessibility First</span>
            </Badge>
            <Badge variant="outline" className="gap-1" style={{ gap: '4px' }}>
              <Zap className="h-3 w-3" />
              <span className="caption-large">Efficiency Focused</span>
            </Badge>
          </div>
        </div>

        {/* Principles */}
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: 'Clarity First',
                description: 'Reduce cognitive load through clear visual hierarchy, consistent spacing, and intuitive information architecture.',
                icon: Eye,
                points: [
                  'Use clear, descriptive labels and messaging',
                  'Maintain consistent visual hierarchy',
                  'Prioritize content based on user needs',
                  'Avoid unnecessary complexity'
                ]
              },
              {
                title: 'Consistency',
                description: 'Use established patterns and design solutions throughout all platforms and touchpoints.',
                icon: Grid,
                points: [
                  'Apply design tokens consistently',
                  'Reuse proven interface patterns',
                  'Maintain brand consistency',
                  'Follow established workflows'
                ]
              },
              {
                title: 'Efficiency',
                description: 'Optimize for quick task completion and streamlined daily workflows for busy caregivers.',
                icon: Zap,
                points: [
                  'Minimize steps to complete tasks',
                  'Provide shortcuts for power users',
                  'Optimize for mobile workflows',
                  'Reduce unnecessary friction'
                ]
              },
              {
                title: 'Accessibility',
                description: 'Ensure WCAG AA compliance with full keyboard support and inclusive design practices.',
                icon: Users,
                points: [
                  'Meet WCAG AA standards',
                  'Support keyboard navigation',
                  'Provide clear focus indicators',
                  'Use sufficient color contrast'
                ]
              }
            ].map((principle) => {
              const Icon = principle.icon;
              return (
                <Card 
                  key={principle.title}
                  className="p-6 border"
                  style={{ borderColor: 'var(--border-card)' }}
                >
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div 
                        className="w-12 h-12 rounded-lg flex items-center justify-center"
                        style={{ backgroundColor: 'var(--primary-p00)' }}
                      >
                        <Icon className="h-6 w-6" style={{ color: 'var(--primary-p04)' }} />
                      </div>
                      <div>
                        <h3 className="h5-heading" style={{ color: 'var(--text-heading-section)' }}>{principle.title}</h3>
                      </div>
                    </div>
                    
                    <p className="paragraph-small-regular" style={{ color: 'var(--text-body)' }}>
                      {principle.description}
                    </p>
                    
                    <ul className="space-y-2">
                      {principle.points.map((point, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <div 
                            className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                            style={{ backgroundColor: 'var(--primary-p04)' }}
                          />
                          <span className="caption-large" style={{ color: 'var(--text-body)' }}>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  return null;
}