"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "./utils";

// Table container component
function Table({ className, ...props }: React.ComponentProps<"table">) {
  return (
    <table
      className={cn("w-full border-collapse", className)}
      {...props}
    />
  );
}

// Table header with grey background
function TableHeader({ className, ...props }: React.ComponentProps<"thead">) {
  return (
    <thead
      className={cn("bg-background-page", className)}
      {...props}
    />
  );
}

// Table body
function TableBody({ className, ...props }: React.ComponentProps<"tbody">) {
  return (
    <tbody
      className={cn("", className)}
      {...props}
    />
  );
}

// Table footer
function TableFooter({ className, ...props }: React.ComponentProps<"tfoot">) {
  return (
    <tfoot
      className={cn("bg-background-page border-t border-border", className)}
      {...props}
    />
  );
}

// Table row variants
const tableRowVariants = cva(
  [
    "border-b border-border transition-colors",
    "group",
  ].join(" "),
  {
    variants: {
      variant: {
        overview: [
          "h-14",
        ].join(" "),
        dense: [
          "h-10",
        ].join(" "),
      },
      striped: {
        true: "",
        false: "",
      },
    },
    defaultVariants: {
      variant: "overview",
      striped: false,
    },
  }
);

function TableRow({
  className,
  variant,
  striped,
  ...props
}: React.HTMLAttributes<HTMLTableRowElement> &
  VariantProps<typeof tableRowVariants>) {
  return (
    <tr
      className={cn(tableRowVariants({ variant, striped }), className)}
      {...props}
    />
  );
}

// Table head with consistent styling
const tableHeadVariants = cva(
  [
    "text-left align-middle",
    "text-muted-foreground text-sm font-medium",
    "px-2 py-2",
    "[&:has([role=checkbox])]:w-[48px]",
  ].join(" "),
  {
    variants: {
      variant: {
        overview: "",
        dense: "",
      },
      showVerticalBorder: {
        true: "border-r border-[#E5E6E9] last:border-r-0",
        false: "",
      },
    },
    defaultVariants: {
      variant: "overview",
      showVerticalBorder: false,
    },
  }
);

function TableHead({
  className,
  variant,
  showVerticalBorder,
  ...props
}: React.ThHTMLAttributes<HTMLTableHeaderCellElement> &
  VariantProps<typeof tableHeadVariants>) {
  return (
    <th
      className={cn(tableHeadVariants({ variant, showVerticalBorder }), className)}
      {...props}
    />
  );
}

// Table cell variants
const tableCellVariants = cva(
  [
    "align-middle",
    "text-foreground text-sm font-light",
    "px-2",
    "[&:has([role=checkbox])]:w-[48px]",
  ].join(" "),
  {
    variants: {
      variant: {
        overview: "py-4",
        dense: "py-2",
      },
      showVerticalBorder: {
        true: "border-r border-[#E5E6E9] last:border-r-0",
        false: "",
      },
    },
    defaultVariants: {
      variant: "overview",
      showVerticalBorder: false,
    },
  }
);

function TableCell({
  className,
  variant,
  showVerticalBorder,
  ...props
}: React.TdHTMLAttributes<HTMLTableDataCellElement> &
  VariantProps<typeof tableCellVariants>) {
  return (
    <td
      className={cn(tableCellVariants({ variant, showVerticalBorder }), className)}
      {...props}
    />
  );
}

// Table caption
function TableCaption({
  className,
  ...props
}: React.ComponentProps<"caption">) {
  return (
    <caption
      className={cn("mt-4 text-sm text-muted-foreground", className)}
      {...props}
    />
  );
}

export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
  tableRowVariants,
  tableHeadVariants,
  tableCellVariants,
};
