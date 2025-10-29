export const modalDocumentation = {
  name: 'Modal',
  description: 'Overlay dialogs for user interactions, form submissions, and information display. Supports various sizes and interaction patterns while maintaining focus management and accessibility standards.',
  category: 'Overlays',
  examples: {
    react: `// React Implementation
import { Modal, ModalContent, ModalHeader, ModalTitle, ModalDescription, ModalBody, ModalFooter } from './ui/modal';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Textarea } from './ui/textarea';
import { Checkbox } from './ui/checkbox';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { Badge } from './ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Separator } from './ui/separator';
import { 
  Calendar, 
  Clock, 
  Users, 
  MapPin, 
  AlertTriangle, 
  CheckCircle, 
  XCircle, 
  Info,
  X,
  Plus,
  Search,
  MoreVertical
} from 'lucide-react';
import { useState } from 'react';

// Basic Form Modal Example
function SimpleFormModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [folderName, setFolderName] = useState('New Staff Reports');

  const handleSave = () => {
    console.log('Saving folder:', folderName);
    setIsOpen(false);
  };

  return (
    <Modal open={isOpen} onOpenChange={setIsOpen}>
      <Button 
        variant="secondary" 
        onClick={() => setIsOpen(true)}
      >
        Rename Folder
      </Button>
      
      <ModalContent size="sm" onClose={() => setIsOpen(false)}>
        <ModalHeader>
          <ModalTitle>Rename Folder</ModalTitle>
        </ModalHeader>
        
        <ModalBody>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="folder-name">Folder Name</Label>
              <Input
                id="folder-name"
                value={folderName}
                onChange={(e) => setFolderName(e.target.value)}
                placeholder="Enter folder name"
                className="w-full"
              />
            </div>
          </div>
        </ModalBody>
        
        <ModalFooter>
          <Button 
            variant="secondary" 
            onClick={() => setIsOpen(false)}
          >
            Cancel
          </Button>
          <Button onClick={handleSave}>
            Save changes
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

// Alert Dialog Examples
function AlertDialogExamples() {
  const [progressiveOpen, setProgressiveOpen] = useState(false);
  const [destructiveOpen, setDestructiveOpen] = useState(false);

  return (
    <div className="flex gap-3">
      {/* Progressive Alert Dialog */}
      <Modal open={progressiveOpen} onOpenChange={setProgressiveOpen}>
        <Button onClick={() => setProgressiveOpen(true)}>
          Complete Setup
        </Button>
        
        <ModalContent size="sm" showCloseButton={false}>
          <ModalHeader>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                <CheckCircle className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <ModalTitle>Complete Account Setup</ModalTitle>
                <ModalDescription>
                  Finish setting up your account to unlock all features and start managing your agency operations.
                </ModalDescription>
              </div>
            </div>
          </ModalHeader>
          
          <ModalBody>
            <div className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span className="paragraph-small-regular">Basic information completed</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span className="paragraph-small-regular">Team members invited</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 rounded-full border-2 border-gray-300" />
                  <span className="paragraph-small-regular">Billing information (optional)</span>
                </div>
              </div>
            </div>
          </ModalBody>
          
          <ModalFooter>
            <Button 
              variant="secondary" 
              onClick={() => setProgressiveOpen(false)}
            >
              Skip for now
            </Button>
            <Button onClick={() => setProgressiveOpen(false)}>
              Complete Setup
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      {/* Destructive Alert Dialog */}
      <Modal open={destructiveOpen} onOpenChange={setDestructiveOpen}>
        <Button 
          variant="destructive" 
          onClick={() => setDestructiveOpen(true)}
        >
          Delete Account
        </Button>
        
        <ModalContent size="sm" showCloseButton={false}>
          <ModalHeader>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
                <AlertTriangle className="h-5 w-5 text-red-600" />
              </div>
              <div>
                <ModalTitle>Delete Account</ModalTitle>
                <ModalDescription>
                  This action cannot be undone. This will permanently delete your account and remove all associated data.
                </ModalDescription>
              </div>
            </div>
          </ModalHeader>
          
          <ModalBody>
            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-red-50 border border-red-200">
                <h4 className="paragraph-small-medium text-red-800 mb-2">
                  Data that will be permanently deleted:
                </h4>
                <ul className="space-y-1">
                  <li className="paragraph-xsmall-regular text-red-700">• All client records and care documentation</li>
                  <li className="paragraph-xsmall-regular text-red-700">• Staff schedules and shift assignments</li>
                  <li className="paragraph-xsmall-regular text-red-700">• Billing history and financial records</li>
                  <li className="paragraph-xsmall-regular text-red-700">• Account settings and user permissions</li>
                </ul>
              </div>
            </div>
          </ModalBody>
          
          <ModalFooter>
            <Button 
              variant="secondary" 
              onClick={() => setDestructiveOpen(false)}
            >
              Cancel
            </Button>
            <Button 
              variant="destructive" 
              onClick={() => setDestructiveOpen(false)}
            >
              Delete Account
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
}

// Complex Form Modal Example
function CreateShiftModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [shiftData, setShiftData] = useState({
    startDate: '03/25/2025',
    startTime: '09:00 AM',
    endDate: '25/03/2025',
    endTime: '11:59 PM',
    recurring: true,
    address: 'Placeholder'
  });

  const clients = [
    { id: 'a', name: 'Andrew Harris', initials: 'A' },
    { id: 'k', name: 'Kimberly Ramirez', initials: 'K' },
    { id: 'p', name: 'Patricia Rivera', initials: 'P' }
  ];

  const staff = [
    { id: 'b', name: 'Betty Brown', initials: 'B' },
    { id: 'j', name: 'Jessica Thomas', initials: 'J' },
    { id: 'l', name: 'Linda White', initials: 'L' },
    { id: 'm', name: 'Mark Ramirez', initials: 'M' }
  ];

  return (
    <Modal open={isOpen} onOpenChange={setIsOpen}>
      <Button onClick={() => setIsOpen(true)}>
        Create Shift
      </Button>
      
      <ModalContent size="xl" onClose={() => setIsOpen(false)}>
        <ModalHeader>
          <ModalTitle>Create shift</ModalTitle>
        </ModalHeader>
        
        <ModalBody className="space-y-6">
          {/* Date and Time Section */}
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="paragraph-small-medium">Start date and time</h3>
              <div className="flex gap-3">
                <div className="flex-1">
                  <Input
                    value={shiftData.startDate}
                    onChange={(e) => setShiftData(prev => ({ ...prev, startDate: e.target.value }))}
                    placeholder="MM/DD/YYYY"
                  />
                </div>
                <div className="flex-1">
                  <Input
                    value={shiftData.startTime}
                    onChange={(e) => setShiftData(prev => ({ ...prev, startTime: e.target.value }))}
                    placeholder="00:00 AM"
                  />
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="paragraph-small-medium">End date and time</h3>
              <div className="flex gap-3">
                <div className="flex-1">
                  <Input
                    value={shiftData.endDate}
                    onChange={(e) => setShiftData(prev => ({ ...prev, endDate: e.target.value }))}
                    placeholder="MM/DD/YYYY"
                  />
                </div>
                <div className="flex-1">
                  <Input
                    value={shiftData.endTime}
                    onChange={(e) => setShiftData(prev => ({ ...prev, endTime: e.target.value }))}
                    placeholder="00:00 AM"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Recurring Shift */}
          <div className="flex items-center space-x-3">
            <Checkbox 
              id="recurring"
              checked={shiftData.recurring}
              onCheckedChange={(checked) => setShiftData(prev => ({ ...prev, recurring: checked as boolean }))}
            />
            <Label htmlFor="recurring" className="paragraph-small-regular">
              Recurring shift
            </Label>
          </div>

          {/* Address */}
          <div className="space-y-2">
            <h3 className="paragraph-small-medium">Address</h3>
            <Input
              value={shiftData.address}
              onChange={(e) => setShiftData(prev => ({ ...prev, address: e.target.value }))}
              placeholder="Enter address"
            />
          </div>

          {/* Add People to Shift */}
          <div className="space-y-4">
            <h3 className="paragraph-small-medium">Add people to shift</h3>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search for clients or staff"
                className="pl-10"
              />
            </div>
            
            <div className="flex items-center justify-center py-4">
              <div className="flex items-center gap-2 text-blue-600">
                <div className="w-4 h-4 border-2 border-blue-600 rounded-full border-t-transparent animate-spin" />
                <span className="paragraph-small-regular">Checking for conflicts</span>
              </div>
            </div>

            {/* Clients and Staff Lists */}
            <div className="grid grid-cols-2 gap-6">
              {/* Clients */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="paragraph-small-medium">Clients</h4>
                  <Badge variant="secondary" className="text-xs">4</Badge>
                  <button className="p-1 hover:bg-gray-100 rounded">
                    <MoreVertical className="h-4 w-4" />
                  </button>
                </div>
                
                <div className="space-y-2">
                  {clients.map((client) => (
                    <div key={client.id} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-xs font-medium">
                          {client.initials}
                        </div>
                        <div className="flex-1">
                          <div className="paragraph-small-medium">{client.name}</div>
                          <div className="paragraph-xsmall-regular text-gray-500">
                            Drag and drop staff here or click link to assign
                          </div>
                          <button className="text-blue-600 text-xs hover:underline">
                            Assign staff
                          </button>
                        </div>
                      </div>
                      <button className="w-6 h-6 rounded-full border-2 border-red-300 flex items-center justify-center hover:bg-red-50">
                        <div className="w-2 h-2 rounded-full bg-red-400" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Staff */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="paragraph-small-medium">Staff</h4>
                  <Badge variant="secondary" className="text-xs">5</Badge>
                  <button className="p-1 hover:bg-gray-100 rounded">
                    <MoreVertical className="h-4 w-4" />
                  </button>
                </div>
                
                <div className="space-y-2">
                  {staff.map((member) => (
                    <div key={member.id} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full bg-gray-600 text-white flex items-center justify-center text-xs font-medium">
                          {member.initials}
                        </div>
                        <span className="paragraph-small-medium">{member.name}</span>
                      </div>
                      <button className="w-6 h-6 rounded-full border-2 border-red-300 flex items-center justify-center hover:bg-red-50">
                        <div className="w-2 h-2 rounded-full bg-red-400" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </ModalBody>
        
        <ModalFooter>
          <Button 
            variant="secondary" 
            onClick={() => setIsOpen(false)}
          >
            Cancel
          </Button>
          <Button onClick={() => setIsOpen(false)}>
            Create shift
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

// Full Screen Modal Example
function IncidentFormModal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Modal open={isOpen} onOpenChange={setIsOpen}>
      <Button onClick={() => setIsOpen(true)}>
        Log Incident
      </Button>
      
      <ModalContent size="full" onClose={() => setIsOpen(false)}>
        <ModalHeader>
          <ModalTitle>Log Incident</ModalTitle>
        </ModalHeader>
        
        <ModalBody className="space-y-6">
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Incident Type Selection */}
            <div className="space-y-4">
              <Label className="paragraph-small-medium">Select Incident</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Minor Injury" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="minor-injury">Minor Injury</SelectItem>
                  <SelectItem value="major-injury">Major Injury</SelectItem>
                  <SelectItem value="behavioral">Behavioral Incident</SelectItem>
                  <SelectItem value="medication">Medication Error</SelectItem>
                  <SelectItem value="property">Property Damage</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Separator />

            {/* Time Information */}
            <div className="space-y-4">
              <Label className="paragraph-small-medium">Time Completed</Label>
              <div className="flex gap-4">
                <Input placeholder="MM/DD/YYYY" className="flex-1" />
                <Input placeholder="00:00 AM" className="flex-1" />
              </div>
            </div>

            {/* Description */}
            <div className="space-y-4">
              <Label className="paragraph-small-medium">Description</Label>
              <Textarea 
                placeholder="Enter description"
                className="min-h-24"
              />
            </div>

            {/* Immediate Action */}
            <div className="space-y-4">
              <Label className="paragraph-small-medium">Immediate Action Taken</Label>
              <Textarea 
                placeholder="Enter details"
                className="min-h-20"
              />
            </div>

            {/* Client Response */}
            <div className="space-y-4">
              <Label className="paragraph-small-medium">Client Response</Label>
              <Textarea 
                placeholder="Enter details"
                className="min-h-20"
              />
            </div>

            {/* Radio Groups */}
            <div className="grid grid-cols-2 gap-8">
              <div className="space-y-4">
                <Label className="paragraph-small-medium">Witness Present</Label>
                <RadioGroup>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="yes" id="witness-yes" />
                    <Label htmlFor="witness-yes">Yes</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no" id="witness-no" />
                    <Label htmlFor="witness-no">No</Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="space-y-4">
                <Label className="paragraph-small-medium">Follow-up Required</Label>
                <RadioGroup>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="yes" id="followup-yes" />
                    <Label htmlFor="followup-yes">Yes</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no" id="followup-no" />
                    <Label htmlFor="followup-no">No</Label>
                  </div>
                </RadioGroup>
              </div>
            </div>

            {/* File Upload */}
            <div className="space-y-4">
              <Label className="paragraph-small-medium">Additional Information</Label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                <div className="space-y-2">
                  <div className="w-12 h-12 mx-auto rounded-full bg-gray-100 flex items-center justify-center">
                    <Plus className="h-6 w-6 text-gray-400" />
                  </div>
                  <div>
                    <p className="paragraph-small-medium">Choose a file to upload or drag and drop</p>
                    <p className="paragraph-xsmall-regular text-gray-500">We recommend jpg files.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ModalBody>
        
        <ModalFooter>
          <Button 
            variant="secondary" 
            onClick={() => setIsOpen(false)}
          >
            Cancel
          </Button>
          <Button onClick={() => setIsOpen(false)}>
            Save Incident
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

// Multi-step Modal Example
function MultiStepModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);

  const nextStep = () => setCurrentStep(prev => Math.min(prev + 1, 3));
  const prevStep = () => setCurrentStep(prev => Math.max(prev - 1, 1));

  const steps = [
    { number: 1, title: "Basic Information", description: "Enter client details" },
    { number: 2, title: "Care Preferences", description: "Set care requirements" },
    { number: 3, title: "Emergency Contacts", description: "Add contact information" }
  ];

  return (
    <Modal open={isOpen} onOpenChange={setIsOpen}>
      <Button onClick={() => setIsOpen(true)}>
        Add New Client
      </Button>
      
      <ModalContent size="lg" onClose={() => setIsOpen(false)}>
        <ModalHeader>
          <div className="space-y-4">
            <ModalTitle>Add New Client</ModalTitle>
            
            {/* Progress Steps */}
            <div className="flex items-center justify-between">
              {steps.map((step, index) => (
                <div key={step.number} className="flex items-center">
                  <div className={cn(
                    "flex items-center justify-center w-8 h-8 rounded-full text-sm font-medium",
                    currentStep >= step.number 
                      ? "bg-blue-600 text-white" 
                      : "bg-gray-200 text-gray-600"
                  )}>
                    {step.number}
                  </div>
                  <div className="ml-3">
                    <div className="paragraph-xsmall-medium">{step.title}</div>
                    <div className="caption-medium">{step.description}</div>
                  </div>
                  {index < steps.length - 1 && (
                    <div className={cn(
                      "ml-8 w-16 h-0.5",
                      currentStep > step.number ? "bg-blue-600" : "bg-gray-200"
                    )} />
                  )}
                </div>
              ))}
            </div>
          </div>
        </ModalHeader>
        
        <ModalBody>
          {currentStep === 1 && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="first-name">First Name *</Label>
                  <Input id="first-name" placeholder="Enter first name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="last-name">Last Name *</Label>
                  <Input id="last-name" placeholder="Enter last name" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="dob">Date of Birth *</Label>
                <Input id="dob" placeholder="MM/DD/YYYY" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="address">Address</Label>
                <Input id="address" placeholder="Enter full address" />
              </div>
            </div>
          )}

          {currentStep === 2 && (
            <div className="space-y-4">
              <div className="space-y-2">
                <Label>Care Level Required</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select care level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="minimal">Minimal Support</SelectItem>
                    <SelectItem value="moderate">Moderate Support</SelectItem>
                    <SelectItem value="intensive">Intensive Support</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Special Accommodations</Label>
                <Textarea placeholder="Describe any special needs or accommodations" />
              </div>
              <div className="space-y-2">
                <Label>Medication Requirements</Label>
                <Textarea placeholder="List current medications and schedules" />
              </div>
            </div>
          )}

          {currentStep === 3 && (
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="emergency-name">Emergency Contact Name *</Label>
                <Input id="emergency-name" placeholder="Enter contact name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="emergency-phone">Phone Number *</Label>
                <Input id="emergency-phone" placeholder="(555) 123-4567" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="relationship">Relationship to Client</Label>
                <Input id="relationship" placeholder="e.g., Parent, Guardian, Sibling" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="secondary-contact">Secondary Contact (Optional)</Label>
                <Input id="secondary-contact" placeholder="Enter secondary contact" />
              </div>
            </div>
          )}
        </ModalBody>
        
        <ModalFooter justify="between">
          <div>
            {currentStep > 1 && (
              <Button variant="secondary" onClick={prevStep}>
                Previous
              </Button>
            )}
          </div>
          <div className="flex gap-3">
            <Button 
              variant="secondary" 
              onClick={() => setIsOpen(false)}
            >
              Cancel
            </Button>
            {currentStep < 3 ? (
              <Button onClick={nextStep}>
                Next
              </Button>
            ) : (
              <Button onClick={() => setIsOpen(false)}>
                Create Client
              </Button>
            )}
          </div>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

// Usage Examples Component
function ModalExamples() {
  return (
    <div className="space-y-8">
      {/* Basic Form Modal */}
      <div className="space-y-3">
        <h4 className="h6-heading">Simple Form Modal</h4>
        <p className="paragraph-small-regular">
          Basic modals for simple forms and quick actions with minimal content.
        </p>
        <SimpleFormModal />
      </div>

      {/* Alert Dialogs */}
      <div className="space-y-3">
        <h4 className="h6-heading">Alert Dialogs</h4>
        <p className="paragraph-small-regular">
          Progressive and destructive alert dialogs for user confirmations and warnings.
        </p>
        <AlertDialogExamples />
      </div>

      {/* Complex Form Modal */}
      <div className="space-y-3">
        <h4 className="h6-heading">Feature-Heavy Modal</h4>
        <p className="paragraph-small-regular">
          Complex forms with multiple sections, data lists, and interactive elements.
        </p>
        <CreateShiftModal />
      </div>

      {/* Multi-step Modal */}
      <div className="space-y-3">
        <h4 className="h6-heading">Multi-Step Modal</h4>
        <p className="paragraph-small-regular">
          Guided workflows with step-by-step progression and validation.
        </p>
        <MultiStepModal />
      </div>

      {/* Full Screen Modal */}
      <div className="space-y-3">
        <h4 className="h6-heading">Full Screen Modal</h4>
        <p className="paragraph-small-regular">
          Large forms and complex interfaces that need maximum screen space.
        </p>
        <IncidentFormModal />
      </div>
    </div>
  );
}`,
    angular: `<!-- Angular Implementation -->
<!-- modal.component.html -->
<div class="modal-examples">
  <!-- Basic Form Modal -->
  <div class="example-section">
    <h4 class="h6-heading">Simple Form Modal</h4>
    <p class="paragraph-small-regular">
      Basic modals for simple forms and quick actions with minimal content.
    </p>
    <button class="btn btn-secondary" (click)="openSimpleModal()">
      Rename Folder
    </button>
  </div>

  <!-- Alert Dialogs -->
  <div class="example-section">
    <h4 class="h6-heading">Alert Dialogs</h4>
    <p class="paragraph-small-regular">
      Progressive and destructive alert dialogs for user confirmations and warnings.
    </p>
    <div class="flex gap-3">
      <button class="btn btn-primary" (click)="openProgressiveAlert()">
        Complete Setup
      </button>
      <button class="btn btn-destructive" (click)="openDestructiveAlert()">
        Delete Account
      </button>
    </div>
  </div>

  <!-- Complex Form Modal -->
  <div class="example-section">
    <h4 class="h6-heading">Feature-Heavy Modal</h4>
    <p class="paragraph-small-regular">
      Complex forms with multiple sections, data lists, and interactive elements.
    </p>
    <button class="btn btn-primary" (click)="openCreateShiftModal()">
      Create Shift
    </button>
  </div>

  <!-- Multi-step Modal -->
  <div class="example-section">
    <h4 class="h6-heading">Multi-Step Modal</h4>
    <p class="paragraph-small-regular">
      Guided workflows with step-by-step progression and validation.
    </p>
    <button class="btn btn-primary" (click)="openMultiStepModal()">
      Add New Client
    </button>
  </div>

  <!-- Full Screen Modal -->
  <div class="example-section">
    <h4 class="h6-heading">Full Screen Modal</h4>
    <p class="paragraph-small-regular">
      Large forms and complex interfaces that need maximum screen space.
    </p>
    <button class="btn btn-primary" (click)="openIncidentModal()">
      Log Incident
    </button>
  </div>
</div>

<!-- Simple Form Modal Template -->
<div 
  *ngIf="simpleModalOpen"
  class="modal-overlay"
  (click)="closeSimpleModal()"
>
  <div class="modal modal-sm" (click)="$event.stopPropagation()">
    <div class="modal-header">
      <h3 class="modal-title">Rename Folder</h3>
      <button class="modal-close" (click)="closeSimpleModal()">
        <i class="icon-x"></i>
      </button>
    </div>
    
    <div class="modal-body">
      <div class="form-group">
        <label for="folder-name">Folder Name</label>
        <input
          id="folder-name"
          type="text"
          class="form-control"
          [(ngModel)]="folderName"
          placeholder="Enter folder name"
        />
      </div>
    </div>
    
    <div class="modal-footer">
      <button class="btn btn-secondary" (click)="closeSimpleModal()">
        Cancel
      </button>
      <button class="btn btn-primary" (click)="saveFolder()">
        Save changes
      </button>
    </div>
  </div>
</div>

<!-- Progressive Alert Dialog -->
<div 
  *ngIf="progressiveAlertOpen"
  class="modal-overlay"
>
  <div class="modal modal-sm" (click)="$event.stopPropagation()">
    <div class="modal-header">
      <div class="flex items-center gap-3">
        <div class="alert-icon alert-icon-success">
          <i class="icon-check-circle"></i>
        </div>
        <div>
          <h3 class="modal-title">Complete Account Setup</h3>
          <p class="modal-description">
            Finish setting up your account to unlock all features and start managing your agency operations.
          </p>
        </div>
      </div>
    </div>
    
    <div class="modal-body">
      <div class="setup-checklist">
        <div class="checklist-item completed">
          <i class="icon-check-circle text-success"></i>
          <span>Basic information completed</span>
        </div>
        <div class="checklist-item completed">
          <i class="icon-check-circle text-success"></i>
          <span>Team members invited</span>
        </div>
        <div class="checklist-item">
          <div class="checklist-circle"></div>
          <span>Billing information (optional)</span>
        </div>
      </div>
    </div>
    
    <div class="modal-footer">
      <button class="btn btn-secondary" (click)="closeProgressiveAlert()">
        Skip for now
      </button>
      <button class="btn btn-primary" (click)="completeSetup()">
        Complete Setup
      </button>
    </div>
  </div>
</div>

<!-- Destructive Alert Dialog -->
<div 
  *ngIf="destructiveAlertOpen"
  class="modal-overlay"
>
  <div class="modal modal-sm" (click)="$event.stopPropagation()">
    <div class="modal-header">
      <div class="flex items-center gap-3">
        <div class="alert-icon alert-icon-destructive">
          <i class="icon-alert-triangle"></i>
        </div>
        <div>
          <h3 class="modal-title">Delete Account</h3>
          <p class="modal-description">
            This action cannot be undone. This will permanently delete your account and remove all associated data.
          </p>
        </div>
      </div>
    </div>
    
    <div class="modal-body">
      <div class="alert-box alert-destructive">
        <h4 class="alert-title">Data that will be permanently deleted:</h4>
        <ul class="alert-list">
          <li>All client records and care documentation</li>
          <li>Staff schedules and shift assignments</li>
          <li>Billing history and financial records</li>
          <li>Account settings and user permissions</li>
        </ul>
      </div>
    </div>
    
    <div class="modal-footer">
      <button class="btn btn-secondary" (click)="closeDestructiveAlert()">
        Cancel
      </button>
      <button class="btn btn-destructive" (click)="deleteAccount()">
        Delete Account
      </button>
    </div>
  </div>
</div>

<!-- Create Shift Modal -->
<div 
  *ngIf="createShiftModalOpen"
  class="modal-overlay"
>
  <div class="modal modal-xl" (click)="$event.stopPropagation()">
    <div class="modal-header">
      <h3 class="modal-title">Create shift</h3>
      <button class="modal-close" (click)="closeCreateShiftModal()">
        <i class="icon-x"></i>
      </button>
    </div>
    
    <div class="modal-body">
      <!-- Date and Time Section -->
      <div class="form-grid">
        <div class="form-section">
          <h4 class="form-section-title">Start date and time</h4>
          <div class="form-row">
            <input
              type="text"
              class="form-control"
              [(ngModel)]="shiftData.startDate"
              placeholder="MM/DD/YYYY"
            />
            <input
              type="text"
              class="form-control"
              [(ngModel)]="shiftData.startTime"
              placeholder="00:00 AM"
            />
          </div>
        </div>
        
        <div class="form-section">
          <h4 class="form-section-title">End date and time</h4>
          <div class="form-row">
            <input
              type="text"
              class="form-control"
              [(ngModel)]="shiftData.endDate"
              placeholder="MM/DD/YYYY"
            />
            <input
              type="text"
              class="form-control"
              [(ngModel)]="shiftData.endTime"
              placeholder="00:00 AM"
            />
          </div>
        </div>
      </div>

      <!-- Recurring Shift -->
      <div class="form-group">
        <label class="checkbox-label">
          <input
            type="checkbox"
            [(ngModel)]="shiftData.recurring"
          />
          Recurring shift
        </label>
      </div>

      <!-- Address -->
      <div class="form-group">
        <label>Address</label>
        <input
          type="text"
          class="form-control"
          [(ngModel)]="shiftData.address"
          placeholder="Enter address"
        />
      </div>

      <!-- People Assignment -->
      <div class="form-group">
        <h4 class="form-section-title">Add people to shift</h4>
        <div class="search-input">
          <i class="icon-search"></i>
          <input
            type="text"
            class="form-control"
            placeholder="Search for clients or staff"
          />
        </div>
        
        <div class="loading-indicator" *ngIf="checkingConflicts">
          <div class="spinner"></div>
          <span>Checking for conflicts</span>
        </div>

        <div class="assignment-grid">
          <!-- Clients List -->
          <div class="assignment-section">
            <div class="assignment-header">
              <h5>Clients</h5>
              <span class="badge">{{ clients.length }}</span>
              <button class="btn-icon">
                <i class="icon-more-vertical"></i>
              </button>
            </div>
            
            <div class="assignment-list">
              <div 
                *ngFor="let client of clients"
                class="assignment-item"
              >
                <div class="assignment-content">
                  <div class="assignment-avatar">{{ client.initials }}</div>
                  <div class="assignment-info">
                    <div class="assignment-name">{{ client.name }}</div>
                    <div class="assignment-help">Drag and drop staff here or click link to assign</div>
                    <button class="assignment-link" (click)="assignStaff(client.id)">
                      Assign staff
                    </button>
                  </div>
                </div>
                <button class="assignment-remove">
                  <div class="remove-indicator"></div>
                </button>
              </div>
            </div>
          </div>

          <!-- Staff List -->
          <div class="assignment-section">
            <div class="assignment-header">
              <h5>Staff</h5>
              <span class="badge">{{ staff.length }}</span>
              <button class="btn-icon">
                <i class="icon-more-vertical"></i>
              </button>
            </div>
            
            <div class="assignment-list">
              <div 
                *ngFor="let member of staff"
                class="assignment-item"
              >
                <div class="assignment-content">
                  <div class="assignment-avatar staff-avatar">{{ member.initials }}</div>
                  <span class="assignment-name">{{ member.name }}</span>
                </div>
                <button class="assignment-remove">
                  <div class="remove-indicator"></div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div class="modal-footer">
      <button class="btn btn-secondary" (click)="closeCreateShiftModal()">
        Cancel
      </button>
      <button class="btn btn-primary" (click)="createShift()">
        Create shift
      </button>
    </div>
  </div>
</div>

// Component.ts
import { Component } from '@angular/core';

interface ShiftData {
  startDate: string;
  startTime: string;
  endDate: string;
  endTime: string;
  recurring: boolean;
  address: string;
}

interface Person {
  id: string;
  name: string;
  initials: string;
}

@Component({
  selector: 'app-modal-examples',
  templateUrl: './modal-examples.component.html',
  styleUrls: ['./modal-examples.component.scss']
})
export class ModalExamplesComponent {
  // Modal states
  simpleModalOpen = false;
  progressiveAlertOpen = false;
  destructiveAlertOpen = false;
  createShiftModalOpen = false;
  multiStepModalOpen = false;
  incidentModalOpen = false;

  // Form data
  folderName = 'New Staff Reports';
  checkingConflicts = true;

  shiftData: ShiftData = {
    startDate: '03/25/2025',
    startTime: '09:00 AM',
    endDate: '25/03/2025',
    endTime: '11:59 PM',
    recurring: true,
    address: 'Placeholder'
  };

  clients: Person[] = [
    { id: 'a', name: 'Andrew Harris', initials: 'A' },
    { id: 'k', name: 'Kimberly Ramirez', initials: 'K' },
    { id: 'p', name: 'Patricia Rivera', initials: 'P' }
  ];

  staff: Person[] = [
    { id: 'b', name: 'Betty Brown', initials: 'B' },
    { id: 'j', name: 'Jessica Thomas', initials: 'J' },
    { id: 'l', name: 'Linda White', initials: 'L' },
    { id: 'm', name: 'Mark Ramirez', initials: 'M' }
  ];

  // Simple Modal Methods
  openSimpleModal() {
    this.simpleModalOpen = true;
  }

  closeSimpleModal() {
    this.simpleModalOpen = false;
  }

  saveFolder() {
    console.log('Saving folder:', this.folderName);
    this.closeSimpleModal();
  }

  // Alert Dialog Methods
  openProgressiveAlert() {
    this.progressiveAlertOpen = true;
  }

  closeProgressiveAlert() {
    this.progressiveAlertOpen = false;
  }

  completeSetup() {
    console.log('Completing setup');
    this.closeProgressiveAlert();
  }

  openDestructiveAlert() {
    this.destructiveAlertOpen = true;
  }

  closeDestructiveAlert() {
    this.destructiveAlertOpen = false;
  }

  deleteAccount() {
    console.log('Deleting account');
    this.closeDestructiveAlert();
  }

  // Create Shift Modal Methods
  openCreateShiftModal() {
    this.createShiftModalOpen = true;
    // Simulate checking for conflicts
    setTimeout(() => {
      this.checkingConflicts = false;
    }, 2000);
  }

  closeCreateShiftModal() {
    this.createShiftModalOpen = false;
    this.checkingConflicts = true;
  }

  assignStaff(clientId: string) {
    console.log('Assigning staff to client:', clientId);
  }

  createShift() {
    console.log('Creating shift:', this.shiftData);
    this.closeCreateShiftModal();
  }

  // Multi-step Modal Methods
  openMultiStepModal() {
    this.multiStepModalOpen = true;
  }

  // Incident Modal Methods
  openIncidentModal() {
    this.incidentModalOpen = true;
  }
}

// modal-examples.component.scss
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 16px;
}

.modal {
  background: var(--background-card);
  border-radius: var(--radius-lg);
  box-shadow: var(--elevation-sm);
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  
  &.modal-sm {
    width: 100%;
    max-width: 400px;
  }
  
  &.modal-default {
    width: 100%;
    max-width: 500px;
  }
  
  &.modal-lg {
    width: 100%;
    max-width: 800px;
  }
  
  &.modal-xl {
    width: 100%;
    max-width: 1200px;
  }
  
  &.modal-full {
    width: 95vw;
    height: 95vh;
    max-width: none;
    max-height: none;
  }
}

.modal-header {
  padding: 24px 24px 16px 24px;
  border-bottom: 1px solid var(--border-divider);
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  
  .modal-title {
    font-size: 20px;
    font-weight: 500;
    color: var(--text-heading-section);
    margin: 0;
  }
  
  .modal-description {
    font-size: 14px;
    font-weight: 300;
    color: var(--text-body);
    margin: 8px 0 0 0;
    line-height: 1.4;
  }
  
  .modal-close {
    background: none;
    border: none;
    color: var(--text-metadata);
    cursor: pointer;
    padding: 4px;
    border-radius: 4px;
    
    &:hover {
      color: var(--text-body);
      background-color: var(--muted);
    }
  }
}

.modal-body {
  padding: 24px;
  flex: 1;
  overflow-y: auto;
}

.modal-footer {
  padding: 16px 24px 24px 24px;
  border-top: 1px solid var(--border-divider);
  display: flex;
  gap: 12px;
  justify-content: flex-end;
}

.alert-icon {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &.alert-icon-success {
    background-color: var(--status-success-bg);
    color: var(--status-success-text);
  }
  
  &.alert-icon-destructive {
    background-color: var(--status-error-bg);
    color: var(--status-error-text);
  }
}

.setup-checklist {
  display: flex;
  flex-direction: column;
  gap: 12px;
  
  .checklist-item {
    display: flex;
    align-items: center;
    gap: 12px;
    
    &.completed {
      .icon-check-circle {
        color: var(--status-success-text);
      }
    }
    
    .checklist-circle {
      width: 16px;
      height: 16px;
      border: 2px solid var(--border);
      border-radius: 50%;
    }
  }
}

.alert-box {
  padding: 16px;
  border-radius: var(--radius-md);
  
  &.alert-destructive {
    background-color: var(--status-error-bg);
    border: 1px solid var(--status-error-text);
    
    .alert-title {
      color: var(--status-error-text);
      font-size: 14px;
      font-weight: 500;
      margin: 0 0 8px 0;
    }
    
    .alert-list {
      margin: 0;
      padding-left: 16px;
      
      li {
        font-size: 12px;
        color: var(--status-error-text);
        margin-bottom: 4px;
      }
    }
  }
}

.form-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  margin-bottom: 24px;
}

.form-section-title {
  font-size: 14px;
  font-weight: 500;
  color: var(--text-body);
  margin-bottom: 16px;
}

.form-row {
  display: flex;
  gap: 12px;
}

.form-control {
  width: 100%;
  padding: 12px 16px;
  border: 1px solid var(--input-border);
  border-radius: var(--radius-md);
  background-color: var(--input-background);
  color: var(--text-body);
  font-size: 14px;
  
  &:focus {
    outline: none;
    border-color: var(--ring);
    box-shadow: 0 0 0 2px rgba(var(--ring), 0.2);
  }
  
  &::placeholder {
    color: var(--input-placeholder);
  }
}

.search-input {
  position: relative;
  margin-bottom: 16px;
  
  .icon-search {
    position: absolute;
    left: 12px;
    top: 50%;
    transform: translateY(-50%);
    color: var(--text-metadata);
  }
  
  .form-control {
    padding-left: 40px;
  }
}

.loading-indicator {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 16px;
  color: var(--primary);
  
  .spinner {
    width: 16px;
    height: 16px;
    border: 2px solid var(--primary);
    border-radius: 50%;
    border-top-color: transparent;
    animation: spin 1s linear infinite;
  }
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.assignment-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
}

.assignment-section {
  .assignment-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 12px;
    
    h5 {
      font-size: 14px;
      font-weight: 500;
      color: var(--text-body);
      margin: 0;
    }
    
    .badge {
      background-color: var(--muted);
      color: var(--muted-foreground);
      padding: 2px 8px;
      border-radius: 12px;
      font-size: 12px;
    }
  }
}

.assignment-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.assignment-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px;
  border: 1px solid var(--border-card);
  border-radius: var(--radius-md);
  
  .assignment-content {
    display: flex;
    align-items: center;
    gap: 12px;
    flex: 1;
  }
  
  .assignment-avatar {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background-color: var(--avatar-bg-client);
    color: var(--avatar-text-client);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    font-weight: 500;
    
    &.staff-avatar {
      background-color: var(--avatar-bg-staff);
      color: var(--avatar-text-staff);
    }
  }
  
  .assignment-info {
    flex: 1;
  }
  
  .assignment-name {
    font-size: 14px;
    font-weight: 500;
    color: var(--text-body);
  }
  
  .assignment-help {
    font-size: 12px;
    color: var(--text-metadata);
    margin: 2px 0;
  }
  
  .assignment-link {
    background: none;
    border: none;
    color: var(--primary);
    font-size: 12px;
    cursor: pointer;
    padding: 0;
    text-decoration: underline;
    
    &:hover {
      text-decoration: none;
    }
  }
  
  .assignment-remove {
    width: 24px;
    height: 24px;
    border: 2px solid rgba(239, 68, 68, 0.3);
    border-radius: 50%;
    background: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    
    &:hover {
      background-color: rgba(239, 68, 68, 0.1);
    }
    
    .remove-indicator {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background-color: rgb(239, 68, 68);
    }
  }
}

.example-section {
  margin-bottom: 32px;
  
  .h6-heading {
    margin-bottom: 8px;
  }
  
  .paragraph-small-regular {
    margin-bottom: 16px;
  }
}

.btn {
  padding: 8px 16px;
  border-radius: var(--radius-md);
  border: 1px solid transparent;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  
  &.btn-primary {
    background-color: var(--primary);
    color: var(--primary-foreground);
    
    &:hover {
      background-color: var(--primary-hover);
    }
  }
  
  &.btn-secondary {
    background-color: var(--secondary);
    color: var(--secondary-foreground);
    border-color: var(--border);
    
    &:hover {
      background-color: var(--secondary-hover);
    }
  }
  
  &.btn-destructive {
    background-color: var(--status-error-text);
    color: white;
    
    &:hover {
      background-color: var(--error-se04);
    }
  }
}

.flex {
  display: flex;
  
  &.gap-3 {
    gap: 12px;
  }
  
  &.items-center {
    align-items: center;
  }
}`,
    ionic: `<!-- Ionic Implementation -->
<!-- modal-examples.page.html -->
<ion-content class="ion-padding">
  <div class="modal-examples">
    <!-- Basic Form Modal -->
    <div class="example-section">
      <h4 class="h6-heading">Simple Form Modal</h4>
      <p class="paragraph-small-regular">
        Basic modals for simple forms and quick actions with minimal content.
      </p>
      <ion-button (click)="openSimpleModal()" fill="outline">
        Rename Folder
      </ion-button>
    </div>

    <!-- Alert Dialogs -->
    <div class="example-section">
      <h4 class="h6-heading">Alert Dialogs</h4>
      <p class="paragraph-small-regular">
        Progressive and destructive alert dialogs for user confirmations and warnings.
      </p>
      <div class="button-group">
        <ion-button (click)="openProgressiveAlert()">
          Complete Setup
        </ion-button>
        <ion-button (click)="openDestructiveAlert()" color="danger">
          Delete Account
        </ion-button>
      </div>
    </div>

    <!-- Complex Form Modal -->
    <div class="example-section">
      <h4 class="h6-heading">Feature-Heavy Modal</h4>
      <p class="paragraph-small-regular">
        Complex forms with multiple sections, data lists, and interactive elements.
      </p>
      <ion-button (click)="openCreateShiftModal()">
        Create Shift
      </ion-button>
    </div>

    <!-- Multi-step Modal -->
    <div class="example-section">
      <h4 class="h6-heading">Multi-Step Modal</h4>
      <p class="paragraph-small-regular">
        Guided workflows with step-by-step progression and validation.
      </p>
      <ion-button (click)="openMultiStepModal()">
        Add New Client
      </ion-button>
    </div>

    <!-- Full Screen Modal -->
    <div class="example-section">
      <h4 class="h6-heading">Full Screen Modal</h4>
      <p class="paragraph-small-regular">
        Large forms and complex interfaces that need maximum screen space.
      </p>
      <ion-button (click)="openIncidentModal()">
        Log Incident
      </ion-button>
    </div>
  </div>
</ion-content>

<!-- Simple Form Modal -->
<ion-modal [isOpen]="simpleModalOpen" (didDismiss)="closeSimpleModal()">
  <ng-template>
    <ion-header class="ion-no-border">
      <ion-toolbar>
        <ion-title>Rename Folder</ion-title>
        <ion-buttons slot="end">
          <ion-button (click)="closeSimpleModal()">
            <ion-icon name="close"></ion-icon>
          </ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <div class="form-section">
        <ion-item>
          <ion-label position="stacked">Folder Name</ion-label>
          <ion-input
            [(ngModel)]="folderName"
            placeholder="Enter folder name"
          ></ion-input>
        </ion-item>
      </div>
    </ion-content>

    <ion-footer class="ion-no-border">
      <ion-toolbar>
        <div class="footer-buttons">
          <ion-button fill="clear" (click)="closeSimpleModal()">
            Cancel
          </ion-button>
          <ion-button (click)="saveFolder()">
            Save changes
          </ion-button>
        </div>
      </ion-toolbar>
    </ion-footer>
  </ng-template>
</ion-modal>

<!-- Progressive Alert Modal -->
<ion-modal [isOpen]="progressiveAlertOpen" (didDismiss)="closeProgressiveAlert()">
  <ng-template>
    <ion-header class="ion-no-border">
      <ion-toolbar>
        <div class="alert-header">
          <div class="alert-icon success">
            <ion-icon name="checkmark-circle"></ion-icon>
          </div>
          <div class="alert-content">
            <ion-title>Complete Account Setup</ion-title>
            <p class="alert-description">
              Finish setting up your account to unlock all features and start managing your agency operations.
            </p>
          </div>
        </div>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <div class="setup-checklist">
        <div class="checklist-item completed">
          <ion-icon name="checkmark-circle" color="success"></ion-icon>
          <span>Basic information completed</span>
        </div>
        <div class="checklist-item completed">
          <ion-icon name="checkmark-circle" color="success"></ion-icon>
          <span>Team members invited</span>
        </div>
        <div class="checklist-item">
          <div class="checklist-circle"></div>
          <span>Billing information (optional)</span>
        </div>
      </div>
    </ion-content>

    <ion-footer class="ion-no-border">
      <ion-toolbar>
        <div class="footer-buttons">
          <ion-button fill="clear" (click)="closeProgressiveAlert()">
            Skip for now
          </ion-button>
          <ion-button (click)="completeSetup()">
            Complete Setup
          </ion-button>
        </div>
      </ion-toolbar>
    </ion-footer>
  </ng-template>
</ion-modal>

<!-- Destructive Alert Modal -->
<ion-modal [isOpen]="destructiveAlertOpen" (didDismiss)="closeDestructiveAlert()">
  <ng-template>
    <ion-header class="ion-no-border">
      <ion-toolbar>
        <div class="alert-header">
          <div class="alert-icon destructive">
            <ion-icon name="warning"></ion-icon>
          </div>
          <div class="alert-content">
            <ion-title>Delete Account</ion-title>
            <p class="alert-description">
              This action cannot be undone. This will permanently delete your account and remove all associated data.
            </p>
          </div>
        </div>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <ion-card class="warning-card">
        <ion-card-content>
          <h4 class="warning-title">Data that will be permanently deleted:</h4>
          <ul class="warning-list">
            <li>All client records and care documentation</li>
            <li>Staff schedules and shift assignments</li>
            <li>Billing history and financial records</li>
            <li>Account settings and user permissions</li>
          </ul>
        </ion-card-content>
      </ion-card>
    </ion-content>

    <ion-footer class="ion-no-border">
      <ion-toolbar>
        <div class="footer-buttons">
          <ion-button fill="clear" (click)="closeDestructiveAlert()">
            Cancel
          </ion-button>
          <ion-button color="danger" (click)="deleteAccount()">
            Delete Account
          </ion-button>
        </div>
      </ion-toolbar>
    </ion-footer>
  </ng-template>
</ion-modal>

<!-- Create Shift Modal -->
<ion-modal [isOpen]="createShiftModalOpen" (didDismiss)="closeCreateShiftModal()">
  <ng-template>
    <ion-header class="ion-no-border">
      <ion-toolbar>
        <ion-title>Create shift</ion-title>
        <ion-buttons slot="end">
          <ion-button (click)="closeCreateShiftModal()">
            <ion-icon name="close"></ion-icon>
          </ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <!-- Date and Time Section -->
      <div class="form-grid">
        <div class="form-section">
          <h4 class="section-title">Start date and time</h4>
          <div class="input-row">
            <ion-item>
              <ion-input
                [(ngModel)]="shiftData.startDate"
                placeholder="MM/DD/YYYY"
              ></ion-input>
            </ion-item>
            <ion-item>
              <ion-input
                [(ngModel)]="shiftData.startTime"
                placeholder="00:00 AM"
              ></ion-input>
            </ion-item>
          </div>
        </div>
        
        <div class="form-section">
          <h4 class="section-title">End date and time</h4>
          <div class="input-row">
            <ion-item>
              <ion-input
                [(ngModel)]="shiftData.endDate"
                placeholder="MM/DD/YYYY"
              ></ion-input>
            </ion-item>
            <ion-item>
              <ion-input
                [(ngModel)]="shiftData.endTime"
                placeholder="00:00 AM"
              ></ion-input>
            </ion-item>
          </div>
        </div>
      </div>

      <!-- Recurring Shift -->
      <ion-item>
        <ion-checkbox
          [(ngModel)]="shiftData.recurring"
          slot="start"
        ></ion-checkbox>
        <ion-label>Recurring shift</ion-label>
      </ion-item>

      <!-- Address -->
      <div class="form-section">
        <h4 class="section-title">Address</h4>
        <ion-item>
          <ion-input
            [(ngModel)]="shiftData.address"
            placeholder="Enter address"
          ></ion-input>
        </ion-item>
      </div>

      <!-- People Assignment -->
      <div class="form-section">
        <h4 class="section-title">Add people to shift</h4>
        
        <ion-item>
          <ion-icon name="search" slot="start"></ion-icon>
          <ion-input placeholder="Search for clients or staff"></ion-input>
        </ion-item>
        
        <div class="loading-indicator" *ngIf="checkingConflicts">
          <ion-spinner name="crescent"></ion-spinner>
          <span>Checking for conflicts</span>
        </div>

        <div class="assignment-grid">
          <!-- Clients List -->
          <div class="assignment-section">
            <div class="assignment-header">
              <h5>Clients</h5>
              <ion-badge>{{ clients.length }}</ion-badge>
              <ion-button fill="clear" size="small">
                <ion-icon name="ellipsis-vertical"></ion-icon>
              </ion-button>
            </div>
            
            <div class="assignment-list">
              <ion-card *ngFor="let client of clients" class="assignment-card">
                <ion-card-content>
                  <div class="assignment-content">
                    <ion-avatar class="assignment-avatar">
                      <div class="avatar-text">{{ client.initials }}</div>
                    </ion-avatar>
                    <div class="assignment-info">
                      <h6>{{ client.name }}</h6>
                      <p>Drag and drop staff here or click link to assign</p>
                      <ion-button fill="clear" size="small" color="primary" (click)="assignStaff(client.id)">
                        Assign staff
                      </ion-button>
                    </div>
                  </div>
                  <ion-button fill="clear" size="small" color="danger" class="remove-button">
                    <div class="remove-indicator"></div>
                  </ion-button>
                </ion-card-content>
              </ion-card>
            </div>
          </div>

          <!-- Staff List -->
          <div class="assignment-section">
            <div class="assignment-header">
              <h5>Staff</h5>
              <ion-badge>{{ staff.length }}</ion-badge>
              <ion-button fill="clear" size="small">
                <ion-icon name="ellipsis-vertical"></ion-icon>
              </ion-button>
            </div>
            
            <div class="assignment-list">
              <ion-card *ngFor="let member of staff" class="assignment-card">
                <ion-card-content>
                  <div class="assignment-content">
                    <ion-avatar class="assignment-avatar staff-avatar">
                      <div class="avatar-text">{{ member.initials }}</div>
                    </ion-avatar>
                    <h6>{{ member.name }}</h6>
                  </div>
                  <ion-button fill="clear" size="small" color="danger" class="remove-button">
                    <div class="remove-indicator"></div>
                  </ion-button>
                </ion-card-content>
              </ion-card>
            </div>
          </div>
        </div>
      </div>
    </ion-content>

    <ion-footer class="ion-no-border">
      <ion-toolbar>
        <div class="footer-buttons">
          <ion-button fill="clear" (click)="closeCreateShiftModal()">
            Cancel
          </ion-button>
          <ion-button (click)="createShift()">
            Create shift
          </ion-button>
        </div>
      </ion-toolbar>
    </ion-footer>
  </ng-template>
</ion-modal>

// Component.ts
import { Component } from '@angular/core';
import { IonicModule, ModalController } from '@ionic/angular';

interface ShiftData {
  startDate: string;
  startTime: string;
  endDate: string;
  endTime: string;
  recurring: boolean;
  address: string;
}

interface Person {
  id: string;
  name: string;
  initials: string;
}

@Component({
  selector: 'app-modal-examples',
  templateUrl: './modal-examples.page.html',
  styleUrls: ['./modal-examples.page.scss'],
  imports: [IonicModule]
})
export class ModalExamplesPage {
  // Modal states
  simpleModalOpen = false;
  progressiveAlertOpen = false;
  destructiveAlertOpen = false;
  createShiftModalOpen = false;
  multiStepModalOpen = false;
  incidentModalOpen = false;

  // Form data
  folderName = 'New Staff Reports';
  checkingConflicts = true;

  shiftData: ShiftData = {
    startDate: '03/25/2025',
    startTime: '09:00 AM',
    endDate: '25/03/2025',
    endTime: '11:59 PM',
    recurring: true,
    address: 'Placeholder'
  };

  clients: Person[] = [
    { id: 'a', name: 'Andrew Harris', initials: 'A' },
    { id: 'k', name: 'Kimberly Ramirez', initials: 'K' },
    { id: 'p', name: 'Patricia Rivera', initials: 'P' }
  ];

  staff: Person[] = [
    { id: 'b', name: 'Betty Brown', initials: 'B' },
    { id: 'j', name: 'Jessica Thomas', initials: 'J' },
    { id: 'l', name: 'Linda White', initials: 'L' },
    { id: 'm', name: 'Mark Ramirez', initials: 'M' }
  ];

  constructor(private modalController: ModalController) {}

  // Simple Modal Methods
  openSimpleModal() {
    this.simpleModalOpen = true;
  }

  closeSimpleModal() {
    this.simpleModalOpen = false;
  }

  saveFolder() {
    console.log('Saving folder:', this.folderName);
    this.closeSimpleModal();
  }

  // Alert Dialog Methods
  openProgressiveAlert() {
    this.progressiveAlertOpen = true;
  }

  closeProgressiveAlert() {
    this.progressiveAlertOpen = false;
  }

  completeSetup() {
    console.log('Completing setup');
    this.closeProgressiveAlert();
  }

  openDestructiveAlert() {
    this.destructiveAlertOpen = true;
  }

  closeDestructiveAlert() {
    this.destructiveAlertOpen = false;
  }

  deleteAccount() {
    console.log('Deleting account');
    this.closeDestructiveAlert();
  }

  // Create Shift Modal Methods
  openCreateShiftModal() {
    this.createShiftModalOpen = true;
    // Simulate checking for conflicts
    setTimeout(() => {
      this.checkingConflicts = false;
    }, 2000);
  }

  closeCreateShiftModal() {
    this.createShiftModalOpen = false;
    this.checkingConflicts = true;
  }

  assignStaff(clientId: string) {
    console.log('Assigning staff to client:', clientId);
  }

  createShift() {
    console.log('Creating shift:', this.shiftData);
    this.closeCreateShiftModal();
  }

  // Multi-step Modal Methods
  openMultiStepModal() {
    this.multiStepModalOpen = true;
  }

  // Incident Modal Methods
  openIncidentModal() {
    this.incidentModalOpen = true;
  }
}

// modal-examples.page.scss
.modal-examples {
  .example-section {
    margin-bottom: 32px;
    
    .button-group {
      display: flex;
      gap: 12px;
      flex-wrap: wrap;
    }
  }
}

.alert-header {
  display: flex;
  align-items: flex-start;
  gap: 16px;
  padding: 16px;
  
  .alert-icon {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    
    &.success {
      background-color: var(--ion-color-success-tint);
      color: var(--ion-color-success);
    }
    
    &.destructive {
      background-color: var(--ion-color-danger-tint);
      color: var(--ion-color-danger);
    }
    
    ion-icon {
      font-size: 24px;
    }
  }
  
  .alert-content {
    flex: 1;
    
    ion-title {
      font-size: 20px;
      font-weight: 500;
      margin-bottom: 8px;
    }
    
    .alert-description {
      font-size: 14px;
      color: var(--ion-color-medium);
      margin: 0;
      line-height: 1.4;
    }
  }
}

.setup-checklist {
  display: flex;
  flex-direction: column;
  gap: 16px;
  
  .checklist-item {
    display: flex;
    align-items: center;
    gap: 12px;
    
    &.completed {
      ion-icon {
        color: var(--ion-color-success);
      }
    }
    
    .checklist-circle {
      width: 20px;
      height: 20px;
      border: 2px solid var(--ion-color-medium);
      border-radius: 50%;
    }
    
    span {
      font-size: 14px;
      color: var(--ion-color-dark);
    }
  }
}

.warning-card {
  --background: var(--ion-color-danger-tint);
  --color: var(--ion-color-danger-shade);
  border: 1px solid var(--ion-color-danger);
  
  .warning-title {
    font-size: 14px;
    font-weight: 500;
    margin: 0 0 12px 0;
    color: var(--ion-color-danger-shade);
  }
  
  .warning-list {
    margin: 0;
    padding-left: 16px;
    
    li {
      font-size: 12px;
      margin-bottom: 6px;
      color: var(--ion-color-danger-shade);
    }
  }
}

.footer-buttons {
  display: flex;
  justify-content: flex-end;
  gap: 12px;
  padding: 8px 16px;
  width: 100%;
}

.form-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  margin-bottom: 24px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
}

.form-section {
  margin-bottom: 24px;
  
  .section-title {
    font-size: 14px;
    font-weight: 500;
    margin-bottom: 12px;
    color: var(--ion-color-dark);
  }
  
  .input-row {
    display: flex;
    gap: 12px;
    
    ion-item {
      flex: 1;
    }
  }
}

.loading-indicator {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 24px;
  color: var(--ion-color-primary);
  
  span {
    font-size: 14px;
  }
}

.assignment-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  margin-top: 24px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
}

.assignment-section {
  .assignment-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 16px;
    
    h5 {
      font-size: 14px;
      font-weight: 500;
      margin: 0;
      color: var(--ion-color-dark);
    }
    
    ion-badge {
      --background: var(--ion-color-light-shade);
      --color: var(--ion-color-dark);
    }
  }
}

.assignment-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.assignment-card {
  margin: 0;
  
  ion-card-content {
    padding: 12px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  
  .assignment-content {
    display: flex;
    align-items: center;
    gap: 12px;
    flex: 1;
  }
  
  .assignment-avatar {
    width: 32px;
    height: 32px;
    
    .avatar-text {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: var(--ion-color-primary-tint);
      color: var(--ion-color-primary-contrast);
      font-size: 14px;
      font-weight: 500;
      border-radius: 50%;
    }
    
    &.staff-avatar .avatar-text {
      background-color: var(--ion-color-dark);
      color: white;
    }
  }
  
  .assignment-info {
    flex: 1;
    
    h6 {
      font-size: 14px;
      font-weight: 500;
      margin: 0 0 4px 0;
      color: var(--ion-color-dark);
    }
    
    p {
      font-size: 12px;
      color: var(--ion-color-medium);
      margin: 0 0 4px 0;
    }
  }
  
  .remove-button {
    width: 32px;
    height: 32px;
    --border-radius: 50%;
    --border-width: 2px;
    --border-color: rgba(var(--ion-color-danger-rgb), 0.3);
    
    .remove-indicator {
      width: 8px;
      height: 8px;
      background-color: var(--ion-color-danger);
      border-radius: 50%;
    }
  }
}`
  },
  guidelines: {
    properties: [
      {
        property: 'Size',
        type: 'Small (400px), Default (500px), Large (800px), XL (1200px), Full (95vw/vh)',
        description: 'Controls the modal width and maximum dimensions'
      },
      {
        property: 'Type',
        type: 'Form, Alert Dialog, Feature-heavy, Multi-step, Full-screen',
        description: 'Determines the modal pattern and interaction behavior'
      },
      {
        property: 'Close Behavior',
        type: 'X Button, Overlay Click, Escape Key, Programmatic',
        description: 'Methods available for dismissing the modal'
      },
      {
        property: 'Focus Management',
        type: 'Auto-focus, Focus Trap, Return Focus',
        description: 'Keyboard navigation and accessibility behavior'
      },
      {
        property: 'Backdrop',
        type: 'Dismissible, Non-dismissible, Custom opacity',
        description: 'Overlay behavior and interaction settings'
      }
    ],
    attributes: [
      {
        attribute: 'Header Section',
        description: 'Title, optional description, and close button with consistent spacing and typography'
      },
      {
        attribute: 'Body Content',
        description: 'Scrollable content area that adapts to content height with proper padding'
      },
      {
        attribute: 'Footer Actions',
        description: 'Right-aligned primary actions with secondary actions on the left'
      },
      {
        attribute: 'Progressive Actions',
        description: 'Clear next steps with positive reinforcement for setup and onboarding flows'
      },
      {
        attribute: 'Destructive Warnings',
        description: 'Explicit consequences with detailed data loss information and confirmation steps'
      },
      {
        attribute: 'Multi-step Progress',
        description: 'Visual progress indicators with step validation and navigation controls'
      }
    ],
    accessibility: [
      'Trap focus within modal and return to trigger element on close',
      'Use proper ARIA roles (dialog) and labels (aria-labelledby, aria-describedby)',
      'Support Escape key to close modal and prevent background scrolling',
      'Ensure sufficient color contrast for all text and interactive elements',
      'Provide descriptive titles and clear action button labels',
      'Announce modal opening and content changes to screen readers',
      'Use semantic HTML structure with proper heading hierarchy',
      'Make all interactive elements keyboard accessible with visible focus indicators',
      'For destructive actions, require explicit confirmation and provide clear warnings',
      'Implement proper loading states with appropriate ARIA live regions for status updates'
    ]
  }
};