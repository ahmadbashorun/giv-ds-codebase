export const chipDocumentation = {
  name: 'Chip',
  description: 'Interactive labels that can be removed or selected, commonly used for filters and tags.',
  category: 'Data Display',
  examples: {
    react: `// React Implementation
import { Chip } from './ui/chip';
import { useState } from 'react';

function ChipExamples() {
  const [tags, setTags] = useState(['React', 'TypeScript', 'Tailwind']);

  return (
    <div className="space-y-6">
      {/* Basic chips */}
      <div className="flex gap-2 items-center">
        <Chip variant="neutral">Neutral</Chip>
        <Chip variant="blue">Blue</Chip>
        <Chip variant="success">Success</Chip>
        <Chip variant="warning">Warning</Chip>
        <Chip variant="error">Error</Chip>
      </div>

      {/* Removable chips */}
      <div className="flex gap-2 flex-wrap">
        {tags.map((tag) => (
          <Chip
            key={tag}
            variant="blue"
            onRemove={() => setTags(tags.filter(t => t !== tag))}
          >
            {tag}
          </Chip>
        ))}
      </div>

      {/* Size variants */}
      <div className="flex gap-2 items-center">
        <Chip variant="blue" size="sm">Small</Chip>
        <Chip variant="blue" size="md">Medium</Chip>
        <Chip variant="blue" size="lg">Large</Chip>
      </div>
    </div>
  );
}`,
    angular: `<!-- Angular Implementation -->
<div class="space-y-6">
  <!-- Basic chips -->
  <div class="flex gap-2 items-center">
    <button class="chip chip-neutral">Neutral</button>
    <button class="chip chip-blue">Blue</button>
    <button class="chip chip-success">Success</button>
  </div>

  <!-- Removable chips -->
  <div class="flex gap-2 flex-wrap">
    <button 
      *ngFor="let tag of tags" 
      class="chip chip-blue chip-removable"
      (click)="removeTag(tag)"
    >
      {{ tag }}
      <svg class="chip-remove-icon"><!-- X icon --></svg>
    </button>
  </div>
</div>

// Component.ts
export class ChipExample {
  tags = ['Angular', 'TypeScript', 'SCSS'];

  removeTag(tag: string) {
    this.tags = this.tags.filter(t => t !== tag);
  }
}`,
    ionic: `<!-- Ionic Implementation -->
<div class="ion-margin">
  <!-- Basic chips -->
  <ion-chip color="medium">Neutral</ion-chip>
  <ion-chip color="primary">Blue</ion-chip>
  <ion-chip color="success">Success</ion-chip>

  <!-- Removable chips -->
  <ion-chip *ngFor="let tag of tags" (ionRemove)="removeTag(tag)">
    {{ tag }}
    <ion-icon name="close-circle"></ion-icon>
  </ion-chip>
</div>`
  },
  guidelines: {
    overview: 'Chips are interactive elements that represent filters, tags, or selections. They can be removed or toggled.',
    properties: [
      {
        name: 'variant',
        type: '"neutral" | "blue" | "success" | "warning" | "error"',
        description: 'Color variant of the chip',
      },
      {
        name: 'size',
        type: '"sm" | "md" | "lg"',
        description: 'Size of the chip',
      },
      {
        name: 'onRemove',
        type: '() => void',
        description: 'Callback when remove button is clicked',
      },
    ],
    usage: [
      'Use chips for filters, tags, or selections',
      'Provide remove functionality when items can be deselected',
      'Use appropriate colors to indicate state or category',
      'Keep text concise (1-2 words)',
      'Apply hover states to indicate interactivity',
    ],
    accessibility: [
      'Chips should be keyboard accessible',
      'Provide clear focus indicators',
      'Use descriptive labels for screen readers',
      'Ensure sufficient color contrast',
    ],
  },
};

