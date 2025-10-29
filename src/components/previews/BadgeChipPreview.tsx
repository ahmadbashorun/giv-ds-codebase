import React from "react";
import { CheckCircle2, XCircle, AlertCircle, Info } from "lucide-react";
import { Badge } from "../ui/badge";
import { Chip } from "../ui/chip";

export function BadgeChipPreview() {
  const [chips, setChips] = React.useState(["Frontend", "Backend", "Full Stack"]);

  return (
    <div className="space-y-8">
      {/* Badges Section */}
      <div>
        <h6 className="h6-heading mb-4">Badges</h6>
        
        <div className="space-y-6">
          {/* Neutral Badges */}
          <div>
            <h6 className="h7-heading text-muted-foreground mb-3">Neutral</h6>
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex flex-wrap gap-2">
                <Badge variant="neutral" size="sm">Label</Badge>
                <Badge variant="neutral" size="md">Label</Badge>
                <Badge variant="neutral" size="lg">Label</Badge>
              </div>
              <span className="caption-small text-muted-foreground">Without Icon</span>
              <div className="flex flex-wrap gap-2">
                <Badge variant="neutral" size="sm">
                  <Info className="h-[14px] w-[14px]" />
                  Label
                </Badge>
                <Badge variant="neutral" size="md">
                  <Info className="h-[14px] w-[14px]" />
                  Label
                </Badge>
                <Badge variant="neutral" size="lg">
                  <Info className="h-4 w-4" />
                  Label
                </Badge>
              </div>
              <span className="caption-small text-muted-foreground">With Icon</span>
            </div>
          </div>

          {/* Blue Badges */}
          <div>
            <h6 className="h7-heading text-muted-foreground mb-3">Blue</h6>
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex flex-wrap gap-2">
                <Badge variant="blue" size="sm">Label</Badge>
                <Badge variant="blue" size="md">Label</Badge>
                <Badge variant="blue" size="lg">Label</Badge>
              </div>
              <span className="caption-small text-muted-foreground">Without Icon</span>
              <div className="flex flex-wrap gap-2">
                <Badge variant="blue" size="sm">
                  <Info className="h-[14px] w-[14px]" />
                  Label
                </Badge>
                <Badge variant="blue" size="md">
                  <Info className="h-[14px] w-[14px]" />
                  Label
                </Badge>
                <Badge variant="blue" size="lg">
                  <Info className="h-4 w-4" />
                  Label
                </Badge>
              </div>
              <span className="caption-small text-muted-foreground">With Icon</span>
            </div>
          </div>

          {/* Error Badges */}
          <div>
            <h6 className="h7-heading text-muted-foreground mb-3">Error</h6>
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex flex-wrap gap-2">
                <Badge variant="error" size="sm">Failed</Badge>
                <Badge variant="error" size="md">Failed</Badge>
                <Badge variant="error" size="lg">Failed</Badge>
              </div>
              <span className="caption-small text-muted-foreground">Without Icon</span>
              <div className="flex flex-wrap gap-2">
                <Badge variant="error" size="sm">
                  <XCircle className="h-[14px] w-[14px]" />
                  Failed
                </Badge>
                <Badge variant="error" size="md">
                  <XCircle className="h-[14px] w-[14px]" />
                  Failed
                </Badge>
                <Badge variant="error" size="lg">
                  <XCircle className="h-4 w-4" />
                  Failed
                </Badge>
              </div>
              <span className="caption-small text-muted-foreground">With Icon</span>
            </div>
          </div>

          {/* Success Badges */}
          <div>
            <h6 className="h7-heading text-muted-foreground mb-3">Success</h6>
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex flex-wrap gap-2">
                <Badge variant="success" size="sm">Completed</Badge>
                <Badge variant="success" size="md">Completed</Badge>
                <Badge variant="success" size="lg">Completed</Badge>
              </div>
              <span className="caption-small text-muted-foreground">Without Icon</span>
              <div className="flex flex-wrap gap-2">
                <Badge variant="success" size="sm">
                  <CheckCircle2 className="h-[14px] w-[14px]" />
                  Completed
                </Badge>
                <Badge variant="success" size="md">
                  <CheckCircle2 className="h-[14px] w-[14px]" />
                  Completed
                </Badge>
                <Badge variant="success" size="lg">
                  <CheckCircle2 className="h-4 w-4" />
                  Completed
                </Badge>
              </div>
              <span className="caption-small text-muted-foreground">With Icon</span>
            </div>
          </div>

          {/* Warning Badges */}
          <div>
            <h6 className="h7-heading text-muted-foreground mb-3">Warning</h6>
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex flex-wrap gap-2">
                <Badge variant="warning" size="sm">Pending</Badge>
                <Badge variant="warning" size="md">Pending</Badge>
                <Badge variant="warning" size="lg">Pending</Badge>
              </div>
              <span className="caption-small text-muted-foreground">Without Icon</span>
              <div className="flex flex-wrap gap-2">
                <Badge variant="warning" size="sm">
                  <AlertCircle className="h-[14px] w-[14px]" />
                  Pending
                </Badge>
                <Badge variant="warning" size="md">
                  <AlertCircle className="h-[14px] w-[14px]" />
                  Pending
                </Badge>
                <Badge variant="warning" size="lg">
                  <AlertCircle className="h-4 w-4" />
                  Pending
                </Badge>
              </div>
              <span className="caption-small text-muted-foreground">With Icon</span>
            </div>
          </div>
        </div>
      </div>

      {/* Chips Section */}
      <div>
        <h6 className="h6-heading mb-4">Chips</h6>
        
        <div className="space-y-6">
          {/* Neutral Chips */}
          <div>
            <h6 className="h7-heading text-muted-foreground mb-3">Neutral</h6>
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex flex-wrap gap-2">
                <Chip variant="neutral" size="sm">Label</Chip>
                <Chip variant="neutral" size="md">Label</Chip>
                <Chip variant="neutral" size="lg">Label</Chip>
              </div>
              <span className="caption-small text-muted-foreground">Without Remove</span>
              <div className="flex flex-wrap gap-2">
                <Chip 
                  variant="neutral" 
                  size="sm"
                  onRemove={() => console.log('Removed')}
                >
                  Label
                </Chip>
                <Chip 
                  variant="neutral" 
                  size="md"
                  onRemove={() => console.log('Removed')}
                >
                  Label
                </Chip>
                <Chip 
                  variant="neutral" 
                  size="lg"
                  onRemove={() => console.log('Removed')}
                >
                  Label
                </Chip>
              </div>
              <span className="caption-small text-muted-foreground">With Remove</span>
            </div>
          </div>

          {/* Blue Chips */}
          <div>
            <h6 className="h7-heading text-muted-foreground mb-3">Blue</h6>
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex flex-wrap gap-2">
                <Chip variant="blue" size="sm">Label</Chip>
                <Chip variant="blue" size="md">Label</Chip>
                <Chip variant="blue" size="lg">Label</Chip>
              </div>
              <span className="caption-small text-muted-foreground">Without Remove</span>
              <div className="flex flex-wrap gap-2">
                <Chip 
                  variant="blue" 
                  size="sm"
                  onRemove={() => console.log('Removed')}
                >
                  Label
                </Chip>
                <Chip 
                  variant="blue" 
                  size="md"
                  onRemove={() => console.log('Removed')}
                >
                  Label
                </Chip>
                <Chip 
                  variant="blue" 
                  size="lg"
                  onRemove={() => console.log('Removed')}
                >
                  Label
                </Chip>
              </div>
              <span className="caption-small text-muted-foreground">With Remove</span>
            </div>
          </div>

          {/* Removable Chip Example */}
          <div>
            <h6 className="h7-heading text-muted-foreground mb-3">Interactive Chips</h6>
            <div className="flex flex-wrap gap-2">
              {chips.map((chip, index) => (
                <Chip 
                  key={chip} 
                  variant="blue" 
                  size="md"
                  onRemove={() => setChips(chips.filter((_, i) => i !== index))}
                >
                  {chip}
                </Chip>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
