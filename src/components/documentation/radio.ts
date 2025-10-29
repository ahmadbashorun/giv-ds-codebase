export const radioDocumentation = {
  name: 'Radio Button',
  description: 'Single-selection controls for choosing one option from a mutually exclusive group. Supports various sizes, states, and flexible label positioning for optimal form design.',
  category: 'Form Controls',
  examples: {
    react: `// React Implementation
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { Label } from './ui/label';
import { useState } from 'react';

function RadioExamples() {
  const [formData, setFormData] = useState({
    shiftType: 'regular',
    reportingMethod: 'mobile-app',
    clientStatus: 'active',
    billingFrequency: 'weekly'
  });

  const handleRadioChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="space-y-8 max-w-2xl">
      {/* Radio Sizes */}
      <div className="space-y-4">
        <h4 className="h6-heading">Radio Button Sizes</h4>
        <div className="grid grid-cols-3 gap-6">
          {/* Large - 24px */}
          <div className="space-y-3">
            <h5 className="h7-heading">Large (24px)</h5>
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <RadioGroupItem 
                  id="large-default" 
                  value="default"
                  className="size-6"
                />
                <Label htmlFor="large-default" className="paragraph-small-medium cursor-pointer">Default</Label>
              </div>
              <div className="flex items-center space-x-3">
                <RadioGroupItem 
                  id="large-checked" 
                  value="checked"
                  checked
                  className="size-6"
                />
                <Label htmlFor="large-checked" className="paragraph-small-medium cursor-pointer">Selected</Label>
              </div>
              <div className="flex items-center space-x-3">
                <RadioGroupItem 
                  id="large-disabled" 
                  value="disabled"
                  disabled 
                  className="size-6"
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
                <RadioGroupItem 
                  id="medium-default" 
                  value="default"
                  className="size-5"
                />
                <Label htmlFor="medium-default" className="paragraph-small-medium cursor-pointer">Default</Label>
              </div>
              <div className="flex items-center space-x-3">
                <RadioGroupItem 
                  id="medium-checked" 
                  value="checked"
                  checked
                  className="size-5"
                />
                <Label htmlFor="medium-checked" className="paragraph-small-medium cursor-pointer">Selected</Label>
              </div>
              <div className="flex items-center space-x-3">
                <RadioGroupItem 
                  id="medium-disabled" 
                  value="disabled"
                  disabled 
                  className="size-5"
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
                <RadioGroupItem 
                  id="small-default" 
                  value="default"
                  className="size-4"
                />
                <Label htmlFor="small-default" className="paragraph-small-medium cursor-pointer">Default</Label>
              </div>
              <div className="flex items-center space-x-3">
                <RadioGroupItem 
                  id="small-checked" 
                  value="checked"
                  checked
                  className="size-4"
                />
                <Label htmlFor="small-checked" className="paragraph-small-medium cursor-pointer">Selected</Label>
              </div>
              <div className="flex items-center space-x-3">
                <RadioGroupItem 
                  id="small-disabled" 
                  value="disabled"
                  disabled 
                  className="size-4"
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
          {/* Radio on Left */}
          <div className="space-y-4">
            <h5 className="h7-heading">Radio Button on Left</h5>
            <div className="space-y-3">
              {/* Label Only - Top Aligned */}
              <RadioGroup value={formData.reportingMethod} onValueChange={(value) => handleRadioChange('reportingMethod', value)}>
                <div className="flex items-start space-x-3">
                  <RadioGroupItem 
                    id="left-mobile-app" 
                    value="mobile-app"
                    className="mt-0.5 size-5"
                  />
                  <div className="flex flex-col">
                    <Label htmlFor="left-email" className="paragraph-small-medium cursor-pointer">
                      Email notifications
                    </Label>
                  </div>
                </div>
                
                {/* Label and Caption - Top Aligned */}
                <div className="flex items-start space-x-3">
                  <RadioGroupItem 
                    id="left-sms" 
                    value="sms"
                    className="mt-0.5 h-5 w-5 border-input-border data-[state=checked]:border-primary"
                  />
                  <div className="flex flex-col">
                    <Label htmlFor="left-sms" className="paragraph-small-medium cursor-pointer">
                      SMS notifications
                    </Label>
                    <span className="caption-large text-muted-foreground">
                      Receive important updates via text message
                    </span>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <RadioGroupItem 
                    id="left-push" 
                    value="push"
                    className="mt-0.5 h-5 w-5 border-input-border data-[state=checked]:border-primary"
                  />
                  <div className="flex flex-col">
                    <Label htmlFor="left-push" className="paragraph-small-medium cursor-pointer">
                      Push notifications
                    </Label>
                    <span className="caption-large text-muted-foreground">
                      Get notifications directly in the app
                    </span>
                  </div>
                </div>
              </RadioGroup>
            </div>
          </div>

          {/* Radio on Right */}
          <div className="space-y-4">
            <h5 className="h7-heading">Radio Button on Right</h5>
            <div className="space-y-3">
              <RadioGroup value={formData.theme} onValueChange={(value) => handleRadioChange('theme', value)}>
                {/* Label Only - Center Aligned */}
                <div className="flex items-center justify-between">
                  <Label htmlFor="right-light" className="paragraph-small-medium cursor-pointer">
                    Light theme
                  </Label>
                  <RadioGroupItem 
                    id="right-light" 
                    value="light"
                    className="h-5 w-5 border-input-border data-[state=checked]:border-primary"
                  />
                </div>
                
                {/* Label and Caption - Top Aligned */}
                <div className="flex items-start justify-between">
                  <div className="flex flex-col pr-4">
                    <Label htmlFor="right-dark" className="paragraph-small-medium cursor-pointer">
                      Dark theme
                    </Label>
                    <span className="caption-large text-muted-foreground">
                      Optimized for low-light environments
                    </span>
                  </div>
                  <RadioGroupItem 
                    id="right-dark" 
                    value="dark"
                    className="mt-0.5 h-5 w-5 border-input-border data-[state=checked]:border-primary"
                  />
                </div>

                <div className="flex items-start justify-between">
                  <div className="flex flex-col pr-4">
                    <Label htmlFor="right-auto" className="paragraph-small-medium cursor-pointer">
                      Auto theme
                    </Label>
                    <span className="caption-large text-muted-foreground">
                      Follows your system preference
                    </span>
                  </div>
                  <RadioGroupItem 
                    id="right-auto" 
                    value="auto"
                    className="mt-0.5 h-5 w-5 border-input-border data-[state=checked]:border-primary"
                  />
                </div>
              </RadioGroup>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Examples */}
      <div className="space-y-4">
        <h4 className="h6-heading">Interactive Examples</h4>
        
        {/* Payment Method Selection */}
        <div className="space-y-4 p-4 border border-border-card rounded-lg bg-background-card">
          <div className="space-y-3">
            <h5 className="h7-heading">Payment Method</h5>
            <RadioGroup value={formData.paymentMethod} onValueChange={(value) => handleRadioChange('paymentMethod', value)}>
              <div className="grid grid-cols-1 gap-3">
                <div className="flex items-center space-x-3 p-3 border rounded-lg hover:bg-background-card-hover transition-colors">
                  <RadioGroupItem 
                    id="credit-card" 
                    value="credit-card"
                    className="h-5 w-5 border-input-border data-[state=checked]:border-primary"
                  />
                  <div className="flex flex-col">
                    <Label htmlFor="credit-card" className="paragraph-small-medium cursor-pointer">
                      Credit Card
                    </Label>
                    <span className="caption-large text-muted-foreground">
                      Visa, Mastercard, American Express
                    </span>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 p-3 border rounded-lg hover:bg-background-card-hover transition-colors">
                  <RadioGroupItem 
                    id="paypal" 
                    value="paypal"
                    className="h-5 w-5 border-input-border data-[state=checked]:border-primary"
                  />
                  <div className="flex flex-col">
                    <Label htmlFor="paypal" className="paragraph-small-medium cursor-pointer">
                      PayPal
                    </Label>
                    <span className="caption-large text-muted-foreground">
                      Pay with your PayPal account
                    </span>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 p-3 border rounded-lg hover:bg-background-card-hover transition-colors">
                  <RadioGroupItem 
                    id="bank-transfer" 
                    value="bank-transfer"
                    className="h-5 w-5 border-input-border data-[state=checked]:border-primary"
                  />
                  <div className="flex flex-col">
                    <Label htmlFor="bank-transfer" className="paragraph-small-medium cursor-pointer">
                      Bank Transfer
                    </Label>
                    <span className="caption-large text-muted-foreground">
                      Direct transfer from your bank account
                    </span>
                  </div>
                </div>
              </div>
            </RadioGroup>
          </div>
        </div>

        {/* Plan Selection */}
        <div className="space-y-4 p-4 border border-border-card rounded-lg bg-background-card">
          <div className="space-y-3">
            <h5 className="h7-heading">Subscription Plan</h5>
            <RadioGroup value={formData.plan} onValueChange={(value) => handleRadioChange('plan', value)}>
              <div className="grid grid-cols-3 gap-3">
                <div className="flex flex-col items-center p-4 border rounded-lg hover:bg-background-card-hover transition-colors">
                  <RadioGroupItem 
                    id="basic-plan" 
                    value="basic"
                    className="mb-3 h-5 w-5 border-input-border data-[state=checked]:border-primary"
                  />
                  <Label htmlFor="basic-plan" className="h7-heading cursor-pointer mb-1">
                    Basic
                  </Label>
                  <span className="caption-large text-muted-foreground text-center">
                    Essential features for small teams
                  </span>
                </div>
                
                <div className="flex flex-col items-center p-4 border rounded-lg hover:bg-background-card-hover transition-colors">
                  <RadioGroupItem 
                    id="pro-plan" 
                    value="pro"
                    className="mb-3 h-5 w-5 border-input-border data-[state=checked]:border-primary"
                  />
                  <Label htmlFor="pro-plan" className="h7-heading cursor-pointer mb-1">
                    Pro
                  </Label>
                  <span className="caption-large text-muted-foreground text-center">
                    Advanced features and analytics
                  </span>
                </div>
                
                <div className="flex flex-col items-center p-4 border rounded-lg hover:bg-background-card-hover transition-colors">
                  <RadioGroupItem 
                    id="enterprise-plan" 
                    value="enterprise"
                    className="mb-3 h-5 w-5 border-input-border data-[state=checked]:border-primary"
                  />
                  <Label htmlFor="enterprise-plan" className="h7-heading cursor-pointer mb-1">
                    Enterprise
                  </Label>
                  <span className="caption-large text-muted-foreground text-center">
                    Custom solutions for large organizations
                  </span>
                </div>
              </div>
            </RadioGroup>
          </div>
        </div>
      </div>
    </div>
  );
}`,
    angular: `<!-- Angular Implementation -->
<div class="space-y-8 max-w-2xl">
  <!-- Radio Sizes -->
  <div class="space-y-4">
    <h4 class="h6-heading">Radio Button Sizes</h4>
    <div class="grid grid-cols-3 gap-6">
      <!-- Large - 24px -->
      <div class="space-y-3">
        <h5 class="h7-heading">Large (24px)</h5>
        <div class="space-y-2">
          <div class="flex items-center space-x-3">
            <input 
              type="radio" 
              id="large-default" 
              name="large-demo"
              class="radio radio-lg"
              [(ngModel)]="formData.largeDemo"
              value="default"
            />
            <label for="large-default" class="paragraph-small-medium cursor-pointer">Default</label>
          </div>
          <div class="flex items-center space-x-3">
            <input 
              type="radio" 
              id="large-checked" 
              name="large-demo"
              class="radio radio-lg"
              [(ngModel)]="formData.largeDemo"
              value="checked"
            />
            <label for="large-checked" class="paragraph-small-medium cursor-pointer">Selected</label>
          </div>
          <div class="flex items-center space-x-3">
            <input 
              type="radio" 
              id="large-disabled" 
              name="large-demo"
              class="radio radio-lg"
              disabled
              value="disabled"
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
              type="radio" 
              id="medium-default" 
              name="medium-demo"
              class="radio"
              [(ngModel)]="formData.mediumDemo"
              value="default"
            />
            <label for="medium-default" class="paragraph-small-medium cursor-pointer">Default</label>
          </div>
          <div class="flex items-center space-x-3">
            <input 
              type="radio" 
              id="medium-checked" 
              name="medium-demo"
              class="radio"
              [(ngModel)]="formData.mediumDemo"
              value="checked"
            />
            <label for="medium-checked" class="paragraph-small-medium cursor-pointer">Selected</label>
          </div>
          <div class="flex items-center space-x-3">
            <input 
              type="radio" 
              id="medium-disabled" 
              name="medium-demo"
              class="radio"
              disabled
              value="disabled"
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
              type="radio" 
              id="small-default" 
              name="small-demo"
              class="radio radio-sm"
              [(ngModel)]="formData.smallDemo"
              value="default"
            />
            <label for="small-default" class="paragraph-small-medium cursor-pointer">Default</label>
          </div>
          <div class="flex items-center space-x-3">
            <input 
              type="radio" 
              id="small-checked" 
              name="small-demo"
              class="radio radio-sm"
              [(ngModel)]="formData.smallDemo"
              value="checked"
            />
            <label for="small-checked" class="paragraph-small-medium cursor-pointer">Selected</label>
          </div>
          <div class="flex items-center space-x-3">
            <input 
              type="radio" 
              id="small-disabled" 
              name="small-demo"
              class="radio radio-sm"
              disabled
              value="disabled"
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
      <!-- Radio on Left -->
      <div class="space-y-4">
        <h5 class="h7-heading">Radio Button on Left</h5>
        <div class="space-y-3">
          <!-- Label Only - Top Aligned -->
          <div class="flex items-start space-x-3">
            <input 
              type="radio" 
              id="left-email" 
              name="notification-method"
              class="radio mt-0.5"
              [(ngModel)]="formData.notificationMethod"
              value="email"
              (change)="onRadioChange('notificationMethod', $event)"
            />
            <div class="flex flex-col">
              <label for="left-email" class="paragraph-small-medium cursor-pointer">
                Email notifications
              </label>
            </div>
          </div>
          
          <!-- Label and Caption - Top Aligned -->
          <div class="flex items-start space-x-3">
            <input 
              type="radio" 
              id="left-sms" 
              name="notification-method"
              class="radio mt-0.5"
              [(ngModel)]="formData.notificationMethod"
              value="sms"
              (change)="onRadioChange('notificationMethod', $event)"
            />
            <div class="flex flex-col">
              <label for="left-sms" class="paragraph-small-medium cursor-pointer">
                SMS notifications
              </label>
              <span class="caption-large text-muted-foreground">
                Receive important updates via text message
              </span>
            </div>
          </div>

          <div class="flex items-start space-x-3">
            <input 
              type="radio" 
              id="left-push" 
              name="notification-method"
              class="radio mt-0.5"
              [(ngModel)]="formData.notificationMethod"
              value="push"
              (change)="onRadioChange('notificationMethod', $event)"
            />
            <div class="flex flex-col">
              <label for="left-push" class="paragraph-small-medium cursor-pointer">
                Push notifications
              </label>
              <span class="caption-large text-muted-foreground">
                Get notifications directly in the app
              </span>
            </div>
          </div>
        </div>
      </div>

      <!-- Radio on Right -->
      <div class="space-y-4">
        <h5 class="h7-heading">Radio Button on Right</h5>
        <div class="space-y-3">
          <!-- Label Only - Center Aligned -->
          <div class="flex items-center justify-between">
            <label for="right-light" class="paragraph-small-medium cursor-pointer">
              Light theme
            </label>
            <input 
              type="radio" 
              id="right-light" 
              name="theme"
              class="radio"
              [(ngModel)]="formData.theme"
              value="light"
              (change)="onRadioChange('theme', $event)"
            />
          </div>
          
          <!-- Label and Caption - Top Aligned -->
          <div class="flex items-start justify-between">
            <div class="flex flex-col pr-4">
              <label for="right-dark" class="paragraph-small-medium cursor-pointer">
                Dark theme
              </label>
              <span class="caption-large text-muted-foreground">
                Optimized for low-light environments
              </span>
            </div>
            <input 
              type="radio" 
              id="right-dark" 
              name="theme"
              class="radio mt-0.5"
              [(ngModel)]="formData.theme"
              value="dark"
              (change)="onRadioChange('theme', $event)"
            />
          </div>

          <div class="flex items-start justify-between">
            <div class="flex flex-col pr-4">
              <label for="right-auto" class="paragraph-small-medium cursor-pointer">
                Auto theme
              </label>
              <span class="caption-large text-muted-foreground">
                Follows your system preference
              </span>
            </div>
            <input 
              type="radio" 
              id="right-auto" 
              name="theme"
              class="radio mt-0.5"
              [(ngModel)]="formData.theme"
              value="auto"
              (change)="onRadioChange('theme', $event)"
            />
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Interactive Examples -->
  <div class="space-y-4">
    <h4 class="h6-heading">Interactive Examples</h4>
    
    <!-- Payment Method Selection -->
    <div class="space-y-4 p-4 border border-border-card rounded-lg bg-background-card">
      <div class="space-y-3">
        <h5 class="h7-heading">Payment Method</h5>
        <div class="grid grid-cols-1 gap-3">
          <div class="flex items-center space-x-3 p-3 border rounded-lg hover:bg-background-card-hover transition-colors">
            <input 
              type="radio" 
              id="credit-card" 
              name="payment-method"
              class="radio"
              [(ngModel)]="formData.paymentMethod"
              value="credit-card"
              (change)="onRadioChange('paymentMethod', $event)"
            />
            <div class="flex flex-col">
              <label for="credit-card" class="paragraph-small-medium cursor-pointer">
                Credit Card
              </label>
              <span class="caption-large text-muted-foreground">
                Visa, Mastercard, American Express
              </span>
            </div>
          </div>
          
          <div class="flex items-center space-x-3 p-3 border rounded-lg hover:bg-background-card-hover transition-colors">
            <input 
              type="radio" 
              id="paypal" 
              name="payment-method"
              class="radio"
              [(ngModel)]="formData.paymentMethod"
              value="paypal"
              (change)="onRadioChange('paymentMethod', $event)"
            />
            <div class="flex flex-col">
              <label for="paypal" class="paragraph-small-medium cursor-pointer">
                PayPal
              </label>
              <span class="caption-large text-muted-foreground">
                Pay with your PayPal account
              </span>
            </div>
          </div>
          
          <div class="flex items-center space-x-3 p-3 border rounded-lg hover:bg-background-card-hover transition-colors">
            <input 
              type="radio" 
              id="bank-transfer" 
              name="payment-method"
              class="radio"
              [(ngModel)]="formData.paymentMethod"
              value="bank-transfer"
              (change)="onRadioChange('paymentMethod', $event)"
            />
            <div class="flex flex-col">
              <label for="bank-transfer" class="paragraph-small-medium cursor-pointer">
                Bank Transfer
              </label>
              <span class="caption-large text-muted-foreground">
                Direct transfer from your bank account
              </span>
            </div>
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
  notificationMethod: string;
  theme: string;
  paymentMethod: string;
  plan: string;
  largeDemo: string;
  mediumDemo: string;
  smallDemo: string;
}

@Component({
  selector: 'app-radio-examples',
  templateUrl: './radio-examples.component.html',
  styleUrls: ['./radio-examples.component.scss'],
  imports: [FormsModule]
})
export class RadioExamplesComponent {
  formData: FormData = {
    notificationMethod: 'email',
    theme: 'light',
    paymentMethod: 'credit-card',
    plan: 'basic',
    largeDemo: 'checked',
    mediumDemo: 'checked',
    smallDemo: 'checked'
  };

  onRadioChange(field: keyof FormData, event: Event) {
    const target = event.target as HTMLInputElement;
    this.formData[field] = target.value;
  }
}

// radio-examples.component.scss
.radio {
  width: 20px;
  height: 20px;
  border: 1px solid var(--input-border);
  border-radius: 50%;
  background-color: var(--input-background);
  cursor: pointer;
  position: relative;
  transition: all 0.2s ease;
  appearance: none;

  &:checked {
    border-color: var(--primary);
    
    &::after {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 8px;
      height: 8px;
      background-color: var(--primary);
      border-radius: 50%;
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

  &.radio-lg {
    width: 24px;
    height: 24px;
    
    &:checked::after {
      width: 10px;
      height: 10px;
    }
  }

  &.radio-sm {
    width: 16px;
    height: 16px;
    
    &:checked::after {
      width: 6px;
      height: 6px;
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
    <!-- Radio Sizes -->
    <div class="space-y-4">
      <h4 class="h6-heading">Radio Button Sizes</h4>
      <div class="grid grid-cols-3 gap-6">
        <!-- Large - 24px -->
        <div class="space-y-3">
          <h5 class="h7-heading">Large (24px)</h5>
          <ion-radio-group [(ngModel)]="formData.largeDemo" (ionChange)="onRadioChange('largeDemo', $event)">
            <div class="space-y-2">
              <ion-item lines="none">
                <ion-radio slot="start" value="default" size="large"></ion-radio>
                <ion-label>Default</ion-label>
              </ion-item>
              <ion-item lines="none">
                <ion-radio slot="start" value="checked" size="large"></ion-radio>
                <ion-label>Selected</ion-label>
              </ion-item>
              <ion-item lines="none">
                <ion-radio slot="start" value="disabled" size="large" disabled="true"></ion-radio>
                <ion-label class="ion-color-medium">Disabled</ion-label>
              </ion-item>
            </div>
          </ion-radio-group>
        </div>

        <!-- Medium - 20px -->
        <div class="space-y-3">
          <h5 class="h7-heading">Medium (20px)</h5>
          <ion-radio-group [(ngModel)]="formData.mediumDemo" (ionChange)="onRadioChange('mediumDemo', $event)">
            <div class="space-y-2">
              <ion-item lines="none">
                <ion-radio slot="start" value="default"></ion-radio>
                <ion-label>Default</ion-label>
              </ion-item>
              <ion-item lines="none">
                <ion-radio slot="start" value="checked"></ion-radio>
                <ion-label>Selected</ion-label>
              </ion-item>
              <ion-item lines="none">
                <ion-radio slot="start" value="disabled" disabled="true"></ion-radio>
                <ion-label class="ion-color-medium">Disabled</ion-label>
              </ion-item>
            </div>
          </ion-radio-group>
        </div>

        <!-- Small - 16px -->
        <div class="space-y-3">
          <h5 class="h7-heading">Small (16px)</h5>
          <ion-radio-group [(ngModel)]="formData.smallDemo" (ionChange)="onRadioChange('smallDemo', $event)">
            <div class="space-y-2">
              <ion-item lines="none">
                <ion-radio slot="start" value="default" size="small"></ion-radio>
                <ion-label>Default</ion-label>
              </ion-item>
              <ion-item lines="none">
                <ion-radio slot="start" value="checked" size="small"></ion-radio>
                <ion-label>Selected</ion-label>
              </ion-item>
              <ion-item lines="none">
                <ion-radio slot="start" value="disabled" size="small" disabled="true"></ion-radio>
                <ion-label class="ion-color-medium">Disabled</ion-label>
              </ion-item>
            </div>
          </ion-radio-group>
        </div>
      </div>
    </div>

    <!-- Label Positioning -->
    <div class="space-y-4">
      <h4 class="h6-heading">Label Positioning</h4>
      <div class="space-y-6">
        <!-- Radio on Left -->
        <div class="space-y-4">
          <h5 class="h7-heading">Radio Button on Left</h5>
          <ion-radio-group [(ngModel)]="formData.notificationMethod" (ionChange)="onRadioChange('notificationMethod', $event)">
            <div class="space-y-3">
              <!-- Label Only -->
              <ion-item lines="none">
                <ion-radio slot="start" value="email"></ion-radio>
                <ion-label>Email notifications</ion-label>
              </ion-item>
              
              <!-- Label and Caption -->
              <ion-item lines="none">
                <ion-radio slot="start" value="sms"></ion-radio>
                <ion-label>
                  <h3>SMS notifications</h3>
                  <p>Receive important updates via text message</p>
                </ion-label>
              </ion-item>

              <ion-item lines="none">
                <ion-radio slot="start" value="push"></ion-radio>
                <ion-label>
                  <h3>Push notifications</h3>
                  <p>Get notifications directly in the app</p>
                </ion-label>
              </ion-item>
            </div>
          </ion-radio-group>
        </div>

        <!-- Radio on Right -->
        <div class="space-y-4">
          <h5 class="h7-heading">Radio Button on Right</h5>
          <ion-radio-group [(ngModel)]="formData.theme" (ionChange)="onRadioChange('theme', $event)">
            <div class="space-y-3">
              <!-- Label Only -->
              <ion-item lines="none">
                <ion-label>Light theme</ion-label>
                <ion-radio slot="end" value="light"></ion-radio>
              </ion-item>
              
              <!-- Label and Caption -->
              <ion-item lines="none">
                <ion-label>
                  <h3>Dark theme</h3>
                  <p>Optimized for low-light environments</p>
                </ion-label>
                <ion-radio slot="end" value="dark"></ion-radio>
              </ion-item>

              <ion-item lines="none">
                <ion-label>
                  <h3>Auto theme</h3>
                  <p>Follows your system preference</p>
                </ion-label>
                <ion-radio slot="end" value="auto"></ion-radio>
              </ion-item>
            </div>
          </ion-radio-group>
        </div>
      </div>
    </div>

    <!-- Interactive Examples -->
    <div class="space-y-4">
      <h4 class="h6-heading">Interactive Examples</h4>
      
      <!-- Payment Method Selection -->
      <ion-card>
        <ion-card-content>
          <div class="space-y-3">
            <h5 class="h7-heading">Payment Method</h5>
            <ion-radio-group [(ngModel)]="formData.paymentMethod" (ionChange)="onRadioChange('paymentMethod', $event)">
              <ion-item>
                <ion-radio slot="start" value="credit-card"></ion-radio>
                <ion-label>
                  <h3>Credit Card</h3>
                  <p>Visa, Mastercard, American Express</p>
                </ion-label>
              </ion-item>
              
              <ion-item>
                <ion-radio slot="start" value="paypal"></ion-radio>
                <ion-label>
                  <h3>PayPal</h3>
                  <p>Pay with your PayPal account</p>
                </ion-label>
              </ion-item>
              
              <ion-item>
                <ion-radio slot="start" value="bank-transfer"></ion-radio>
                <ion-label>
                  <h3>Bank Transfer</h3>
                  <p>Direct transfer from your bank account</p>
                </ion-label>
              </ion-item>
            </ion-radio-group>
          </div>
        </ion-card-content>
      </ion-card>

      <!-- Plan Selection -->
      <ion-card>
        <ion-card-content>
          <div class="space-y-3">
            <h5 class="h7-heading">Subscription Plan</h5>
            <ion-radio-group [(ngModel)]="formData.plan" (ionChange)="onRadioChange('plan', $event)">
              <div class="grid grid-cols-3 gap-3">
                <div class="text-center p-4 border rounded-lg">
                  <ion-radio value="basic"></ion-radio>
                  <ion-label class="block mt-2">
                    <h3>Basic</h3>
                    <p>Essential features for small teams</p>
                  </ion-label>
                </div>
                
                <div class="text-center p-4 border rounded-lg">
                  <ion-radio value="pro"></ion-radio>
                  <ion-label class="block mt-2">
                    <h3>Pro</h3>
                    <p>Advanced features and analytics</p>
                  </ion-label>
                </div>
                
                <div class="text-center p-4 border rounded-lg">
                  <ion-radio value="enterprise"></ion-radio>
                  <ion-label class="block mt-2">
                    <h3>Enterprise</h3>
                    <p>Custom solutions for large organizations</p>
                  </ion-label>
                </div>
              </div>
            </ion-radio-group>
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
  notificationMethod: string;
  theme: string;
  paymentMethod: string;
  plan: string;
  largeDemo: string;
  mediumDemo: string;
  smallDemo: string;
}

@Component({
  selector: 'app-radio-examples',
  templateUrl: './radio-examples.page.html',
  styleUrls: ['./radio-examples.page.scss'],
  imports: [IonicModule, FormsModule]
})
export class RadioExamplesPage implements OnInit {
  formData: FormData = {
    notificationMethod: 'email',
    theme: 'light',
    paymentMethod: 'credit-card',
    plan: 'basic',
    largeDemo: 'checked',
    mediumDemo: 'checked',
    smallDemo: 'checked'
  };

  constructor() {}

  ngOnInit() {}

  onRadioChange(field: keyof FormData, event: any) {
    this.formData[field] = event.detail.value;
  }
}

// radio-examples.page.scss
ion-radio {
  --color: var(--primary);
  --color-checked: var(--primary);
  --border-width: 1px;
  --border-color: var(--input-border);
  --border-color-checked: var(--primary);
  
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
        description: 'Controls the radio button size - use medium as default, large for emphasis, small for secondary options'
      },
      {
        property: 'State',
        type: 'Default, Selected, Disabled',
        description: 'Current selection state - only one option can be selected per group'
      },
      {
        property: 'Position',
        type: 'Left, Right',
        description: 'Position relative to label - left for forms, right for settings/toggles'
      },
      {
        property: 'Label Type',
        type: 'Label only, Label with caption',
        description: 'Text content - caption provides additional context or explanation'
      },
      {
        property: 'Alignment',
        type: 'Center (label only), Top (with caption)',
        description: 'Vertical alignment of radio button relative to text content'
      }
    ],
    attributes: [
      {
        attribute: 'Label',
        description: 'Clear, descriptive text that explains what the radio button option represents'
      },
      {
        attribute: 'Caption',
        description: 'Optional secondary text providing additional context or explanation of the option'
      },
      {
        attribute: 'Group Name',
        description: 'HTML name attribute to group related radio buttons for mutual exclusion'
      },
      {
        attribute: 'Value',
        description: 'Unique identifier for each option within the radio group'
      },
      {
        attribute: 'Default Selection',
        description: 'Pre-selected option when the form loads (recommended for better UX)'
      }
    ],
    accessibility: [
      'Always provide clear, descriptive labels that explain what each option represents',
      'Use fieldset and legend for radio button groups to establish proper relationships',
      'Support keyboard navigation with Arrow keys to move between options and Space to select',
      'Ensure focus indicators are clearly visible and meet contrast requirements',
      'Group related options with the same name attribute for proper mutual exclusion',
      'Provide a default selection when possible to avoid empty states',
      'Associate captions with radio buttons using aria-describedby when needed',
      'Announce selection changes clearly for screen readers (selected/not selected)'
    ]
  }
};