import React, { useState } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Modal, ModalContent, ModalHeader, ModalTitle, ModalDescription, ModalBody, ModalFooter } from '../ui/modal';
import { Checkbox } from '../ui/checkbox';
import { Badge } from '../ui/badge';
import { Separator } from '../ui/separator';
import { CheckCircle, AlertCircle, Search } from 'lucide-react';

export function ModalPreview() {
  // Modal preview states
  const [simpleModalOpen, setSimpleModalOpen] = useState(false);
  const [progressiveModalOpen, setProgressiveModalOpen] = useState(false);
  const [destructiveModalOpen, setDestructiveModalOpen] = useState(false);
  const [complexModalOpen, setComplexModalOpen] = useState(false);
  const [folderName, setFolderName] = useState('New Staff Reports');

  return (
    <div className="space-y-8 w-full">
      {/* Simple Form Modal */}
      <div className="space-y-3">
        <h4 className="paragraph-small-medium" style={{ color: 'var(--text-body)' }}>Simple Form Modal</h4>
        <p className="paragraph-xsmall-regular" style={{ color: 'var(--text-metadata)' }}>
          Basic modals for simple forms and quick actions with minimal content.
        </p>
        <Modal open={simpleModalOpen} onOpenChange={setSimpleModalOpen}>
          <Button variant="secondary" onClick={() => setSimpleModalOpen(true)}>
            Rename Folder
          </Button>
          
          <ModalContent size="sm" onClose={() => setSimpleModalOpen(false)}>
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
                    style={{ 
                      backgroundColor: 'var(--input-background)',
                      borderColor: 'var(--input-border)',
                      color: 'var(--text-body)'
                    }}
                  />
                </div>
              </div>
            </ModalBody>
            
            <ModalFooter>
              <Button 
                variant="secondary" 
                onClick={() => setSimpleModalOpen(false)}
              >
                Cancel
              </Button>
              <Button onClick={() => setSimpleModalOpen(false)}>
                Save changes
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </div>

      <Separator />

      {/* Alert Dialogs */}
      <div className="space-y-4">
        <h4 className="paragraph-small-medium" style={{ color: 'var(--text-body)' }}>Alert Dialogs</h4>
        <p className="paragraph-xsmall-regular" style={{ color: 'var(--text-metadata)' }}>
          Progressive and destructive alert dialogs for user confirmations and warnings.
        </p>
        
        <div className="flex gap-3">
          {/* Progressive Alert Dialog */}
          <Modal open={progressiveModalOpen} onOpenChange={setProgressiveModalOpen}>
            <Button onClick={() => setProgressiveModalOpen(true)}>
              Complete Setup
            </Button>
            
            <ModalContent size="sm" showCloseButton={false}>
              <ModalHeader>
                <div className="flex items-center gap-3">
                  <div 
                    className="w-10 h-10 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: 'var(--status-success-bg)' }}
                  >
                    <CheckCircle className="h-5 w-5" style={{ color: 'var(--status-success-text)' }} />
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
                      <CheckCircle className="h-4 w-4" style={{ color: 'var(--status-success-text)' }} />
                      <span className="paragraph-small-regular">Basic information completed</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-4 w-4" style={{ color: 'var(--status-success-text)' }} />
                      <span className="paragraph-small-regular">Team members invited</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-4 h-4 rounded-full border-2" style={{ borderColor: 'var(--border)' }} />
                      <span className="paragraph-small-regular">Billing information (optional)</span>
                    </div>
                  </div>
                </div>
              </ModalBody>
              
              <ModalFooter>
                <Button 
                  variant="secondary" 
                  onClick={() => setProgressiveModalOpen(false)}
                >
                  Skip for now
                </Button>
                <Button onClick={() => setProgressiveModalOpen(false)}>
                  Complete Setup
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>

          {/* Destructive Alert Dialog */}
          <Modal open={destructiveModalOpen} onOpenChange={setDestructiveModalOpen}>
            <Button 
              variant="destructive" 
              onClick={() => setDestructiveModalOpen(true)}
            >
              Delete Account
            </Button>
            
            <ModalContent size="sm" showCloseButton={false}>
              <ModalHeader>
                <div className="flex items-center gap-3">
                  <div 
                    className="w-10 h-10 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: 'var(--status-error-bg)' }}
                  >
                    <AlertCircle className="h-5 w-5" style={{ color: 'var(--status-error-text)' }} />
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
                  <div 
                    className="p-4 rounded-lg border"
                    style={{ 
                      backgroundColor: 'var(--status-error-bg)',
                      borderColor: 'var(--status-error-text)'
                    }}
                  >
                    <h4 className="paragraph-small-medium mb-2" style={{ color: 'var(--status-error-text)' }}>
                      Data that will be permanently deleted:
                    </h4>
                    <ul className="space-y-1">
                      <li className="paragraph-xsmall-regular" style={{ color: 'var(--status-error-text)' }}>
                        • All client records and care documentation
                      </li>
                      <li className="paragraph-xsmall-regular" style={{ color: 'var(--status-error-text)' }}>
                        • Staff schedules and shift assignments
                      </li>
                      <li className="paragraph-xsmall-regular" style={{ color: 'var(--status-error-text)' }}>
                        • Billing history and financial records
                      </li>
                      <li className="paragraph-xsmall-regular" style={{ color: 'var(--status-error-text)' }}>
                        • Account settings and user permissions
                      </li>
                    </ul>
                  </div>
                </div>
              </ModalBody>
              
              <ModalFooter>
                <Button 
                  variant="secondary" 
                  onClick={() => setDestructiveModalOpen(false)}
                >
                  Cancel
                </Button>
                <Button 
                  variant="destructive" 
                  onClick={() => setDestructiveModalOpen(false)}
                >
                  Delete Account
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </div>
      </div>

      <Separator />

      {/* Complex Form Modal */}
      <div className="space-y-3">
        <h4 className="paragraph-small-medium" style={{ color: 'var(--text-body)' }}>Feature-Heavy Modal</h4>
        <p className="paragraph-xsmall-regular" style={{ color: 'var(--text-metadata)' }}>
          Complex forms with multiple sections, data lists, and interactive elements.
        </p>
        <Modal open={complexModalOpen} onOpenChange={setComplexModalOpen}>
          <Button onClick={() => setComplexModalOpen(true)}>
            Create Shift
          </Button>
          
          <ModalContent size="xl" onClose={() => setComplexModalOpen(false)}>
            <ModalHeader>
              <ModalTitle>Create shift</ModalTitle>
            </ModalHeader>
            
            <ModalBody className="space-y-6">
              {/* Date and Time Section */}
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="paragraph-small-medium">Start date and time</h3>
                  <div className="flex gap-3">
                    <Input placeholder="MM/DD/YYYY" className="flex-1" />
                    <Input placeholder="00:00 AM" className="flex-1" />
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="paragraph-small-medium">End date and time</h3>
                  <div className="flex gap-3">
                    <Input placeholder="MM/DD/YYYY" className="flex-1" />
                    <Input placeholder="00:00 AM" className="flex-1" />
                  </div>
                </div>
              </div>

              {/* Recurring Shift */}
              <div className="flex items-center space-x-3">
                <Checkbox id="recurring" defaultChecked />
                <Label htmlFor="recurring" className="paragraph-small-regular">
                  Recurring shift
                </Label>
              </div>

              {/* Address */}
              <div className="space-y-2">
                <h3 className="paragraph-small-medium">Address</h3>
                <Input placeholder="Enter address" defaultValue="Placeholder" />
              </div>

              {/* Add People to Shift */}
              <div className="space-y-4">
                <h3 className="paragraph-small-medium">Add people to shift</h3>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4" style={{ color: 'var(--text-metadata)' }} />
                  <Input
                    placeholder="Search for clients or staff"
                    className="pl-10"
                  />
                </div>
                
                <div className="flex items-center justify-center py-4">
                  <div className="flex items-center gap-2" style={{ color: 'var(--primary)' }}>
                    <div className="w-4 h-4 border-2 rounded-full border-t-transparent animate-spin" style={{ borderColor: 'var(--primary)' }} />
                    <span className="paragraph-small-regular">Checking for conflicts</span>
                  </div>
                </div>

                {/* Simplified Assignment Lists */}
                <div className="grid grid-cols-2 gap-6">
                  {/* Clients */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <h4 className="paragraph-small-medium">Clients</h4>
                      <Badge variant="secondary" className="text-xs">3</Badge>
                    </div>
                    
                    <div className="space-y-2">
                      {['Andrew Harris', 'Kimberly Ramirez'].map((name, index) => (
                        <div key={index} className="flex items-center justify-between p-3 border rounded-lg" style={{ borderColor: 'var(--border-card)' }}>
                          <div className="flex items-center gap-3">
                            <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-xs font-medium">
                              {name.charAt(0)}
                            </div>
                            <div className="flex-1">
                              <div className="paragraph-small-medium">{name}</div>
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
                      <Badge variant="secondary" className="text-xs">2</Badge>
                    </div>
                    
                    <div className="space-y-2">
                      {['Betty Brown', 'Jessica Thomas'].map((name, index) => (
                        <div key={index} className="flex items-center justify-between p-3 border rounded-lg" style={{ borderColor: 'var(--border-card)' }}>
                          <div className="flex items-center gap-3">
                            <div className="w-6 h-6 rounded-full bg-gray-600 text-white flex items-center justify-center text-xs font-medium">
                              {name.charAt(0)}
                            </div>
                            <span className="paragraph-small-medium">{name}</span>
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
                onClick={() => setComplexModalOpen(false)}
              >
                Cancel
              </Button>
              <Button onClick={() => setComplexModalOpen(false)}>
                Create shift
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </div>
    </div>
  );
}