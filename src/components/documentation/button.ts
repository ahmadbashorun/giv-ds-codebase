export const buttonDocumentation = {
  name: 'Button',
  description: 'Buttons trigger actions and navigate users through the interface. They come in various styles to indicate different levels of importance and actions.',
  category: 'Form Controls',
  examples: {
    react: `// React Implementation
import { Button } from './ui/button';
import { Download, Plus, Trash2, Settings } from 'lucide-react';

function ButtonExamples() {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="space-y-6">
      {/* Basic Variants */}
      <div className="space-y-2">
        <h4 className="h6-heading">Button Variants</h4>
        <div className="flex flex-wrap gap-3">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="tertiary">Tertiary</Button>
          <Button variant="destructive">Error solid</Button>
          <Button variant="destructive-outline">Error outline</Button>
        </div>
      </div>

      {/* With Icons */}
      <div className="space-y-2">
        <h4 className="h6-heading">With Icons</h4>
        <div className="flex flex-wrap gap-3">
          <Button leftIcon={<Plus />}>Add Item</Button>
          <Button variant="secondary" rightIcon={<Download />}>Export</Button>
          <Button variant="tertiary" leftIcon={<Settings />}>Settings</Button>
        </div>
      </div>

      {/* Icon Only Buttons with Tooltips */}
      <div className="space-y-2">
        <h4 className="h6-heading">Icon Only</h4>
        <div className="flex flex-wrap gap-3">
          <Button 
            size="icon-sm" 
            variant="tertiary" 
            aria-label="Delete item"
            title="Delete item"
          >
            <Trash2 />
          </Button>
          <Button 
            size="icon-default" 
            variant="tertiary" 
            aria-label="Settings"
            title="Settings"
          >
            <Settings />
          </Button>
          <Button 
            size="icon-lg" 
            aria-label="Add new item"
            title="Add new item"
          >
            <Plus />
          </Button>
        </div>
      </div>

      {/* States */}
      <div className="space-y-2">
        <h4 className="h6-heading">Button States</h4>
        <div className="flex flex-wrap gap-3 items-center">
          <Button>Default</Button>
          <Button className="hover">Hover</Button>
          <Button className="focus-visible:ring-2">Focused</Button>
          <Button loading loadingText="Saving...">Loading</Button>
          <Button disabled>Disabled</Button>
        </div>
      </div>

      {/* Sizes */}
      <div className="space-y-2">
        <h4 className="h6-heading">Button Sizes</h4>
        <div className="flex flex-wrap gap-3 items-center">
          <Button size="sm">Small</Button>
          <Button size="default">Medium</Button>
          <Button size="lg">Large</Button>
        </div>
      </div>

      {/* Full Width */}
      <div className="space-y-2">
        <h4 className="h6-heading">Full Width</h4>
        <Button fullWidth>Full Width Button</Button>
      </div>
    </div>
  );
}`,
    angular: `<!-- Angular Implementation -->
<div class="space-y-6">
  <!-- Basic Variants -->
  <div class="space-y-2">
    <h4 class="h6-heading">Button Variants</h4>
    <div class="flex flex-wrap gap-3">
      <button class="btn btn-primary">Primary</button>
      <button class="btn btn-secondary">Secondary</button>
      <button class="btn btn-tertiary">Tertiary</button>
      <button class="btn btn-destructive">Error solid</button>
      <button class="btn btn-destructive-outline">Error outline</button>
    </div>
  </div>

  <!-- With Icons -->
  <div class="space-y-2">
    <h4 class="h6-heading">With Icons</h4>
    <div class="flex flex-wrap gap-3">
      <button class="btn btn-primary">
        <i class="icon-plus"></i>
        Add Item
      </button>
      <button class="btn btn-secondary">
        Export
        <i class="icon-download"></i>
      </button>
      <button class="btn btn-tertiary">
        <i class="icon-settings"></i>
        Settings
      </button>
    </div>
  </div>

  <!-- Icon Only Buttons with Tooltips -->
  <div class="space-y-2">
    <h4 class="h6-heading">Icon Only</h4>
    <div class="flex flex-wrap gap-3">
      <button 
        class="btn btn-icon-sm btn-tertiary" 
        aria-label="Delete item"
        title="Delete item"
      >
        <i class="icon-trash"></i>
      </button>
      <button 
        class="btn btn-icon btn-tertiary" 
        aria-label="Settings"
        title="Settings"
      >
        <i class="icon-settings"></i>
      </button>
      <button 
        class="btn btn-icon-lg btn-primary" 
        aria-label="Add new item"
        title="Add new item"
      >
        <i class="icon-plus"></i>
      </button>
    </div>
  </div>

  <!-- States -->
  <div class="space-y-2">
    <h4 class="h6-heading">Button States</h4>
    <div class="flex flex-wrap gap-3 items-center">
      <button class="btn btn-primary">Default</button>
      <button class="btn btn-primary hover">Hover</button>
      <button class="btn btn-primary focus">Focused</button>
      <button class="btn btn-primary loading" [disabled]="isLoading">
        <span class="loading-overlay">
          <i class="icon-loader animate-spin"></i>
        </span>
        <span [class.opacity-0]="isLoading">
          {{ isLoading ? 'Saving...' : 'Loading' }}
        </span>
      </button>
      <button class="btn btn-primary" disabled>Disabled</button>
    </div>
  </div>

  <!-- Sizes -->
  <div class="space-y-2">
    <h4 class="h6-heading">Button Sizes</h4>
    <div class="flex flex-wrap gap-3 items-center">
      <button class="btn btn-sm">Small</button>
      <button class="btn">Medium</button>
      <button class="btn btn-lg">Large</button>
    </div>
  </div>

  <!-- Full Width -->
  <div class="space-y-2">
    <h4 class="h6-heading">Full Width</h4>
    <button class="btn btn-primary btn-full">Full Width Button</button>
  </div>
</div>

// Component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-button-examples',
  templateUrl: './button-examples.component.html',
  styleUrls: ['./button-examples.component.scss']
})
export class ButtonExamplesComponent {
  isLoading = false;

  onLoadingClick() {
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
  }
}

// button.component.scss
.btn {
  &.loading {
    position: relative;
    
    .loading-overlay {
      position: absolute;
      inset: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: rgba(0, 0, 0, 0.2);
      border-radius: inherit;
    }
  }
  
  &.focus {
    box-shadow: 0 0 0 2px var(--color-ring);
  }
}`,
    ionic: `<!-- Ionic Implementation -->
<ion-content>
  <div class="ion-padding space-y-6">
    <!-- Basic Variants -->
    <div class="space-y-2">
      <h4 class="h6-heading">Button Variants</h4>
      <div class="flex flex-wrap gap-3">
        <ion-button color="primary">Primary</ion-button>
        <ion-button fill="outline" color="primary">Secondary</ion-button>
        <ion-button fill="clear" color="primary">Tertiary</ion-button>
        <ion-button color="danger">Error solid</ion-button>
        <ion-button color="danger" fill="outline">Error outline</ion-button>
      </div>
    </div>

    <!-- With Icons -->
    <div class="space-y-2">
      <h4 class="h6-heading">With Icons</h4>
      <div class="flex flex-wrap gap-3">
        <ion-button>
          <ion-icon name="add" slot="start"></ion-icon>
          Add Item
        </ion-button>
        <ion-button fill="outline" color="primary">
          Export
          <ion-icon name="download" slot="end"></ion-icon>
        </ion-button>
        <ion-button fill="clear" color="primary">
          <ion-icon name="settings" slot="start"></ion-icon>
          Settings
        </ion-button>
      </div>
    </div>

    <!-- Icon Only Buttons with Tooltips -->
    <div class="space-y-2">
      <h4 class="h6-heading">Icon Only</h4>
      <div class="flex flex-wrap gap-3">
        <ion-button 
          size="small" 
          fill="clear" 
          aria-label="Delete item"
          title="Delete item"
        >
          <ion-icon name="trash" slot="icon-only"></ion-icon>
        </ion-button>
        <ion-button 
          fill="clear" 
          aria-label="Settings"
          title="Settings"
        >
          <ion-icon name="settings" slot="icon-only"></ion-icon>
        </ion-button>
        <ion-button 
          size="large" 
          aria-label="Add new item"
          title="Add new item"
        >
          <ion-icon name="add" slot="icon-only"></ion-icon>
        </ion-button>
      </div>
    </div>

    <!-- States -->
    <div class="space-y-2">
      <h4 class="h6-heading">Button States</h4>
      <div class="flex flex-wrap gap-3 items-center">
        <ion-button>Default</ion-button>
        <ion-button class="ion-focused">Focused</ion-button>
        <ion-button [disabled]="isLoading" class="loading-state">
          <div class="loading-overlay" *ngIf="isLoading">
            <ion-spinner name="crescent"></ion-spinner>
          </div>
          <span [class.opacity-0]="isLoading">
            {{ isLoading ? 'Saving...' : 'Loading' }}
          </span>
        </ion-button>
        <ion-button disabled>Disabled</ion-button>
      </div>
    </div>

    <!-- Sizes -->
    <div class="space-y-2">
      <h4 class="h6-heading">Button Sizes</h4>
      <div class="flex flex-wrap gap-3 items-center">
        <ion-button size="small">Small</ion-button>
        <ion-button size="default">Medium</ion-button>
        <ion-button size="large">Large</ion-button>
      </div>
    </div>

    <!-- Full Width -->
    <div class="space-y-2">
      <h4 class="h6-heading">Full Width</h4>
      <ion-button expand="block">Full Width Button</ion-button>
    </div>
  </div>
</ion-content>

// Component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-button-examples',
  templateUrl: './button-examples.page.html',
  styleUrls: ['./button-examples.page.scss']
})
export class ButtonExamplesPage {
  isLoading = false;

  constructor() {}

  onLoadingClick() {
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
  }
}

// button-examples.page.scss
ion-button {
  &.loading-state {
    position: relative;
    
    .loading-overlay {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: rgba(0, 0, 0, 0.2);
      border-radius: 8px;
      z-index: 1;
    }
  }
  
  &.ion-focused {
    --box-shadow: 0 0 0 2px var(--ion-color-primary);
  }
}`
  },
  guidelines: {
    properties: [
      {
        property: 'Variant',
        type: 'Primary, Secondary, Tertiary, Destructive, Destructive-outline',
        description: 'Determines the visual styling of the button'
      },
      {
        property: 'Size',
        type: 'Small (sm), Default, Large (lg)',
        description: 'Controls the button size'
      },
      {
        property: 'Icon Position',
        type: 'Left, Right, Icon-only',
        description: 'Position of the icon if present'
      },
      {
        property: 'State',
        type: 'Default, Hover, Focused, Active, Disabled, Loading',
        description: 'Current interaction state'
      },
      {
        property: 'Full Width',
        type: 'Boolean',
        description: 'Whether button takes up full container width'
      }
    ],
    attributes: [
      {
        attribute: 'Label',
        description: 'Text displayed on the button'
      },
      {
        attribute: 'Icon',
        description: 'Optional visual element to reinforce meaning'
      },
      {
        attribute: 'Tooltip',
        description: 'Text that appears on hover (required for icon-only buttons)'
      },
      {
        attribute: 'Disabled',
        description: 'Indicates button is not interactive'
      },
      {
        attribute: 'Loading',
        description: 'Indicates an action is in progress'
      }
    ],
    accessibility: [
      'Provide tooltip text for icon-only buttons',
      'Include appropriate ARIA attributes when needed (aria-label, aria-busy for loading state)',
      'Maintain keyboard focus indicators for all buttons',
      'Ensure color contrast meets WCAG AA standards (4.5:1 for normal text)',
      'Disabled buttons should visually indicate they are unavailable while maintaining sufficient contrast'
    ]
  }
};