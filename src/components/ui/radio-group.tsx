"use client";
import * as React from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group@1.2.3";
import { cn } from "./utils";
import { cva, type VariantProps } from "class-variance-authority";

const radioVariants = cva(
  [
    "aspect-square shrink-0 rounded-full border-2 transition-all duration-200 outline-none cursor-pointer",
    "bg-background border-border",
    "hover:border-primary",
    "focus-visible:ring-2 focus-visible:ring-primary/20 focus-visible:ring-offset-0",
    "data-[state=checked]:border-primary data-[state=checked]:bg-background",
    "disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-muted disabled:border-muted",
    "aria-invalid:border-destructive aria-invalid:ring-destructive/20",
  ].join(" "),
  {
    variants: {
      size: {
        small: "size-4",   // 16px
        medium: "size-5",  // 20px (default)
        large: "size-6",   // 24px
      },
    },
    defaultVariants: {
      size: "medium",
    },
  }
);

function RadioGroup({
  className,
  ...props
}: React.ComponentProps<typeof RadioGroupPrimitive.Root>) {
  return (
    <RadioGroupPrimitive.Root
      data-slot="radio-group"
      className={cn("grid gap-3", className)}
      {...props}
    />
  );
}

interface RadioGroupItemProps
  extends React.ComponentProps<typeof RadioGroupPrimitive.Item>,
    VariantProps<typeof radioVariants> {}

function RadioGroupItem({
  className,
  size,
  ...props
}: RadioGroupItemProps) {
  return (
    <RadioGroupPrimitive.Item
      data-slot="radio-group-item"
      className={cn(radioVariants({ size }), className)}
      {...props}
    >
      <RadioGroupPrimitive.Indicator
        data-slot="radio-group-indicator"
        className="flex items-center justify-center w-full h-full p-[15%]"
      >
        <div className="w-full h-full rounded-full bg-primary" />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  );
}

export { RadioGroup, RadioGroupItem };