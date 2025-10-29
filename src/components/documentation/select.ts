import type { ComponentDocumentation } from './index';

export const selectDocumentation: ComponentDocumentation = {
  name: 'Select',
  description: 'A dropdown selection component for choosing from a list of options. Supports single and multi-select modes with various states and sizes.',
  category: 'Form Controls',
  examples: {
    react: `// Basic Select
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export function BasicSelect() {
  return (
    <Select>
      <SelectTrigger className="w-[280px]">
        <SelectValue placeholder="Select an option" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="option1">Option 1</SelectItem>
        <SelectItem value="option2">Option 2</SelectItem>
        <SelectItem value="option3">Option 3</SelectItem>
      </SelectContent>
    </Select>
  );
}

// With FormField (Label + Helper Text)
import { SelectFormField } from '@/components/ui/select';
import { Info } from 'lucide-react';

export function SelectWithFormField() {
  return (
    <SelectFormField
      label="Country"
      labelRequired
      labelSecondary="Optional"
      helperText="Select your country of residence"
      helperIcon={<Info className="w-4 h-4" />}
    >
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Select a country" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="us">United States</SelectItem>
          <SelectItem value="uk">United Kingdom</SelectItem>
          <SelectItem value="ca">Canada</SelectItem>
        </SelectContent>
      </Select>
    </SelectFormField>
  );
}

// Sizes
<Select>
  <SelectTrigger size="sm">
    <SelectValue placeholder="Small (36px)" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="1">Option 1</SelectItem>
  </SelectContent>
</Select>

<Select>
  <SelectTrigger size="default">
    <SelectValue placeholder="Large (48px)" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="1">Option 1</SelectItem>
  </SelectContent>
</Select>

// States
<Select>
  <SelectTrigger state="error">
    <SelectValue placeholder="Error state" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="1">Option 1</SelectItem>
  </SelectContent>
</Select>

<Select disabled>
  <SelectTrigger>
    <SelectValue placeholder="Disabled" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="1">Option 1</SelectItem>
  </SelectContent>
</Select>

// With Groups
import { SelectGroup, SelectLabel } from '@/components/ui/select';

<Select>
  <SelectTrigger>
    <SelectValue placeholder="Select a fruit" />
  </SelectTrigger>
  <SelectContent>
    <SelectGroup>
      <SelectLabel>Fruits</SelectLabel>
      <SelectItem value="apple">Apple</SelectItem>
      <SelectItem value="banana">Banana</SelectItem>
    </SelectGroup>
    <SelectGroup>
      <SelectLabel>Vegetables</SelectLabel>
      <SelectItem value="carrot">Carrot</SelectItem>
      <SelectItem value="potato">Potato</SelectItem>
    </SelectGroup>
  </SelectContent>
</Select>`,

    angular: `<!-- Basic Select -->
<mat-form-field appearance="outline">
  <mat-label>Select an option</mat-label>
  <mat-select>
    <mat-option value="option1">Option 1</mat-option>
    <mat-option value="option2">Option 2</mat-option>
    <mat-option value="option3">Option 3</mat-option>
  </mat-select>
</mat-form-field>

<!-- With Helper Text -->
<mat-form-field appearance="outline">
  <mat-label>Country *</mat-label>
  <mat-select required>
    <mat-option value="us">United States</mat-option>
    <mat-option value="uk">United Kingdom</mat-option>
    <mat-option value="ca">Canada</mat-option>
  </mat-select>
  <mat-hint>Select your country of residence</mat-hint>
</mat-form-field>

<!-- Error State -->
<mat-form-field appearance="outline">
  <mat-label>Country</mat-label>
  <mat-select>
    <mat-option value="us">United States</mat-option>
  </mat-select>
  <mat-error>This field is required</mat-error>
</mat-form-field>

<!-- Disabled -->
<mat-form-field appearance="outline">
  <mat-label>Disabled</mat-label>
  <mat-select disabled>
    <mat-option value="1">Option 1</mat-option>
  </mat-select>
</mat-form-field>

<!-- With Groups -->
<mat-form-field appearance="outline">
  <mat-label>Food</mat-label>
  <mat-select>
    <mat-optgroup label="Fruits">
      <mat-option value="apple">Apple</mat-option>
      <mat-option value="banana">Banana</mat-option>
    </mat-optgroup>
    <mat-optgroup label="Vegetables">
      <mat-option value="carrot">Carrot</mat-option>
      <mat-option value="potato">Potato</mat-option>
    </mat-optgroup>
  </mat-select>
</mat-form-field>`,

    ionic: `<!-- Basic Select -->
<ion-item>
  <ion-label position="stacked">Select an option</ion-label>
  <ion-select>
    <ion-select-option value="option1">Option 1</ion-select-option>
    <ion-select-option value="option2">Option 2</ion-select-option>
    <ion-select-option value="option3">Option 3</ion-select-option>
  </ion-select>
</ion-item>

<!-- With Helper Text -->
<ion-item>
  <ion-label position="stacked">Country *</ion-label>
  <ion-select>
    <ion-select-option value="us">United States</ion-select-option>
    <ion-select-option value="uk">United Kingdom</ion-select-option>
    <ion-select-option value="ca">Canada</ion-select-option>
  </ion-select>
</ion-item>
<ion-note>Select your country of residence</ion-note>

<!-- Error State -->
<ion-item class="ion-invalid">
  <ion-label position="stacked">Country</ion-label>
  <ion-select>
    <ion-select-option value="us">United States</ion-select-option>
  </ion-select>
  <ion-note slot="error">This field is required</ion-note>
</ion-item>

<!-- Disabled -->
<ion-item>
  <ion-label position="stacked">Disabled</ion-label>
  <ion-select disabled>
    <ion-select-option value="1">Option 1</ion-select-option>
  </ion-select>
</ion-item>`
  },

  guidelines: {
    properties: [
      {
        property: 'size',
        type: '"sm" | "default"',
        description: 'Size variant: sm (36px height), default (48px height)'
      },
      {
        property: 'state',
        type: '"default" | "error" | "success"',
        description: 'Visual state of the select trigger'
      },
      {
        property: 'disabled',
        type: 'boolean',
        description: 'Disables the select and prevents interaction'
      },
      {
        property: 'placeholder',
        type: 'string',
        description: 'Placeholder text shown when no value is selected'
      },
      {
        property: 'value',
        type: 'string',
        description: 'Controlled value of the select'
      },
      {
        property: 'defaultValue',
        type: 'string',
        description: 'Default value for uncontrolled select'
      },
      {
        property: 'onValueChange',
        type: '(value: string) => void',
        description: 'Callback fired when the selected value changes'
      },
      {
        property: 'name',
        type: 'string',
        description: 'Name attribute for form submission'
      },
      {
        property: 'required',
        type: 'boolean',
        description: 'Whether the select is required for form validation'
      },
      {
        property: 'open',
        type: 'boolean',
        description: 'Controlled open state of the dropdown'
      },
      {
        property: 'defaultOpen',
        type: 'boolean',
        description: 'Default open state for uncontrolled dropdown'
      },
      {
        property: 'onOpenChange',
        type: '(open: boolean) => void',
        description: 'Callback fired when the dropdown open state changes'
      }
    ],

    attributes: [
      {
        attribute: 'data-state',
        description: 'Current state: "open" | "closed"'
      },
      {
        attribute: 'data-disabled',
        description: 'Present when the select is disabled'
      },
      {
        attribute: 'aria-label',
        description: 'Accessible label for screen readers'
      },
      {
        attribute: 'aria-describedby',
        description: 'ID of element describing the select'
      },
      {
        attribute: 'aria-invalid',
        description: 'Set to true when in error state'
      }
    ],

    accessibility: [
      'Use descriptive labels that clearly indicate what the select is for',
      'Include required indicators (*) for mandatory fields',
      'Provide helper text for additional context or instructions',
      'Use error messages that explain how to fix validation issues',
      'Ensure keyboard navigation works: Space/Enter to open, Arrow keys to navigate, Enter to select, Escape to close',
      'Associate labels with selects using htmlFor/id or wrap them',
      'Set aria-invalid="true" on error state',
      'Use aria-describedby to link helper text and error messages',
      'Maintain sufficient color contrast (4.5:1 minimum)',
      'Support screen reader announcements for selected values',
      'Don\'t use placeholder as a replacement for label',
      'Ensure focus indicator is clearly visible',
      'Group related options using SelectGroup and SelectLabel'
    ],

    usage: {
      do: 'Use clear, concise labels for options',
      dont: 'Don\'t use excessively long option text',
      do2: 'Provide appropriate default values when possible',
      dont2: 'Don\'t use select for 2-3 options (use radio buttons instead)',
      do3: 'Group related options for better organization',
      dont3: 'Don\'t nest more than one level of groups',
      do4: 'Use helper text to provide context',
      dont4: 'Don\'t use placeholder text as the only label',
      do5: 'Show error states with clear messages',
      dont5: 'Don\'t disable without explanation'
    }
  }
};
