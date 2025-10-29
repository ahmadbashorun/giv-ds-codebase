import { ComponentDocumentation } from '.';

export const tableDocumentation: ComponentDocumentation = {
  name: 'Table',
  description: 'Tables are used to organize and display data efficiently. The Giv system includes two main types of tables: Overview tables for high-level summaries and Dense tables for detailed data views. Both are designed to be flexible and interactive with sorting, filtering, and row selection capabilities.',
  category: 'Data Display',
  examples: {
    react: `
import { DataTable } from '@/components/ui/data-table';
import { ColumnDef } from '@tanstack/react-table';

type TableData = {
  id: string;
  name: string;
  status: string;
};

const columns: ColumnDef<TableData>[] = [
  {
    accessorKey: 'name',
    header: 'Name',
  },
  {
    accessorKey: 'status',
    header: 'Status',
  },
];

const data: TableData[] = [
  { id: '1', name: 'Item 1', status: 'Active' },
  { id: '2', name: 'Item 2', status: 'Pending' },
];

// Overview table (taller rows, hover states)
<DataTable
  columns={columns}
  data={data}
  variant="overview"
/>

// Dense table (shorter rows, striped, with vertical borders)
<DataTable
  columns={columns}
  data={data}
  variant="dense"
  showVerticalBorders={true}
/>

// With toolbar
import { TableToolbar, TableToolbarSearch } from '@/components/ui/table-toolbar';

<div className="bg-card rounded-xl border border-card overflow-hidden p-6">
  <div className="pb-6 border-b border-border">
    <TableToolbar title="My Table" recordCount={{ showing: 10, total: 50 }} layout="side">
      <TableToolbarSearch placeholder="Search..." />
    </TableToolbar>
  </div>
  <DataTable columns={columns} data={data} variant="dense" />
</div>
`,
    angular: `
// Angular implementation using semantic CSS classes
import { Component } from '@angular/core';

type TableData = {
  id: string;
  name: string;
  status: string;
};

@Component({
  selector: 'app-table-example',
  template: \`
    <div class="bg-card rounded-xl border border-card overflow-hidden p-6">
      <!-- Toolbar -->
      <div class="pb-6 border-b border-border">
        <div class="flex flex-col gap-4">
          <div class="flex items-center justify-between">
            <h5 class="text-h4 font-medium text-[#54565A]">My Table</h5>
            <span class="text-caption-small text-[#54565A]">
              Showing {{data.length}} of {{data.length}} Records
            </span>
          </div>
          <div class="flex items-center gap-2">
            <input
              type="text"
              placeholder="Search..."
              [(ngModel)]="searchTerm"
              class="w-[240px] h-10 px-3 pl-10 border border-input-border rounded-md"
            />
          </div>
        </div>
      </div>
      
      <!-- Dense Table with striping -->
      <table class="w-full border-collapse">
        <thead class="bg-background-page">
          <tr class="border-b border-border h-10">
            <th class="px-2 py-2 text-left text-sm text-muted-foreground font-medium">Name</th>
            <th class="px-2 py-2 text-left text-sm text-muted-foreground font-medium">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr
            *ngFor="let row of data; let i = index"
            class="border-b border-border h-10 [&:nth-child(even)]:bg-grey-g01"
            [class.table-striped]="i % 2 === 0"
          >
            <td class="px-2 py-2 text-sm text-foreground">{{row.name}}</td>
            <td class="px-2 py-2 text-sm text-foreground">{{row.status}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  \`,
  styles: \`
    .table-striped {
      background-color: var(--grey-g01);
    }
  \`
})
export class TableExampleComponent {
  searchTerm = '';
  data = [
    { id: '1', name: 'Item 1', status: 'Active' },
    { id: '2', name: 'Item 2', status: 'Pending' },
    { id: '3', name: 'Item 3', status: 'Active' },
  ];
}
`,
    ionic: `
import { Component } from '@angular/core';

@Component({
  selector: 'app-table-example',
  template: \`
    <ion-content>
      <div class="bg-card rounded-xl border border-card overflow-hidden p-6">
        <div class="pb-6 border-b border-border">
          <div class="flex flex-col gap-4">
            <div class="flex items-center justify-between">
              <h5 class="text-h4 font-medium text-[#54565A]">My Table</h5>
              <span class="text-caption-small text-[#54565A]">
                Showing {{data.length}} of {{data.length}} Records
              </span>
            </div>
            <ion-searchbar
              placeholder="Search..."
              show-clear-button="focus"
            ></ion-searchbar>
          </div>
        </div>
        
        <ion-grid>
          <ion-row class="bg-background-page font-medium text-sm text-muted-foreground">
            <ion-col class="border-b border-border">Name</ion-col>
            <ion-col class="border-b border-border">Status</ion-col>
          </ion-row>
          <ion-row
            *ngFor="let row of data; let i = index"
            class="[&:nth-child(even)]:bg-[var(--grey-g01)]"
          >
            <ion-col class="border-b border-border">{{row.name}}</ion-col>
            <ion-col class="border-b border-border">{{row.status}}</ion-col>
          </ion-row>
        </ion-grid>
      </div>
    </ion-content>
  \`
})
export class TableExampleComponent {
  data = [
    { id: '1', name: 'Item 1', status: 'Active' },
    { id: '2', name: 'Item 2', status: 'Pending' },
  ];
}
`
  },
  guidelines: {
    usage: {
      'Overview Tables': 'Use for tabular data that is easy to skim, like documents or shift overviews. They typically have less than 5 columns and feature taller rows (56px) for better readability. These tables have hover states but no striping.',
      'Dense Tables': 'Ideal for displaying large amounts of data, such as budgets or charting data. These tables have shorter rows (40px), striped backgrounds for clarity, and can optionally include vertical borders. Use vertical borders when the table has many columns.',
      'Toolbar Components': 'Use TableToolbar to add filtering, search, and action controls. The layout prop controls whether the title is on top ("top") or on the side ("side"). Position the record count on the far right using flex-1 wrapper on filters.',
      'Infinite Scroll': 'For large datasets, implement virtual scrolling. Load 20 rows per scroll and display end message when all data is loaded. In production, use a virtualization library like react-window or @tanstack/react-virtual for React, and cdk-virtual-scroll for Angular/Ionic.',
      'Row Selection': 'Include checkboxes in the first column for row selection. Show checkboxes on hover and when rows are selected. Provide a master checkbox in the header for "select all" functionality.',
      'Action Buttons': 'Position CTAs in the last column, visible on hover or when rows are selected. Use the TableToolbarActions component to group action buttons on the right side of the toolbar.'
    },
    properties: [
      {
        property: 'variant',
        type: "'overview' | 'dense'",
        description: 'Determines the table style. "overview" for scannable data (56px rows), "dense" for data-heavy views (40px rows with striping).'
      },
      {
        property: 'showVerticalBorders',
        type: 'boolean (default: false)',
        description: 'Adds vertical borders to all columns except the last column. Use for dense tables with many columns.'
      },
      {
        property: 'onRowClick',
        type: '(row: Row<TData>) => void',
        description: 'Optional callback fired when a row is clicked. Adds cursor-pointer class to rows.'
      }
    ],
    accessibility: [
      'Ensure that tables have proper semantic HTML structure with `<thead>`, `<tbody>`, and `<caption>` elements when appropriate.',
      'Interactive elements within the table, such as checkboxes and buttons, must be keyboard accessible and have clear focus states.',
      'Provide descriptive `aria-label` attributes for interactive controls, especially for CTAs that appear on hover.',
      'Use `<th>` elements with proper scope attributes for column and row headers.',
      'When implementing sorting, ensure screen reader announcements clearly indicate the current sort state and direction.'
    ]
  }
};
