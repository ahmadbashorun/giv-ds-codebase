"use client";

import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { DayPicker } from "react-day-picker";

import { cn } from "./utils";
import { Button } from "./button";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "./select";

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: React.ComponentProps<typeof DayPicker>) {
  const fromYear = 2000;
  const toYear = new Date().getFullYear() + 10;
  const [currentMonth, setCurrentMonth] = React.useState<Date>(new Date());

  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      fromYear={fromYear}
      toYear={toYear}
      month={currentMonth}
      onMonthChange={setCurrentMonth}
      className={cn("p-4 w-fit", className)}
      classNames={{
        months: "flex flex-col items-center", // center content to remove odd right spacing
        month: "flex flex-col gap-2 mx-auto",
        // Our custom Caption renders prev/selects/next in a flex row
        caption: "mb-2",
        // Hide default caption label text (we render our own selects)
        caption_label: "sr-only",
        // We render nav buttons ourselves inside Caption; Nav classNames unused
        table: "w-full border-collapse",
        head_row: "flex",
        head_cell:
          "text-muted-foreground font-normal text-xs w-9 h-8 flex items-center justify-center",
        row: "flex w-full",
        cell: cn(
          "relative p-0 text-center text-xs focus-within:relative focus-within:z-20",
          props.mode === "range" && "[&:has(>.day-range-start)]:rounded-l-md [&:has(>.day-range-end)]:rounded-r-md"
        ),
        day: cn(
          "h-8 w-9 flex items-center justify-center p-0 font-normal transition-colors",
          "hover:bg-grey-g01 text-foreground cursor-pointer"
        ),
        day_range_start:
          "bg-primary text-primary-foreground rounded-md hover:bg-primary hover:text-primary-foreground",
        day_range_end:
          "bg-primary text-primary-foreground rounded-md hover:bg-primary hover:text-primary-foreground",
        day_selected:
          props.mode === "single"
            ? "bg-primary text-primary-foreground rounded-md hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground"
            : "text-foreground",
        day_today: "text-primary font-medium",
        day_outside:
          "text-muted-foreground opacity-50",
        day_disabled: "text-muted-foreground opacity-30 cursor-not-allowed hover:bg-transparent",
        day_range_middle:
          "bg-grey-g02 text-foreground",
        day_hidden: "invisible",
        month_caption: "flex items-center justify-center gap-1 w-full",
        ...classNames,
      }}
      components={{
        IconLeft: ({ className, ...props }) => (
          <ChevronLeft className={cn("h-4 w-4", className)} {...props} />
        ),
        IconRight: ({ className, ...props }) => (
          <ChevronRight className={cn("h-4 w-4", className)} {...props} />
        ),
        Caption: ({ displayMonth, locale }) => {
          const monthIndex = displayMonth.getMonth();
          const year = displayMonth.getFullYear();
          const monthFormatter = new Intl.DateTimeFormat(locale?.code, { month: "short" });
          const months = Array.from({ length: 12 }, (_, i) => ({
            label: monthFormatter
              .format(new Date(2020, i, 1))
              .toLowerCase(),
            value: String(i),
          }));

          const years = Array.from({ length: toYear - fromYear + 1 }, (_, i) => String(fromYear + i));

          return (
            <div className="flex items-center justify-between gap-3">
              {/* Prev month */}
              <Button
                variant="tertiary"
                size="icon-sm"
                aria-label="Previous month"
                onClick={() => setCurrentMonth(new Date(year, monthIndex - 1, 1))}
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>

              {/* Centered selects */}
              <div className="flex items-center gap-2 mx-auto">
                <Select value={String(monthIndex)} onValueChange={(v) => setCurrentMonth(new Date(year, Number(v), 1))}>
                <SelectTrigger size="sm" className="h-8 min-w-[96px]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="max-h-60 overflow-auto">
                  {months.map((m) => (
                    <SelectItem key={m.value} value={m.value}>
                      {m.label}
                    </SelectItem>
                  ))}
                </SelectContent>
                </Select>

                <Select value={String(year)} onValueChange={(v) => setCurrentMonth(new Date(Number(v), monthIndex, 1))}>
                <SelectTrigger size="sm" className="h-8 min-w-[72px]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="max-h-60 overflow-auto">
                  {years.map((y) => (
                    <SelectItem key={y} value={y}>
                      {y}
                    </SelectItem>
                  ))}
                </SelectContent>
                </Select>
              </div>

              {/* Next month */}
              <Button
                variant="tertiary"
                size="icon-sm"
                aria-label="Next month"
                onClick={() => setCurrentMonth(new Date(year, monthIndex + 1, 1))}
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          );
        },
        // We render a custom Caption with our Selects, so Dropdown is unused
      }}
      {...props}
    />
  );
}

export { Calendar };
