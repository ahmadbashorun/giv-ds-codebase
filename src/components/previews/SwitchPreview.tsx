import React, { useState } from 'react';
import { Switch } from '../ui/switch';
import { Label } from '../ui/label';
import exampleImage from 'figma:asset/1336a8ccb7a5d7334d518273fb7b3ca2cebdf72f.png';

export function SwitchPreview() {
  const [formData, setFormData] = useState({
    notificationsEnabled: true,
    autoClockOut: false,
    emergencyAlerts: true,
    gpsTracking: false,
    weeklySummary: true,
    mobileAccess: false
  });

  const handleSwitchChange = (field: string, value: boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="space-y-8 max-w-2xl">

      {/* Switch Sizes */}
      <div className="space-y-4">
        <h4 className="h6-heading">Switch Sizes</h4>
        <div className="grid grid-cols-2 gap-8">
          {/* Small Size */}
          <div className="space-y-4">
            <h5 className="h7-heading">Small</h5>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Switch 
                  id="small-on" 
                  defaultChecked 
                  size="sm"
                />
                <Label htmlFor="small-on" className="paragraph-small-medium cursor-pointer">Switch On</Label>
              </div>
              
              <div className="flex items-center space-x-3">
                <Switch 
                  id="small-off" 
                  defaultChecked={false}
                  size="sm"
                />
                <Label htmlFor="small-off" className="paragraph-small-medium cursor-pointer">Switch Off</Label>
              </div>
              
              <div className="flex items-center space-x-3">
                <Switch 
                  id="small-disabled-on" 
                  defaultChecked 
                  disabled
                  size="sm"
                />
                <Label htmlFor="small-disabled-on" className="paragraph-small-medium text-muted-foreground cursor-not-allowed">Disabled On</Label>
              </div>
              
              <div className="flex items-center space-x-3">
                <Switch 
                  id="small-disabled-off" 
                  defaultChecked={false}
                  disabled
                  size="sm"
                />
                <Label htmlFor="small-disabled-off" className="paragraph-small-medium text-muted-foreground cursor-not-allowed">Disabled Off</Label>
              </div>
            </div>
          </div>

          {/* Medium Size */}
          <div className="space-y-4">
            <h5 className="h7-heading">Medium</h5>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Switch 
                  id="medium-on" 
                  defaultChecked 
                  size="md"
                  showCheck
                />
                <Label htmlFor="medium-on" className="paragraph-small-medium cursor-pointer">Switch On</Label>
              </div>
              
              <div className="flex items-center space-x-3">
                <Switch 
                  id="medium-off" 
                  defaultChecked={false}
                  size="md"
                />
                <Label htmlFor="medium-off" className="paragraph-small-medium cursor-pointer">Switch Off</Label>
              </div>
              
              <div className="flex items-center space-x-3">
                <Switch 
                  id="medium-disabled-on" 
                  defaultChecked 
                  disabled
                  size="md"
                  showCheck
                />
                <Label htmlFor="medium-disabled-on" className="paragraph-small-medium text-muted-foreground cursor-not-allowed">Disabled On</Label>
              </div>
              
              <div className="flex items-center space-x-3">
                <Switch 
                  id="medium-disabled-off" 
                  defaultChecked={false}
                  disabled
                  size="md"
                />
                <Label htmlFor="medium-disabled-off" className="paragraph-small-medium text-muted-foreground cursor-not-allowed">Disabled Off</Label>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Label Positioning */}
      <div className="space-y-4">
        <h4 className="h6-heading">Label Positioning</h4>
        <div className="grid grid-cols-1 gap-6">
          {/* Switch on Left */}
          <div className="space-y-4">
            <h5 className="h7-heading">Switch on Left</h5>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Switch
                  id="left-notifications"
                  checked={formData.notificationsEnabled}
                  onCheckedChange={(value) => handleSwitchChange('notificationsEnabled', value)}
                  size="sm"
                  className="mt-0.5"
                />
                <div className="flex flex-col">
                  <Label htmlFor="left-notifications" className="paragraph-small-medium cursor-pointer">
                    Enable notifications
                  </Label>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Switch
                  id="left-auto-clock"
                  checked={formData.autoClockOut}
                  onCheckedChange={(value) => handleSwitchChange('autoClockOut', value)}
                  size="sm"
                  className="mt-0.5"
                />
                <div className="flex flex-col">
                  <Label htmlFor="left-auto-clock" className="paragraph-small-medium cursor-pointer">
                    Auto clock-out
                  </Label>
                  <span className="caption-large text-muted-foreground">
                    Automatically clock out after shift end time
                  </span>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Switch
                  id="left-emergency"
                  checked={formData.emergencyAlerts}
                  onCheckedChange={(value) => handleSwitchChange('emergencyAlerts', value)}
                  size="sm"
                  className="mt-0.5"
                />
                <div className="flex flex-col">
                  <Label htmlFor="left-emergency" className="paragraph-small-medium cursor-pointer">
                    Emergency alerts
                  </Label>
                  <span className="caption-large text-muted-foreground">
                    Receive immediate notifications for client emergencies
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Switch on Right */}
          <div className="space-y-4">
            <h5 className="h7-heading">Switch on Right</h5>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <Label htmlFor="right-gps" className="paragraph-small-medium cursor-pointer">
                  GPS tracking
                </Label>
                <Switch
                  id="right-gps"
                  checked={formData.gpsTracking}
                  onCheckedChange={(value) => handleSwitchChange('gpsTracking', value)}
                  size="sm"
                />
              </div>
              
              <div className="flex items-start justify-between">
                <div className="flex flex-col pr-4">
                  <Label htmlFor="right-weekly" className="paragraph-small-medium cursor-pointer">
                    Weekly summary
                  </Label>
                  <span className="caption-large text-muted-foreground">
                    Get weekly reports of your completed shifts
                  </span>
                </div>
                <Switch
                  id="right-weekly"
                  checked={formData.weeklySummary}
                  onCheckedChange={(value) => handleSwitchChange('weeklySummary', value)}
                  size="sm"
                  className="mt-0.5"
                />
              </div>

              <div className="flex items-start justify-between">
                <div className="flex flex-col pr-4">
                  <Label htmlFor="right-mobile" className="paragraph-small-medium cursor-pointer">
                    Mobile app access
                  </Label>
                  <span className="caption-large text-muted-foreground">
                    Allow caregivers to access the mobile application
                  </span>
                </div>
                <Switch
                  id="right-mobile"
                  checked={formData.mobileAccess}
                  onCheckedChange={(value) => handleSwitchChange('mobileAccess', value)}
                  size="sm"
                  className="mt-0.5"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Examples */}
      <div className="space-y-4">
        <h4 className="h6-heading">Interactive Examples</h4>
        
        {/* Caregiver Settings */}
        <div className="space-y-4 p-4 border border-border-card rounded-lg bg-background-card">
          <div className="space-y-3">
            <h5 className="h7-heading">Caregiver App Settings</h5>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 border rounded-lg hover:bg-background-card-hover transition-colors">
                <div className="flex flex-col">
                  <Label htmlFor="push-notifications" className="paragraph-small-medium cursor-pointer">
                    Push Notifications
                  </Label>
                  <span className="caption-large text-muted-foreground">
                    Receive shift reminders and important updates
                  </span>
                </div>
                <Switch
                  id="push-notifications"
                  checked={formData.notificationsEnabled}
                  onCheckedChange={(value) => handleSwitchChange('notificationsEnabled', value)}
                  size="md"
                  showCheck
                />
              </div>
              
              <div className="flex items-center justify-between p-3 border rounded-lg hover:bg-background-card-hover transition-colors">
                <div className="flex flex-col">
                  <Label htmlFor="location-services" className="paragraph-small-medium cursor-pointer">
                    Location Services
                  </Label>
                  <span className="caption-large text-muted-foreground">
                    Enable GPS tracking for shift verification
                  </span>
                </div>
                <Switch
                  id="location-services"
                  checked={formData.gpsTracking}
                  onCheckedChange={(value) => handleSwitchChange('gpsTracking', value)}
                  size="md"
                />
              </div>
              
              <div className="flex items-center justify-between p-3 border rounded-lg hover:bg-background-card-hover transition-colors">
                <div className="flex flex-col">
                  <Label htmlFor="emergency-mode" className="paragraph-small-medium cursor-pointer">
                    Emergency Mode
                  </Label>
                  <span className="caption-large text-muted-foreground">
                    Instant alerts for client emergency situations
                  </span>
                </div>
                <Switch
                  id="emergency-mode"
                  checked={formData.emergencyAlerts}
                  onCheckedChange={(value) => handleSwitchChange('emergencyAlerts', value)}
                  size="md"
                  showCheck
                />
              </div>
            </div>
          </div>
        </div>

        
      </div>
    </div>
  );
}