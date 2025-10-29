export const inputDocumentation = {
  name: 'Input',
  description: 'Text input fields for user data entry with various types and validation states. Supports labels, placeholders, validation, and different sizes for optimal user experience.',
  category: 'Form Controls',
  examples: {
    react: `// React Implementation
import { Input, FormField, Label } from './ui/input';
import { Mail, Lock, User, Phone, Search, MapPin, Info } from 'lucide-react';
import { useState } from 'react';

function InputExamples() {
  const [searchValue, setSearchValue] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
    location: ''
  });
  const [errors, setErrors] = useState({});

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <div className="space-y-8 max-w-md">
      {/* FormField Component - Integrated Label + Input + Helper */}
      <div className="space-y-4">
        <h4 className="h6-heading">FormField Component</h4>
        
        {/* Text Input with Helper */}
        <FormField
          label="Full Name"
          labelRequired
          labelSecondary="Required field"
          placeholder="Enter your full name"
          value={formData.name}
          onChange={(e) => handleInputChange('name', e.target.value)}
          leftIcon={<User />}
          helperText="Please enter your legal name as it appears on official documents"
          helperIcon={<Info />}
        />

        {/* Email with Validation */}
        <FormField
          label="Email Address"
          labelRequired
          labelSecondary="Must be valid"
          type="email"
          placeholder="you@example.com"
          value={formData.email}
          onChange={(e) => handleInputChange('email', e.target.value)}
          leftIcon={<Mail />}
          error={errors.email}
          helperText={errors.email || "We'll never share your email with anyone"}
          helperIcon={<Info />}
        />

        {/* Password with Built-in Toggle */}
        <FormField
          label="Password"
          labelRequired
          labelSecondary="Min 8 characters"
          type="password"
          placeholder="Enter secure password"
          value={formData.password}
          onChange={(e) => handleInputChange('password', e.target.value)}
          leftIcon={<Lock />}
          showPasswordToggle
          helperText="Must contain at least 8 characters, including uppercase, lowercase, and numbers"
          helperIcon={<Info />}
        />

        {/* Location Input */}
        <FormField
          label="Location"
          labelSecondary="Optional"
          placeholder="Enter address or city"
          value={formData.location}
          onChange={(e) => handleInputChange('location', e.target.value)}
          leftIcon={<MapPin />}
          helperText="This helps us find services near you"
        />
      </div>

      {/* Clearable Search Input */}
      <div className="space-y-4">
        <h4 className="h6-heading">Search Input</h4>
        <div className="space-y-2">
          <Label htmlFor="search">Search DSPs</Label>
          <Input
            id="search"
            type="search"
            placeholder="Search by name or location..."
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            leftIcon={<Search />}
            clearable
            onClear={() => setSearchValue('')}
            size="lg"
          />
        </div>
      </div>

      {/* Standalone Input Components */}
      <div className="space-y-4">
        <h4 className="h6-heading">Standalone Inputs</h4>
        
        {/* With Icons */}
        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number</Label>
          <Input
            id="phone"
            type="tel"
            placeholder="(555) 123-4567"
            value={formData.phone}
            onChange={(e) => handleInputChange('phone', e.target.value)}
            leftIcon={<Phone />}
          />
        </div>

        {/* Plain Input */}
        <div className="space-y-2">
          <Label htmlFor="notes">Notes</Label>
          <Input
            id="notes"
            placeholder="Additional information..."
          />
        </div>
      </div>

      {/* Input Sizes */}
      <div className="space-y-4">
        <h4 className="h6-heading">Input Sizes</h4>
        <div className="space-y-3">
          <div className="space-y-2">
            <Label htmlFor="small-input">Small (32px)</Label>
            <Input
              id="small-input"
              placeholder="Small size input"
              size="sm"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="default-input">Medium/Default (40px)</Label>
            <Input
              id="default-input"
              placeholder="Default size input"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="large-input">Large (48px)</Label>
            <Input
              id="large-input"
              placeholder="Large size input"
              size="lg"
            />
          </div>
        </div>
      </div>

      {/* Stepper Input */}
      <div className="space-y-4">
        <h4 className="h6-heading">Stepper/Number Input</h4>
        <div className="space-y-2">
          <Label htmlFor="quantity">Quantity</Label>
          <Input
            id="quantity"
            type="number"
            defaultValue="0"
            showStepper
            size="lg"
          />
        </div>
      </div>

      {/* Validation States */}
      <div className="space-y-4">
        <h4 className="h6-heading">Validation States</h4>
        <div className="space-y-3">
          {/* Error State */}
          <FormField
            label="Email with Error"
            type="email"
            placeholder="Enter valid email"
            defaultValue="invalid-email"
            error
            helperText="Please enter a valid email address"
            helperIcon={<Info />}
          />

          {/* Success State */}
          <FormField
            label="Valid Email"
            type="email"
            placeholder="Enter valid email"
            defaultValue="user@example.com"
            success
            helperText="Email format is valid"
          />

          {/* Disabled State */}
          <FormField
            label="Disabled Input"
            placeholder="This input is disabled"
            disabled
            defaultValue="Cannot be edited"
            helperText="This field is currently locked"
          />

          {/* Read-only State */}
          <FormField
            label="Read-only Input"
            placeholder="This input is read-only"
            readOnly
            defaultValue="View only"
            helperText="This field cannot be modified"
          />
        </div>
      </div>

      {/* Required Field Legend */}
      <div className="text-sm text-muted-foreground">
        <span className="text-destructive">*</span> indicates required fields
      </div>
    </div>
  );
}`,
    angular: `<!-- Angular Implementation -->
<div class="space-y-8 max-w-md">
  <!-- Basic Input Types -->
  <div class="space-y-4">
    <h4 class="h6-heading">Input Types</h4>
    
    <!-- Text Input -->
    <div class="space-y-2">
      <label for="name" class="block text-sm font-medium">Full Name *</label>
      <div class="relative">
        <i class="icon-user absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground"></i>
        <input
          id="name"
          type="text"
          class="input pl-10"
          placeholder="Enter your full name"
          [(ngModel)]="formData.name"
          (input)="onInputChange('name', $event)"
          required
        />
      </div>
    </div>

    <!-- Email Input -->
    <div class="space-y-2">
      <label for="email" class="block text-sm font-medium">Email Address *</label>
      <div class="relative">
        <i class="icon-mail absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground"></i>
        <input
          id="email"
          type="email"
          class="input pl-10"
          [class.error]="errors.email"
          placeholder="Enter your email"
          [(ngModel)]="formData.email"
          (input)="onInputChange('email', $event)"
          required
        />
      </div>
      <p *ngIf="errors.email" class="text-sm text-destructive">{{ errors.email }}</p>
    </div>

    <!-- Password Input -->
    <div class="space-y-2">
      <label for="password" class="block text-sm font-medium">Password *</label>
      <div class="relative">
        <i class="icon-lock absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground"></i>
        <input
          id="password"
          [type]="showPassword ? 'text' : 'password'"
          class="input pl-10 pr-10"
          placeholder="Enter your password"
          [(ngModel)]="formData.password"
          (input)="onInputChange('password', $event)"
          required
        />
        <button
          type="button"
          (click)="togglePasswordVisibility()"
          class="absolute right-3 top-1/2 transform -translate-y-1/2 p-1 text-muted-foreground hover:text-foreground transition-colors"
        >
          <i [class]="showPassword ? 'icon-eye-off h-4 w-4' : 'icon-eye h-4 w-4'"></i>
        </button>
      </div>
    </div>

    <!-- Phone Input -->
    <div class="space-y-2">
      <label for="phone" class="block text-sm font-medium">Phone Number</label>
      <div class="relative">
        <i class="icon-phone absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground"></i>
        <input
          id="phone"
          type="tel"
          class="input pl-10"
          placeholder="(555) 123-4567"
          [(ngModel)]="formData.phone"
          (input)="onInputChange('phone', $event)"
        />
      </div>
    </div>

    <!-- Number Input -->
    <div class="space-y-2">
      <label for="amount" class="block text-sm font-medium">Amount</label>
      <div class="relative">
        <i class="icon-dollar-sign absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground"></i>
        <input
          id="amount"
          type="number"
          class="input pl-10"
          placeholder="0.00"
          [(ngModel)]="formData.amount"
          (input)="onInputChange('amount', $event)"
          min="0"
          step="0.01"
        />
      </div>
    </div>
  </div>

  <!-- Input Sizes -->
  <div class="space-y-4">
    <h4 class="h6-heading">Input Sizes</h4>
    <div class="space-y-3">
      <div class="space-y-2">
        <label for="small-input" class="block text-sm font-medium">Small Input</label>
        <input
          id="small-input"
          type="text"
          class="input input-sm"
          placeholder="Small size input"
        />
      </div>
      <div class="space-y-2">
        <label for="default-input" class="block text-sm font-medium">Default Input</label>
        <input
          id="default-input"
          type="text"
          class="input"
          placeholder="Default size input"
        />
      </div>
      <div class="space-y-2">
        <label for="large-input" class="block text-sm font-medium">Large Input</label>
        <input
          id="large-input"
          type="text"
          class="input input-lg"
          placeholder="Large size input"
        />
      </div>
    </div>
  </div>

  <!-- Validation States -->
  <div class="space-y-4">
    <h4 class="h6-heading">Validation States</h4>
    <div class="space-y-3">
      <!-- Error State -->
      <div class="space-y-2">
        <label for="error-input" class="block text-sm font-medium">Email with Error</label>
        <input
          id="error-input"
          type="email"
          class="input error"
          placeholder="Enter valid email"
          value="invalid-email"
        />
        <p class="text-sm text-destructive">Please enter a valid email address</p>
      </div>

      <!-- Success State -->
      <div class="space-y-2">
        <label for="success-input" class="block text-sm font-medium">Valid Email</label>
        <input
          id="success-input"
          type="email"
          class="input success"
          placeholder="Enter valid email"
          value="user@example.com"
        />
        <p class="text-sm text-success">Email format is valid</p>
      </div>

      <!-- Disabled State -->
      <div class="space-y-2">
        <label for="disabled-input" class="block text-sm font-medium text-muted-foreground">
          Disabled Input
        </label>
        <input
          id="disabled-input"
          type="text"
          class="input"
          placeholder="This input is disabled"
          value="Cannot be edited"
          disabled
        />
      </div>
    </div>
  </div>

  <!-- Required Field Legend -->
  <div class="text-sm text-muted-foreground">
    <span class="text-destructive">*</span> indicates required fields
  </div>
</div>

// Component.ts
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface FormData {
  name: string;
  email: string;
  password: string;
  phone: string;
  amount: string;
}

interface FormErrors {
  [key: string]: string;
}

@Component({
  selector: 'app-input-examples',
  templateUrl: './input-examples.component.html',
  styleUrls: ['./input-examples.component.scss'],
  imports: [FormsModule]
})
export class InputExamplesComponent {
  showPassword = false;
  
  formData: FormData = {
    name: '',
    email: '',
    password: '',
    phone: '',
    amount: ''
  };
  
  errors: FormErrors = {};

  onInputChange(field: string, event: Event) {
    const target = event.target as HTMLInputElement;
    this.formData[field as keyof FormData] = target.value;
    
    // Clear error when user starts typing
    if (this.errors[field]) {
      delete this.errors[field];
    }
    
    // Validate email in real-time
    if (field === 'email' && target.value) {
      this.validateEmail(target.value);
    }
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  validateEmail(email: string) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      this.errors['email'] = 'Please enter a valid email address';
    }
  }
}

// input-examples.component.scss
.input {
  width: 100%;
  padding: 12px 16px;
  border: 1px solid var(--input-border);
  border-radius: var(--radius-md);
  background-color: var(--input-background);
  font-size: 14px;
  line-height: 1.5;
  transition: border-color 0.2s, box-shadow 0.2s;

  &:focus {
    outline: none;
    border-color: var(--ring);
    box-shadow: 0 0 0 2px rgba(var(--ring), 0.2);
  }

  &::placeholder {
    color: var(--input-placeholder);
  }

  &:disabled {
    background-color: var(--muted);
    color: var(--muted-foreground);
    cursor: not-allowed;
  }

  &.input-sm {
    padding: 8px 12px;
    font-size: 12px;
  }

  &.input-lg {
    padding: 16px 20px;
    font-size: 16px;
  }

  &.error {
    border-color: var(--destructive);
    
    &:focus {
      border-color: var(--destructive);
      box-shadow: 0 0 0 2px rgba(var(--destructive), 0.2);
    }
  }

  &.success {
    border-color: var(--success-s03);
    
    &:focus {
      border-color: var(--success-s03);
      box-shadow: 0 0 0 2px rgba(var(--success-s03), 0.2);
    }
  }
}

.text-success {
  color: var(--status-success-text);
}

.text-destructive {
  color: var(--status-error-text);
}`,
    ionic: `<!-- Ionic Implementation -->
<ion-content>
  <div class="ion-padding space-y-8">
    <!-- Basic Input Types -->
    <div class="space-y-4">
      <h4 class="h6-heading">Input Types</h4>
      
      <!-- Text Input -->
      <ion-item>
        <ion-label position="stacked">Full Name *</ion-label>
        <ion-input
          type="text"
          placeholder="Enter your full name"
          [(ngModel)]="formData.name"
          (ionInput)="onInputChange('name', $event)"
          required
        >
          <ion-icon name="person" slot="start"></ion-icon>
        </ion-input>
      </ion-item>

      <!-- Email Input -->
      <ion-item [class.ion-invalid]="errors.email">
        <ion-label position="stacked">Email Address *</ion-label>
        <ion-input
          type="email"
          placeholder="Enter your email"
          [(ngModel)]="formData.email"
          (ionInput)="onInputChange('email', $event)"
          required
        >
          <ion-icon name="mail" slot="start"></ion-icon>
        </ion-input>
        <ion-note slot="error" *ngIf="errors.email">{{ errors.email }}</ion-note>
      </ion-item>

      <!-- Password Input -->
      <ion-item>
        <ion-label position="stacked">Password *</ion-label>
        <ion-input
          [type]="showPassword ? 'text' : 'password'"
          placeholder="Enter your password"
          [(ngModel)]="formData.password"
          (ionInput)="onInputChange('password', $event)"
          required
        >
          <ion-icon name="lock-closed" slot="start"></ion-icon>
          <ion-button
            slot="end"
            fill="clear"
            (click)="togglePasswordVisibility()"
          >
            <ion-icon [name]="showPassword ? 'eye-off' : 'eye'"></ion-icon>
          </ion-button>
        </ion-input>
      </ion-item>

      <!-- Phone Input -->
      <ion-item>
        <ion-label position="stacked">Phone Number</ion-label>
        <ion-input
          type="tel"
          placeholder="(555) 123-4567"
          [(ngModel)]="formData.phone"
          (ionInput)="onInputChange('phone', $event)"
        >
          <ion-icon name="call" slot="start"></ion-icon>
        </ion-input>
      </ion-item>

      <!-- Number Input -->
      <ion-item>
        <ion-label position="stacked">Amount</ion-label>
        <ion-input
          type="number"
          placeholder="0.00"
          [(ngModel)]="formData.amount"
          (ionInput)="onInputChange('amount', $event)"
          min="0"
          step="0.01"
        >
          <span slot="start">$</span>
        </ion-input>
      </ion-item>
    </div>

    <!-- Input Sizes -->
    <div class="space-y-4">
      <h4 class="h6-heading">Input Sizes</h4>
      <div class="space-y-3">
        <ion-item>
          <ion-label position="stacked">Small Input</ion-label>
          <ion-input
            placeholder="Small size input"
            size="small"
          ></ion-input>
        </ion-item>
        
        <ion-item>
          <ion-label position="stacked">Default Input</ion-label>
          <ion-input
            placeholder="Default size input"
          ></ion-input>
        </ion-item>
        
        <ion-item>
          <ion-label position="stacked">Large Input</ion-label>
          <ion-input
            placeholder="Large size input"
            size="large"
          ></ion-input>
        </ion-item>
      </div>
    </div>

    <!-- Validation States -->
    <div class="space-y-4">
      <h4 class="h6-heading">Validation States</h4>
      <div class="space-y-3">
        <!-- Error State -->
        <ion-item class="ion-invalid">
          <ion-label position="stacked">Email with Error</ion-label>
          <ion-input
            type="email"
            placeholder="Enter valid email"
            value="invalid-email"
          ></ion-input>
          <ion-note slot="error">Please enter a valid email address</ion-note>
        </ion-item>

        <!-- Success State -->
        <ion-item class="ion-valid">
          <ion-label position="stacked">Valid Email</ion-label>
          <ion-input
            type="email"
            placeholder="Enter valid email"
            value="user@example.com"
          ></ion-input>
          <ion-note slot="helper">Email format is valid</ion-note>
        </ion-item>

        <!-- Disabled State -->
        <ion-item>
          <ion-label position="stacked" class="ion-color-medium">
            Disabled Input
          </ion-label>
          <ion-input
            placeholder="This input is disabled"
            value="Cannot be edited"
            disabled
          ></ion-input>
        </ion-item>
      </div>
    </div>

    <!-- Required Field Legend -->
    <ion-note class="ion-margin-top">
      <span class="ion-color-danger">*</span> indicates required fields
    </ion-note>
  </div>
</ion-content>

// Component.ts
import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

interface FormData {
  name: string;
  email: string;
  password: string;
  phone: string;
  amount: string;
}

interface FormErrors {
  [key: string]: string;
}

@Component({
  selector: 'app-input-examples',
  templateUrl: './input-examples.page.html',
  styleUrls: ['./input-examples.page.scss'],
  imports: [IonicModule, FormsModule]
})
export class InputExamplesPage {
  showPassword = false;
  
  formData: FormData = {
    name: '',
    email: '',
    password: '',
    phone: '',
    amount: ''
  };
  
  errors: FormErrors = {};

  constructor() {}

  onInputChange(field: string, event: any) {
    const value = event.target.value;
    this.formData[field as keyof FormData] = value;
    
    // Clear error when user starts typing
    if (this.errors[field]) {
      delete this.errors[field];
    }
    
    // Validate email in real-time
    if (field === 'email' && value) {
      this.validateEmail(value);
    }
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  validateEmail(email: string) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      this.errors['email'] = 'Please enter a valid email address';
    }
  }
}

// input-examples.page.scss
ion-item {
  --padding-start: 16px;
  --padding-end: 16px;
  --inner-padding-end: 0;
  
  &.ion-invalid {
    --border-color: var(--ion-color-danger);
    --highlight-color-focused: var(--ion-color-danger);
  }
  
  &.ion-valid {
    --border-color: var(--ion-color-success);
    --highlight-color-focused: var(--ion-color-success);
  }
}

ion-input {
  --padding-start: 12px;
  --padding-end: 12px;
  --padding-top: 12px;
  --padding-bottom: 12px;
  
  &[size="small"] {
    --padding-top: 8px;
    --padding-bottom: 8px;
    font-size: 12px;
  }
  
  &[size="large"] {
    --padding-top: 16px;
    --padding-bottom: 16px;
    font-size: 16px;
  }
}

.space-y-8 > * + * {
  margin-top: 2rem;
}

.space-y-4 > * + * {
  margin-top: 1rem;
}

.space-y-3 > * + * {
  margin-top: 0.75rem;
}`
  },
  guidelines: {
    properties: [
      {
        property: 'type',
        type: 'text | email | password | tel | number | url | search | date | time',
        description: 'Determines the input type and keyboard behavior'
      },
      {
        property: 'size',
        type: '"sm" | "default" | "lg"',
        description: 'Controls input size: sm (32px), default (40px), lg (48px)'
      },
      {
        property: 'state',
        type: '"default" | "error" | "success"',
        description: 'Visual state of the input'
      },
      {
        property: 'error',
        type: 'boolean',
        description: 'Shorthand to set error state (red border and focus ring)'
      },
      {
        property: 'success',
        type: 'boolean',
        description: 'Shorthand to set success state (green border and focus ring)'
      },
      {
        property: 'leftIcon',
        type: 'React.ReactNode',
        description: 'Icon displayed on the left side (auto-sized to 16px, adds pl-10 padding)'
      },
      {
        property: 'rightIcon',
        type: 'React.ReactNode',
        description: 'Icon displayed on the right side (auto-sized to 16px, adds pr-10 padding)'
      },
      {
        property: 'showPasswordToggle',
        type: 'boolean',
        description: 'For password inputs, adds built-in eye icon to toggle visibility'
      },
      {
        property: 'clearable',
        type: 'boolean',
        description: 'Adds clear (X) button when input has value (common for search)'
      },
      {
        property: 'onClear',
        type: '() => void',
        description: 'Callback fired when clear button is clicked'
      },
      {
        property: 'helperText',
        type: 'string',
        description: 'Help text displayed below input (12px caption size)'
      },
      {
        property: 'helperIcon',
        type: 'React.ReactNode',
        description: 'Icon displayed before helper text'
      },
      {
        property: 'showStepper',
        type: 'boolean',
        description: 'For number inputs, adds increment/decrement buttons on the right'
      },
      {
        property: 'onIncrement',
        type: '() => void',
        description: 'Callback fired when increment button is clicked'
      },
      {
        property: 'onDecrement',
        type: '() => void',
        description: 'Callback fired when decrement button is clicked'
      },
      {
        property: 'disabled',
        type: 'boolean',
        description: 'Disables the input (not editable, grayed out)'
      },
      {
        property: 'readOnly',
        type: 'boolean',
        description: 'Makes input read-only (visible but not editable)'
      },
      {
        property: 'required',
        type: 'boolean',
        description: 'Marks field as required for form submission'
      }
    ],
    formFieldProperties: [
      {
        property: 'label',
        type: 'string',
        description: 'Label text displayed above the input'
      },
      {
        property: 'labelRequired',
        type: 'boolean',
        description: 'Shows red asterisk (*) after label'
      },
      {
        property: 'labelSecondary',
        type: 'string',
        description: 'Secondary label text (right-aligned by default)'
      },
      {
        property: 'labelSecondaryAlign',
        type: '"inline" | "right"',
        description: 'Position of secondary label: inline (after main) or right-aligned'
      },
      {
        property: 'helperText',
        type: 'string',
        description: 'Helper text below input (shows errors when error=true)'
      },
      {
        property: 'helperIcon',
        type: 'React.ReactNode',
        description: 'Icon before helper text'
      },
      {
        property: '...inputProps',
        type: 'InputProps',
        description: 'All Input component props (size, leftIcon, rightIcon, etc.)'
      }
    ],
    attributes: [
      {
        attribute: 'Label',
        description: 'Descriptive text above the input (always visible, never rely solely on placeholder)'
      },
      {
        attribute: 'Placeholder',
        description: 'Hint text shown when input is empty (supplement to label, not replacement)'
      },
      {
        attribute: 'Error Message',
        description: 'Specific validation feedback with recovery guidance'
      },
      {
        attribute: 'Helper Text',
        description: 'Additional context or formatting instructions'
      },
      {
        attribute: 'Auto-complete',
        description: 'Browser autocomplete hints for better UX'
      }
    ],
    accessibility: [
      'Always provide visible labels above inputs using Label or FormField components',
      'Use FormField component for integrated label + input + helper text structure',
      'Secondary labels should be right-aligned to match Figma design patterns',
      'Use appropriate input types (email, tel, etc.) for better mobile keyboards',
      'Include proper autocomplete attributes for faster form completion',
      'Helper text provides context and should be associated with input via aria-describedby',
      'Error states automatically set aria-invalid="true" for screen readers',
      'Mark required fields with asterisk (*) using labelRequired prop',
      'Password toggle button is keyboard accessible (automatic with showPasswordToggle)',
      'Clear button is keyboard accessible (automatic with clearable prop)',
      'Ensure focus indicators are clearly visible and meet WCAG contrast requirements',
      'Disabled inputs use disabled attribute and are not focusable',
      'Read-only inputs are focusable but not editable'
    ]
  }
};