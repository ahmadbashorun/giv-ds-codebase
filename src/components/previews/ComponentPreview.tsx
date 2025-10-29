import React from 'react';
import { ButtonPreview } from './ButtonPreview';
import { InputPreview } from './InputPreview';
import { ModalPreview } from './ModalPreview';
import { CheckboxPreview } from './CheckboxPreview';
import { RadioPreview } from './RadioPreview';
import { SwitchPreview } from './SwitchPreview';
import { SelectPreview } from './SelectPreview';
import { BadgeChipPreview } from './BadgeChipPreview';
import { DatePickerPreview } from './DatePickerPreview';
import { GenericPreview } from './GenericPreview';

interface ComponentPreviewProps {
  componentId: string;
}

export function ComponentPreview({ componentId }: ComponentPreviewProps) {
  switch (componentId) {
    case 'button':
      return <ButtonPreview />;
    case 'input':
      return <InputPreview />;
    case 'modal':
      return <ModalPreview />;
    case 'checkbox':
      return <CheckboxPreview />;
    case 'radio':
      return <RadioPreview />;
    case 'switch':
      return <SwitchPreview />;
    case 'select':
      return <SelectPreview />;
    case 'datepicker':
      return <DatePickerPreview />;
    case 'badge':
    case 'chip':
      return <BadgeChipPreview />;
    case 'card':
    case 'alert':
      return <GenericPreview componentId={componentId} />;
    default:
      return null;
  }
}