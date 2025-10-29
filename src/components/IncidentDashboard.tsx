import React, { useState, useMemo } from "react";
import { Card } from "./ui/card";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import {
  Search,
  Filter,
  AlertTriangle,
  Clock,
  CheckCircle2,
  XCircle,
  TrendingUp,
} from "lucide-react";

interface Incident {
  id: string;
  title: string;
  description: string;
  status: "open" | "in-progress" | "resolved" | "closed";
  priority: "low" | "medium" | "high" | "critical";
  reportedBy: string;
  assignedTo: string;
  createdAt: string;
  updatedAt: string;
  category:
    | "client-care"
    | "shift-management"
    | "billing"
    | "system"
    | "compliance";
}

const mockIncidents: Incident[] = [
  {
    id: "INC-2024-001",
    title: "Medication administration discrepancy",
    description:
      "Caregiver reported incorrect medication dosage recorded for client Sarah Johnson",
    status: "open",
    priority: "high",
    reportedBy: "Jennifer Martinez",
    assignedTo: "Dr. Sarah Wilson",
    createdAt: "2024-07-21T08:30:00Z",
    updatedAt: "2024-07-21T08:30:00Z",
    category: "client-care",
  },
  {
    id: "INC-2024-002",
    title: "Missed shift coverage",
    description:
      "No caregiver showed up for scheduled shift at Riverside Community Center",
    status: "in-progress",
    priority: "critical",
    reportedBy: "Mark Thompson",
    assignedTo: "Lisa Chen",
    createdAt: "2024-07-21T06:15:00Z",
    updatedAt: "2024-07-21T09:45:00Z",
    category: "shift-management",
  },
  {
    id: "INC-2024-003",
    title: "Billing system timeout error",
    description:
      "Claims submission failing due to system timeout issues",
    status: "resolved",
    priority: "medium",
    reportedBy: "System Monitor",
    assignedTo: "IT Support",
    createdAt: "2024-07-20T14:22:00Z",
    updatedAt: "2024-07-21T07:30:00Z",
    category: "system",
  },
  {
    id: "INC-2024-004",
    title: "Documentation compliance issue",
    description:
      "Missing required signatures on multiple care plan documents",
    status: "open",
    priority: "medium",
    reportedBy: "Compliance Team",
    assignedTo: "Maria Rodriguez",
    createdAt: "2024-07-20T11:45:00Z",
    updatedAt: "2024-07-20T11:45:00Z",
    category: "compliance",
  },
  {
    id: "INC-2024-005",
    title: "Client fall incident",
    description:
      "Client Michael Davis fell in the bathroom at 3:45 PM, no injuries reported",
    status: "closed",
    priority: "high",
    reportedBy: "Alex Johnson",
    assignedTo: "Quality Assurance",
    createdAt: "2024-07-19T15:45:00Z",
    updatedAt: "2024-07-20T16:20:00Z",
    category: "client-care",
  },
];

const statusConfig = {
  open: {
    label: "Open",
    color: "text-error",
    bgColor: "bg-error",
    icon: AlertTriangle,
  },
  "in-progress": {
    label: "In Progress",
    color: "text-warning",
    bgColor: "bg-warning",
    icon: Clock,
  },
  resolved: {
    label: "Resolved",
    color: "text-success",
    bgColor: "bg-success",
    icon: CheckCircle2,
  },
  closed: {
    label: "Closed",
    color: "text-metadata",
    bgColor: "bg-muted",
    icon: XCircle,
  },
};

const priorityConfig = {
  low: { label: "Low", color: "text-success" },
  medium: { label: "Medium", color: "text-warning" },
  high: { label: "High", color: "text-error" },
  critical: { label: "Critical", color: "text-error" },
};

const categoryConfig = {
  "client-care": { label: "Client Care" },
  "shift-management": { label: "Shift Management" },
  billing: { label: "Billing" },
  system: { label: "System" },
  compliance: { label: "Compliance" },
};

export function IncidentDashboard() {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] =
    useState<string>("all");
  const [priorityFilter, setPriorityFilter] =
    useState<string>("all");
  const [categoryFilter, setCategoryFilter] =
    useState<string>("all");

  const filteredIncidents = useMemo(() => {
    return mockIncidents.filter((incident) => {
      const matchesSearch =
        incident.title
          .toLowerCase()
          .includes(searchQuery.toLowerCase()) ||
        incident.description
          .toLowerCase()
          .includes(searchQuery.toLowerCase()) ||
        incident.id
          .toLowerCase()
          .includes(searchQuery.toLowerCase());

      const matchesStatus =
        statusFilter === "all" ||
        incident.status === statusFilter;
      const matchesPriority =
        priorityFilter === "all" ||
        incident.priority === priorityFilter;
      const matchesCategory =
        categoryFilter === "all" ||
        incident.category === categoryFilter;

      return (
        matchesSearch &&
        matchesStatus &&
        matchesPriority &&
        matchesCategory
      );
    });
  }, [
    searchQuery,
    statusFilter,
    priorityFilter,
    categoryFilter,
  ]);

  const metrics = useMemo(() => {
    const total = mockIncidents.length;
    const open = mockIncidents.filter(
      (i) => i.status === "open",
    ).length;
    const inProgress = mockIncidents.filter(
      (i) => i.status === "in-progress",
    ).length;
    const critical = mockIncidents.filter(
      (i) => i.priority === "critical",
    ).length;

    return { total, open, inProgress, critical };
  }, []);

  const formatDateTime = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });
  };

  const getRelativeTime = (dateString: string) => {
    const now = new Date();
    const date = new Date(dateString);
    const diffInHours = Math.floor(
      (now.getTime() - date.getTime()) / (1000 * 60 * 60),
    );

    if (diffInHours < 1) return "just now";
    if (diffInHours < 24) return `${diffInHours} hours ago`;
    const diffInDays = Math.floor(diffInHours / 24);
    if (diffInDays < 7) return `${diffInDays} days ago`;
    return formatDateTime(dateString);
  };

  return (
    <div
      className="p-6 space-y-6"
      style={{ backgroundColor: "var(--background-page)" }}
    >
      {/* Header */}
      <div className="space-y-2">
        <h1 className="h2-heading text-[32px]">Incident Management</h1>
        <p className="paragraph-medium-regular">
          Monitor and manage operational incidents across your
          organization
        </p>
      </div>

      {/* Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card
          className="p-6 border"
          style={{ borderColor: "var(--border-card)" }}
        >
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <p className="caption-large">Total Incidents</p>
              <p className="h4-heading">{metrics.total}</p>
            </div>
            <div
              className="p-3 rounded-lg"
              style={{ backgroundColor: "var(--accent)" }}
            >
              <TrendingUp
                className="h-5 w-5"
                style={{ color: "var(--accent-foreground)" }}
              />
            </div>
          </div>
        </Card>

        <Card
          className="p-6 border"
          style={{ borderColor: "var(--border-card)" }}
        >
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <p className="caption-large">Open</p>
              <p className="h4-heading text-error">
                {metrics.open}
              </p>
            </div>
            <div className="p-3 rounded-lg bg-error">
              <AlertTriangle className="h-5 w-5 text-error" />
            </div>
          </div>
        </Card>

        <Card
          className="p-6 border"
          style={{ borderColor: "var(--border-card)" }}
        >
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <p className="caption-large">In Progress</p>
              <p className="h4-heading text-warning">
                {metrics.inProgress}
              </p>
            </div>
            <div className="p-3 rounded-lg bg-warning">
              <Clock className="h-5 w-5 text-warning" />
            </div>
          </div>
        </Card>

        <Card
          className="p-6 border"
          style={{ borderColor: "var(--border-card)" }}
        >
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <p className="caption-large">Critical</p>
              <p className="h4-heading text-error">
                {metrics.critical}
              </p>
            </div>
            <div className="p-3 rounded-lg bg-error">
              <AlertTriangle className="h-5 w-5 text-error" />
            </div>
          </div>
        </Card>
      </div>

      {/* Filters and Search */}
      <Card
        className="p-6 border"
        style={{ borderColor: "var(--border-card)" }}
      >
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search
              className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4"
              style={{ color: "var(--input-placeholder)" }}
            />
            <Input
              placeholder="Search incidents..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>

          <div className="flex gap-3">
            <Select
              value={statusFilter}
              onValueChange={setStatusFilter}
            >
              <SelectTrigger className="w-[140px]">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="open">Open</SelectItem>
                <SelectItem value="in-progress">
                  In Progress
                </SelectItem>
                <SelectItem value="resolved">
                  Resolved
                </SelectItem>
                <SelectItem value="closed">Closed</SelectItem>
              </SelectContent>
            </Select>

            <Select
              value={priorityFilter}
              onValueChange={setPriorityFilter}
            >
              <SelectTrigger className="w-[140px]">
                <SelectValue placeholder="Priority" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">
                  All Priority
                </SelectItem>
                <SelectItem value="critical">
                  Critical
                </SelectItem>
                <SelectItem value="high">High</SelectItem>
                <SelectItem value="medium">Medium</SelectItem>
                <SelectItem value="low">Low</SelectItem>
              </SelectContent>
            </Select>

            <Select
              value={categoryFilter}
              onValueChange={setCategoryFilter}
            >
              <SelectTrigger className="w-[160px]">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">
                  All Categories
                </SelectItem>
                <SelectItem value="client-care">
                  Client Care
                </SelectItem>
                <SelectItem value="shift-management">
                  Shift Management
                </SelectItem>
                <SelectItem value="billing">Billing</SelectItem>
                <SelectItem value="system">System</SelectItem>
                <SelectItem value="compliance">
                  Compliance
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </Card>

      {/* Incidents Table */}
      <Card
        className="border"
        style={{ borderColor: "var(--border-card)" }}
      >
        <div
          className="p-6 border-b"
          style={{ borderColor: "var(--border-divider)" }}
        >
          <div className="flex items-center justify-between">
            <h3 className="h5-heading">
              Incidents ({filteredIncidents.length})
            </h3>
            <Button className="gap-2">
              <AlertTriangle className="h-4 w-4" />
              Report Incident
            </Button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="paragraph-small-medium">
                  ID
                </TableHead>
                <TableHead className="paragraph-small-medium">
                  Title
                </TableHead>
                <TableHead className="paragraph-small-medium">
                  Status
                </TableHead>
                <TableHead className="paragraph-small-medium">
                  Priority
                </TableHead>
                <TableHead className="paragraph-small-medium">
                  Category
                </TableHead>
                <TableHead className="paragraph-small-medium">
                  Assigned To
                </TableHead>
                <TableHead className="paragraph-small-medium">
                  Updated
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredIncidents.map((incident) => {
                const StatusIcon =
                  statusConfig[incident.status].icon;
                return (
                  <TableRow
                    key={incident.id}
                    className="cursor-pointer hover:bg-card-hover"
                  >
                    <TableCell
                      className="paragraph-small-medium"
                      style={{
                        color: "var(--text-body-dynamic)",
                      }}
                    >
                      {incident.id}
                    </TableCell>
                    <TableCell className="max-w-xs">
                      <div className="space-y-1">
                        <p className="paragraph-small-medium truncate">
                          {incident.title}
                        </p>
                        <p className="caption-medium truncate">
                          {incident.description}
                        </p>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge
                        variant="secondary"
                        className={`gap-1 ${statusConfig[incident.status].color}`}
                        style={{
                          backgroundColor: `var(--status-${incident.status === "in-progress" ? "warning" : incident.status === "open" ? "error" : incident.status === "resolved" ? "success" : "error"}-bg)`,
                        }}
                      >
                        <StatusIcon className="h-3 w-3" />
                        {statusConfig[incident.status].label}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge
                        variant="outline"
                        className={
                          priorityConfig[incident.priority]
                            .color
                        }
                      >
                        {
                          priorityConfig[incident.priority]
                            .label
                        }
                      </Badge>
                    </TableCell>
                    <TableCell className="paragraph-small-regular">
                      {categoryConfig[incident.category].label}
                    </TableCell>
                    <TableCell className="paragraph-small-regular">
                      {incident.assignedTo}
                    </TableCell>
                    <TableCell className="caption-medium">
                      {getRelativeTime(incident.updatedAt)}
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </div>
      </Card>
    </div>
  );
}