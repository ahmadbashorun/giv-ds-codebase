import React from "react";
import { DatePicker, DateRangePicker, DateTimePicker, TimeOnlyPicker } from "../ui/date-picker";

export function DatePickerPreview() {
  const [date, setDate] = React.useState<Date | undefined>();
  const [range, setRange] = React.useState<{
    from: Date | undefined;
    to: Date | undefined;
  }>({ from: undefined, to: undefined });
  const [dateTime, setDateTime] = React.useState<Date | undefined>();
  const [time, setTime] = React.useState<{ hours: number; minutes: number; ampm?: "AM" | "PM" } | undefined>();

  return (
    <div className="space-y-8">
      {/* Single Date Picker */}
      <div>
        <h6 className="h6-heading mb-4">Date Picker (Single)</h6>
        <div className="space-y-4">
          <div>
            <h7 className="h7-heading text-muted-foreground mb-3">Default</h7>
            <DatePicker
              value={date}
              onChange={setDate}
              placeholder="Pick a date"
            />
          </div>
          
          <div>
            <h7 className="h7-heading text-muted-foreground mb-3">With Selected Date</h7>
            <DatePicker
              value={new Date()}
              onChange={setDate}
              placeholder="Pick a date"
            />
          </div>

          {/* Error and Disabled states inherit from base Input; omitted from preview */}
        </div>
      </div>

      {/* Date Range Picker */}
      <div>
        <h6 className="h6-heading mb-4">Date Range Picker</h6>
        <div className="space-y-4">
          <div>
            <h7 className="h7-heading text-muted-foreground mb-3">Default</h7>
            <DateRangePicker
              value={range}
              onChange={setRange}
              placeholder="Pick a date range"
            />
          </div>

          {/* Error and Disabled states inherit from base Input; omitted from preview */}
        </div>
      </div>

      {/* Date & Time Picker */}
      <div>
        <h6 className="h6-heading mb-4">Date & Time Picker</h6>
        <div className="space-y-4">
          <div>
            <h7 className="h7-heading text-muted-foreground mb-3">Default</h7>
            <DateTimePicker
              value={dateTime}
              onChange={setDateTime}
              placeholder="Pick a date and time"
            />
          </div>

          {/* Error and Disabled states inherit from base Input; omitted from preview */}
        </div>
      </div>

      {/* Time Only Picker */}
      <div>
        <h6 className="h6-heading mb-4">Time Picker</h6>
        <div className="space-y-4">
          <div>
            <h7 className="h7-heading text-muted-foreground mb-3">Default</h7>
            <TimeOnlyPicker
              value={time}
              onChange={setTime}
              placeholder="Pick a time"
            />
          </div>

          {/* Error and Disabled states inherit from base Input; omitted from preview */}
        </div>
      </div>
    </div>
  );
}

