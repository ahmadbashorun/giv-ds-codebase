"use client";

import * as React from "react";
import {
  ColumnDef,
} from "@tanstack/react-table";
import { ArrowRight } from "lucide-react";

import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";
import { DataTable } from "../ui/data-table";
import {
  TableToolbar,
  TableToolbarSearch,
  TableToolbarDatePicker,
  TableToolbarFilter,
  TableToolbarActions,
  TableToolbarCTA,
} from "../ui/table-toolbar";

// Sample data types
type Document = {
  id: string;
  name: string;
  type: string;
  date: string;
  status: "active" | "pending" | "archived";
};

type BudgetItem = {
  id: string;
  category: string;
  q1: number;
  q2: number;
  q3: number;
  q4: number;
  total: number;
  variance: number;
  status: string;
};

// Sample data
const documentData: Document[] = [
  {
    id: "1",
    name: "Employee Handbook 2025",
    type: "PDF",
    date: "2025-01-15",
    status: "active",
  },
  {
    id: "2",
    name: "Q4 Financial Report",
    type: "XLSX",
    date: "2024-12-20",
    status: "active",
  },
  {
    id: "3",
    name: "Project Proposal",
    type: "DOCX",
    date: "2025-02-01",
    status: "pending",
  },
  {
    id: "4",
    name: "Marketing Strategy 2024",
    type: "PDF",
    date: "2024-11-10",
    status: "archived",
  },
  {
    id: "5",
    name: "Team Meeting Notes",
    type: "DOCX",
    date: "2025-01-28",
    status: "active",
  },
];

const budgetData: BudgetItem[] = [
  {
    id: "1",
    category: "Salaries",
    q1: 125000,
    q2: 128000,
    q3: 130000,
    q4: 132000,
    total: 515000,
    variance: 2.1,
    status: "On track",
  },
  {
    id: "2",
    category: "Marketing",
    q1: 45000,
    q2: 52000,
    q3: 48000,
    q4: 55000,
    total: 200000,
    variance: -5.3,
    status: "Over budget",
  },
  {
    id: "3",
    category: "Operations",
    q1: 82000,
    q2: 85000,
    q3: 88000,
    q4: 90000,
    total: 345000,
    variance: 1.2,
    status: "On track",
  },
  {
    id: "4",
    category: "R&D",
    q1: 95000,
    q2: 98000,
    q3: 102000,
    q4: 105000,
    total: 400000,
    variance: 4.1,
    status: "Under budget",
  },
];

// Overview table columns
const documentColumns: ColumnDef<Document>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <div
        className={
          row.getIsSelected()
            ? "opacity-100"
            : "opacity-0 group-hover:opacity-100 transition-opacity"
        }
      >
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
          aria-label="Select row"
        />
      </div>
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "name",
    header: "Document Name",
    cell: ({ row }) => (
      <div>
        <div className="font-light text-[var(--grey-g08)]">{row.getValue("name")}</div>
        <div className="text-xs text-[var(--grey-g06)]">{row.original.type}</div>
      </div>
    ),
  },
  {
    accessorKey: "date",
    header: "Date",
    cell: ({ row }) => {
      const date = new Date(row.getValue("date"));
      return date.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      });
    },
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.getValue("status") as string;
      return (
        <span
          className={
            status === "active"
              ? "text-success"
              : status === "pending"
              ? "text-warning"
              : "text-muted-foreground"
          }
        >
          {status.charAt(0).toUpperCase() + status.slice(1)}
        </span>
      );
    },
  },
  {
    id: "actions",
    header: () => <div className="text-right w-32"></div>,
    cell: ({ row }) => (
      <div className="text-right">
        <Button
          variant="link"
          size="sm"
          className={`gap-1 text-primary opacity-0 group-hover:opacity-100 transition-opacity ${
            row.getIsSelected() ? 'opacity-100' : ''
          }`}
        >
          View details
          <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    ),
  },
];

// Dense table columns
const budgetColumns: ColumnDef<BudgetItem>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
        size="sm"
      />
    ),
    cell: ({ row }) => (
      <div
        className={
          row.getIsSelected()
            ? "opacity-100"
            : "opacity-0 group-hover:opacity-100 transition-opacity"
        }
      >
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
          aria-label="Select row"
          size="sm"
        />
      </div>
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "category",
    header: "Category",
  },
  {
    accessorKey: "q1",
    header: "Q1",
    cell: ({ row }) => `$${row.getValue<number>("q1").toLocaleString()}`,
  },
  {
    accessorKey: "q2",
    header: "Q2",
    cell: ({ row }) => `$${row.getValue<number>("q2").toLocaleString()}`,
  },
  {
    accessorKey: "q3",
    header: "Q3",
    cell: ({ row }) => `$${row.getValue<number>("q3").toLocaleString()}`,
  },
  {
    accessorKey: "q4",
    header: "Q4",
    cell: ({ row }) => `$${row.getValue<number>("q4").toLocaleString()}`,
  },
  {
    accessorKey: "total",
    header: "Total",
    cell: ({ row }) => (
      <strong>$${row.getValue<number>("total").toLocaleString()}</strong>
    ),
  },
  {
    accessorKey: "variance",
    header: "Variance %",
    cell: ({ row }) => {
      const variance = row.getValue<number>("variance");
      return (
        <span className={variance < 0 ? "text-error" : "text-success"}>
          {variance > 0 ? "+" : ""}
          {variance}%
        </span>
      );
    },
  },
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    id: "actions",
    header: () => <div className="text-right w-32"></div>,
    cell: ({ row }) => (
      <div className="text-right">
        <Button
          variant="link"
          size="sm"
          className={`gap-1 text-primary opacity-0 group-hover:opacity-100 transition-opacity ${
            row.getIsSelected() ? 'opacity-100' : ''
          }`}
        >
          View details
          <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    ),
  },
];

// Infinite scroll table component
function InfiniteScrollTable() {
  // Generate 20 budget items for scroll demo - memoized to avoid regeneration
  const generatedData = React.useMemo(() => {
    const data: BudgetItem[] = [];
    const categories = ["Salaries", "Marketing", "Operations", "R&D", "Sales", "Support", "Legal", "IT"];
    for (let i = 0; i < 20; i++) {
      const q1 = Math.floor(Math.random() * 200000) + 30000;
      const q2 = Math.floor(Math.random() * 200000) + 30000;
      const q3 = Math.floor(Math.random() * 200000) + 30000;
      const q4 = Math.floor(Math.random() * 200000) + 30000;
      data.push({
        id: String(i + 1),
        category: `${categories[i % categories.length]} ${Math.floor(i / categories.length) + 1}`,
        q1,
        q2,
        q3,
        q4,
        total: q1 + q2 + q3 + q4,
        variance: Math.random() * 10 - 5,
        status: Math.random() > 0.7 ? "Over budget" : Math.random() > 0.5 ? "On track" : "Under budget",
      });
    }
    return data;
  }, []);

  const [items, setItems] = React.useState<BudgetItem[]>(() => generatedData.slice(0, 20));
  const [hasMore, setHasMore] = React.useState(true);

  React.useEffect(() => {
    function onScroll(e: Event) {
      const el = e.target as HTMLElement;
      if (!el || !hasMore) return;
      if (el.scrollTop + el.clientHeight >= el.scrollHeight - 8) {
        setItems((prev) => {
          const next = generatedData.slice(0, Math.min(prev.length + 20, generatedData.length));
          if (next.length === prev.length) setHasMore(false);
          return next;
        });
      }
    }
    const el = document.getElementById("dense-no-borders-scroll");
    if (el) el.addEventListener("scroll", onScroll);
    return () => el?.removeEventListener("scroll", onScroll);
  }, [hasMore, generatedData]);

  return (
    <>
      <div id="dense-no-borders-scroll" className="h-[240px] overflow-auto">
        <DataTable
          columns={budgetColumns}
          data={items}
          variant="dense"
          showVerticalBorders={false}
        />
      </div>
      {!hasMore && (
        <div className="text-center py-4 text-muted-foreground">You've reached the end</div>
      )}
    </>
  );
}

export function TablePreview() {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [dateFilter, setDateFilter] = React.useState("");
  const [statusFilter, setStatusFilter] = React.useState("");

  return (
    <div className="space-y-12 p-8">
      {/* Overview Table Example */}
      <div className="space-y-4">
        <div>
          <h6 className="text-2xl font-medium text-[var(--grey-brand-black)] mb-2">
            Overview Table
          </h6>
          <p className="text-sm text-[var(--grey-g06)]">
            Used for easy-to-skim data with less than 5 columns. Taller rows (56px) for better readability.
          </p>
        </div>

        <div className="bg-card rounded-xl border border-card overflow-hidden p-6">
          <div className="pb-6 border-b border-border">
            <TableToolbar
              title="Documents"
              recordCount={{ showing: documentData.length, total: documentData.length }}
              layout="side"
            >
              <TableToolbarDatePicker
                value={dateFilter}
                onChange={setDateFilter}
              />
              <TableToolbarSearch
                placeholder="Search documents..."
                value={searchTerm}
                onChange={setSearchTerm}
              />
              <TableToolbarFilter
                placeholder="Status"
                options={[
                  { label: "All", value: "all" },
                  { label: "Active", value: "active" },
                  { label: "Pending", value: "pending" },
                  { label: "Archived", value: "archived" },
                ]}
                value={statusFilter}
                onChange={setStatusFilter}
              />
            </TableToolbar>
          </div>

          <DataTable
            columns={documentColumns}
            data={documentData}
            variant="overview"
          />
        </div>
      </div>

      {/* Dense Table Example */}
      <div className="py-12 ">
        <div className="">
          <h6 className="text-2xl font-medium text-[var(--grey-brand-black)] mb-2">
            Dense Table
          </h6>
          <p className="text-sm text-[var(--grey-g06)]">
            Used for data-heavy content with many columns. Shorter rows (40px), striped backgrounds, and optional vertical borders.
          </p>
        </div>

        <div className="bg-card rounded-xl border border-card overflow-hidden p-6">
          <div className="pb-6 border-b border-border">
            <div className="flex flex-col gap-4">
              {/* Title and record count */}
              <div className="flex items-center justify-between">
                <h5 className="text-h4 font-medium text-[#54565A] leading-[1.1] tracking-[-0.2px]">
                  Budget Overview
                </h5>
                <span className="text-caption-small text-[#54565A] leading-[1.3] whitespace-nowrap">
                  Showing {budgetData.length} of {budgetData.length} Records
                </span>
              </div>
              {/* Filters and button */}
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <TableToolbarDatePicker />
                  <TableToolbarSearch placeholder="Search categories..." />
                  <TableToolbarFilter
                    placeholder="Filter by status"
                    options={[
                      { label: "All", value: "all" },
                      { label: "On track", value: "on-track" },
                      { label: "Over budget", value: "over" },
                      { label: "Under budget", value: "under" },
                    ]}
                  />
                </div>
                <Button>Add New</Button>
              </div>
            </div>
          </div>

          <DataTable
            columns={budgetColumns}
            data={budgetData}
            variant="dense"
            showVerticalBorders
          />
        </div>
      </div>

      {/* Dense Table without Vertical Borders */}
      <div className="space-y-4">
        <div>
          <h6 className="text-h4 font-medium text-[var(--grey-brand-black)] mb-2">
            Dense Table (No Vertical Borders)
          </h6>
          <p className="text-sm text-[var(--grey-g06)]">
            Same dense layout but with only horizontal borders for a cleaner look.
          </p>
        </div>

        <div className="bg-card rounded-xl border border-card overflow-hidden p-6">
          <div className="pb-6 border-b border-border">
            <TableToolbar
              title="Quarterly Analysis"
              recordCount={{ showing: budgetData.length, total: budgetData.length }}
              layout="side"
            >
              <TableToolbarSearch placeholder="Search..." />
            </TableToolbar>
          </div>

          {/* Infinite scroll demo */}
          <InfiniteScrollTable />
        </div>
      </div>
    </div>
  );
}

