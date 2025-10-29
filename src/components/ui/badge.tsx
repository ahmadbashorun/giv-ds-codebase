import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "./utils";

const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-full w-fit whitespace-nowrap shrink-0 transition-colors",
  {
    variants: {
      variant: {
        neutral: "bg-grey-g02 text-grey-g06",
        blue: "bg-primary-p00 text-primary-p04",
        error: "bg-error-se01 text-error-se03",
        success: "bg-success-s01 text-success-s03",
        warning: "bg-warning-sw00 text-warning-sw04",
      },
      size: {
        sm: "h-[20px] px-2 py-0.5 gap-1 text-[10px] [&>svg]:h-[14px] [&>svg]:w-[14px]",
        md: "h-[24px] px-2 py-1 gap-1 text-xs [&>svg]:h-[14px] [&>svg]:w-[14px]",
        lg: "h-[28px] px-3 py-1 gap-1 text-xs [&>svg]:h-4 [&>svg]:w-4",
      },
    },
    defaultVariants: {
      variant: "neutral",
      size: "sm",
    },
  },
);

export interface BadgeProps
  extends Omit<React.HTMLAttributes<HTMLSpanElement>, 'className'>,
    VariantProps<typeof badgeVariants> {
  asChild?: boolean;
  className?: string;
}

function Badge({ className, variant, size, asChild = false, ...props }: BadgeProps) {
  const Comp = asChild ? Slot : "span";

  return (
    <Comp
      data-slot="badge"
      className={cn(badgeVariants({ variant, size }), className)}
      {...props}
    />
  );
}

export { Badge, badgeVariants };
