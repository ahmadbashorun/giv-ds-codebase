// Import documentation directly to avoid potential import issues
import { buttonDocumentation } from '../documentation/button';
import { cardDocumentation } from '../documentation/card';
import { alertDocumentation } from '../documentation/alert';
import { inputDocumentation } from '../documentation/input';
import { modalDocumentation } from '../documentation/modal';
import { checkboxDocumentation } from '../documentation/checkbox';
import { radioDocumentation } from '../documentation/radio';
import { switchDocumentation } from '../documentation/switch';
import { selectDocumentation } from '../documentation/select';
import { datepickerDocumentation } from '../documentation/datepicker';
import { tableDocumentation } from '../documentation/table';
import { badgeDocumentation } from '../documentation/badge';
import { chipDocumentation } from '../documentation/chip';

// Simple documentation registry to avoid complex imports
export const componentData = {
  button: buttonDocumentation,
  card: cardDocumentation,
  alert: alertDocumentation,
  input: inputDocumentation,
  modal: modalDocumentation,
  checkbox: checkboxDocumentation,
  radio: radioDocumentation,
  switch: switchDocumentation,
  select: selectDocumentation,
  datepicker: datepickerDocumentation,
  table: tableDocumentation,
  badge: badgeDocumentation,
  chip: chipDocumentation
};

export type ComponentId = keyof typeof componentData;