import React, { useState } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Separator } from './ui/separator';
import { Badge } from './ui/badge';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from './ui/breadcrumb';
import { 
  Palette, 
  Type, 
  Component, 
  Layout, 
  Book,
  Menu,
  X,
  Home,
  Settings,
  Layers,
  Grid,
  FileText,
  Code,
  Eye,
  Smartphone,
  Monitor,
  ChevronRight,
  Ruler,
  Target
} from 'lucide-react';

interface DesignSystemLayoutProps {
  children: React.ReactNode;
  currentSection: string;
  currentSubSection?: string;
  onSectionChange: (section: string, subSection?: string) => void;
  breadcrumbs?: Array<{ label: string; section?: string; subSection?: string }>;
}

// Main navigation items for header
const navigationItems = [
  { 
    id: 'overview', 
    label: 'Overview', 
    icon: Home,
    description: 'Introduction to the Giv Design System'
  },
  { 
    id: 'foundations', 
    label: 'Foundations', 
    icon: Palette,
    description: 'Colors, typography, and design principles'
  },
  { 
    id: 'components', 
    label: 'Components', 
    icon: Component,
    description: 'UI components with code examples'
  },
  { 
    id: 'patterns', 
    label: 'Patterns', 
    icon: Layout,
    description: 'Common design patterns and layouts'
  },
  // { 
  //   id: 'resources', 
  //   label: 'Resources', 
  //   icon: Book,
  //   description: 'Guidelines, assets, and downloads'
  // }
];

// Foundation sub-sections for sidebar
const foundationSections = [
  { id: 'colors', label: 'Color System', icon: Palette },
  { id: 'typography', label: 'Typography', icon: Type },
  { id: 'spacing', label: 'Spacing & Layout', icon: Ruler },
  { id: 'principles', label: 'Design Principles', icon: Target }
];

// Component sub-sections for sidebar
const componentCategories = [
  { id: 'button', label: 'Button', category: 'Form Controls' },
  { id: 'input', label: 'Input', category: 'Form Controls' },
  { id: 'select', label: 'Select', category: 'Form Controls' },
  { id: 'datepicker', label: 'Date Picker', category: 'Form Controls' },
  { id: 'checkbox', label: 'Checkbox', category: 'Form Controls' },
  { id: 'radio', label: 'Radio', category: 'Form Controls' },
  { id: 'switch', label: 'Switch', category: 'Form Controls' },
  { id: 'card', label: 'Card', category: 'Data Display' },
  { id: 'table', label: 'Table', category: 'Data Display' },
  { id: 'badge', label: 'Badge', category: 'Data Display' },
  { id: 'chip', label: 'Chip', category: 'Data Display' },
  { id: 'alert', label: 'Alert', category: 'Data Display' },
  { id: 'modal', label: 'Modal', category: 'Feedback' },
  { id: 'avatar', label: 'Avatar', category: 'Data Display' },
  { id: 'breadcrumb', label: 'Breadcrumb', category: 'Navigation' },
  { id: 'tabs', label: 'Tabs', category: 'Navigation' },
  { id: 'toast', label: 'Toast', category: 'Feedback' },
  { id: 'tooltip', label: 'Tooltip', category: 'Feedback' }
];

export function DesignSystemLayout({ 
  children, 
  currentSection, 
  currentSubSection,
  onSectionChange, 
  breadcrumbs 
}: DesignSystemLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleBreadcrumbClick = (section?: string, subSection?: string) => {
    if (section) {
      onSectionChange(section, subSection);
    }
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--background-page)' }}>
      {/* Header - Fixed */}
      <header 
        className="border-b fixed top-0 left-0 right-0 z-50"
        style={{ 
          backgroundColor: 'var(--header-background)',
          borderColor: 'var(--border-divider)'
        }}
      >
        <div className="flex items-start justify-between w-full max-w-7xl mx-auto py-4">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-3">
              <div 
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: 'var(--primary)' }}
              >
                <Layers className="h-5 w-5" style={{ color: 'var(--primary-foreground)' }} />
              </div>
              <div>
                <h1 className="h6-heading" style={{ color: 'var(--header-foreground)' }}>
                  Giv Design System
                </h1>
              </div>
            </div>

            {/* Main Navigation */}
            <nav className="hidden flex flex-row items-center gap-1">
            {navigationItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentSection === item.id;
              
              return (
                <button
                  key={item.id}
                  onClick={() => onSectionChange(item.id)}
                  className={`
                    flex items-center gap-2 px-4 py-2 rounded-lg transition-colors
                    ${isActive 
                      ? 'text-grey-g08' 
                      : 'text-sidebar-foreground hover:text-sidebar-accent-foreground'
                    }
                  `}
                  style={{
                    backgroundColor: isActive ? 'var(--grey-g00)' : 'transparent'
                  }}
                >
                  <Icon className={`h-4 w-4
                  ${isActive ? 'text-primary-p04' : 'text-grey-g00'}`} />
                  <span className="paragraph-small-medium">{item.label}</span>
                </button>
              );
            })}
            </nav>
          </div>

          <div className="flex items-center gap-3">
            <Badge variant="neutral" className="gap-1 bg-transparent border-current" style={{ color: 'var(--header-foreground)', borderColor: 'var(--header-foreground)' }}>
              <Monitor className="h-3 w-3" />
              React
            </Badge>
            <Badge variant="neutral" className="gap-1 bg-transparent border-current" style={{ color: 'var(--header-foreground)', borderColor: 'var(--header-foreground)' }}>
              <Code className="h-3 w-3" />
              Angular
            </Badge>
            <Badge variant="neutral" className="gap-1 bg-transparent border-current" style={{ color: 'var(--header-foreground)', borderColor: 'var(--header-foreground)' }}>
              <Smartphone className="h-3 w-3" />
              Ionic
            </Badge>

            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden p-2"
              onClick={() => setSidebarOpen(!sidebarOpen)}
              style={{ color: 'var(--header-foreground)' }}
            >
              {sidebarOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </Button>
          </div>
        </div>
      </header>

      {/* Content Container with proper top margin */}
      <div className="flex pt-[89px]">
        {/* Sidebar - Fixed and Sticky */}
        {currentSection !== 'overview' && (
          <aside 
            className={`
              fixed lg:static left-0 z-40 w-64 border-r transform transition-transform duration-300 ease-in-out
              ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
              lg:sticky lg:h-[calc(100vh-89px)]
            `}
            style={{ 
              backgroundColor: 'var(--sidebar)',
              borderColor: 'var(--sidebar-border)',
              top: '89px',
              bottom: 0
            }}
          >
          <div className="p-6 h-full overflow-y-auto">
            {currentSection === 'foundations' && (
              <nav className="space-y-1">
                {foundationSections.map((item) => {
                  const Icon = item.icon;
                  const isActive = currentSubSection === item.id;
                  
                  return (
                    <button
                      key={item.id}
                      onClick={() => {
                        onSectionChange('foundations', item.id);
                        setSidebarOpen(false);
                      }}
                      className={`
                        w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left transition-colors
                        ${isActive 
                          ? 'text-sidebar-primary-foreground' 
                          : 'text-sidebar-foreground hover:text-sidebar-accent-foreground'
                        }
                      `}
                      style={{
                        backgroundColor: isActive ? 'var(--sidebar-primary)' : 'transparent'
                      }}
                    >
                      <Icon className="h-4 w-4 flex-shrink-0" />
                      <span className="paragraph-small-medium">{item.label}</span>
                    </button>
                  );
                })}
              </nav>
            )}

            {currentSection === 'components' && (
              <nav className="space-y-1">
                {componentCategories.map((item) => {
                  const isActive = currentSubSection === item.id;
                  
                  return (
                    <button
                      key={item.id}
                      onClick={() => {
                        onSectionChange('components', item.id);
                        setSidebarOpen(false);
                      }}
                      className={`
                        w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left transition-colors
                        ${isActive 
                          ? 'text-sidebar-primary-foreground' 
                          : 'text-sidebar-foreground hover:text-sidebar-accent-foreground'
                        }
                      `}
                      style={{
                        backgroundColor: isActive ? 'var(--sidebar-primary)' : 'transparent'
                      }}
                    >
                      <span className="paragraph-small-medium">{item.label}</span>
                    </button>
                  );
                })}
              </nav>
            )}

            {!['foundations', 'components'].includes(currentSection) && (
              <div className="text-center py-8 text-muted-foreground">
                <p className="caption-medium">No sub-items for this section</p>
              </div>
            )}
          </div>
        </aside>
        )}

        {/* Main Content */}
        <main className="flex-1 min-w-0">
          <div className="max-w-7xl mx-auto">
            {/* Breadcrumbs */}
            {breadcrumbs && breadcrumbs.length > 1 && (
              <div className="px-6 py-4 border-b" style={{ borderColor: 'var(--border-divider)' }}>
                <Breadcrumb>
                  <BreadcrumbList>
                    {breadcrumbs.map((crumb, index) => (
                      <React.Fragment key={index}>
                        <BreadcrumbItem>
                          {index === breadcrumbs.length - 1 ? (
                            <BreadcrumbPage className="paragraph-small-medium" style={{ color: 'var(--text-body)' }}>
                              {crumb.label}
                            </BreadcrumbPage>
                          ) : (
                            <BreadcrumbLink
                              onClick={() => handleBreadcrumbClick(crumb.section, crumb.subSection)}
                              className="paragraph-small-medium cursor-pointer hover:underline"
                              style={{ color: 'var(--text-metadata)' }}
                            >
                              {crumb.label}
                            </BreadcrumbLink>
                          )}
                        </BreadcrumbItem>
                        {index < breadcrumbs.length - 1 && <BreadcrumbSeparator />}
                      </React.Fragment>
                    ))}
                  </BreadcrumbList>
                </Breadcrumb>
              </div>
            )}
            
            {children}
          </div>
        </main>
      </div>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
}