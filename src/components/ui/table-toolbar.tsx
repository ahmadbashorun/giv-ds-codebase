"use client";

import * as React from "react";
import { Calendar, Search, Plus, ChevronDown } from "lucide-react";
import { Button } from "./button";
import { Input } from "./input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./select";
import { cn } from "./utils";

interface TableToolbarProps {
  className?: string;
  title?: string;
  recordCount?: { showing: number; total: number };
  layout?: "top" | "side"; // Title position
  children?: React.ReactNode;
}

export function TableToolbar({
  className,
  title,
  recordCount,
  layout = "side",
  children,
}: TableToolbarProps) {
  const recordText = recordCount
    ? `Showing ${recordCount.showing} of ${recordCount.total} Records`
    : null;

  if (layout === "top") {
    return (
      <div
        className={cn(
          "flex flex-col gap-4",
          className
        )}
      >
        {/* Title and record count row */}
        <div className="flex items-end justify-between gap-2">
          {title && (
            <h5 className="text-h4 font-medium text-[#54565A] leading-[1.1] tracking-[-0.2px]">
              {title}
            </h5>
          )}
          {recordText && (
            <span className="text-caption-small text-[#54565A] leading-[1.3] whitespace-nowrap">
              {recordText}
            </span>
          )}
        </div>

        {/* Filters and actions row */}
        {children && <div className="flex items-center gap-2">{children}</div>}
      </div>
    );
  }

  // Side layout (default)
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        className
      )}
    >
      {/* Title row */}
      {title && (
        <div className="flex items-end justify-between gap-2">
          <h5 className="flex-1 text-h4 font-medium text-[#54565A] leading-[1.1] tracking-[-0.2px]">
            {title}
          </h5>
        </div>
      )}

      {/* Filters and actions row */}
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-2 flex-1">
          {children}
        </div>
        {recordText && (
          <span className="text-caption-small text-[#54565A] leading-[1.3] whitespace-nowrap">
            {recordText}
          </span>
        )}
      </div>
    </div>
  );
}

// Pre-built toolbar filter components
interface TableToolbarSearchProps {
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
}

export function TableToolbarSearch({
  placeholder = "Search...",
  value,
  onChange,
}: TableToolbarSearchProps) {
  return (
    <div className="w-[240px]">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange?.(e.target.value)}
          className="pl-10"
        />
      </div>
    </div>
  );
}

interface TableToolbarDatePickerProps {
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
}

export function TableToolbarDatePicker({
  placeholder = "MM/DD/YYYY",
  value,
  onChange,
}: TableToolbarDatePickerProps) {
  return (
    <div className="w-[160px]">
      <div className="relative">
        <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          type="date"
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange?.(e.target.value)}
          className="pl-10"
        />
      </div>
    </div>
  );
}

interface TableToolbarFilterProps {
  placeholder?: string;
  options: { label: string; value: string }[];
  value?: string;
  onChange?: (value: string) => void;
}

export function TableToolbarFilter({
  placeholder = "Filter...",
  options,
  value,
  onChange,
}: TableToolbarFilterProps) {
  return (
    <div className="w-[160px]">
      <Select value={value} onValueChange={onChange}>
        <SelectTrigger>
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          {options.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}

interface TableToolbarActionsProps {
  children?: React.ReactNode;
}

export function TableToolbarActions({ children }: TableToolbarActionsProps) {
  return <div className="flex items-center gap-2 ml-auto">{children}</div>;
}

// Common CTA button patterns
interface TableToolbarCTAProps {
  children?: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  icon?: React.ReactNode;
  showDropdown?: boolean;
}

export function TableToolbarCTA({
  children,
  onClick,
  variant = "primary",
  icon = <Plus className="h-4 w-4" />,
  showDropdown = false,
}: TableToolbarCTAProps) {
  if (variant === "secondary") {
    return (
      <Button
        variant="outline"
        size="default"
        onClick={onClick}
        className="h-10 gap-1.5 px-3"
      >
        {children}
        {showDropdown ? <ChevronDown className="h-4 w-4" /> : icon}
      </Button>
    );
  }

  return (
    <Button
      variant="default"
      size="default"
      onClick={onClick}
      className="h-10 gap-1.5 px-4"
    >
      {children}
      {showDropdown ? <ChevronDown className="h-4 w-4" /> : icon}
    </Button>
  );
}
