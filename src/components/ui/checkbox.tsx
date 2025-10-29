"use client";

import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox@1.1.4";
import { CheckIcon, MinusIcon } from "lucide-react@0.487.0";

import { cn } from "./utils";

function Checkbox({
  className,
  ...props
}: React.ComponentProps<typeof CheckboxPrimitive.Root>) {
  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      className={cn(
        // Base styles using design system tokens
        "peer border shrink-0 rounded-[4px] transition-all duration-200 outline-none cursor-pointer",
        // Size - default to medium (20px)
        "size-5",
        // Colors using design system variables
        "bg-input-background border-input-border",
        // Hover state
        "hover:bg-[var(--grey-g01)]",
        // Focus state
        "focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-0",
        // Checked state
        "data-[state=checked]:bg-primary data-[state=checked]:border-[var(--primary-p05)] data-[state=checked]:text-primary-foreground",
        // Indeterminate state
        "data-[state=indeterminate]:bg-primary data-[state=indeterminate]:border-[var(--primary-p05)] data-[state=indeterminate]:text-primary-foreground",
        // Disabled state
        "disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-muted disabled:border-muted",
        // Error state
        "aria-invalid:border-destructive aria-invalid:ring-destructive/20",
        className,
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        data-slot="checkbox-indicator"
        className="flex items-center justify-center text-current"
      >
        {props.checked === "indeterminate" ? (
          <MinusIcon className="h-3 w-3" />
        ) : (
          <CheckIcon className="h-3 w-3" />
        )}
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
}

export { Checkbox };
