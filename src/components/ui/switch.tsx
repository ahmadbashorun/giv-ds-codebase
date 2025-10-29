"use client";
import * as React from "react";
import * as SwitchPrimitive from "@radix-ui/react-switch@1.1.3";
import { Check } from "lucide-react";
import { cn } from "./utils";
import {
  cva,
  type VariantProps,
} from "class-variance-authority";

const switchVariants = cva(
  [
    "peer inline-flex shrink-0 items-center rounded-full border-2 border-transparent transition-all outline-none cursor-pointer",
    "data-[state=checked]:bg-primary data-[state=unchecked]:bg-muted",
    "focus-visible:ring-2 focus-visible:ring-primary/20 focus-visible:ring-offset-0",
    "disabled:cursor-not-allowed disabled:opacity-50",
  ].join(" "),
  {
    variants: {
      size: {
        sm: "h-5 w-9", // 20px height, 36px width
        md: "h-6 w-11", // 24px height, 44px width
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
);

const thumbVariants = cva(
  [
    "pointer-events-none block rounded-full bg-background transition-transform",
    "shadow-sm",
    "flex items-center justify-center", // For centering the check icon
  ].join(" "),
  {
    variants: {
      size: {
        sm: [
          "size-4", // 16px
          "data-[state=unchecked]:translate-x-0.2",
          "data-[state=checked]:translate-x-[14px]",
        ].join(" "),
        md: [
          "size-5", // 20px
          "data-[state=unchecked]:translate-x-0.2",
          "data-[state=checked]:translate-x-[18px]",
        ].join(" "),
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
);

interface SwitchProps
  extends React.ComponentProps<typeof SwitchPrimitive.Root>,
    VariantProps<typeof switchVariants> {
  showCheck?: boolean;
}

function Switch({
  className,
  size,
  showCheck = false,
  checked,
  defaultChecked,
  ...props
}: SwitchProps) {
  // Track the switch state internally to show/hide the check
  const [isChecked, setIsChecked] = React.useState(() => {
    // Initialize based on checked or defaultChecked
    if (checked !== undefined) return checked;
    if (defaultChecked !== undefined) return defaultChecked;
    return false;
  });

  React.useEffect(() => {
    if (checked !== undefined) {
      setIsChecked(checked);
    }
  }, [checked]);

  const handleCheckedChange = (newChecked: boolean) => {
    // Only update internal state if component is uncontrolled
    if (checked === undefined) {
      setIsChecked(newChecked);
    }
    props.onCheckedChange?.(newChecked);
  };

  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      className={cn(switchVariants({ size }), className)}
      checked={checked}
      defaultChecked={defaultChecked}
      onCheckedChange={handleCheckedChange}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className={cn(thumbVariants({ size }))}
      >
        {/* Check icon only for medium size when enabled and checked */}
        {showCheck && size === "md" && (
          <Check
            className={cn(
              "size-3 text-primary transition-opacity",
              isChecked ? "opacity-100" : "opacity-0",
            )}
            strokeWidth={6}
          />
        )}
      </SwitchPrimitive.Thumb>
    </SwitchPrimitive.Root>
  );
}

export { Switch };