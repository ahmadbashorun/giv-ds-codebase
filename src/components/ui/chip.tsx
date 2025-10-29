import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { X } from "lucide-react";

import { cn } from "./utils";

const chipVariants = cva(
  "inline-flex items-center justify-center rounded-full w-fit whitespace-nowrap shrink-0 transition-colors cursor-pointer",
  {
    variants: {
      variant: {
        neutral: "bg-grey-g02 text-grey-g06 hover:bg-grey-g03",
        blue: "bg-primary-p00 text-primary-p04 hover:bg-primary-p01",
        error: "bg-error-se01 text-error-se03 hover:bg-error-se02",
        success: "bg-success-s01 text-success-s03 hover:bg-success-s02",
        warning: "bg-warning-sw00 text-warning-sw04 hover:bg-warning-sw01",
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

export interface ChipProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'type'>,
    VariantProps<typeof chipVariants> {
  onRemove?: () => void;
  children?: React.ReactNode;
}

function Chip({ 
  className, 
  variant, 
  size, 
  onRemove,
  children,
  ...props 
}: ChipProps) {
  return (
    <button
      type="button"
      className={cn(chipVariants({ variant, size }), className)}
      {...props}
    >
      {children}
      {onRemove && (
        <X 
          className="cursor-pointer" 
          onClick={(e) => {
            e.stopPropagation();
            onRemove();
          }}
        />
      )}
    </button>
  );
}

export { Chip, chipVariants };

