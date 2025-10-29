"use client";

import * as React from "react";
import { ChevronUp, ChevronDown } from "lucide-react";
import { cn } from "./utils";

export interface TimePickerProps {
  value?: { hours: number; minutes: number; ampm?: "AM" | "PM" };
  onChange?: (time: { hours: number; minutes: number; ampm?: "AM" | "PM" }) => void;
  use12Hour?: boolean;
  className?: string;
}

// Tune these to visually match the calendar height (~250px including caption)
const ITEM_HEIGHT = 32; // Height of each scrollable item in pixels
const VISIBLE_ITEMS = 7; // Visible items (odd number so selected is centered)
const SCROLL_AREA_HEIGHT = ITEM_HEIGHT * VISIBLE_ITEMS; // Total scrollable area height

interface WheelColumnProps {
  items: string[];
  value: string;
  onChange: (value: string) => void;
  className?: string;
}

function WheelColumn({ items, value, onChange, className }: WheelColumnProps) {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const listRef = React.useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = React.useState(false);
  const [startY, setStartY] = React.useState(0);
  const [offset, setOffset] = React.useState(0);
  const [currentIndex, setCurrentIndex] = React.useState(() => {
    const idx = items.indexOf(value);
    return idx >= 0 ? idx : 0;
  });

  // Calculate the offset needed to center the selected item
  const centerOffset = React.useMemo(() => {
    // Position the selected item at the center: (VISIBLE_ITEMS - 1) / 2
    // Account for padding at the top
    const padding = Math.floor(VISIBLE_ITEMS / 2);
    return -(currentIndex + padding) * ITEM_HEIGHT + (Math.floor((VISIBLE_ITEMS - 1) / 2) * ITEM_HEIGHT);
  }, [currentIndex]);

  // Initialize offset on mount to center the selected item
  React.useEffect(() => {
    const padding = Math.floor(VISIBLE_ITEMS / 2);
    const initialOffset = -(currentIndex + padding) * ITEM_HEIGHT + (Math.floor((VISIBLE_ITEMS - 1) / 2) * ITEM_HEIGHT);
    setOffset(initialOffset);
  }, []); // Only run once on mount

  // Update offset when currentIndex changes (for smooth transitions)
  React.useEffect(() => {
    if (!isDragging) {
      setOffset(centerOffset);
    }
  }, [currentIndex, isDragging, centerOffset]);

  // Scroll to current value when external value prop changes
  React.useEffect(() => {
    const idx = items.indexOf(value);
    if (idx >= 0 && idx !== currentIndex) {
      setCurrentIndex(idx);
    }
  }, [value, items, currentIndex]);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartY(e.clientY);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const deltaY = e.clientY - startY;
    const padding = Math.floor(VISIBLE_ITEMS / 2);
    const centerY = Math.floor((VISIBLE_ITEMS - 1) / 2) * ITEM_HEIGHT;
    const newOffset = centerOffset + deltaY;
    
    // Calculate which index we should be at based on drag position
    const rawIndex = Math.round((-newOffset + centerY) / ITEM_HEIGHT - padding);
    const clampedIndex = Math.max(0, Math.min(items.length - 1, rawIndex));
    
    setOffset(newOffset);
    
    if (clampedIndex !== currentIndex) {
      setCurrentIndex(clampedIndex);
      onChange(items[clampedIndex]);
    }
    setStartY(e.clientY);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    // Will snap via useEffect when isDragging becomes false
  };

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    if (e.deltaY > 0 && currentIndex < items.length - 1) {
      setCurrentIndex(currentIndex + 1);
      onChange(items[currentIndex + 1]);
    } else if (e.deltaY < 0 && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      onChange(items[currentIndex - 1]);
    }
  };

  const handleChevronClick = (direction: "up" | "down") => {
    if (direction === "up" && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      onChange(items[currentIndex - 1]);
    } else if (direction === "down" && currentIndex < items.length - 1) {
      setCurrentIndex(currentIndex + 1);
      onChange(items[currentIndex + 1]);
    }
  };

  // Create extended list for infinite scroll effect
  const extendedItems = React.useMemo(() => {
    // Add padding items at top and bottom for visual effect
    const padding = Math.floor(VISIBLE_ITEMS / 2);
    return [
      ...Array(padding).fill(""),
      ...items,
      ...Array(padding).fill(""),
    ];
  }, [items]);

  // Use centerOffset when not dragging, otherwise use the drag offset
  const displayOffset = isDragging ? offset : centerOffset;

  return (
    <div
      ref={containerRef}
      className={cn("flex flex-col items-center relative", className)}
      style={{ height: `${SCROLL_AREA_HEIGHT + 48}px` }} // Scroll area + chevrons
      onMouseLeave={handleMouseUp}
    >
      {/* Up chevron */}
      <button
        type="button"
        onClick={() => handleChevronClick("up")}
        className="p-1 mb-1 text-muted-foreground hover:text-foreground transition-colors flex-shrink-0"
        disabled={currentIndex === 0}
      >
        <ChevronUp className="h-4 w-4" />
      </button>

      {/* Scrollable container with mask */}
      <div
        className="relative w-full overflow-hidden flex-shrink-0"
        style={{ height: `${SCROLL_AREA_HEIGHT}px` }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onWheel={handleWheel}
      >
        {/* Background removed from individual columns - using unified background at parent level */}

        {/* Scrollable list - content moves behind the sticky background */}
        <div
          ref={listRef}
          className="relative flex flex-col transition-transform duration-200 ease-out"
          style={{
            transform: `translateY(${displayOffset}px)`,
            zIndex: 2,
          }}
        >
          {extendedItems.map((item, index) => {
            const actualIndex = index - Math.floor(VISIBLE_ITEMS / 2);
            const isCenter = actualIndex === currentIndex;
            const isEmpty = !item;

            return (
              <div
                key={index}
                className={cn(
                  "relative flex items-center justify-center text-sm transition-colors px-2",
                  isEmpty && "text-transparent",
                  !isEmpty && !isCenter && "text-muted-foreground",
                  !isEmpty && isCenter && "text-foreground font-medium"
                )}
                style={{ height: `${ITEM_HEIGHT}px` }}
              >
                {item}
              </div>
            );
          })}
        </div>
      </div>

      {/* Down chevron */}
      <button
        type="button"
        onClick={() => handleChevronClick("down")}
        className="p-1 mt-0.5 text-muted-foreground hover:text-foreground transition-colors flex-shrink-0"
        disabled={currentIndex === items.length - 1}
      >
        <ChevronDown className="h-3.5 w-3.5" />
      </button>
    </div>
  );
}

export function TimePicker({
  value,
  onChange,
  use12Hour = true,
  className,
}: TimePickerProps) {
  // Generate hours (1-12 for 12-hour, 0-23 for 24-hour)
  const hours = React.useMemo(() => {
    if (use12Hour) {
      return Array.from({ length: 12 }, (_, i) => String(i + 1));
    } else {
      return Array.from({ length: 24 }, (_, i) => String(i).padStart(2, "0"));
    }
  }, [use12Hour]);

  // Generate minutes (00-59)
  const minutes = React.useMemo(() => {
    return Array.from({ length: 60 }, (_, i) => String(i).padStart(2, "0"));
  }, []);

  const ampmOptions = ["AM", "PM"];

  const currentHour = value?.hours ?? 9;
  const currentMinute = value?.minutes ?? 0;
  const currentAmpm = value?.ampm ?? "AM";

  // Convert 24-hour to 12-hour format for display
  const displayHour = use12Hour
    ? currentHour === 0
      ? "12"
      : currentHour > 12
      ? String(currentHour - 12)
      : String(currentHour)
    : String(currentHour).padStart(2, "0");

  const displayMinute = String(currentMinute).padStart(2, "0");

  const handleHourChange = (hourStr: string) => {
    const hour = parseInt(hourStr, 10);
    let newHour = hour;
    if (use12Hour) {
      // Convert 12-hour to 24-hour
      if (currentAmpm === "AM") {
        newHour = hour === 12 ? 0 : hour;
      } else {
        newHour = hour === 12 ? 12 : hour + 12;
      }
    } else {
      newHour = hour;
    }
    onChange?.({ hours: newHour, minutes: currentMinute, ampm: currentAmpm });
  };

  const handleMinuteChange = (minuteStr: string) => {
    const minute = parseInt(minuteStr, 10);
    onChange?.({ hours: currentHour, minutes: minute, ampm: currentAmpm });
  };

  const handleAmpmChange = (ampm: string) => {
    const newAmpm = ampm as "AM" | "PM";
    let newHour = currentHour;
    if (use12Hour) {
      // Convert between AM/PM
      if (currentAmpm === "AM" && newAmpm === "PM") {
        newHour = currentHour === 0 ? 12 : currentHour === 12 ? 12 : currentHour + 12;
      } else if (currentAmpm === "PM" && newAmpm === "AM") {
        newHour = currentHour === 12 ? 0 : currentHour > 12 ? currentHour - 12 : currentHour;
      }
    }
    onChange?.({ hours: newHour, minutes: currentMinute, ampm: newAmpm });
  };

  // Calculate center position: chevron area (~24px) + center of scroll area
  const chevronAreaHeight = 24; // Approximate height for up chevron + spacing
  const centerTop = chevronAreaHeight + (SCROLL_AREA_HEIGHT / 2) - (ITEM_HEIGHT / 2);

  return (
    <div className={cn("relative flex flex-row items-center gap-2", className)}>
      {/* Single unified background spanning all columns - no gaps */}
      <div
        className="absolute pointer-events-none"
        style={{
          left: 0,
          right: 0,
          top: `${centerTop}px`,
          height: `${ITEM_HEIGHT}px`,
          backgroundColor: "#E6ECFA", // light blue band spanning all columns continuously
          zIndex: 1,
        }}
      />

      {/* Hours */}
      <WheelColumn
        items={hours}
        value={displayHour}
        onChange={handleHourChange}
        className="w-8 relative z-10"
      />

      {/* Minutes */}
      <WheelColumn
        items={minutes}
        value={displayMinute}
        onChange={handleMinuteChange}
        className="w-8 relative z-10"
      />

      {/* AM/PM (only for 12-hour format) */}
      {use12Hour && (
        <>
          <div className="w-px bg-border self-stretch relative z-10" style={{ height: `${SCROLL_AREA_HEIGHT + 48}px` }} />
          <WheelColumn
            items={ampmOptions}
            value={currentAmpm}
            onChange={handleAmpmChange}
            className="w-8 relative z-10"
          />
        </>
      )}
    </div>
  );
}

