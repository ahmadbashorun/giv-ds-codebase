import React, { useState } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Input } from './ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { 
  Component, 
  Search,
  ArrowRight,
  Settings
} from 'lucide-react';

interface ComponentsPageProps {
  onSectionChange: (section: string, subSection?: string) => void;
}

const componentCategories = [
  {
    name: 'Form Controls',
    components: [
      { name: 'Button', description: 'Primary actions and navigation', id: 'button' },
      { name: 'Input', description: 'Text input fields', id: 'input' },
      { name: 'Select', description: 'Dropdown selection', id: 'select' },
      { name: 'Checkbox', description: 'Multiple selection', id: 'checkbox' },
      { name: 'Radio', description: 'Single selection', id: 'radio' },
      { name: 'Switch', description: 'Toggle states', id: 'switch' }
    ]
  },
  {
    name: 'Data Display',
    components: [
      { name: 'Card', description: 'Content containers', id: 'card' },
      { name: 'Table', description: 'Tabular data', id: 'table' },
      { name: 'Badge', description: 'Status indicators', id: 'badge' },
      { name: 'Avatar', description: 'User representation', id: 'avatar' },
      { name: 'Progress', description: 'Loading states', id: 'progress' },
      { name: 'Alert', description: 'Status messages', id: 'alert' }
    ]
  },
  {
    name: 'Navigation',
    components: [
      { name: 'Breadcrumb', description: 'Page hierarchy', id: 'breadcrumb' },
      { name: 'Tabs', description: 'Content organization', id: 'tabs' },
      { name: 'Pagination', description: 'Page navigation', id: 'pagination' },
      { name: 'Sidebar', description: 'App navigation', id: 'sidebar' }
    ]
  },
  {
    name: 'Feedback',
    components: [
      { name: 'Toast', description: 'Temporary notifications', id: 'toast' },
      { name: 'Modal', description: 'Overlay dialogs', id: 'modal' },
      { name: 'Tooltip', description: 'Contextual help', id: 'tooltip' }
    ]
  }
];

export function ComponentsPage({ onSectionChange }: ComponentsPageProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredComponents = componentCategories.flatMap(category => 
    category.components.filter(component => 
      component.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (selectedCategory === 'all' || category.name === selectedCategory)
    ).map(component => ({ ...component, category: category.name }))
  );

  return (
    <div className="p-6 space-y-8">
      {/* Header */}
      <div className="space-y-4">
        <div className="space-y-2">
          <h1 className="h1-heading" style={{ color: 'var(--text-heading-page)' }}>Components</h1>
          <p className="paragraph-large-regular" style={{ color: 'var(--text-body)' }}>
            Reusable UI components with implementation examples for Angular, Ionic, and React. Click on any component to view detailed documentation and code examples.
          </p>
        </div>
        
        <div className="flex gap-2">
          <Badge variant="outline" className="gap-1" style={{ gap: '4px' }}>
            <Component className="h-3 w-3" />
            <span className="caption-large">{filteredComponents.length} Components</span>
          </Badge>
          <Badge variant="outline" className="gap-1" style={{ gap: '4px' }}>
            <Settings className="h-3 w-3" />
            <span className="caption-large">3 Frameworks</span>
          </Badge>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4" style={{ color: 'var(--input-placeholder)' }} />
          <Input
            placeholder="Search components..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
            style={{ paddingLeft: '2.5rem' }}
          />
        </div>
        
        <Select value={selectedCategory} onValueChange={setSelectedCategory}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>
            {componentCategories.map((category) => (
              <SelectItem key={category.name} value={category.name}>
                {category.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Component Categories */}
      <div className="space-y-8">
        {componentCategories.map((category) => {
          const categoryComponents = category.components.filter(component =>
            component.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
            (selectedCategory === 'all' || selectedCategory === category.name)
          );

          if (categoryComponents.length === 0) return null;

          return (
            <div key={category.name} className="space-y-4">
              <div className="space-y-2">
                <h2 className="h4-heading" style={{ color: 'var(--text-heading-section)' }}>{category.name}</h2>
                <p className="paragraph-medium-regular" style={{ color: 'var(--text-body)' }}>
                  {category.name === 'Form Controls' && 'Interactive elements for user input and form submission'}
                  {category.name === 'Data Display' && 'Components for presenting and organizing information'}
                  {category.name === 'Navigation' && 'Elements for site navigation and user guidance'}
                  {category.name === 'Feedback' && 'Components for user feedback and system communication'}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {categoryComponents.map((component) => (
                  <Card 
                    key={component.id}
                    className="p-4 border cursor-pointer transition-all duration-200 hover:shadow-md hover:border-primary/50 group"
                    style={{ borderColor: 'var(--border-card)' }}
                    onClick={() => onSectionChange('components', component.id)}
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div 
                            className="w-10 h-10 rounded-lg flex items-center justify-center transition-colors"
                            style={{ backgroundColor: 'var(--primary-p00)' }}
                          >
                            <Component className="h-5 w-5" style={{ color: 'var(--primary-p04)' }} />
                          </div>
                          <div className="space-y-1">
                            <h3 className="paragraph-small-medium" style={{ color: 'var(--text-body)' }}>{component.name}</h3>
                            <Badge variant="outline" className="text-xs">
                              <span className="caption-small">{category.name}</span>
                            </Badge>
                          </div>
                        </div>
                        <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" style={{ color: 'var(--text-metadata)' }} />
                      </div>
                      
                      <p className="caption-medium" style={{ color: 'var(--text-metadata)' }}>
                        {component.description}
                      </p>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Empty State */}
      {filteredComponents.length === 0 && (
        <div className="text-center py-12">
          <div className="space-y-4">
            <div 
              className="w-16 h-16 rounded-lg mx-auto flex items-center justify-center"
              style={{ backgroundColor: 'var(--muted)' }}
            >
              <Component className="h-8 w-8" style={{ color: 'var(--muted-foreground)' }} />
            </div>
            <div className="space-y-2">
              <h3 className="h5-heading" style={{ color: 'var(--text-heading-section)' }}>No components found</h3>
              <p className="paragraph-medium-regular" style={{ color: 'var(--text-body)' }}>
                Try adjusting your search terms or category filter to find the component you're looking for.
              </p>
            </div>
            <Button 
              variant="outline" 
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="gap-2"
            >
              <Search className="h-4 w-4" />
              <span className="paragraph-small-medium">Clear Filters</span>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}