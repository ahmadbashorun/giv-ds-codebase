import * as React from "react";
import { Calendar as CalendarIcon, Clock as ClockIcon } from "lucide-react";
import { format } from "date-fns";
import { Calendar } from "./calendar";
import { TimePicker } from "./time-picker";
import { Input } from "./input";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";
import { cn } from "./utils";

export interface DatePickerProps {
  value?: Date;
  onChange?: (date: Date | undefined) => void;
  placeholder?: string;
  disabled?: boolean;
  error?: boolean;
  className?: string;
}

export function DatePicker({
  value,
  onChange,
  placeholder = "Pick a date",
  disabled,
  error,
  className,
}: DatePickerProps) {
  const [open, setOpen] = React.useState(false);
  const inputRef = React.useRef<HTMLInputElement>(null);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <div className="relative w-full" data-popover-open={open}>
          <Input
            ref={inputRef}
            readOnly
            value={value ? format(value, "MMM dd, yyyy") : ""}
            placeholder={placeholder}
            disabled={disabled}
            error={error}
            leftIcon={<CalendarIcon className="h-4 w-4" />}
            className={cn("cursor-pointer", className)}
            onClick={() => !disabled && setOpen(true)}
          />
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="single"
          selected={value}
          onSelect={(date) => {
            onChange?.(date);
            setOpen(false);
          }}
          initialFocus={false}
        />
      </PopoverContent>
    </Popover>
  );
}

export interface DateRangePickerProps {
  value?: { from: Date | undefined; to: Date | undefined };
  onChange?: (range: { from: Date | undefined; to: Date | undefined }) => void;
  placeholder?: string;
  disabled?: boolean;
  error?: boolean;
  className?: string;
}

export interface DateTimePickerProps {
  value?: Date;
  onChange?: (date: Date | undefined) => void;
  placeholder?: string;
  disabled?: boolean;
  error?: boolean;
  className?: string;
}

export function DateTimePicker({
  value,
  onChange,
  placeholder = "Pick a date and time",
  disabled,
  error,
  className,
}: DateTimePickerProps) {
  const [open, setOpen] = React.useState(false);
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [selectedDate, setSelectedDate] = React.useState<Date | undefined>(value);
  const [selectedTime, setSelectedTime] = React.useState<{ hours: number; minutes: number; ampm?: "AM" | "PM" }>(() => {
    if (value) {
      const hours = value.getHours();
      const minutes = value.getMinutes();
      return {
        hours,
        minutes,
        ampm: hours >= 12 ? "PM" : "AM",
      };
    }
    return { hours: 9, minutes: 0, ampm: "AM" };
  });

  // Update input when date or time changes
  React.useEffect(() => {
    if (selectedDate && selectedTime) {
      const newDate = new Date(selectedDate);
      newDate.setHours(selectedTime.hours, selectedTime.minutes, 0, 0);
      onChange?.(newDate);
    }
  }, [selectedDate, selectedTime, onChange]);

  // Format date as MM/DD/YYYY
  const displayDate = value ? format(value, "MM/dd/yyyy") : "";
  // Format time as HH : MM AM/PM (with spaces around colon, 12-hour format)
  const displayTime = value 
    ? format(value, "hh : mm a").replace(/: /g, " : ").toUpperCase() // Ensure spaces around colon
    : "";

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <div className="relative w-full" data-popover-open={open}>
          <div
            className={cn(
              "w-full rounded-lg border bg-input-background text-foreground",
              "transition-all duration-200",
              "flex items-center h-10",
              "focus-within:outline-2 focus-within:ring focus-within:ring-[var(--input-border-active)] focus-within:outline-[var(--input-outline-active)] focus-within:outline-offset-1",
              "disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-muted",
              error ? "border-destructive-foreground" : "border-input-border",
              disabled && "opacity-50 bg-muted",
              "cursor-pointer",
              className
            )}
            onClick={() => !disabled && setOpen(true)}
            aria-invalid={error ? "true" : undefined}
          >
            {/* Calendar icon */}
            <div className="flex items-center px-3">
              <CalendarIcon className="h-4 w-4 text-muted-foreground" />
            </div>
            
            {/* Date value */}
            <div className="flex-1 px-3 min-w-0">
              {displayDate ? (
                <span className="text-foreground text-base">{displayDate}</span>
              ) : (
                <span className="text-muted-foreground text-base">MM/DD/YYYY</span>
              )}
            </div>
            
            {/* Divider */}
            <div className="w-px self-stretch bg-border flex-shrink-0" aria-hidden="true" />
            
            {/* Clock icon and time */}
            <div className="flex items-center gap-3 px-4 flex-shrink-0">
              <ClockIcon className="h-4 w-4 text-muted-foreground flex-shrink-0" />
              {displayTime ? (
                <span className="text-foreground text-base whitespace-nowrap">{displayTime}</span>
              ) : (
                <span className="text-muted-foreground text-base whitespace-nowrap">00 : 00 AM</span>
              )}
            </div>
          </div>
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <div className="flex flex-row gap-4 p-4">
          {/* Calendar */}
          <Calendar
            mode="single"
            selected={selectedDate}
            onSelect={setSelectedDate}
            initialFocus={false}
          />
          
          {/* Divider */}
          <div className="w-px bg-border self-stretch" />
          
          {/* Time Picker */}
          <div className="flex items-center">
            <TimePicker
              value={selectedTime}
              onChange={(time) => {
                setSelectedTime(time);
                if (selectedDate) {
                  const newDate = new Date(selectedDate);
                  newDate.setHours(time.hours, time.minutes, 0, 0);
                  onChange?.(newDate);
                }
              }}
              use12Hour={true}
            />
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}

export interface TimeOnlyPickerProps {
  value?: { hours: number; minutes: number; ampm?: "AM" | "PM" };
  onChange?: (time: { hours: number; minutes: number; ampm?: "AM" | "PM" }) => void;
  placeholder?: string;
  disabled?: boolean;
  error?: boolean;
  className?: string;
  use12Hour?: boolean;
}

export function TimeOnlyPicker({
  value,
  onChange,
  placeholder = "Pick a time",
  disabled,
  error,
  className,
  use12Hour = true,
}: TimeOnlyPickerProps) {
  const [open, setOpen] = React.useState(false);
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [selectedTime, setSelectedTime] = React.useState<{ hours: number; minutes: number; ampm?: "AM" | "PM" }>(
    value ?? { hours: 9, minutes: 0, ampm: "AM" }
  );

  React.useEffect(() => {
    if (value) {
      setSelectedTime(value);
    }
  }, [value]);

  // Format time as HH : MM AM/PM (with spaces around colon)
  const displayTime = selectedTime
    ? use12Hour
      ? (() => {
          let hour = selectedTime.hours === 0 ? 12 : selectedTime.hours > 12 ? selectedTime.hours - 12 : selectedTime.hours;
          return `${String(hour).padStart(2, "0")} : ${String(selectedTime.minutes).padStart(2, "0")} ${selectedTime.ampm ?? "AM"}`;
        })()
      : `${String(selectedTime.hours).padStart(2, "0")} : ${String(selectedTime.minutes).padStart(2, "0")}`
    : "";

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <div className="relative w-full" data-popover-open={open}>
          <Input
            ref={inputRef}
            readOnly
            value={displayTime}
            placeholder={use12Hour ? "00 : 00 AM" : "00 : 00"}
            disabled={disabled}
            error={error}
            leftIcon={<ClockIcon className="h-4 w-4" />}
            className={cn(
              "cursor-pointer",
              error && open && "border-destructive-foreground ring-destructive-foreground",
              className
            )}
            onClick={() => !disabled && setOpen(true)}
          />
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-4" align="start">
        <TimePicker
          value={selectedTime}
          onChange={(time) => {
            setSelectedTime(time);
            onChange?.(time);
          }}
          use12Hour={use12Hour}
        />
      </PopoverContent>
    </Popover>
  );
}

export function DateRangePicker({
  value,
  onChange,
  placeholder = "Pick a date range",
  disabled,
  error,
  className,
}: DateRangePickerProps) {
  const [open, setOpen] = React.useState(false);
  const inputRef = React.useRef<HTMLInputElement>(null);

  const displayValue = value?.from 
    ? value.to 
      ? `${format(value.from, "MMM dd, yyyy")} - ${format(value.to, "MMM dd, yyyy")}`
      : format(value.from, "MMM dd, yyyy")
    : "";

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <div className="relative w-full" data-popover-open={open}>
          <Input
            ref={inputRef}
            readOnly
            value={displayValue}
            placeholder={placeholder}
            disabled={disabled}
            error={error}
            leftIcon={<CalendarIcon className="h-4 w-4" />}
            className={cn("cursor-pointer", className)}
            onClick={() => !disabled && setOpen(true)}
          />
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="range"
          selected={value}
          onSelect={onChange}
          numberOfMonths={1}
          initialFocus={false}
        />
      </PopoverContent>
    </Popover>
  );
}

