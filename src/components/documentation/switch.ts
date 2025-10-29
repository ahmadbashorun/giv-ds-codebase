export const switchDocumentation = {
  name: 'Switch',
  description: 'A toggle control that allows users to switch between two states: on and off. Commonly used for binary settings and preferences.',
  category: 'Form Controls',
  
  designPrinciples: [
    'Clear visual distinction between on/off states',
    'Immediate feedback when toggled',
    'Consistent with system toggle conventions',
    'Accessible to all users including keyboard and screen reader users'
  ],
  
  usageGuidelines: {
    when: [
      'Enabling/disabling features or settings',
      'Turning on/off notifications or alerts',
      'Controlling binary preferences',
      'Activating/deactivating system functions'
    ],
    avoid: [
      'For multiple choice selections (use radio buttons instead)',
      'When the action requires confirmation',
      'For actions that are not instantly reversible',
      'In forms where switches might be confused with checkboxes'
    ]
  },
  
  variants: {
    sizes: [
      {
        name: 'Small',
        height: '20px',
        width: '36px',
        usage: 'Compact interfaces, table cells, inline settings'
      },
      {
        name: 'Medium',
        height: '24px', 
        width: '44px',
        usage: 'Default size for most interfaces, settings panels'
      }
    ],
    states: [
      'On/Checked - Feature is enabled',
      'Off/Unchecked - Feature is disabled', 
      'Disabled On - Feature is enabled but cannot be changed',
      'Disabled Off - Feature is disabled and cannot be changed'
    ]
  },

  accessibility: [
    'Full keyboard navigation support with Space/Enter keys',
    'Screen reader announces current state and label',
    'Clear focus indicators for keyboard users',
    'ARIA attributes for proper role and state communication',
    'Adequate color contrast for all visual states'
  ],

  react: {
    basic: `import { Switch } from './components/ui/switch';
import { Label } from './components/ui/label';

function SettingsExample() {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  
  return (
    <div className="flex items-center space-x-3">
      <Switch
        id="notifications"
        checked={notificationsEnabled}
        onCheckedChange={setNotificationsEnabled}
      />
      <Label htmlFor="notifications">Enable push notifications</Label>
    </div>
  );
}`,

    sizes: `// Small size (20px height, 36px width)
<Switch 
  id="small-switch" 
  className="h-5 w-9"
  checked={isSmallOn}
  onCheckedChange={setIsSmallOn}
/>

// Medium size (24px height, 44px width) - Default
<Switch 
  id="medium-switch" 
  checked={isMediumOn}
  onCheckedChange={setIsMediumOn}
/>`,

    withLabels: `// Switch with label and description
<div className="flex items-start space-x-3">
  <Switch
    id="auto-scheduling"
    checked={autoSchedulingEnabled}
    onCheckedChange={setAutoSchedulingEnabled}
    className="mt-0.5"
  />
  <div className="flex flex-col">
    <Label htmlFor="auto-scheduling" className="paragraph-small-medium cursor-pointer">
      Automatic shift scheduling
    </Label>
    <span className="caption-large text-muted-foreground">
      Automatically assign shifts based on caregiver availability
    </span>
  </div>
</div>

// Switch on right side
<div className="flex items-center justify-between">
  <Label htmlFor="gps-tracking" className="paragraph-small-medium cursor-pointer">
    GPS tracking
  </Label>
  <Switch
    id="gps-tracking"
    checked={gpsEnabled}
    onCheckedChange={setGpsEnabled}
  />
</div>`,

    controlled: `function CaregiverSettings() {
  const [settings, setSettings] = useState({
    notifications: true,
    gpsTracking: false,
    emergencyAlerts: true,
    autoClockOut: false
  });

  const handleSettingChange = (setting: string, value: boolean) => {
    setSettings(prev => ({ ...prev, [setting]: value }));
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <Label htmlFor="notifications">Push Notifications</Label>
        <Switch
          id="notifications"
          checked={settings.notifications}
          onCheckedChange={(value) => handleSettingChange('notifications', value)}
        />
      </div>
      
      <div className="flex items-center justify-between">
        <Label htmlFor="gps">GPS Tracking</Label>
        <Switch
          id="gps"
          checked={settings.gpsTracking}
          onCheckedChange={(value) => handleSettingChange('gpsTracking', value)}
        />
      </div>
      
      <div className="flex items-center justify-between">
        <Label htmlFor="emergency">Emergency Alerts</Label>
        <Switch
          id="emergency"
          checked={settings.emergencyAlerts}
          onCheckedChange={(value) => handleSettingChange('emergencyAlerts', value)}
        />
      </div>
    </div>
  );
}`,

    disabled: `// Disabled in on state
<Switch 
  id="disabled-on"
  checked={true}
  disabled
/>

// Disabled in off state  
<Switch 
  id="disabled-off"
  checked={false}
  disabled
/>`
  },

  angular: {
    basic: `import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-settings',
  template: \`
    <div class="flex items-center space-x-3">
      <input 
        id="notifications"
        type="checkbox"
        [(ngModel)]="notificationsEnabled"
        class="giv-switch"
      />
      <label for="notifications" class="paragraph-small-medium cursor-pointer">
        Enable push notifications
      </label>
    </div>
  \`,
  imports: [FormsModule]
})
export class SettingsComponent {
  notificationsEnabled = true;
}`,

    sizes: `<!-- Small size -->
<input 
  type="checkbox"
  class="giv-switch giv-switch-sm"
  [(ngModel)]="isSmallOn"
/>

<!-- Medium size (default) -->
<input 
  type="checkbox" 
  class="giv-switch"
  [(ngModel)]="isMediumOn"
/>`,

    withLabels: `<!-- Switch with label and description -->
<div class="flex items-start space-x-3">
  <input
    id="auto-scheduling"
    type="checkbox"
    [(ngModel)]="autoSchedulingEnabled"
    class="giv-switch mt-0.5"
  />
  <div class="flex flex-col">
    <label for="auto-scheduling" class="paragraph-small-medium cursor-pointer">
      Automatic shift scheduling
    </label>
    <span class="caption-large text-muted-foreground">
      Automatically assign shifts based on caregiver availability
    </span>
  </div>
</div>

<!-- Switch on right side -->
<div class="flex items-center justify-between">
  <label for="gps-tracking" class="paragraph-small-medium cursor-pointer">
    GPS tracking
  </label>
  <input
    id="gps-tracking"
    type="checkbox"
    [(ngModel)]="gpsEnabled"
    class="giv-switch"
  />
</div>`
  },

  ionic: {
    basic: `<ion-item>
  <ion-toggle 
    slot="end"
    [(ngModel)]="notificationsEnabled"
    class="giv-toggle">
  </ion-toggle>
  <ion-label class="paragraph-small-medium">
    Enable push notifications
  </ion-label>
</ion-item>`,

    sizes: `<!-- Small size -->
<ion-toggle class="giv-toggle giv-toggle-sm" [(ngModel)]="isSmallOn"></ion-toggle>

<!-- Medium size (default) -->
<ion-toggle class="giv-toggle" [(ngModel)]="isMediumOn"></ion-toggle>`,

    withLabels: `<ion-list class="giv-settings-list">
  <ion-item>
    <ion-toggle 
      slot="end"
      [(ngModel)]="autoSchedulingEnabled"
      class="giv-toggle">
    </ion-toggle>
    <ion-label>
      <h3 class="paragraph-small-medium">Automatic shift scheduling</h3>
      <p class="caption-large text-muted-foreground">
        Automatically assign shifts based on caregiver availability
      </p>
    </ion-label>
  </ion-item>
  
  <ion-item>
    <ion-toggle 
      slot="end"
      [(ngModel)]="gpsEnabled"
      class="giv-toggle">
    </ion-toggle>
    <ion-label class="paragraph-small-medium">
      GPS tracking
    </ion-label>
  </ion-item>
</ion-list>`
  },

  examples: {
    react: `import { Switch } from './components/ui/switch';
import { Label } from './components/ui/label';

function SettingsExample() {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  
  return (
    <div className="flex items-center space-x-3">
      <Switch
        id="notifications"
        checked={notificationsEnabled}
        onCheckedChange={setNotificationsEnabled}
      />
      <Label htmlFor="notifications">Enable push notifications</Label>
    </div>
  );
}`,

    angular: `import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-settings',
  template: \`
    <div class="flex items-center space-x-3">
      <input 
        id="notifications"
        type="checkbox"
        [(ngModel)]="notificationsEnabled"
        class="giv-switch"
      />
      <label for="notifications" class="paragraph-small-medium cursor-pointer">
        Enable push notifications
      </label>
    </div>
  \`,
  imports: [FormsModule]
})
export class SettingsComponent {
  notificationsEnabled = true;
}`,

    ionic: `<ion-item>
  <ion-toggle 
    slot="end"
    [(ngModel)]="notificationsEnabled"
    class="giv-toggle">
  </ion-toggle>
  <ion-label class="paragraph-small-medium">
    Enable push notifications
  </ion-label>
</ion-item>`
  },

  css: `/* Switch Component Styles */
.giv-switch {
  /* Base switch styles */
  appearance: none;
  display: inline-flex;
  align-items: center;
  height: 24px; /* Medium size */
  width: 44px;
  border-radius: 9999px;
  border: 2px solid transparent;
  background-color: var(--muted);
  cursor: pointer;
  transition: all 0.2s ease;
  position: relative;
  outline: none;
}

.giv-switch::before {
  /* Switch thumb */
  content: '';
  display: block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: var(--background);
  box-shadow: var(--elevation-sm);
  transition: transform 0.2s ease;
  transform: translateX(2px);
}

.giv-switch:checked {
  background-color: var(--primary);
}

.giv-switch:checked::before {
  transform: translateX(22px);
}

.giv-switch:focus-visible {
  ring: 2px;
  ring-color: var(--primary);
  ring-opacity: 0.2;
  ring-offset: 0;
}

.giv-switch:disabled {
  cursor: not-allowed;
  opacity: 0.5;
}

/* Small size variant */
.giv-switch-sm {
  height: 20px;
  width: 36px;
}

.giv-switch-sm::before {
  width: 16px;
  height: 16px;
  transform: translateX(2px);
}

.giv-switch-sm:checked::before {
  transform: translateX(18px);
}

/* Ionic Toggle Styles */
.giv-toggle {
  --background: var(--muted);
  --background-checked: var(--primary);
  --handle-background: var(--background);
  --handle-background-checked: var(--background);
  --border-radius: 9999px;
  --handle-border-radius: 50%;
}

.giv-toggle-sm {
  --width: 36px;
  --height: 20px;
  --handle-width: 16px;
  --handle-height: 16px;
}`
};