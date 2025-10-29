import React from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectFormField,
} from '../ui/select';
import { Info, MapPin, User } from 'lucide-react';

export function SelectPreview() {
  const [country, setCountry] = React.useState('');
  const [city, setCity] = React.useState('');

  return (
    <div className="space-y-8 p-6">
      {/* Basic Examples with FormField */}
      <section>
        <h3 className="text-lg font-semibold mb-4">Basic Selects with Labels</h3>
        <div className="grid grid-cols-2 gap-6">
          <SelectFormField
            label="Country"
            labelRequired
            labelSecondary="Required"
            helperText="Select your country of residence"
            helperIcon={<Info className="w-4 h-4" />}
          >
            <Select value={country} onValueChange={setCountry}>
              <SelectTrigger>
                <SelectValue placeholder="Select a country" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="us">United States</SelectItem>
                <SelectItem value="uk">United Kingdom</SelectItem>
                <SelectItem value="ca">Canada</SelectItem>
                <SelectItem value="au">Australia</SelectItem>
                <SelectItem value="de">Germany</SelectItem>
              </SelectContent>
            </Select>
          </SelectFormField>

          <SelectFormField
            label="City"
            labelSecondary="Optional"
            helperText="Choose your city"
            helperIcon={<MapPin className="w-4 h-4" />}
          >
            <Select value={city} onValueChange={setCity}>
              <SelectTrigger>
                <SelectValue placeholder="Select a city" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="ny">New York</SelectItem>
                <SelectItem value="la">Los Angeles</SelectItem>
                <SelectItem value="chi">Chicago</SelectItem>
                <SelectItem value="hou">Houston</SelectItem>
                <SelectItem value="pho">Phoenix</SelectItem>
              </SelectContent>
            </Select>
          </SelectFormField>
        </div>
      </section>

      {/* Sizes */}
      <section>
        <h3 className="text-lg font-semibold mb-4">Sizes</h3>
        <div className="grid grid-cols-3 gap-6">
          <div>
            <label className="block text-sm font-medium mb-2">Small (32px)</label>
            <Select>
              <SelectTrigger size="sm">
                <SelectValue placeholder="Small select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">Option 1</SelectItem>
                <SelectItem value="2">Option 2</SelectItem>
                <SelectItem value="3">Option 3</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Medium/Default (40px)</label>
            <Select>
              <SelectTrigger size="default">
                <SelectValue placeholder="Medium select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">Option 1</SelectItem>
                <SelectItem value="2">Option 2</SelectItem>
                <SelectItem value="3">Option 3</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Large (48px)</label>
            <Select>
              <SelectTrigger size="lg">
                <SelectValue placeholder="Large select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">Option 1</SelectItem>
                <SelectItem value="2">Option 2</SelectItem>
                <SelectItem value="3">Option 3</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>

      {/* States */}
      <section>
        <h3 className="text-lg font-semibold mb-4">States</h3>
        <div className="grid grid-cols-3 gap-6">
          <SelectFormField
            label="Default"
            helperText="Normal state"
          >
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select an option" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">Option 1</SelectItem>
                <SelectItem value="2">Option 2</SelectItem>
              </SelectContent>
            </Select>
          </SelectFormField>

          <SelectFormField
            label="Error"
            helperText="This field is required"
            helperIcon={<Info className="w-4 h-4" />}
            error
          >
            <Select>
              <SelectTrigger state="error">
                <SelectValue placeholder="Select an option" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">Option 1</SelectItem>
                <SelectItem value="2">Option 2</SelectItem>
              </SelectContent>
            </Select>
          </SelectFormField>

          <SelectFormField
            label="Disabled"
            helperText="This select is disabled"
          >
            <Select disabled>
              <SelectTrigger>
                <SelectValue placeholder="Disabled select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">Option 1</SelectItem>
                <SelectItem value="2">Option 2</SelectItem>
              </SelectContent>
            </Select>
          </SelectFormField>
        </div>
      </section>

      {/* Real-World Examples */}
      <section>
        <h3 className="text-lg font-semibold mb-4">Real-World Examples</h3>
        <div className="grid grid-cols-2 gap-6">
          <SelectFormField
            label="Account Type"
            labelRequired
            helperText="Choose your account type"
            helperIcon={<User className="w-4 h-4" />}
          >
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select account type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="personal">Personal</SelectItem>
                <SelectItem value="business">Business</SelectItem>
                <SelectItem value="nonprofit">Non-Profit</SelectItem>
                <SelectItem value="government">Government</SelectItem>
              </SelectContent>
            </Select>
          </SelectFormField>

          <SelectFormField
            label="Language"
            labelSecondary="Optional"
            size="sm"
            helperText="Preferred language"
          >
            <Select>
              <SelectTrigger size="sm">
                <SelectValue placeholder="Select language" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="en">English</SelectItem>
                <SelectItem value="es">Español</SelectItem>
                <SelectItem value="fr">Français</SelectItem>
                <SelectItem value="de">Deutsch</SelectItem>
                <SelectItem value="it">Italiano</SelectItem>
                <SelectItem value="pt">Português</SelectItem>
              </SelectContent>
            </Select>
          </SelectFormField>

          <SelectFormField
            label="Priority Level"
            helperText="Task priority"
            size="lg"
          >
            <Select defaultValue="medium">
              <SelectTrigger size="lg">
                <SelectValue placeholder="Select priority" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="low">🟢 Low</SelectItem>
                <SelectItem value="medium">🟡 Medium</SelectItem>
                <SelectItem value="high">🟠 High</SelectItem>
                <SelectItem value="urgent">🔴 Urgent</SelectItem>
              </SelectContent>
            </Select>
          </SelectFormField>

          <SelectFormField
            label="Status"
            helperText="Current status"
          >
            <Select defaultValue="active">
              <SelectTrigger>
                <SelectValue placeholder="Select status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="completed">Completed</SelectItem>
                <SelectItem value="cancelled">Cancelled</SelectItem>
              </SelectContent>
            </Select>
          </SelectFormField>
        </div>
      </section>
    </div>
  );
}
