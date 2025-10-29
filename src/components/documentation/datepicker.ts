export const datepickerDocumentation = {
  id: 'datepicker',
  name: 'Date Picker',
  category: 'Form Controls',
  description: 'Select dates and date ranges with an interactive calendar interface.',
  
  examples: {
    react: `import React from 'react';
import { DatePicker, DateRangePicker, DateTimePicker, TimeOnlyPicker } from './ui/date-picker';

function DatePickerExample() {
  const [date, setDate] = React.useState<Date | undefined>();
  const [range, setRange] = React.useState<{
    from: Date | undefined;
    to: Date | undefined;
  }>({ from: undefined, to: undefined });
  const [dateTime, setDateTime] = React.useState<Date | undefined>();
  const [time, setTime] = React.useState<{ hours: number; minutes: number; ampm?: "AM" | "PM" } | undefined>();

  return (
    <div className="space-y-4">
      <DatePicker
        value={date}
        onChange={setDate}
        placeholder="Pick a date"
      />
      
      <DateRangePicker
        value={range}
        onChange={setRange}
        placeholder="Pick a date range"
      />

      <DateTimePicker
        value={dateTime}
        onChange={setDateTime}
        placeholder="Pick a date and time"
      />

      <TimeOnlyPicker
        value={time}
        onChange={setTime}
        placeholder="Pick a time"
      />
    </div>
  );
}`,

    angular: `import { Component } from '@angular/core';

@Component({
  selector: 'app-date-picker',
  template: \`
    <div class="space-y-4">
      <!-- Single Date Picker -->
      <mat-form-field appearance="outline">
        <mat-label>Pick a date</mat-label>
        <input matInput [matDatepicker]="picker" (dateChange)="onDateChange($event)">
        <mat-datepicker-toggle matIconSuffix [for]="picker"></mat-datepicker-toggle>
        <mat-datepicker #picker></mat-datepicker>
      </mat-form-field>
      
      <!-- Date Range Picker -->
      <mat-form-field appearance="outline">
        <mat-label>Date range</mat-label>
        <mat-date-range-input [rangePicker]="rangePicker">
          <input matStartDate placeholder="Start date">
          <input matEndDate placeholder="End date">
        </mat-date-range-input>
        <mat-datepicker-toggle matIconSuffix [for]="rangePicker"></mat-datepicker-toggle>
        <mat-date-range-picker #rangePicker></mat-date-range-picker>
      </mat-form-field>
    </div>
  \`
})
export class DatePickerComponent {
  onDateChange(event: any) {
    console.log('Date selected:', event.value);
  }
}`,

    ionic: `import { Component } from '@angular/core';
import { IonDatetime } from '@ionic/angular';

@Component({
  selector: 'app-date-picker',
  template: \`
    <ion-item>
      <ion-label>Pick a date</ion-label>
      <ion-datetime
        displayFormat="MM DD YYYY"
        [value]="selectedDate"
        (ionChange)="onDateChange($event)"
      ></ion-datetime>
    </ion-item>
  \`,
  standalone: true,
  imports: [IonDatetime]
})
export class DatePickerComponent {
  selectedDate = new Date().toISOString();
  
  onDateChange(event: CustomEvent) {
    this.selectedDate = event.detail.value;
  }
}`
  },

  guidelines: {
    properties: [
      {
        property: 'value',
        type: 'Date | { from: Date, to: Date } | { hours: number; minutes: number; ampm?: "AM" | "PM" }',
        description: 'The selected date, date range, or time value'
      },
      {
        property: 'onChange',
        type: '(date | range) => void',
        description: 'Callback function called when selection changes'
      },
      {
        property: 'placeholder',
        type: 'string',
        description: 'Placeholder text for the input field'
      },
      {
        property: 'disabled',
        type: 'boolean',
        description: 'Disable date picker interaction'
      },
      {
        property: 'error',
        type: 'boolean',
        description: 'Sets the error state on the input (inherited from base Input)'
      }
    ],
    attributes: [
      {
        attribute: 'aria-label',
        description: 'Accessible label for screen readers'
      },
      {
        attribute: 'role',
        description: 'ARIA role for calendar interface'
      }
    ],
    accessibility: [
      'Ensure keyboard navigation is fully supported for all calendar interactions',
      'Provide clear labels for selected dates and date ranges',
      'Maintain focus management when opening and closing the calendar',
      'Include accessible feedback for date selection and validation'
    ],
    usage: {
      'Implementation Guide': `
1) Use base Input for all pickers
   - DatePicker, DateRangePicker, DateTimePicker, and TimeOnlyPicker must render a read-only base Input.
   - Visual styling, sizes, focus ring, disabled, and error states are inherited from the base Input component.

2) States & Focus
   - Error: pass error={true} to show destructive border and ring.
   - Disabled: pass disabled to disable interactions and lower contrast.
   - Focus: opening the popover should maintain the Input focus state (handled by data-popover-open CSS in globals.css).

3) Formatting
   - Date: MM/DD/YYYY (e.g., 04/15/2024)
   - Time: HH : MM AM/PM (spaces around the colon, uppercase AM/PM)
   - DateTime: "MM/DD/YYYY  HH : MM AM" as a single input value.

4) Behavior
   - Clicking the Input toggles the popover.
   - Selecting a date/time updates the value and closes the popover for DatePicker; DateTime keeps open until both are chosen or user closes.
   - Calendar header uses month and year dropdowns with previous/next controls.

5) Accessibility
   - Provide aria-labels on trigger/input when needed.
   - Ensure keyboard navigation for day grid and time wheel.
   - Popover content should be reachable and dismissible via keyboard.
      `
    }
  }
};

