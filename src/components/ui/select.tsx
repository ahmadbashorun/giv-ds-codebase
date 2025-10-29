"use client";

import * as React from "react";
import * as SelectPrimitive from "@radix-ui/react-select";
import {
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "lucide-react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "./utils";

function Select({
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Root>) {
  return <SelectPrimitive.Root data-slot="select" {...props} />;
}

function SelectGroup({
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Group>) {
  return <SelectPrimitive.Group data-slot="select-group" {...props} />;
}

function SelectValue({
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Value>) {
  return <SelectPrimitive.Value data-slot="select-value" {...props} />;
}

const selectTriggerVariants = cva(
  [
    "flex w-full items-center justify-between gap-2 rounded-lg border bg-input-background text-foreground",
    "transition-all duration-200",
    "placeholder:text-muted-foreground",
    "data-[placeholder]:text-muted-foreground",
    // Focus/Open state - matches Input component focus styling
    "data-[state=open]:outline-2 data-[state=open]:ring data-[state=open]:ring-[var(--input-border-active)] data-[state=open]:outline-[var(--input-outline-active)] data-[state=open]:outline-offset-1",
    "disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-muted",
  ].join(" "),
  {
    variants: {
      size: {
        sm: "h-8 px-3 text-sm",
        default: "h-10 px-3 text-base",
        lg: "h-12 px-4 text-base",
      },
      state: {
        default: "border-input-border",
        error: "border-destructive-foreground data-[state=open]:ring-destructive-foreground",
      },
    },
    defaultVariants: {
      size: "default",
      state: "default",
    },
  }
);

function SelectTrigger({
  className,
  size = "default",
  state = "default",
  children,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Trigger> &
  VariantProps<typeof selectTriggerVariants> & {
    state?: "default" | "error";
  }) {
  return (
    <SelectPrimitive.Trigger
      data-slot="select-trigger"
      className={cn(
        selectTriggerVariants({ size, state }),
        // Rotate icon when open - using group pattern
        "group",
        className
      )}
      {...props}
    >
      {children}
      <SelectPrimitive.Icon asChild>
        <ChevronDownIcon className="size-4 text-muted-foreground transition-transform duration-200 group-data-[state=open]:rotate-180" />
      </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
  );
}

function SelectContent({
  className,
  children,
  position = "popper",
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Content>) {
  return (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Content
        data-slot="select-content"
        className={cn(
          "relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-lg border shadow-lg",
          "bg-white text-foreground",
          "border-input-border",
          "data-[state=open]:animate-in data-[state=closed]:animate-out",
          "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
          "data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
          "data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2",
          "data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
          position === "popper" &&
            "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
          className,
        )}
        style={{ backgroundColor: '#FFFFFF' }}
        position={position}
        {...props}
      >
        <SelectScrollUpButton />
        <SelectPrimitive.Viewport
          className={cn(
            "p-2",
            position === "popper" &&
              "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]",
          )}
        >
          {children}
        </SelectPrimitive.Viewport>
        <SelectScrollDownButton />
      </SelectPrimitive.Content>
    </SelectPrimitive.Portal>
  );
}

function SelectLabel({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Label>) {
  return (
    <SelectPrimitive.Label
      data-slot="select-label"
      className={cn("text-muted-foreground px-2 py-1.5 text-xs", className)}
      {...props}
    />
  );
}

function SelectItem({
  className,
  children,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Item>) {
  return (
    <SelectPrimitive.Item
      data-slot="select-item"
      className={cn(
        "relative flex w-full cursor-pointer select-none items-center gap-2 rounded px-3 py-1.5 text-sm text-foreground outline-none transition-colors",
        "hover:bg-[var(--grey-g01)]",
        "data-[highlighted]:bg-[var(--grey-g01)]",
        "data-[state=checked]:bg-[var(--primary-p01)]",
        "data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        className,
      )}
      {...props}
    >
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
      <span className="absolute right-3 flex items-center justify-center">
        <SelectPrimitive.ItemIndicator>
          <CheckIcon className="size-4" />
        </SelectPrimitive.ItemIndicator>
      </span>
    </SelectPrimitive.Item>
  );
}

function SelectSeparator({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Separator>) {
  return (
    <SelectPrimitive.Separator
      data-slot="select-separator"
      className={cn("bg-border pointer-events-none -mx-1 my-1 h-px", className)}
      {...props}
    />
  );
}

function SelectScrollUpButton({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.ScrollUpButton>) {
  return (
    <SelectPrimitive.ScrollUpButton
      data-slot="select-scroll-up-button"
      className={cn(
        "flex cursor-default items-center justify-center py-1",
        className,
      )}
      {...props}
    >
      <ChevronUpIcon className="size-4" />
    </SelectPrimitive.ScrollUpButton>
  );
}

function SelectScrollDownButton({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.ScrollDownButton>) {
  return (
    <SelectPrimitive.ScrollDownButton
      data-slot="select-scroll-down-button"
      className={cn(
        "flex cursor-default items-center justify-center py-1",
        className,
      )}
      {...props}
    >
      <ChevronDownIcon className="size-4" />
    </SelectPrimitive.ScrollDownButton>
  );
}

// Label component for Select
interface SelectLabelComponentProps {
  required?: boolean;
  secondary?: string;
  secondaryAlign?: 'inline' | 'right';
  size?: "sm" | "default";
  children?: React.ReactNode;
  className?: string;
  htmlFor?: string;
}

function SelectLabelComponent({
  required,
  secondary,
  secondaryAlign = 'inline',
  size = "default",
  children,
  className,
  ...props
}: SelectLabelComponentProps) {
  const textSize = size === "sm" ? "text-sm" : "text-base";
  
  return (
    <label
      className={cn(
        "flex items-center gap-1 font-medium leading-tight text-body",
        textSize,
        secondaryAlign === 'right' && "justify-between",
        className
      )}
      {...props}
    >
      <span className="flex items-center gap-1">
        {children}
        {required && <span className="text-destructive-foreground">*</span>}
        {secondary && secondaryAlign === 'inline' && (
          <span className="caption-medium text-metadata ml-1">{secondary}</span>
        )}
      </span>
      {secondary && secondaryAlign === 'right' && (
        <span className="caption-medium text-metadata">{secondary}</span>
      )}
    </label>
  );
}

// FormField wrapper for Select with Label and Helper Text
interface SelectFormFieldProps {
  label?: string;
  labelRequired?: boolean;
  labelSecondary?: string;
  labelSecondaryAlign?: 'inline' | 'right';
  helperText?: string;
  helperIcon?: React.ReactNode;
  error?: boolean;
  size?: "sm" | "default" | "lg";
  children: React.ReactNode;
  className?: string;
}

function SelectFormField({
  label,
  labelRequired,
  labelSecondary,
  labelSecondaryAlign = 'right',
  helperText,
  helperIcon,
  error,
  size = "default",
  children,
  className,
}: SelectFormFieldProps) {
  const id = React.useId();

  return (
    <div className={cn("flex flex-col gap-2", className)}>
      {label && (
        <SelectLabelComponent
          htmlFor={id}
          required={labelRequired}
          secondary={labelSecondary}
          secondaryAlign={labelSecondaryAlign}
          size={size === "lg" ? "default" : size}
        >
          {label}
        </SelectLabelComponent>
      )}
      {children}
      {helperText && (
        <div className={cn(
          "flex items-center gap-2 text-xs",
          error ? "text-destructive-foreground" : "text-metadata"
        )}>
          {helperIcon && <span className="shrink-0">{helperIcon}</span>}
          <span>{helperText}</span>
        </div>
      )}
    </div>
  );
}

export {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
  SelectFormField,
  SelectLabelComponent as SelectLabel2,
};
