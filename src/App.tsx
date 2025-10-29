import React, { useState } from 'react';
import { DesignSystemLayout } from './components/DesignSystemLayout';
import { OverviewPage } from './components/OverviewPage';
import { FoundationsPage } from './components/FoundationsPage';
import { ComponentsPage } from './components/ComponentsPage';
import { ComponentDetailPage } from './components/ComponentDetailPage';
import { PatternsPage } from './components/PatternsPage';
import { ResourcesPage } from './components/ResourcesPage';

// Component name mapping for breadcrumbs
const componentNames: Record<string, string> = {
  button: 'Button',
  card: 'Card',
  alert: 'Alert',
  input: 'Input',
  select: 'Select',
  datepicker: 'Date Picker',
  checkbox: 'Checkbox',
  radio: 'Radio',
  switch: 'Switch',
  table: 'Table',
  badge: 'Badge',
  avatar: 'Avatar',
  progress: 'Progress',
  breadcrumb: 'Breadcrumb',
  tabs: 'Tabs',
  pagination: 'Pagination',
  sidebar: 'Sidebar',
  toast: 'Toast',
  modal: 'Modal',
  tooltip: 'Tooltip'
};

const sectionNames: Record<string, string> = {
  overview: 'Overview',
  foundations: 'Foundations',
  components: 'Components',
  patterns: 'Patterns',
  resources: 'Resources'
};

const subSectionNames: Record<string, string> = {
  colors: 'Color System',
  typography: 'Typography',
  spacing: 'Spacing & Layout',
  principles: 'Design Principles'
};

export default function App() {
  const [currentSection, setCurrentSection] = useState('overview');
  const [currentSubSection, setCurrentSubSection] = useState<string | undefined>(undefined);

  const handleSectionChange = (section: string, subSection?: string) => {
    setCurrentSection(section);
    setCurrentSubSection(subSection);
  };

  // Generate breadcrumbs based on current navigation
  const generateBreadcrumbs = () => {
    const breadcrumbs = [];
    
    breadcrumbs.push({ 
      label: sectionNames[currentSection] || currentSection,
      section: currentSection 
    });
    
    if (currentSubSection) {
      if (currentSection === 'foundations') {
        breadcrumbs.push({ 
          label: subSectionNames[currentSubSection] || currentSubSection,
          section: currentSection,
          subSection: currentSubSection 
        });
      }
      
      if (currentSection === 'components' && componentNames[currentSubSection]) {
        breadcrumbs.push({ 
          label: componentNames[currentSubSection],
          section: currentSection,
          subSection: currentSubSection 
        });
      }
    }
    
    return breadcrumbs.length > 1 ? breadcrumbs : undefined;
  };

  const renderCurrentPage = () => {
    switch (currentSection) {
      case 'overview':
        return <OverviewPage onSectionChange={handleSectionChange} />;
      case 'foundations':
        return (
          <FoundationsPage 
            onSectionChange={handleSectionChange} 
            currentSubSection={currentSubSection}
          />
        );
      case 'components':
        if (currentSubSection && componentNames[currentSubSection]) {
          return (
            <ComponentDetailPage 
              componentId={currentSubSection}
              onSectionChange={handleSectionChange} 
            />
          );
        }
        return <ComponentsPage onSectionChange={handleSectionChange} />;
      case 'patterns':
        return <PatternsPage onSectionChange={handleSectionChange} />;
      case 'resources':
        return <ResourcesPage onSectionChange={handleSectionChange} />;
      default:
        return <OverviewPage onSectionChange={handleSectionChange} />;
    }
  };

  return (
    <DesignSystemLayout
      currentSection={currentSection}
      currentSubSection={currentSubSection}
      onSectionChange={handleSectionChange}
      breadcrumbs={generateBreadcrumbs()}
    >
      {renderCurrentPage()}
    </DesignSystemLayout>
  );
}