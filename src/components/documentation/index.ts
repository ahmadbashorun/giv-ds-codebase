import { buttonDocumentation } from './button';
import { cardDocumentation } from './card';
import { alertDocumentation } from './alert';
import { inputDocumentation } from './input';
import { modalDocumentation } from './modal';
import { checkboxDocumentation } from './checkbox';
import { radioDocumentation } from './radio';
import { switchDocumentation } from './switch';
import { selectDocumentation } from './select';
import { badgeDocumentation } from './badge';
import { chipDocumentation } from './chip';

// Type definitions for component documentation
export interface ComponentExample {
  react: string;
  angular: string;
  ionic: string;
}

export interface GuidelineProperty {
  property: string;
  type: string;
  description: string;
}

export interface GuidelineAttribute {
  attribute: string;
  description: string;
}

export interface ComponentGuidelines {
  properties?: GuidelineProperty[];
  attributes?: GuidelineAttribute[];
  accessibility?: string[];
  usage?: Record<string, string>;
}

export interface ComponentDocumentation {
  name: string;
  description: string;
  category: string;
  examples: ComponentExample;
  guidelines?: ComponentGuidelines;
}

// Main documentation registry
export const componentDocumentation: Record<string, ComponentDocumentation> = {
  button: buttonDocumentation,
  card: cardDocumentation,
  alert: alertDocumentation,
  input: inputDocumentation,
  modal: modalDocumentation,
  checkbox: checkboxDocumentation,
  radio: radioDocumentation,
  select: selectDocumentation,
  switch: switchDocumentation,
  
  badge: badgeDocumentation,
  chip: chipDocumentation,
  
  avatar: {
    name: 'Avatar',
    description: 'User profile pictures and initials for representing people or entities.',
    category: 'Data Display',
    examples: {
      react: '// Avatar React implementation coming soon...',
      angular: '<!-- Avatar Angular implementation coming soon... -->',
      ionic: '<!-- Avatar Ionic implementation coming soon... -->'
    }
  },
  
  progress: {
    name: 'Progress',
    description: 'Loading indicators and progress bars for showing task completion.',
    category: 'Data Display',
    examples: {
      react: '// Progress React implementation coming soon...',
      angular: '<!-- Progress Angular implementation coming soon... -->',
      ionic: '<!-- Progress Ionic implementation coming soon... -->'
    }
  },
  
  breadcrumb: {
    name: 'Breadcrumb',
    description: 'Navigation aids showing the current page location within a hierarchy.',
    category: 'Navigation',
    examples: {
      react: '// Breadcrumb React implementation coming soon...',
      angular: '<!-- Breadcrumb Angular implementation coming soon... -->',
      ionic: '<!-- Breadcrumb Ionic implementation coming soon... -->'
    }
  },
  
  tabs: {
    name: 'Tabs',
    description: 'Content organization component for switching between different views.',
    category: 'Navigation',
    examples: {
      react: '// Tabs React implementation coming soon...',
      angular: '<!-- Tabs Angular implementation coming soon... -->',
      ionic: '<!-- Tabs Ionic implementation coming soon... -->'
    }
  },
  
  pagination: {
    name: 'Pagination',
    description: 'Navigation component for splitting content across multiple pages.',
    category: 'Navigation',
    examples: {
      react: '// Pagination React implementation coming soon...',
      angular: '<!-- Pagination Angular implementation coming soon... -->',
      ionic: '<!-- Pagination Ionic implementation coming soon... -->'
    }
  },
  
  sidebar: {
    name: 'Sidebar',
    description: 'App navigation component providing access to main sections and features.',
    category: 'Navigation',
    examples: {
      react: '// Sidebar React implementation coming soon...',
      angular: '<!-- Sidebar Angular implementation coming soon... -->',
      ionic: '<!-- Sidebar Ionic implementation coming soon... -->'
    }
  },
  
  toast: {
    name: 'Toast',
    description: 'Temporary notification messages for user feedback and status updates.',
    category: 'Feedback',
    examples: {
      react: '// Toast React implementation coming soon...',
      angular: '<!-- Toast Angular implementation coming soon... -->',
      ionic: '<!-- Toast Ionic implementation coming soon... -->'
    }
  },
  

  
  tooltip: {
    name: 'Tooltip',
    description: 'Contextual help component providing additional information on hover or focus.',
    category: 'Feedback',
    examples: {
      react: '// Tooltip React implementation coming soon...',
      angular: '<!-- Tooltip Angular implementation coming soon... -->',
      ionic: '<!-- Tooltip Ionic implementation coming soon... -->'
    }
  }
};

// Helper function to get component documentation
export function getComponentDocumentation(componentId: string): ComponentDocumentation | undefined {
  return componentDocumentation[componentId];
}

// Helper function to get all component IDs
export function getAllComponentIds(): string[] {
  return Object.keys(componentDocumentation);
}

// Helper function to get components by category
export function getComponentsByCategory(category: string): Record<string, ComponentDocumentation> {
  return Object.fromEntries(
    Object.entries(componentDocumentation).filter(
      ([_, doc]) => doc.category === category
    )
  );
}

// Component categories
export const componentCategories = [
  'Form Controls',
  'Data Display', 
  'Navigation',
  'Feedback'
] as const;

export type ComponentCategory = typeof componentCategories[number];