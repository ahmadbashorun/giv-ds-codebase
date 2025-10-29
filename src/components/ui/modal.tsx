import * as React from "react"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "./dialog"
import { Button } from "./button"
import { X } from "lucide-react"
import { cn } from "./utils"

interface ModalProps {
  open?: boolean
  onOpenChange?: (open: boolean) => void
  children: React.ReactNode
  trigger?: React.ReactNode
}

interface ModalContentProps {
  className?: string
  size?: "sm" | "default" | "lg" | "xl" | "full"
  children: React.ReactNode
  onClose?: () => void
  showCloseButton?: boolean
}

interface ModalHeaderProps {
  children: React.ReactNode
  className?: string
}

interface ModalBodyProps {
  children: React.ReactNode
  className?: string
}

interface ModalFooterProps {
  children: React.ReactNode
  className?: string
  justify?: "start" | "center" | "end" | "between"
}

const Modal = ({ open, onOpenChange, children, trigger }: ModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      {trigger && <DialogTrigger asChild>{trigger}</DialogTrigger>}
      {children}
    </Dialog>
  )
}

const ModalContent = React.forwardRef<
  React.ElementRef<typeof DialogContent>,
  ModalContentProps
>(({ className, size = "default", children, onClose, showCloseButton = true, ...props }, ref) => {
  const sizeClasses = {
    sm: "max-w-md",
    default: "max-w-lg", 
    lg: "max-w-2xl",
    xl: "max-w-4xl",
    full: "max-w-[95vw] w-[95vw] max-h-[95vh] h-[95vh]"
  }

  return (
    <DialogContent
      ref={ref}
      className={cn(
        "gap-0 p-0 overflow-hidden",
        sizeClasses[size],
        size === "full" && "rounded-lg",
        className
      )}
      {...props}
    >
      {showCloseButton && onClose && (
        <button
          onClick={onClose}
          className="absolute right-6 top-6 z-10 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none"
          style={{ 
            color: 'var(--text-metadata)',
            backgroundColor: 'transparent'
          }}
        >
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </button>
      )}
      {children}
    </DialogContent>
  )
})
ModalContent.displayName = "ModalContent"

const ModalHeader = React.forwardRef<
  HTMLDivElement,
  ModalHeaderProps
>(({ children, className, ...props }, ref) => (
  <DialogHeader
    ref={ref}
    className={cn(
      "px-6 py-6",
      className
    )}
    {...props}
  >
    {children}
  </DialogHeader>
))
ModalHeader.displayName = "ModalHeader"

const ModalTitle = React.forwardRef<
  React.ElementRef<typeof DialogTitle>,
  React.ComponentPropsWithoutRef<typeof DialogTitle>
>(({ className, ...props }, ref) => (
  <DialogTitle
    ref={ref}
    className={cn("h6-heading", className)}
    style={{ color: 'var(--text-heading-section)' }}
    {...props}
  />
))
ModalTitle.displayName = "ModalTitle"

const ModalDescription = React.forwardRef<
  React.ElementRef<typeof DialogDescription>,
  React.ComponentPropsWithoutRef<typeof DialogDescription>
>(({ className, ...props }, ref) => (
  <DialogDescription
    ref={ref}
    className={cn("paragraph-small-regular mt-2", className)}
    style={{ color: 'var(--text-body)' }}
    {...props}
  />
))
ModalDescription.displayName = "ModalDescription"

const ModalBody = React.forwardRef<
  HTMLDivElement,
  ModalBodyProps
>(({ children, className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("px-6 py-4 flex-1 overflow-y-auto", className)}
    {...props}
  >
    {children}
  </div>
))
ModalBody.displayName = "ModalBody"

const ModalFooter = React.forwardRef<
  HTMLDivElement,
  ModalFooterProps
>(({ children, className, justify = "end", ...props }, ref) => {
  const justifyClasses = {
    start: "justify-start",
    center: "justify-center", 
    end: "justify-end",
    between: "justify-between"
  }

  return (
    <DialogFooter
      ref={ref}
      className={cn(
        "px-6 py-4 border-t border-border flex gap-3",
        justifyClasses[justify],
        className
      )}
      style={{ borderColor: 'var(--border-divider)' }}
      {...props}
    >
      {children}
    </DialogFooter>
  )
})
ModalFooter.displayName = "ModalFooter"

export {
  Modal,
  ModalContent,
  ModalHeader,
  ModalTitle,
  ModalDescription,
  ModalBody,
  ModalFooter,
}