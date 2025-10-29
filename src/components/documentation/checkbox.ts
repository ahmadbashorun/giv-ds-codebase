export const checkboxDocumentation = {
  name: 'Checkbox',
  description: 'Interactive checkbox controls for selecting multiple options from a list or toggling binary states. Supports various sizes, states, and flexible label positioning for optimal form design.',
  category: 'Form Controls',
  examples: {
    react: `// React Implementation
import { Checkbox } from './ui/checkbox';
import { Label } from './ui/label';
import { useState } from 'react';

function CheckboxExamples() {
  const [formData, setFormData] = useState({
    terms: false,
    newsletter: false,
    notifications: true,
    marketing: false,
    analytics: 'indeterminate'
  });

  const handleCheckboxChange = (field: string, checked: boolean | 'indeterminate') => {
    setFormData(prev => ({ ...prev, [field]: checked }));
  };

  return (
    <div className="space-y-8 max-w-2xl">
      {/* Checkbox Sizes */}
      <div className="space-y-4">
        <h4 className="h6-heading">Checkbox Sizes</h4>
        <div className="grid grid-cols-3 gap-6">
          {/* Large - 24px */}
          <div class="space-y-3">
            <h5 className="h7-heading">Large (24px)</h5>
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <Checkbox 
                  id="large-default" 
                  className="h-6 w-6"
                />
                <Label htmlFor="large-default" className="paragraph-small-medium cursor-pointer">Default</Label>
              </div>
              <div className="flex items-center space-x-3">
                <Checkbox 
                  id="large-checked" 
                  checked 
                  className="h-6 w-6"
                />
                <Label htmlFor="large-checked" className="paragraph-small-medium cursor-pointer">Checked</Label>
              </div>
              <div className="flex items-center space-x-3">
                <Checkbox 
                  id="large-indeterminate" 
                  checked="indeterminate"
                  className="h-6 w-6"
                />
                <Label htmlFor="large-indeterminate" className="paragraph-small-medium cursor-pointer">Indeterminate</Label>
              </div>
              <div className="flex items-center space-x-3">
                <Checkbox 
                  id="large-disabled" 
                  disabled 
                  className="h-6 w-6"
                />
                <Label htmlFor="large-disabled" className="paragraph-small-medium text-muted-foreground cursor-not-allowed">Disabled</Label>
              </div>
            </div>
          </div>

          {/* Medium - 20px */}
          <div className="space-y-3">
            <h5 className="h7-heading">Medium (20px)</h5>
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <Checkbox 
                  id="medium-default" 
                  className="h-5 w-5"
                />
                <Label htmlFor="medium-default" className="paragraph-small-medium cursor-pointer">Default</Label>
              </div>
              <div className="flex items-center space-x-3">
                <Checkbox 
                  id="medium-checked" 
                  checked 
                  className="h-5 w-5"
                />
                <Label htmlFor="medium-checked" className="paragraph-small-medium cursor-pointer">Checked</Label>
              </div>
              <div className="flex items-center space-x-3">
                <Checkbox 
                  id="medium-indeterminate" 
                  checked="indeterminate"
                  className="h-5 w-5"
                />
                <Label htmlFor="medium-indeterminate" className="paragraph-small-medium cursor-pointer">Indeterminate</Label>
              </div>
              <div className="flex items-center space-x-3">
                <Checkbox 
                  id="medium-disabled" 
                  disabled 
                  className="h-5 w-5"
                />
                <Label htmlFor="medium-disabled" className="paragraph-small-medium text-muted-foreground cursor-not-allowed">Disabled</Label>
              </div>
            </div>
          </div>

          {/* Small - 16px */}
          <div className="space-y-3">
            <h5 className="h7-heading">Small (16px)</h5>
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <Checkbox 
                  id="small-default" 
                  className="h-4 w-4"
                />
                <Label htmlFor="small-default" className="paragraph-small-medium cursor-pointer">Default</Label>
              </div>
              <div className="flex items-center space-x-3">
                <Checkbox 
                  id="small-checked" 
                  checked 
                  className="h-4 w-4"
                />
                <Label htmlFor="small-checked" className="paragraph-small-medium cursor-pointer">Checked</Label>
              </div>
              <div className="flex items-center space-x-3">
                <Checkbox 
                  id="small-indeterminate" 
                  checked="indeterminate"
                  className="h-4 w-4"
                />
                <Label htmlFor="small-indeterminate" className="paragraph-small-medium cursor-pointer">Indeterminate</Label>
              </div>
              <div className="flex items-center space-x-3">
                <Checkbox 
                  id="small-disabled" 
                  disabled 
                  className="h-4 w-4"
                />
                <Label htmlFor="small-disabled" className="paragraph-small-medium text-muted-foreground cursor-not-allowed">Disabled</Label>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Label Positioning */}
      <div className="space-y-4">
        <h4 className="h6-heading">Label Positioning</h4>
        <div className="grid grid-cols-1 gap-6">
          {/* Checkbox on Left */}
          <div className="space-y-4">
            <h5 className="h7-heading">Checkbox on Left</h5>
            <div className="space-y-3">
              {/* Label Only - Top Aligned */}
              <div className="flex items-start space-x-3">
                <Checkbox 
                  id="left-label-only" 
                  checked={formData.terms}
                  onCheckedChange={(checked) => handleCheckboxChange('terms', checked)}
                  className="mt-0.5 h-5 w-5 data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                />
                <div className="flex flex-col">
                  <Label htmlFor="left-label-only" className="paragraph-small-medium cursor-pointer">
                    I agree to the terms and conditions
                  </Label>
                </div>
              </div>
              
              {/* Label and Caption - Top Aligned */}
              <div className="flex items-start space-x-3">
                <Checkbox 
                  id="left-label-caption" 
                  checked={formData.newsletter}
                  onCheckedChange={(checked) => handleCheckboxChange('newsletter', checked)}
                  className="mt-0.5 h-5 w-5 data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                />
                <div className="flex flex-col">
                  <Label htmlFor="left-label-caption" className="paragraph-small-medium cursor-pointer">
                    Subscribe to newsletter
                  </Label>
                  <span className="caption-large text-muted-foreground">
                    Receive weekly updates about new features and improvements
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Checkbox on Right */}
          <div className="space-y-4">
            <h5 className="h7-heading">Checkbox on Right</h5>
            <div className="space-y-3">
              {/* Label Only - Center Aligned */}
              <div className="flex items-center justify-between">
                <Label htmlFor="right-label-only" className="paragraph-small-medium cursor-pointer">
                  Enable notifications
                </Label>
                <Checkbox 
                  id="right-label-only" 
                  checked={formData.notifications}
                  onCheckedChange={(checked) => handleCheckboxChange('notifications', checked)}
                  className="h-5 w-5 data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                />
              </div>
              
              {/* Label and Caption - Top Aligned */}
              <div className="flex items-start justify-between">
                <div className="flex flex-col pr-4">
                  <Label htmlFor="right-label-caption" className="paragraph-small-medium cursor-pointer">
                    Marketing communications
                  </Label>
                  <span className="caption-large text-muted-foreground">
                    Allow us to send you promotional content and special offers
                  </span>
                </div>
                <Checkbox 
                  id="right-label-caption" 
                  checked={formData.marketing}
                  onCheckedChange={(checked) => handleCheckboxChange('marketing', checked)}
                  className="mt-0.5 h-5 w-5 data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Examples */}
      <div className="space-y-4">
        <h4 className="h6-heading">Interactive Examples</h4>
        <div className="space-y-4 p-4 border border-border-card rounded-lg bg-background-card">
          {/* Select All Example */}
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <Checkbox 
                id="select-all" 
                checked={formData.analytics}
                onCheckedChange={(checked) => handleCheckboxChange('analytics', checked)}
                className="h-5 w-5 data-[state=checked]:bg-primary data-[state=checked]:border-primary data-[state=indeterminate]:bg-primary data-[state=indeterminate]:border-primary"
              />
              <Label htmlFor="select-all" className="h7-heading cursor-pointer">
                Analytics & Performance
              </Label>
            </div>
            
            <div className="ml-8 space-y-2">
              <div className="flex items-center space-x-3">
                <Checkbox 
                  id="performance" 
                  className="h-4 w-4 data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                />
                <Label htmlFor="performance" className="paragraph-small-regular cursor-pointer">
                  Performance monitoring
                </Label>
              </div>
              <div className="flex items-center space-x-3">
                <Checkbox 
                  id="usage" 
                  className="h-4 w-4 data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                />
                <Label htmlFor="usage" className="paragraph-small-regular cursor-pointer">
                  Usage analytics
                </Label>
              </div>
              <div className="flex items-center space-x-3">
                <Checkbox 
                  id="errors" 
                  className="h-4 w-4 data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                />
                <Label htmlFor="errors" className="paragraph-small-regular cursor-pointer">
                  Error reporting
                </Label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}`,
    angular: `<!-- Angular Implementation -->
<div class="space-y-8 max-w-2xl">
  <!-- Checkbox Sizes -->
  <div class="space-y-4">
    <h4 class="h6-heading">Checkbox Sizes</h4>
    <div class="grid grid-cols-3 gap-6">
      <!-- Large - 24px -->
      <div class="space-y-3">
        <h5 class="h7-heading">Large (24px)</h5>
        <div class="space-y-2">
          <div class="flex items-center space-x-3">
            <input 
              type="checkbox" 
              id="large-default" 
              class="checkbox checkbox-lg"
              [(ngModel)]="formData.largeDefault"
            />
            <label for="large-default" class="paragraph-small-medium cursor-pointer">Default</label>
          </div>
          <div class="flex items-center space-x-3">
            <input 
              type="checkbox" 
              id="large-checked" 
              class="checkbox checkbox-lg"
              checked
              [(ngModel)]="formData.largeChecked"
            />
            <label for="large-checked" class="paragraph-small-medium cursor-pointer">Checked</label>
          </div>
          <div class="flex items-center space-x-3">
            <input 
              type="checkbox" 
              id="large-indeterminate" 
              class="checkbox checkbox-lg indeterminate"
              [indeterminate]="true"
            />
            <label for="large-indeterminate" class="paragraph-small-medium cursor-pointer">Indeterminate</label>
          </div>
          <div class="flex items-center space-x-3">
            <input 
              type="checkbox" 
              id="large-disabled" 
              class="checkbox checkbox-lg"
              disabled
            />
            <label for="large-disabled" class="paragraph-small-medium text-muted-foreground cursor-not-allowed">Disabled</label>
          </div>
        </div>
      </div>

      <!-- Medium - 20px -->
      <div class="space-y-3">
        <h5 class="h7-heading">Medium (20px)</h5>
        <div class="space-y-2">
          <div class="flex items-center space-x-3">
            <input 
              type="checkbox" 
              id="medium-default" 
              class="checkbox"
              [(ngModel)]="formData.mediumDefault"
            />
            <label for="medium-default" class="paragraph-small-medium cursor-pointer">Default</label>
          </div>
          <div class="flex items-center space-x-3">
            <input 
              type="checkbox" 
              id="medium-checked" 
              class="checkbox"
              checked
              [(ngModel)]="formData.mediumChecked"
            />
            <label for="medium-checked" class="paragraph-small-medium cursor-pointer">Checked</label>
          </div>
          <div class="flex items-center space-x-3">
            <input 
              type="checkbox" 
              id="medium-indeterminate" 
              class="checkbox indeterminate"
              [indeterminate]="true"
            />
            <label for="medium-indeterminate" class="paragraph-small-medium cursor-pointer">Indeterminate</label>
          </div>
          <div class="flex items-center space-x-3">
            <input 
              type="checkbox" 
              id="medium-disabled" 
              class="checkbox"
              disabled
            />
            <label for="medium-disabled" class="paragraph-small-medium text-muted-foreground cursor-not-allowed">Disabled</label>
          </div>
        </div>
      </div>

      <!-- Small - 16px -->
      <div class="space-y-3">
        <h5 class="h7-heading">Small (16px)</h5>
        <div class="space-y-2">
          <div class="flex items-center space-x-3">
            <input 
              type="checkbox" 
              id="small-default" 
              class="checkbox checkbox-sm"
              [(ngModel)]="formData.smallDefault"
            />
            <label for="small-default" class="paragraph-small-medium cursor-pointer">Default</label>
          </div>
          <div class="flex items-center space-x-3">
            <input 
              type="checkbox" 
              id="small-checked" 
              class="checkbox checkbox-sm"
              checked
              [(ngModel)]="formData.smallChecked"
            />
            <label for="small-checked" class="paragraph-small-medium cursor-pointer">Checked</label>
          </div>
          <div class="flex items-center space-x-3">
            <input 
              type="checkbox" 
              id="small-indeterminate" 
              class="checkbox checkbox-sm indeterminate"
              [indeterminate]="true"
            />
            <label for="small-indeterminate" class="paragraph-small-medium cursor-pointer">Indeterminate</label>
          </div>
          <div class="flex items-center space-x-3">
            <input 
              type="checkbox" 
              id="small-disabled" 
              class="checkbox checkbox-sm"
              disabled
            />
            <label for="small-disabled" class="paragraph-small-medium text-muted-foreground cursor-not-allowed">Disabled</label>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Label Positioning -->
  <div class="space-y-4">
    <h4 class="h6-heading">Label Positioning</h4>
    <div class="grid grid-cols-1 gap-6">
      <!-- Checkbox on Left -->
      <div class="space-y-4">
        <h5 class="h7-heading">Checkbox on Left</h5>
        <div class="space-y-3">
          <!-- Label Only - Top Aligned -->
          <div class="flex items-start space-x-3">
            <input 
              type="checkbox" 
              id="left-label-only" 
              class="checkbox mt-0.5"
              [(ngModel)]="formData.terms"
              (change)="onCheckboxChange('terms', $event)"
            />
            <div class="flex flex-col">
              <label for="left-label-only" class="paragraph-small-medium cursor-pointer">
                I agree to the terms and conditions
              </label>
            </div>
          </div>
          
          <!-- Label and Caption - Top Aligned -->
          <div class="flex items-start space-x-3">
            <input 
              type="checkbox" 
              id="left-label-caption" 
              class="checkbox mt-0.5"
              [(ngModel)]="formData.newsletter"
              (change)="onCheckboxChange('newsletter', $event)"
            />
            <div class="flex flex-col">
              <label for="left-label-caption" class="paragraph-small-medium cursor-pointer">
                Subscribe to newsletter
              </label>
              <span class="caption-large text-muted-foreground">
                Receive weekly updates about new features and improvements
              </span>
            </div>
          </div>
        </div>
      </div>

      <!-- Checkbox on Right -->
      <div class="space-y-4">
        <h5 class="h7-heading">Checkbox on Right</h5>
        <div class="space-y-3">
          <!-- Label Only - Center Aligned -->
          <div class="flex items-center justify-between">
            <label for="right-label-only" class="paragraph-small-medium cursor-pointer">
              Enable notifications
            </label>
            <input 
              type="checkbox" 
              id="right-label-only" 
              class="checkbox"
              [(ngModel)]="formData.notifications"
              (change)="onCheckboxChange('notifications', $event)"
            />
          </div>
          
          <!-- Label and Caption - Top Aligned -->
          <div class="flex items-start justify-between">
            <div class="flex flex-col pr-4">
              <label for="right-label-caption" class="paragraph-small-medium cursor-pointer">
                Marketing communications
              </label>
              <span class="caption-large text-muted-foreground">
                Allow us to send you promotional content and special offers
              </span>
            </div>
            <input 
              type="checkbox" 
              id="right-label-caption" 
              class="checkbox mt-0.5"
              [(ngModel)]="formData.marketing"
              (change)="onCheckboxChange('marketing', $event)"
            />
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Interactive Examples -->
  <div class="space-y-4">
    <h4 class="h6-heading">Interactive Examples</h4>
    <div class="space-y-4 p-4 border border-border-card rounded-lg bg-background-card">
      <!-- Select All Example -->
      <div class="space-y-3">
        <div class="flex items-center space-x-3">
          <input 
            type="checkbox" 
            id="select-all" 
            class="checkbox"
            [indeterminate]="isIndeterminate"
            [checked]="allSelected"
            (change)="toggleSelectAll($event)"
          />
          <label for="select-all" class="h7-heading cursor-pointer">
            Analytics & Performance
          </label>
        </div>
        
        <div class="ml-8 space-y-2">
          <div class="flex items-center space-x-3">
            <input 
              type="checkbox" 
              id="performance" 
              class="checkbox checkbox-sm"
              [(ngModel)]="formData.performance"
              (change)="updateSelectAll()"
            />
            <label for="performance" class="paragraph-small-regular cursor-pointer">
              Performance monitoring
            </label>
          </div>
          <div class="flex items-center space-x-3">
            <input 
              type="checkbox" 
              id="usage" 
              class="checkbox checkbox-sm"
              [(ngModel)]="formData.usage"
              (change)="updateSelectAll()"
            />
            <label for="usage" class="paragraph-small-regular cursor-pointer">
              Usage analytics
            </label>
          </div>
          <div class="flex items-center space-x-3">
            <input 
              type="checkbox" 
              id="errors" 
              class="checkbox checkbox-sm"
              [(ngModel)]="formData.errors"
              (change)="updateSelectAll()"
            />
            <label for="errors" class="paragraph-small-regular cursor-pointer">
              Error reporting
            </label>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

// Component.ts
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface FormData {
  terms: boolean;
  newsletter: boolean;
  notifications: boolean;
  marketing: boolean;
  performance: boolean;
  usage: boolean;
  errors: boolean;
  largeDefault: boolean;
  largeChecked: boolean;
  mediumDefault: boolean;
  mediumChecked: boolean;
  smallDefault: boolean;
  smallChecked: boolean;
}

@Component({
  selector: 'app-checkbox-examples',
  templateUrl: './checkbox-examples.component.html',
  styleUrls: ['./checkbox-examples.component.scss'],
  imports: [FormsModule]
})
export class CheckboxExamplesComponent {
  formData: FormData = {
    terms: false,
    newsletter: false,
    notifications: true,
    marketing: false,
    performance: false,
    usage: false,
    errors: false,
    largeDefault: false,
    largeChecked: true,
    mediumDefault: false,
    mediumChecked: true,
    smallDefault: false,
    smallChecked: true
  };
  
  isIndeterminate = false;
  allSelected = false;

  onCheckboxChange(field: keyof FormData, event: Event) {
    const target = event.target as HTMLInputElement;
    this.formData[field] = target.checked;
  }

  toggleSelectAll(event: Event) {
    const target = event.target as HTMLInputElement;
    const checked = target.checked;
    this.formData.performance = checked;
    this.formData.usage = checked;
    this.formData.errors = checked;
    this.updateSelectAll();
  }

  updateSelectAll() {
    const checkboxes = [this.formData.performance, this.formData.usage, this.formData.errors];
    const checkedCount = checkboxes.filter(Boolean).length;
    
    this.allSelected = checkedCount === checkboxes.length;
    this.isIndeterminate = checkedCount > 0 && checkedCount < checkboxes.length;
  }

  ngOnInit() {
    this.updateSelectAll();
  }
}

// checkbox-examples.component.scss
.checkbox {
  width: 20px;
  height: 20px;
  border: 1px solid var(--input-border);
  border-radius: var(--radius-sm);
  background-color: var(--input-background);
  cursor: pointer;
  position: relative;
  transition: all 0.2s ease;

  &:checked {
    background-color: var(--primary);
    border-color: var(--primary);
    
    &::after {
      content: '✓';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: var(--primary-foreground);
      font-size: 12px;
      font-weight: bold;
    }
  }

  &.indeterminate,
  &:indeterminate {
    background-color: var(--primary);
    border-color: var(--primary);
    
    &::after {
      content: '−';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: var(--primary-foreground);
      font-size: 12px;
      font-weight: bold;
    }
  }

  &:disabled {
    background-color: var(--muted);
    border-color: var(--muted);
    cursor: not-allowed;
    opacity: 0.6;
  }

  &:hover:not(:disabled) {
    border-color: var(--primary);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px var(--ring);
  }

  &.checkbox-lg {
    width: 24px;
    height: 24px;
    
    &:checked::after,
    &.indeterminate::after,
    &:indeterminate::after {
      font-size: 14px;
    }
  }

  &.checkbox-sm {
    width: 16px;
    height: 16px;
    
    &:checked::after,
    &.indeterminate::after,
    &:indeterminate::after {
      font-size: 10px;
    }
  }
}

.space-y-8 > * + * { margin-top: 2rem; }
.space-y-6 > * + * { margin-top: 1.5rem; }
.space-y-4 > * + * { margin-top: 1rem; }
.space-y-3 > * + * { margin-top: 0.75rem; }
.space-y-2 > * + * { margin-top: 0.5rem; }
.space-x-3 > * + * { margin-left: 0.75rem; }`,
    ionic: `<!-- Ionic Implementation -->
<ion-content>
  <div class="ion-padding space-y-8">
    <!-- Checkbox Sizes -->
    <div class="space-y-4">
      <h4 class="h6-heading">Checkbox Sizes</h4>
      <div class="grid grid-cols-3 gap-6">
        <!-- Large - 24px -->
        <div class="space-y-3">
          <h5 class="h7-heading">Large (24px)</h5>
          <div class="space-y-2">
            <ion-item lines="none">
              <ion-checkbox slot="start" size="large" [(ngModel)]="formData.largeDefault"></ion-checkbox>
              <ion-label>Default</ion-label>
            </ion-item>
            <ion-item lines="none">
              <ion-checkbox slot="start" size="large" checked="true" [(ngModel)]="formData.largeChecked"></ion-checkbox>
              <ion-label>Checked</ion-label>
            </ion-item>
            <ion-item lines="none">
              <ion-checkbox slot="start" size="large" indeterminate="true"></ion-checkbox>
              <ion-label>Indeterminate</ion-label>
            </ion-item>
            <ion-item lines="none">
              <ion-checkbox slot="start" size="large" disabled="true"></ion-checkbox>
              <ion-label class="ion-color-medium">Disabled</ion-label>
            </ion-item>
          </div>
        </div>

        <!-- Medium - 20px -->
        <div class="space-y-3">
          <h5 class="h7-heading">Medium (20px)</h5>
          <div class="space-y-2">
            <ion-item lines="none">
              <ion-checkbox slot="start" [(ngModel)]="formData.mediumDefault"></ion-checkbox>
              <ion-label>Default</ion-label>
            </ion-item>
            <ion-item lines="none">
              <ion-checkbox slot="start" checked="true" [(ngModel)]="formData.mediumChecked"></ion-checkbox>
              <ion-label>Checked</ion-label>
            </ion-item>
            <ion-item lines="none">
              <ion-checkbox slot="start" indeterminate="true"></ion-checkbox>
              <ion-label>Indeterminate</ion-label>
            </ion-item>
            <ion-item lines="none">
              <ion-checkbox slot="start" disabled="true"></ion-checkbox>
              <ion-label class="ion-color-medium">Disabled</ion-label>
            </ion-item>
          </div>
        </div>

        <!-- Small - 16px -->
        <div class="space-y-3">
          <h5 class="h7-heading">Small (16px)</h5>
          <div class="space-y-2">
            <ion-item lines="none">
              <ion-checkbox slot="start" size="small" [(ngModel)]="formData.smallDefault"></ion-checkbox>
              <ion-label>Default</ion-label>
            </ion-item>
            <ion-item lines="none">
              <ion-checkbox slot="start" size="small" checked="true" [(ngModel)]="formData.smallChecked"></ion-checkbox>
              <ion-label>Checked</ion-label>
            </ion-item>
            <ion-item lines="none">
              <ion-checkbox slot="start" size="small" indeterminate="true"></ion-checkbox>
              <ion-label>Indeterminate</ion-label>
            </ion-item>
            <ion-item lines="none">
              <ion-checkbox slot="start" size="small" disabled="true"></ion-checkbox>
              <ion-label class="ion-color-medium">Disabled</ion-label>
            </ion-item>
          </div>
        </div>
      </div>
    </div>

    <!-- Label Positioning -->
    <div class="space-y-4">
      <h4 class="h6-heading">Label Positioning</h4>
      <div class="space-y-6">
        <!-- Checkbox on Left -->
        <div class="space-y-4">
          <h5 class="h7-heading">Checkbox on Left</h5>
          <div class="space-y-3">
            <!-- Label Only -->
            <ion-item lines="none">
              <ion-checkbox slot="start" [(ngModel)]="formData.terms" (ionChange)="onCheckboxChange('terms', $event)"></ion-checkbox>
              <ion-label>I agree to the terms and conditions</ion-label>
            </ion-item>
            
            <!-- Label and Caption -->
            <ion-item lines="none">
              <ion-checkbox slot="start" [(ngModel)]="formData.newsletter" (ionChange)="onCheckboxChange('newsletter', $event)"></ion-checkbox>
              <ion-label>
                <h3>Subscribe to newsletter</h3>
                <p>Receive weekly updates about new features and improvements</p>
              </ion-label>
            </ion-item>
          </div>
        </div>

        <!-- Checkbox on Right -->
        <div class="space-y-4">
          <h5 class="h7-heading">Checkbox on Right</h5>
          <div class="space-y-3">
            <!-- Label Only -->
            <ion-item lines="none">
              <ion-label>Enable notifications</ion-label>
              <ion-checkbox slot="end" [(ngModel)]="formData.notifications" (ionChange)="onCheckboxChange('notifications', $event)"></ion-checkbox>
            </ion-item>
            
            <!-- Label and Caption -->
            <ion-item lines="none">
              <ion-label>
                <h3>Marketing communications</h3>
                <p>Allow us to send you promotional content and special offers</p>
              </ion-label>
              <ion-checkbox slot="end" [(ngModel)]="formData.marketing" (ionChange)="onCheckboxChange('marketing', $event)"></ion-checkbox>
            </ion-item>
          </div>
        </div>
      </div>
    </div>

    <!-- Interactive Examples -->
    <div class="space-y-4">
      <h4 class="h6-heading">Interactive Examples</h4>
      <ion-card>
        <ion-card-content>
          <!-- Select All Example -->
          <div class="space-y-3">
            <ion-item lines="none">
              <ion-checkbox 
                slot="start" 
                [indeterminate]="isIndeterminate"
                [checked]="allSelected"
                (ionChange)="toggleSelectAll($event)"
              ></ion-checkbox>
              <ion-label class="ion-text-wrap">
                <h2>Analytics & Performance</h2>
              </ion-label>
            </ion-item>
            
            <div class="ion-margin-start">
              <ion-item lines="none">
                <ion-checkbox 
                  slot="start" 
                  size="small"
                  [(ngModel)]="formData.performance"
                  (ionChange)="updateSelectAll()"
                ></ion-checkbox>
                <ion-label>Performance monitoring</ion-label>
              </ion-item>
              <ion-item lines="none">
                <ion-checkbox 
                  slot="start" 
                  size="small"
                  [(ngModel)]="formData.usage"
                  (ionChange)="updateSelectAll()"
                ></ion-checkbox>
                <ion-label>Usage analytics</ion-label>
              </ion-item>
              <ion-item lines="none">
                <ion-checkbox 
                  slot="start" 
                  size="small"
                  [(ngModel)]="formData.errors"
                  (ionChange)="updateSelectAll()"
                ></ion-checkbox>
                <ion-label>Error reporting</ion-label>
              </ion-item>
            </div>
          </div>
        </ion-card-content>
      </ion-card>
    </div>
  </div>
</ion-content>

// Component.ts
import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

interface FormData {
  terms: boolean;
  newsletter: boolean;
  notifications: boolean;
  marketing: boolean;
  performance: boolean;
  usage: boolean;
  errors: boolean;
  largeDefault: boolean;
  largeChecked: boolean;
  mediumDefault: boolean;
  mediumChecked: boolean;
  smallDefault: boolean;
  smallChecked: boolean;
}

@Component({
  selector: 'app-checkbox-examples',
  templateUrl: './checkbox-examples.page.html',
  styleUrls: ['./checkbox-examples.page.scss'],
  imports: [IonicModule, FormsModule]
})
export class CheckboxExamplesPage implements OnInit {
  formData: FormData = {
    terms: false,
    newsletter: false,
    notifications: true,
    marketing: false,
    performance: false,
    usage: false,
    errors: false,
    largeDefault: false,
    largeChecked: true,
    mediumDefault: false,
    mediumChecked: true,
    smallDefault: false,
    smallChecked: true
  };
  
  isIndeterminate = false;
  allSelected = false;

  constructor() {}

  ngOnInit() {
    this.updateSelectAll();
  }

  onCheckboxChange(field: keyof FormData, event: any) {
    this.formData[field] = event.detail.checked;
  }

  toggleSelectAll(event: any) {
    const checked = event.detail.checked;
    this.formData.performance = checked;
    this.formData.usage = checked;
    this.formData.errors = checked;
    this.updateSelectAll();
  }

  updateSelectAll() {
    const checkboxes = [this.formData.performance, this.formData.usage, this.formData.errors];
    const checkedCount = checkboxes.filter(Boolean).length;
    
    this.allSelected = checkedCount === checkboxes.length;
    this.isIndeterminate = checkedCount > 0 && checkedCount < checkboxes.length;
  }
}

// checkbox-examples.page.scss
ion-checkbox {
  --size: 20px;
  --checkbox-background-checked: var(--primary);
  --checkbox-background: var(--input-background);
  --border-color: var(--input-border);
  --border-color-checked: var(--primary);
  --checkmark-color: var(--primary-foreground);
  
  &[size="large"] {
    --size: 24px;
  }
  
  &[size="small"] {
    --size: 16px;
  }
  
  &:hover {
    --border-color: var(--primary);
  }
}

ion-item {
  --padding-start: 0;
  --padding-end: 0;
  --inner-padding-end: 0;
}

.space-y-8 > * + * { margin-top: 2rem; }
.space-y-6 > * + * { margin-top: 1.5rem; }
.space-y-4 > * + * { margin-top: 1rem; }
.space-y-3 > * + * { margin-top: 0.75rem; }
.space-y-2 > * + * { margin-top: 0.5rem; }`
  },
  guidelines: {
    properties: [
      {
        property: 'Size',
        type: 'Large (24px), Medium (20px), Small (16px)',
        description: 'Controls the checkbox size - use medium as default, large for emphasis, small for secondary options'
      },
      {
        property: 'State',
        type: 'Default, Checked, Indeterminate, Disabled',
        description: 'Current selection state - indeterminate for partial selections in groups'
      },
      {
        property: 'Position',
        type: 'Left, Right',
        description: 'Position relative to label - left for forms, right for settings/toggles'
      },
      {
        property: 'Label Type',
        type: 'Label only, Label with caption',
        description: 'Text content - caption provides additional context'
      },
      {
        property: 'Alignment',
        type: 'Center (label only), Top (with caption)',
        description: 'Vertical alignment of checkbox relative to text content'
      }
    ],
    attributes: [
      {
        attribute: 'Label',
        description: 'Clear, descriptive text that explains what the checkbox controls'
      },
      {
        attribute: 'Caption',
        description: 'Optional secondary text providing additional context or explanation'
      },
      {
        attribute: 'Group Context',
        description: 'Logical grouping with proper heading and indeterminate states for parent controls'
      },
      {
        attribute: 'Required Indicator',
        description: 'Visual indication when checkbox selection is mandatory'
      },
      {
        attribute: 'Error State',
        description: 'Validation feedback for required checkbox groups'
      }
    ],
    accessibility: [
      'Always provide clear, descriptive labels that explain what the checkbox controls',
      'Use fieldset and legend for checkbox groups to establish proper relationships',
      'Support keyboard navigation with Space key to toggle and Tab to navigate',
      'Ensure focus indicators are clearly visible and meet contrast requirements',
      'Use indeterminate state for parent checkboxes that control multiple child options',
      'Provide clear error messages for required checkbox validation',
      'Associate captions with checkboxes using aria-describedby when needed',
      'Announce state changes clearly for screen readers (checked/unchecked/indeterminate)'
    ]
  }
};