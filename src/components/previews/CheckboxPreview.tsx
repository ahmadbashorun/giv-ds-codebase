import React, { useState } from 'react';
import { Checkbox } from '../ui/checkbox';
import { Label } from '../ui/label';
import { MinusIcon } from 'lucide-react';

export function CheckboxPreview() {
  const [formData, setFormData] = useState({
    terms: false,
    newsletter: false,
    notifications: true,
    marketing: false,
    analytics: 'indeterminate' as boolean | 'indeterminate'
  });

  const [childStates, setChildStates] = useState({
    performance: false,
    usage: true,
    errors: false
  });

  const handleCheckboxChange = (field: string, checked: boolean | 'indeterminate') => {
    setFormData(prev => ({ ...prev, [field]: checked }));
  };

  const handleChildChange = (field: keyof typeof childStates, checked: boolean | 'indeterminate') => {
    const newChildStates = { ...childStates, [field]: checked as boolean };
    setChildStates(newChildStates);
    
    // Update parent state based on children
    const checkedCount = Object.values(newChildStates).filter(Boolean).length;
    const totalCount = Object.keys(newChildStates).length;
    
    if (checkedCount === 0) {
      setFormData(prev => ({ ...prev, analytics: false }));
    } else if (checkedCount === totalCount) {
      setFormData(prev => ({ ...prev, analytics: true }));
    } else {
      setFormData(prev => ({ ...prev, analytics: 'indeterminate' }));
    }
  };

  const handleParentChange = (checked: boolean | 'indeterminate') => {
    const isChecked = checked === true;
    setChildStates({
      performance: isChecked,
      usage: isChecked,
      errors: isChecked
    });
    setFormData(prev => ({ ...prev, analytics: checked }));
  };

  return (
    <div className="space-y-8 max-w-2xl">
      {/* Checkbox Sizes */}
      <div className="space-y-4">
        <h4 className="h6-heading">Checkbox Sizes</h4>
        <div className="grid grid-cols-3 gap-6">
          {/* Large - 24px */}
          <div className="space-y-3">
            <h5 className="h7-heading">Large (24px)</h5>
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <Checkbox 
                  id="large-default" 
                  className="h-6 w-6"
                />
                <Label htmlFor="large-default" className="paragraph-small-medium cursor-pointer">Default</Label>
              </div>
              <div className="flex items-center space-x-3">
                <Checkbox 
                  id="large-checked" 
                  checked 
                  className="h-6 w-6"
                />
                <Label htmlFor="large-checked" className="paragraph-small-medium cursor-pointer">Checked</Label>
              </div>
              <div className="flex items-center space-x-3">
                <Checkbox 
                  id="large-indeterminate" 
                  checked="indeterminate"
                  className="h-6 w-6"
                />
                <Label htmlFor="large-indeterminate" className="paragraph-small-medium cursor-pointer">Indeterminate</Label>
              </div>
              <div className="flex items-center space-x-3">
                <Checkbox 
                  id="large-disabled" 
                  disabled 
                  className="h-6 w-6"
                />
                <Label htmlFor="large-disabled" className="paragraph-small-medium text-muted-foreground cursor-not-allowed">Disabled</Label>
              </div>
            </div>
          </div>

          {/* Medium - 20px */}
          <div className="space-y-3">
            <h5 className="h7-heading">Medium (20px)</h5>
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <Checkbox 
                  id="medium-default" 
                  className="h-5 w-5"
                />
                <Label htmlFor="medium-default" className="paragraph-small-medium cursor-pointer">Default</Label>
              </div>
              <div className="flex items-center space-x-3">
                <Checkbox 
                  id="medium-checked" 
                  checked 
                  className="h-5 w-5  "
                />
                <Label htmlFor="medium-checked" className="paragraph-small-medium cursor-pointer">Checked</Label>
              </div>
              <div className="flex items-center space-x-3">
                <Checkbox 
                  id="medium-indeterminate" 
                  checked="indeterminate"
                  className="h-5 w-5  "
                />
                <Label htmlFor="medium-indeterminate" className="paragraph-small-medium cursor-pointer">Indeterminate</Label>
              </div>
              <div className="flex items-center space-x-3">
                <Checkbox 
                  id="medium-disabled" 
                  disabled 
                  className="h-5 w-5"
                />
                <Label htmlFor="medium-disabled" className="paragraph-small-medium text-muted-foreground cursor-not-allowed">Disabled</Label>
              </div>
            </div>
          </div>

          {/* Small - 16px */}
          <div className="space-y-3">
            <h5 className="h7-heading">Small (16px)</h5>
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <Checkbox 
                  id="small-default" 
                  className="h-4 w-4  "
                />
                <Label htmlFor="small-default" className="paragraph-small-medium cursor-pointer">Default</Label>
              </div>
              <div className="flex items-center space-x-3">
                <Checkbox 
                  id="small-checked" 
                  checked 
                  className="h-4 w-4  "
                />
                <Label htmlFor="small-checked" className="paragraph-small-medium cursor-pointer">Checked</Label>
              </div>
              <div className="flex items-center space-x-3">
                <Checkbox 
                  id="small-indeterminate" 
                  checked="indeterminate"
                  className="h-4 w-4  "
                />
                <Label htmlFor="small-indeterminate" className="paragraph-small-medium cursor-pointer">Indeterminate</Label>
              </div>
              <div className="flex items-center space-x-3">
                <Checkbox 
                  id="small-disabled" 
                  disabled 
                  className="h-4 w-4"
                />
                <Label htmlFor="small-disabled" className="paragraph-small-medium text-muted-foreground cursor-not-allowed">Disabled</Label>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Label Positioning */}
      <div className="space-y-4">
        <h4 className="h6-heading">Label Positioning</h4>
        <div className="grid grid-cols-1 gap-6">
          {/* Checkbox on Left */}
          <div className="space-y-4">
            <h5 className="h7-heading">Checkbox on Left</h5>
            <div className="space-y-3">
              {/* Label Only - Top Aligned */}
              <div className="flex items-start space-x-3">
                <Checkbox 
                  id="left-label-only" 
                  checked={formData.terms}
                  onCheckedChange={(checked) => handleCheckboxChange('terms', checked)}
                  className="mt-0.5 h-5 w-5  "
                />
                <div className="flex flex-col">
                  <Label htmlFor="left-label-only" className="paragraph-small-medium cursor-pointer">
                    I agree to the terms and conditions
                  </Label>
                </div>
              </div>
              
              {/* Label and Caption - Top Aligned */}
              <div className="flex items-start space-x-3">
                <Checkbox 
                  id="left-label-caption" 
                  checked={formData.newsletter}
                  onCheckedChange={(checked) => handleCheckboxChange('newsletter', checked)}
                  className="mt-0.5 h-5 w-5  "
                />
                <div className="flex flex-col">
                  <Label htmlFor="left-label-caption" className="paragraph-small-medium cursor-pointer">
                    Subscribe to newsletter
                  </Label>
                  <span className="caption-large text-muted-foreground">
                    Receive weekly updates about new features and improvements
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Checkbox on Right */}
          <div className="space-y-4">
            <h5 className="h7-heading">Checkbox on Right</h5>
            <div className="space-y-3">
              {/* Label Only - Center Aligned */}
              <div className="flex items-center justify-between">
                <Label htmlFor="right-label-only" className="paragraph-small-medium cursor-pointer">
                  Enable notifications
                </Label>
                <Checkbox 
                  id="right-label-only" 
                  checked={formData.notifications}
                  onCheckedChange={(checked) => handleCheckboxChange('notifications', checked)}
                  className="h-5 w-5  "
                />
              </div>
              
              {/* Label and Caption - Top Aligned */}
              <div className="flex items-start justify-between">
                <div className="flex flex-col pr-4">
                  <Label htmlFor="right-label-caption" className="paragraph-small-medium cursor-pointer">
                    Marketing communications
                  </Label>
                  <span className="caption-large text-muted-foreground">
                    Allow us to send you promotional content and special offers
                  </span>
                </div>
                <Checkbox 
                  id="right-label-caption" 
                  checked={formData.marketing}
                  onCheckedChange={(checked) => handleCheckboxChange('marketing', checked)}
                  className="mt-0.5 h-5 w-5  "
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Examples */}
      <div className="space-y-4">
        <h4 className="h6-heading">Interactive Examples</h4>
        <div className="space-y-4 p-4 border border-border-card rounded-lg bg-background-card">
          {/* Select All Example */}
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <Checkbox 
                id="select-all" 
                checked={formData.analytics}
                onCheckedChange={handleParentChange}
                className="h-5 w-5    "
              />
              <Label htmlFor="select-all" className="h7-heading cursor-pointer">
                Analytics & Performance
              </Label>
            </div>
            
            <div className="ml-8 space-y-2">
              <div className="flex items-center space-x-3">
                <Checkbox 
                  id="performance" 
                  checked={childStates.performance}
                  onCheckedChange={(checked) => handleChildChange('performance', checked)}
                  className="h-4 w-4  "
                />
                <Label htmlFor="performance" className="paragraph-small-regular cursor-pointer">
                  Performance monitoring
                </Label>
              </div>
              <div className="flex items-center space-x-3">
                <Checkbox 
                  id="usage" 
                  checked={childStates.usage}
                  onCheckedChange={(checked) => handleChildChange('usage', checked)}
                  className="h-4 w-4  "
                />
                <Label htmlFor="usage" className="paragraph-small-regular cursor-pointer">
                  Usage analytics
                </Label>
              </div>
              <div className="flex items-center space-x-3">
                <Checkbox 
                  id="errors" 
                  checked={childStates.errors}
                  onCheckedChange={(checked) => handleChildChange('errors', checked)}
                  className="h-4 w-4  "
                />
                <Label htmlFor="errors" className="paragraph-small-regular cursor-pointer">
                  Error reporting
                </Label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}