import React, { useState } from 'react';
import { Input, FormField, Label } from '../ui/input';
import { User, Mail, Lock, Phone, Search, MapPin, Info } from 'lucide-react';

export function InputPreview() {
  const [searchValue, setSearchValue] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
    location: ''
  });

  return (
    <div className="space-y-8 max-w-md">
      {/* FormField Component - Integrated */}
      <div className="space-y-4">
        <h4 className="paragraph-small-medium" style={{ color: 'var(--text-body)' }}>FormField Component</h4>
        
        {/* Text Input with Helper */}
        <FormField
          label="Full Name"
          labelRequired
          labelSecondary="Required field"
          placeholder="Enter your full name"
          value={formData.name}
          onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
          leftIcon={<User />}
          helperText="Please enter your legal name"
          helperIcon={<Info />}
        />

        {/* Email with Validation */}
        <FormField
          label="Email Address"
          labelRequired
          labelSecondary="Must be valid"
          type="email"
          placeholder="you@example.com"
          value={formData.email}
          onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
          leftIcon={<Mail />}
          helperText="We'll never share your email"
          helperIcon={<Info />}
        />

        {/* Password with Built-in Toggle */}
        <FormField
          label="Password"
          labelRequired
          labelSecondary="Min 8 characters"
          type="password"
          placeholder="Enter secure password"
          value={formData.password}
          onChange={(e) => setFormData(prev => ({ ...prev, password: e.target.value }))}
          leftIcon={<Lock />}
          showPasswordToggle
          helperText="Must contain uppercase, lowercase, and numbers"
          helperIcon={<Info />}
        />

        {/* Location Input */}
        <FormField
          label="Location"
          labelSecondary="Optional"
          placeholder="Enter address or city"
          value={formData.location}
          onChange={(e) => setFormData(prev => ({ ...prev, location: e.target.value }))}
          leftIcon={<MapPin />}
          helperText="This helps us find services near you"
        />
      </div>

      {/* Clearable Search Input */}
      <div className="space-y-4">
        <h4 className="paragraph-small-medium" style={{ color: 'var(--text-body)' }}>Search Input</h4>
        <div className="space-y-2">
          <Label htmlFor="search">Search DSPs</Label>
          <Input
            id="search"
            type="search"
            placeholder="Search by name or location..."
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            leftIcon={<Search />}
            clearable
            onClear={() => setSearchValue('')}
            size="lg"
          />
        </div>
      </div>

      {/* Standalone Inputs */}
      <div className="space-y-4">
        <h4 className="paragraph-small-medium" style={{ color: 'var(--text-body)' }}>Standalone Inputs</h4>
        
        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number</Label>
          <Input
            id="phone"
            type="tel"
            placeholder="(555) 123-4567"
            value={formData.phone}
            onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
            leftIcon={<Phone />}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="notes">Notes</Label>
          <Input
            id="notes"
            placeholder="Additional information..."
          />
        </div>
      </div>

      {/* Input Sizes */}
      <div className="space-y-4">
        <h4 className="paragraph-small-medium" style={{ color: 'var(--text-body)' }}>Input Sizes</h4>
        <div className="space-y-3">
          <div className="space-y-2">
            <Label htmlFor="small-input">Small (32px)</Label>
            <Input
              id="small-input"
              placeholder="Small size input"
              size="sm"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="default-input">Medium/Default (40px)</Label>
            <Input
              id="default-input"
              placeholder="Default size input"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="large-input">Large (48px)</Label>
            <Input
              id="large-input"
              placeholder="Large size input"
              size="lg"
            />
          </div>
        </div>
      </div>

      {/* Stepper Input */}
      <div className="space-y-4">
        <h4 className="paragraph-small-medium" style={{ color: 'var(--text-body)' }}>Stepper/Number Input</h4>
        <div className="space-y-2">
          <Label htmlFor="quantity">Quantity</Label>
          <Input
            id="quantity"
            type="number"
            defaultValue="0"
            showStepper
            size="lg"
          />
        </div>
      </div>

      {/* Validation States */}
      <div className="space-y-4">
        <h4 className="paragraph-small-medium" style={{ color: 'var(--text-body)' }}>Validation States</h4>
        <div className="space-y-3">
          {/* Error State */}
          <FormField
            label="Email with Error"
            type="email"
            placeholder="Enter valid email"
            defaultValue="invalid-email"
            error
            helperText="Please enter a valid email address"
            helperIcon={<Info />}
          />

          {/* Success State */}
          <FormField
            label="Valid Email"
            type="email"
            placeholder="Enter valid email"
            defaultValue="user@example.com"
            success
            helperText="Email format is valid"
          />

          {/* Disabled State */}
          <FormField
            label="Disabled Input"
            placeholder="This input is disabled"
            disabled
            defaultValue="Cannot be edited"
            helperText="This field is currently locked"
          />

          {/* Read-only State */}
          <FormField
            label="Read-only Input"
            placeholder="This input is read-only"
            readOnly
            defaultValue="View only"
            helperText="This field cannot be modified"
          />
        </div>
      </div>

      {/* Required Field Legend */}
      <div className="paragraph-xsmall-regular" style={{ color: 'var(--text-metadata)' }}>
        <span style={{ color: 'var(--status-error-text)' }}>*</span> indicates required fields
      </div>
    </div>
  );
}