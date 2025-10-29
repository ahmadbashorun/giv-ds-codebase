"use client";

import * as React from "react";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
  Row,
} from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./table";
import { cn } from "./utils";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  variant?: "overview" | "dense";
  showVerticalBorders?: boolean;
  onRowClick?: (row: Row<TData>) => void;
}

export function DataTable<TData, TValue>({
  columns,
  data,
  variant = "overview",
  showVerticalBorders = false,
  onRowClick,
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [rowSelection, setRowSelection] = React.useState({});

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      rowSelection,
    },
  });

  // Striping is applied to dense tables by default
  const useStriping = variant === "dense";

  return (
    <div className="w-full overflow-x-auto">
      <Table className={cn(variant === "dense" && "table-striped", variant === "overview" && "table-hover")}>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id} variant={variant} striped={false} className="hover:bg-transparent">
              {headerGroup.headers.map((header, idx) => (
                <TableHead
                  key={header.id}
                  variant={variant}
                  showVerticalBorder={showVerticalBorders}
                  className={cn(
                    header.column.getCanSort() && "cursor-pointer select-none",
                    idx === headerGroup.headers.length - 1 && showVerticalBorders && "border-r-0"
                  )}
                  onClick={header.column.getToggleSortingHandler()}
                >
                  {header.isPlaceholder ? null : (
                    <div className="flex items-center gap-2">
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                      {header.column.getCanSort() && (
                        <ArrowUpDown className="h-4 w-4 text-muted-foreground" />
                      )}
                    </div>
                  )}
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                variant={variant}
                striped={useStriping}
                data-state={row.getIsSelected() && "selected"}
                onClick={() => onRowClick?.(row)}
                className={cn(onRowClick && "cursor-pointer")}
              >
                {row.getVisibleCells().map((cell, idx) => (
                  <TableCell
                    key={cell.id}
                    variant={variant}
                    showVerticalBorder={showVerticalBorders}
                    className={cn(
                      idx === row.getVisibleCells().length - 1 && showVerticalBorders && "border-r-0"
                    )}
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow variant={variant}>
              <TableCell
                colSpan={columns.length}
                variant={variant}
                className="h-24 text-center"
              >
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}

// Helper component for sortable column headers
export function DataTableColumnHeader({
  title,
  column,
}: {
  title: string;
  column?: any;
}) {
  if (!column?.getCanSort()) {
    return <span>{title}</span>;
  }

  return (
    <button
      type="button"
      className="flex items-center gap-2 hover:text-[#3D3F42]"
      onClick={column.getToggleSortingHandler()}
    >
      {title}
      <ArrowUpDown className="h-4 w-4" />
    </button>
  );
}
