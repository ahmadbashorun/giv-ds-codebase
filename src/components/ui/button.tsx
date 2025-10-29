import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "./utils";
import { Loader2 } from "lucide-react";

const buttonVariants = cva(
  [
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg",
    "font-medium transition-all duration-200",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
    "disabled:pointer-events-none disabled:cursor-not-allowed",
    "[&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0"
  ].join(" "),
  {
    variants: {
      variant: {
        primary: [
          "text-primary-foreground",
          "bg-gradient-to-b from-[#265FBF] to-[#1F4C99]",
          "hover:from-[#2152A6] hover:to-[#07327C]",
          "active:opacity-90",
          "disabled:from-muted disabled:to-muted disabled:bg-muted disabled:text-muted-foreground disabled:opacity-50"
        ].join(" "),
        secondary: [
          "bg-secondary text-secondary-foreground",
          "border border-primary",
          "hover:bg-accent hover:text-accent-foreground",
          "disabled:bg-muted disabled:text-muted-foreground disabled:border-muted disabled:opacity-50"
        ].join(" "),
        tertiary: [
          "bg-transparent text-primary",
          "hover:bg-accent hover:text-accent-foreground",
          "active:scale-[0.98]",
          "disabled:bg-transparent disabled:text-muted-foreground disabled:opacity-50"
        ].join(" "),
        destructive: [
          "bg-destructive-foreground text-white",
          "hover:bg-destructive-foreground/90",
          "active:scale-[0.98]",
          "disabled:bg-muted disabled:text-muted-foreground disabled:opacity-50"
        ].join(" "),
        "destructive-outline": [
          "bg-transparent text-destructive-foreground",
          "border border-destructive-foreground",
          "hover:bg-destructive hover:text-destructive-foreground",
          "active:scale-[0.98]",
          "disabled:bg-transparent disabled:text-muted-foreground disabled:border-muted disabled:opacity-50"
        ].join(" "),
        ghost: [
          "bg-transparent text-primary",
          "hover:bg-accent hover:text-accent-foreground",
          "active:scale-[0.98]",
          "disabled:bg-transparent disabled:text-muted-foreground disabled:opacity-50"
        ].join(" ")
      },
      size: {
        sm: "h-8 px-4 text-sm gap-1.5 [&_svg]:size-3.5",
        default: "h-10 px-4 text-base gap-2",
        lg: "h-12 px-4 text-base gap-2 [&_svg]:size-5",
        "icon-sm": "h-8 w-8 p-0",
        "icon-default": "h-10 w-10 p-0", 
        "icon-lg": "h-12 w-12 p-0"
      },
      fullWidth: {
        true: "w-full",
        false: ""
      }
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
      fullWidth: false
    }
  }
);

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  loading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  loadingText?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      fullWidth,
      asChild = false,
      loading = false,
      disabled = false,
      leftIcon,
      rightIcon,
      loadingText,
      children,
      title,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";
    const isDisabled = disabled || loading;
    const isIconOnly = !children && !loadingText && (leftIcon || rightIcon) && size?.startsWith('icon');

    // Add wrapper div for loading overlay
    const buttonElement = (
      <Comp
        ref={ref}
        className={cn(
          buttonVariants({ 
            variant,
            size: isIconOnly ? size : size, 
            fullWidth 
          }),
          loading && "relative",
          className
        )}
        disabled={isDisabled}
        aria-busy={loading}
        aria-label={isIconOnly && !props["aria-label"] ? title : props["aria-label"]}
        title={isIconOnly ? title : undefined} // Only show tooltip for icon-only buttons
        {...props}
      >
        {/* Loading overlay that preserves button styling */}
        {loading && (
          <div className="absolute inset-0 flex items-center justify-center rounded-lg bg-black/20">
            <Loader2 className="animate-spin text-current" />
          </div>
        )}
        
        {/* Button content */}
        <span className={cn("inline-flex items-center justify-center gap-2", loading && "opacity-0")}>
          {leftIcon}
          {loadingText && loading ? loadingText : children}
          {rightIcon}
        </span>
      </Comp>
    );

    return buttonElement;
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };
export type { ButtonProps };