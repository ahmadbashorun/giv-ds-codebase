import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "./utils";


const inputVariants = cva(
  [
    "w-full rounded-lg border bg-input-background text-foreground",
    "transition-all duration-200",
    "placeholder:text-muted-foreground",
    "focus:outline-2 focus:ring focus:ring-[var(--input-border-active)] focus:outline-[var(--input-outline-active)] focus:outline-offset-1",
    "disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-muted",
    "read-only:cursor-default read-only:opacity-75",
    "aria-[invalid=true]:border-destructive-foreground aria-[invalid=true]:focus:ring-destructive-foreground",
    "[&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-search-cancel-button]:appearance-none",
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
        error: "border-destructive-foreground focus:ring-destructive-foreground",
        success: "border-status-success-text focus:ring-status-success-text",
      },
    },
    defaultVariants: {
      size: "default",
      state: "default",
    },
  }
);

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>,
    VariantProps<typeof inputVariants> {
  error?: boolean;
  success?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  helperText?: string;
  helperIcon?: React.ReactNode;
  showPasswordToggle?: boolean;
  clearable?: boolean;
  onClear?: () => void;
  showStepper?: boolean;
  onIncrement?: () => void;
  onDecrement?: () => void;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ 
    className, 
    size, 
    state, 
    error, 
    success, 
    type, 
    leftIcon, 
    rightIcon, 
    helperText,
    helperIcon,
    showPasswordToggle = false,
    clearable = false,
    onClear,
    showStepper = false,
    onIncrement,
    onDecrement,
    value,
    ...props 
  }, ref) => {
    const [showPassword, setShowPassword] = React.useState(false);
    const [internalValue, setInternalValue] = React.useState(value || '');
    
    // Sync internal value with external value
    React.useEffect(() => {
      if (value !== undefined) {
        setInternalValue(value);
      }
    }, [value]);

    // Determine the state based on props
    const inputState = error ? "error" : success ? "success" : state;
    
    // Determine input type - toggle for password
    const inputType = showPasswordToggle && type === 'password' 
      ? (showPassword ? 'text' : 'password')
      : type;

    // Show clear button if clearable and has value (but not if stepper, password toggle, or search type)
    const showClearButton = clearable && internalValue && !props.disabled && !props.readOnly && !showPasswordToggle && !showStepper && type !== 'search';
    
    // Determine which icon/button to show on the right
    let rightContent = rightIcon;
    
    if (showStepper && (type === 'number' || !type)) {
      // Stepper buttons take priority
      rightContent = (
        <div className="flex flex-col h-full border-l border-input-border bg-muted rounded-r-lg overflow-hidden">
          <button
            type="button"
            onClick={() => {
              onIncrement?.();
              if (value === undefined) {
                const currentVal = parseFloat(internalValue as string) || 0;
                setInternalValue(String(currentVal + 1));
              }
            }}
            disabled={props.disabled}
            className="flex-1 flex items-center justify-center hover:bg-muted-foreground/10 transition-colors disabled:opacity-50 disabled:cursor-not-allowed px-3"
            tabIndex={-1}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="18 15 12 9 6 15"/>
            </svg>
          </button>
          <div className="border-t border-input-border" />
          <button
            type="button"
            onClick={() => {
              onDecrement?.();
              if (value === undefined) {
                const currentVal = parseFloat(internalValue as string) || 0;
                setInternalValue(String(currentVal - 1));
              }
            }}
            disabled={props.disabled}
            className="flex-1 flex items-center justify-center hover:bg-muted-foreground/10 transition-colors disabled:opacity-50 disabled:cursor-not-allowed px-3"
            tabIndex={-1}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="6 9 12 15 18 9"/>
            </svg>
          </button>
        </div>
      );
    } else if (showPasswordToggle && type === 'password') {
      rightContent = (
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="text-muted-foreground hover:text-foreground transition-colors"
          tabIndex={-1}
        >
          {showPassword ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/>
              <line x1="2" y1="2" x2="22" y2="22"/>
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/>
              <circle cx="12" cy="12" r="3"/>
            </svg>
          )}
        </button>
      );
    } else if (showClearButton) {
      rightContent = (
        <button
          type="button"
          onClick={() => {
            setInternalValue('');
            onClear?.();
            if (props.onChange) {
              const syntheticEvent = {
                target: { value: '' },
              } as React.ChangeEvent<HTMLInputElement>;
              props.onChange(syntheticEvent);
            }
          }}
          className="text-muted-foreground hover:text-foreground transition-colors"
          tabIndex={-1}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"/>
            <line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>
      );
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setInternalValue(e.target.value);
      props.onChange?.(e);
    };

    const inputElement = (
      <input
        type={inputType}
        className={cn(
          inputVariants({ size, state: inputState }),
          leftIcon && "pl-10",
          rightContent && !showStepper && "pr-10",
          showStepper && "pr-[50px]",
          className
        )}
        ref={ref}
        aria-invalid={error ? "true" : undefined}
        value={value}
        onChange={handleChange}
        {...props}
      />
    );

    // If stepper, wrap in special container
    if (showStepper) {
      return (
        <div className="relative w-full flex">
          {leftIcon && (
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none z-10">
              {React.isValidElement(leftIcon) 
                ? React.cloneElement(leftIcon as React.ReactElement, { 
                    className: cn("h-4 w-4", (leftIcon as React.ReactElement).props?.className) 
                  })
                : leftIcon
              }
            </div>
          )}
          {inputElement}
          <div className="absolute right-0 top-0 h-full">
            {rightContent}
          </div>
        </div>
      );
    }

    // If icons are provided, wrap in a container
    const inputWithIcons = (leftIcon || rightContent) ? (
      <div className="relative w-full">
        {leftIcon && (
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none">
            {React.isValidElement(leftIcon) 
              ? React.cloneElement(leftIcon as React.ReactElement, { 
                  className: cn("h-4 w-4", (leftIcon as React.ReactElement).props?.className) 
                })
              : leftIcon
            }
          </div>
        )}
        {inputElement}
        {rightContent && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">
            {React.isValidElement(rightContent)
              ? React.cloneElement(rightContent as React.ReactElement, {
                  className: cn("h-4 w-4", (rightContent as React.ReactElement).props?.className)
                })
              : rightContent
            }
          </div>
        )}
      </div>
    ) : inputElement;

    // If helper text, wrap everything
    if (helperText) {
      return (
        <div className="w-full">
          {inputWithIcons}
          <div className="flex gap-2 items-center mt-1.5">
            {helperIcon && (
              <div className="shrink-0 text-muted-foreground">
                {React.isValidElement(helperIcon)
                  ? React.cloneElement(helperIcon as React.ReactElement, {
                      className: cn("h-4 w-4", (helperIcon as React.ReactElement).props?.className)
                    })
                  : helperIcon
                }
              </div>
            )}
            <p className={cn(
              "text-xs",
              error ? "text-destructive-foreground" : "text-muted-foreground"
            )}>
              {helperText}
            </p>
          </div>
        </div>
      );
    }

    return inputWithIcons;
  }
);

Input.displayName = "Input";

export { Input, inputVariants };

// Label component for consistency
export interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  required?: boolean;
  secondary?: string;
  secondaryAlign?: 'inline' | 'right';
}

const Label = React.forwardRef<HTMLLabelElement, LabelProps>(
  ({ className, children, required, secondary, secondaryAlign = 'inline', ...props }, ref) => {
    if (secondaryAlign === 'right' && secondary) {
      return (
        <label
          ref={ref}
          className={cn(
            "flex items-center justify-between w-full paragraph-small-medium text-foreground",
            className
          )}
          {...props}
        >
          <span>
            {children}
            {required && (
              <span className="text-destructive-foreground ml-0.5" aria-label="required">
                *
              </span>
            )}
          </span>
          <span className="caption-medium text-metadata">
            {secondary}
          </span>
        </label>
      );
    }

    return (
      <label
        ref={ref}
        className={cn(
          "block paragraph-small-medium text-foreground",
          className
        )}
        {...props}
      >
        {children}
        {required && (
          <span className="text-destructive-foreground ml-0.5" aria-label="required">
            *
          </span>
        )}
        {secondary && secondaryAlign === 'inline' && (
          <span className="caption-medium text-metadata ml-2">
            {secondary}
          </span>
        )}
      </label>
    );
  }
);

Label.displayName = "Label";

export { Label };

// FormField component - combines Label + Input + Helper text
export interface FormFieldProps extends Omit<InputProps, 'helperText' | 'helperIcon'> {
  label?: string;
  labelRequired?: boolean;
  labelSecondary?: string;
  labelSecondaryAlign?: 'inline' | 'right';
  helperText?: string;
  helperIcon?: React.ReactNode;
  labelClassName?: string;
}

const FormField = React.forwardRef<HTMLInputElement, FormFieldProps>(
  ({ 
    label, 
    labelRequired, 
    labelSecondary, 
    labelSecondaryAlign = 'right',
    helperText,
    helperIcon,
    labelClassName,
    error,
    id,
    ...inputProps 
  }, ref) => {
    const inputId = id || React.useId();
    
    return (
      <div className="flex flex-col gap-2 w-full">
        {label && (
          <Label 
            htmlFor={inputId}
            required={labelRequired}
            secondary={labelSecondary}
            secondaryAlign={labelSecondaryAlign}
            className={labelClassName}
          >
            {label}
          </Label>
        )}
        <Input
          id={inputId}
          ref={ref}
          error={error}
          {...inputProps}
        />
        {helperText && (
          <div className="flex gap-2 items-start">
            {helperIcon && (
              <div className="shrink-0 text-muted-foreground mt-0.5">
                {React.isValidElement(helperIcon)
                  ? React.cloneElement(helperIcon as React.ReactElement, {
                      className: cn("h-4 w-4", (helperIcon as React.ReactElement).props?.className)
                    })
                  : helperIcon
                }
              </div>
            )}
            <p className={cn(
              "text-xs leading-tight",
              error ? "text-destructive-foreground" : "text-muted-foreground"
            )}>
              {helperText}
            </p>
          </div>
        )}
      </div>
    );
  }
);

FormField.displayName = "FormField";

export { FormField };



