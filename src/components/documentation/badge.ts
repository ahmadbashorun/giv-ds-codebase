export const badgeDocumentation = {
  name: 'Badge',
  description: 'Status indicators and labels for displaying small amounts of information.',
  category: 'Data Display',
  examples: {
    react: `// React Implementation
import { Badge } from './ui/badge';
import { Info, CheckCircle2, XCircle, AlertCircle } from 'lucide-react';

function BadgeExamples() {
  return (
    <div className="space-y-6">
      {/* Size variants */}
      <div className="flex gap-2 items-center">
        <Badge variant="neutral" size="sm">Small</Badge>
        <Badge variant="neutral" size="md">Medium</Badge>
        <Badge variant="neutral" size="lg">Large</Badge>
      </div>

      {/* Color variants */}
      <div className="flex gap-2 items-center">
        <Badge variant="neutral">Neutral</Badge>
        <Badge variant="blue">Blue</Badge>
        <Badge variant="success">Success</Badge>
        <Badge variant="warning">Warning</Badge>
        <Badge variant="error">Error</Badge>
      </div>

      {/* With icons */}
      <div className="flex gap-2 items-center">
        <Badge variant="blue">
          <Info className="h-[14px] w-[14px]" />
          Info
        </Badge>
        <Badge variant="success">
          <CheckCircle2 className="h-[14px] w-[14px]" />
          Completed
        </Badge>
        <Badge variant="error">
          <XCircle className="h-[14px] w-[14px]" />
          Failed
        </Badge>
        <Badge variant="warning">
          <AlertCircle className="h-[14px] w-[14px]" />
          Pending
        </Badge>
      </div>
    </div>
  );
}`,
    angular: `<!-- Angular Implementation -->
<div class="space-y-6">
  <!-- Size variants -->
  <div class="flex gap-2 items-center">
    <span class="badge badge-neutral badge-sm">Small</span>
    <span class="badge badge-neutral badge-md">Medium</span>
    <span class="badge badge-neutral badge-lg">Large</span>
  </div>

  <!-- Color variants -->
  <div class="flex gap-2 items-center">
    <span class="badge badge-neutral">Neutral</span>
    <span class="badge badge-blue">Blue</span>
    <span class="badge badge-success">Success</span>
    <span class="badge badge-warning">Warning</span>
    <span class="badge badge-error">Error</span>
  </div>

  <!-- With icons -->
  <div class="flex gap-2 items-center">
    <span class="badge badge-blue">
      <svg class="h-[14px] w-[14px]"><!-- Info icon --></svg>
      Info
    </span>
    <span class="badge badge-success">
      <svg class="h-[14px] w-[14px]"><!-- CheckCircle icon --></svg>
      Completed
    </span>
  </div>
</div>`,
    ionic: `<!-- Ionic Implementation -->
<div class="ion-margin">
  <!-- Size variants -->
  <div class="flex gap-2 items-center">
    <ion-badge color="medium" class="badge-sm">Small</ion-badge>
    <ion-badge color="medium">Medium</ion-badge>
    <ion-badge color="medium" class="badge-lg">Large</ion-badge>
  </div>

  <!-- Color variants -->
  <div class="flex gap-2 items-center">
    <ion-badge color="medium">Neutral</ion-badge>
    <ion-badge color="primary">Blue</ion-badge>
    <ion-badge color="success">Success</ion-badge>
    <ion-badge color="warning">Warning</ion-badge>
    <ion-badge color="danger">Error</ion-badge>
  </div>
</div>`
  },
  guidelines: {
    overview: 'Badges are small indicators used to display status, categories, or metadata. They should be concise and visually distinct.',
    properties: [
      {
        name: 'variant',
        type: '"neutral" | "blue" | "success" | "warning" | "error"',
        description: 'Color variant of the badge',
      },
      {
        name: 'size',
        type: '"sm" | "md" | "lg"',
        description: 'Size of the badge',
      },
      {
        name: 'asChild',
        type: 'boolean (default: false)',
        description: 'Render badge as child component',
      },
    ],
    usage: [
      'Use badges for status indicators, categories, or counts',
      'Keep badge text concise (1-2 words)',
      'Use color variants to convey meaning (success, error, warning)',
      'Include icons only when they add clarity',
      'Apply appropriate sizes based on context',
    ],
    accessibility: [
      'Badges are decorative by default and don\'t require ARIA labels',
      'If used as interactive elements, provide keyboard navigation',
      'Ensure sufficient color contrast (WCAG AA)',
    ],
  },
};

