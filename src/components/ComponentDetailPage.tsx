import React, { useState } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { useCopy } from './hooks/useCopy';
import { ComponentPreview } from './previews/ComponentPreview';
import { componentData, ComponentId } from './constants/componentRegistry';
import { TablePreview } from './previews/TablePreview';
class PreviewErrorBoundary extends React.Component<{ children: React.ReactNode }, { hasError: boolean; message?: string }> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error: any) {
    return { hasError: true, message: error?.message || 'Preview failed to render.' };
  }
  componentDidCatch(error: any, info: any) {
    // eslint-disable-next-line no-console
    console.error('Preview render error:', error, info);
  }
  render() {
    if (this.state.hasError) {
      return (
        <div className="w-full text-center p-6">
          <p className="paragraph-small-regular" style={{ color: 'var(--text-error, var(--status-error-text))' }}>{this.state.message}</p>
        </div>
      );
    }
    return this.props.children;
  }
}
import { 
  Component, 
  Copy,
  Check,
  Eye,
  Code
} from 'lucide-react';

interface ComponentDetailPageProps {
  componentId: string;
  onSectionChange: (section: string, subSection?: string) => void;
}

export function ComponentDetailPage({ componentId, onSectionChange }: ComponentDetailPageProps) {
  const [selectedFramework, setSelectedFramework] = useState('react');
  
  const { copy, copied } = useCopy({
    successDuration: 2000,
    onSuccess: (text) => {
      console.log('Code copied to clipboard');
    },
    onError: (error) => {
      console.error('Failed to copy code:', error);
    }
  });

  const handleCopyCode = async (code: string, framework: string) => {
    await copy(code, framework);
  };

  // Get component documentation
  const component = componentData[componentId as ComponentId];

  if (!component) {
    return (
      <div className="p-6">
        <Card className="border p-12 text-center" style={{ borderColor: 'var(--border-card)' }}>
          <div className="space-y-4">
            <div 
              className="w-16 h-16 rounded-lg mx-auto flex items-center justify-center"
              style={{ backgroundColor: 'var(--muted)' }}
            >
              <Component className="h-8 w-8" style={{ color: 'var(--muted-foreground)' }} />
            </div>
            <div className="space-y-2">
              <h3 className="h5-heading" style={{ color: 'var(--text-heading-section)' }}>
                Component Not Found
              </h3>
              <p className="paragraph-medium-regular" style={{ color: 'var(--text-body)' }}>
                The component you're looking for doesn't exist or hasn't been documented yet.
              </p>
            </div>
            <Button 
              variant="tertiary" 
              onClick={() => onSectionChange('components')}
              leftIcon={<Component className="h-4 w-4" />}
            >
              Browse Components
            </Button>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className="p-6 space-y-8">
      {/* Component Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div 
            className="w-12 h-12 rounded-lg flex items-center justify-center"
            style={{ backgroundColor: 'var(--primary-p00)' }}
          >
            <Component className="h-6 w-6" style={{ color: 'var(--primary-p04)' }} />
          </div>
          <div className="space-y-1">
            <h1 className="h2-heading" style={{ color: 'var(--text-heading-page)' }}>{component.name}</h1>
            <p className="paragraph-large-regular" style={{ color: 'var(--text-body)' }}>
              {component.description}
            </p>
          </div>
        </div>

        <div className="flex gap-2">
          <Badge variant="outline" className="gap-1" style={{ gap: '4px' }}>
            <Eye className="h-3 w-3" />
            <span className="caption-large">Live Preview</span>
          </Badge>
          <Badge variant="outline" className="gap-1" style={{ gap: '4px' }}>
            <Code className="h-3 w-3" />
            <span className="caption-large">3 Frameworks</span>
          </Badge>
          <Badge variant="secondary">
            <span className="caption-large">{component.category}</span>
          </Badge>
        </div>
      </div>

      {/* Component Preview */}
      <Card className="border" style={{ borderColor: 'var(--border-card)' }}>
        <div className="p-6 border-b" style={{ borderColor: 'var(--border-divider)' }}>
          <h3 className="h6-heading mb-4" style={{ color: 'var(--text-heading-section)' }}>Preview</h3>
          <div 
            className="p-8 rounded-lg min-h-[200px] flex items-center justify-center"
            style={{ backgroundColor: 'var(--background-page)', border: '1px dashed var(--border-divider)' }}
          >
            <PreviewErrorBoundary>
              {componentId === 'table' ? <TablePreview /> : <ComponentPreview componentId={componentId} />}
            </PreviewErrorBoundary>
          </div>
        </div>

        {/* Implementation Guidelines */}
        {component.guidelines && (['button', 'input', 'modal', 'table'] as ComponentId[]).includes(componentId as ComponentId) && (
          <div className="p-6 border-b" style={{ borderColor: 'var(--border-divider)' }}>
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="h6-heading" style={{ color: 'var(--text-heading-section)' }}>Implementation Guidelines</h3>
                <p className="paragraph-medium-regular" style={{ color: 'var(--text-body)' }}>
                  {componentId === 'button' 
                    ? 'Buttons play a key role in user interaction, offering clear calls-to-action (CTAs) and facilitating seamless navigation.'
                    : componentId === 'input'
                    ? 'Input fields are fundamental form elements that should provide clear feedback and follow accessibility standards for optimal user experience.'
                    : componentId === 'modal'
                    ? 'Modals provide focused interactions and should maintain proper focus management while clearly communicating their purpose and required actions.'
                    : componentId === 'table'
                    ? 'Tables are used to organize and display data efficiently. The Giv system includes two main types of tables: Overview tables for high-level summaries and Dense tables for detailed data views. Both are designed to be flexible and interactive.'
                    : ''
                  }
                </p>
              </div>

              {/* Properties Table */}
              {component.guidelines.properties && (
                <div className="space-y-4">
                  <h4 className="h6-heading" style={{ color: 'var(--text-heading-section)' }}>Properties</h4>
                  <div className="overflow-hidden rounded-lg border" style={{ borderColor: 'var(--border-card)' }}>
                    <div 
                      className="grid grid-cols-3 gap-4 p-4"
                      style={{ backgroundColor: 'var(--grey-g01)', color: 'var(--text-body)' }}
                    >
                      <div className="paragraph-small-medium">Property</div>
                      <div className="paragraph-small-medium">Type</div>
                      <div className="paragraph-small-medium">Description</div>
                    </div>
                    {component.guidelines.properties.map((item, index) => (
                      <div 
                        key={index} 
                        className="grid grid-cols-3 gap-4 p-4 border-t" 
                        style={{ borderColor: 'var(--border-divider)' }}
                      >
                        <div className="paragraph-small-medium" style={{ color: 'var(--text-body)' }}>{item.property}</div>
                        <div className="paragraph-small-regular" style={{ color: 'var(--text-body)' }}>{item.type}</div>
                        <div className="paragraph-small-regular" style={{ color: 'var(--text-body)' }}>{item.description}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Attributes Table */}
              {component.guidelines.attributes && (
                <div className="space-y-4">
                  <h4 className="h6-heading" style={{ color: 'var(--text-heading-section)' }}>Attributes</h4>
                  <div className="overflow-hidden rounded-lg border" style={{ borderColor: 'var(--border-card)' }}>
                    <div 
                      className="grid grid-cols-2 gap-4 p-4"
                      style={{ backgroundColor: 'var(--grey-g01)', color: 'var(--text-body)' }}
                    >
                      <div className="paragraph-small-medium">Attribute</div>
                      <div className="paragraph-small-medium">Description</div>
                    </div>
                    {component.guidelines.attributes.map((item, index) => (
                      <div 
                        key={index} 
                        className="grid grid-cols-2 gap-4 p-4 border-t" 
                        style={{ borderColor: 'var(--border-divider)' }}
                      >
                        <div className="paragraph-small-medium" style={{ color: 'var(--text-body)' }}>{item.attribute}</div>
                        <div className="paragraph-small-regular" style={{ color: 'var(--text-body)' }}>{item.description}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Accessibility Guidelines */}
              {component.guidelines.accessibility && (
                <div className="space-y-4">
                  <h4 className="h6-heading" style={{ color: 'var(--text-heading-section)' }}>Accessibility Guidelines</h4>
                  <ul className="space-y-2">
                    {component.guidelines.accessibility.map((guideline, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <div 
                          className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                          style={{ backgroundColor: 'var(--primary)' }}
                        ></div>
                        <span className="paragraph-small-regular" style={{ color: 'var(--text-body)' }}>{guideline}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Code Examples */}
        <div className="p-6">
          <div className="space-y-6">
            <h3 className="h6-heading" style={{ color: 'var(--text-heading-section)' }}>Implementation</h3>
            
            {/* Framework Navigation */}
            <div className="flex items-center justify-between">
              <div 
                className="inline-flex items-center p-1 rounded-lg border"
                style={{ 
                  backgroundColor: 'var(--background-card)', 
                  borderColor: 'var(--border-card)',
                  gap: '2px'
                }}
              >
                {['react', 'angular', 'ionic'].map((framework) => (
                  <button
                    key={framework}
                    onClick={() => setSelectedFramework(framework)}
                    className={`
                      px-4 py-2 rounded-md transition-all duration-200 text-sm
                      ${selectedFramework === framework 
                        ? 'shadow-sm' 
                        : 'hover:bg-muted/50'
                      }
                    `}
                    style={{
                      backgroundColor: selectedFramework === framework ? 'var(--background-page)' : 'transparent',
                      color: selectedFramework === framework ? 'var(--text-body)' : 'var(--text-metadata)',
                      fontFamily: 'var(--font-family)',
                      fontSize: '14px',
                      fontWeight: selectedFramework === framework ? 'var(--font-weight-roman)' : 'var(--font-weight-light)',
                      border: 'none'
                    }}
                  >
                    {framework.charAt(0).toUpperCase() + framework.slice(1)}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Code Block */}
            <Card 
              className="border"
              style={{ borderColor: 'var(--border-card)', backgroundColor: 'var(--background-card)' }}
            >
              <div 
                className="flex items-center justify-between p-4 border-b"
                style={{ borderColor: 'var(--border-divider)', backgroundColor: 'var(--muted)' }}
              >
                <div className="flex items-center gap-2">
                  <Code className="h-4 w-4" style={{ color: 'var(--text-metadata)' }} />
                  <span className="paragraph-small-medium" style={{ color: 'var(--text-body)' }}>
                    {selectedFramework.charAt(0).toUpperCase() + selectedFramework.slice(1)} Implementation
                  </span>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleCopyCode(component.examples[selectedFramework as keyof typeof component.examples], selectedFramework)}
                  title={`Copy ${selectedFramework} code`}
                  style={{ 
                    fontFamily: 'var(--font-family)',
                    fontSize: '14px',
                    fontWeight: 'var(--font-weight-roman)'
                  }}
                >
                  {copied === selectedFramework ? (
                    <Check className="h-4 w-4" style={{ color: 'var(--status-success-text)' }} />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                  <span className="paragraph-small-medium">
                    {copied === selectedFramework ? 'Copied!' : 'Copy'}
                  </span>
                </Button>
              </div>
              <div className="relative">
                <pre 
                  className="p-6 overflow-x-auto text-sm leading-relaxed"
                  style={{ 
                    backgroundColor: 'var(--background-card)',
                    color: 'var(--text-body)',
                    fontFamily: '"SF Mono", "Monaco", "Inconsolata", "Roboto Mono", "Consolas", monospace',
                    fontSize: '13px',
                    lineHeight: '1.6',
                    margin: '0'
                  }}
                >
                  <code 
                    style={{ 
                      fontFamily: 'inherit',
                      fontSize: 'inherit',
                      color: 'inherit'
                    }}
                  >
                    {component.examples[selectedFramework as keyof typeof component.examples]}
                  </code>
                </pre>
              </div>
            </Card>
          </div>
        </div>
      </Card>
    </div>
  );
}