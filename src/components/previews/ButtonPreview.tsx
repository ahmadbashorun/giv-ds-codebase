import React from 'react';
import { Button } from '../ui/button';
import { Plus, Download, Settings, Trash2 } from 'lucide-react';

export function ButtonPreview() {
  return (
    <div className="space-y-8">
      {/* Basic Variants */}
      <div className="space-y-3">
        <h4 className="paragraph-small-medium" style={{ color: 'var(--text-body)' }}>Button Variants</h4>
        <div className="flex flex-wrap gap-3">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="tertiary">Tertiary</Button>
          <Button variant="destructive">Error solid</Button>
          <Button variant="destructive-outline">Error outline</Button>
        </div>
      </div>

      {/* With Icons */}
      <div className="space-y-3">
        <h4 className="paragraph-small-medium" style={{ color: 'var(--text-body)' }}>With Icons</h4>
        <div className="flex flex-wrap gap-3">
          <Button leftIcon={<Plus className="h-4 w-4" />}>Add Item</Button>
          <Button variant="secondary" rightIcon={<Download className="h-4 w-4" />}>Export</Button>
          <Button variant="tertiary" leftIcon={<Settings className="h-4 w-4" />}>Settings</Button>
        </div>
      </div>

      {/* Icon Only */}
      <div className="space-y-3">
        <h4 className="paragraph-small-medium" style={{ color: 'var(--text-body)' }}>Icon Only</h4>
        <div className="flex flex-wrap gap-3">
          <Button 
            size="icon-sm" 
            variant="tertiary" 
            aria-label="Delete item"
            title="Delete item"
          >
            <Trash2 className="h-3.5 w-3.5" />
          </Button>
          <Button 
            size="icon-default" 
            variant="tertiary" 
            aria-label="Settings"
            title="Settings"
          >
            <Settings className="h-4 w-4" />
          </Button>
          <Button 
            size="icon-lg" 
            aria-label="Add new item"
            title="Add new item"
          >
            <Plus className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* States */}
      <div className="space-y-3">
        <h4 className="paragraph-small-medium" style={{ color: 'var(--text-body)' }}>Button States</h4>
        <div className="flex flex-wrap gap-3 items-center">
          <Button>Default</Button>
          <Button className="focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">Focused</Button>
          <Button loading loadingText="Saving...">Loading</Button>
          <Button disabled>Disabled</Button>
        </div>
      </div>

      {/* Sizes */}
      <div className="space-y-3">
        <h4 className="paragraph-small-medium" style={{ color: 'var(--text-body)' }}>Button Sizes</h4>
        <div className="flex flex-wrap gap-3 items-center">
          <Button size="sm">Small</Button>
          <Button size="default">Medium</Button>
          <Button size="lg">Large</Button>
        </div>
      </div>
    </div>
  );
}