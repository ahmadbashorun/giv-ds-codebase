export const datepickerDocumentation = {
  id: 'datepicker',
  name: 'Date Picker',
  category: 'Form Controls',
  description: 'Select dates and date ranges with an interactive calendar interface.',
  
  examples: {
    react: `import { DatePicker, DateRangePicker } from './ui/date-picker';

function DatePickerExample() {
  const [date, setDate] = React.useState<Date | undefined>();
  const [range, setRange] = React.useState<{
    from: Date | undefined;
    to: Date | undefined;
  }>({ from: undefined, to: undefined });

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
        type: 'Date | { from: Date, to: Date }',
        description: 'The selected date or date range'
      },
      {
        property: 'onChange',
        type: '(date | range) => void',
        description: 'Callback function called when date selection changes'
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
    ]
  }
};

