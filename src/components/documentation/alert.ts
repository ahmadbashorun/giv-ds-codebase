export const alertDocumentation = {
  name: 'Alert',
  description: 'Alerts provide important messages and feedback to users. They come in different variants to convey different types of information.',
  category: 'Feedback',
  examples: {
    react: `// React Implementation
import { Alert, AlertDescription, AlertTitle } from './ui/alert';
import { AlertCircle, CheckCircle, XCircle, Info } from 'lucide-react';

function AlertExamples() {
  return (
    <div className="space-y-4">
      <Alert>
        <Info />
        <AlertTitle>Info</AlertTitle>
        <AlertDescription>
          This is an informational message to provide context or additional details.
        </AlertDescription>
      </Alert>
      
      <Alert>
        <CheckCircle />
        <AlertTitle>Success</AlertTitle>
        <AlertDescription>
          Your changes have been saved successfully. All data is up to date.
        </AlertDescription>
      </Alert>
      
      <Alert>
        <AlertCircle />
        <AlertTitle>Warning</AlertTitle>
        <AlertDescription>
          Please review the information before proceeding. Some fields may need attention.
        </AlertDescription>
      </Alert>
      
      <Alert variant="destructive">
        <XCircle />
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>
          Something went wrong. Please try again or contact support if the issue persists.
        </AlertDescription>
      </Alert>

      {/* Simple alerts without titles */}
      <div className="space-y-3">
        <Alert>
          <Info />
          <AlertDescription>
            Simple informational alert without a title.
          </AlertDescription>
        </Alert>
        
        <Alert>
          <CheckCircle />
          <AlertDescription>
            Operation completed successfully.
          </AlertDescription>
        </Alert>
      </div>
    </div>
  );
}`,
    angular: `<!-- Angular Implementation -->
<div class="space-y-4">
  <div class="alert alert-info" *ngIf="showInfo">
    <div class="alert-icon">
      <i class="icon-info"></i>
    </div>
    <div class="alert-content">
      <h4 class="alert-title">Info</h4>
      <p class="alert-description">{{ infoMessage }}</p>
    </div>
  </div>
  
  <div class="alert alert-success" *ngIf="showSuccess">
    <div class="alert-icon">
      <i class="icon-check-circle"></i>
    </div>
    <div class="alert-content">
      <h4 class="alert-title">Success</h4>
      <p class="alert-description">{{ successMessage }}</p>
    </div>
  </div>
  
  <div class="alert alert-warning" *ngIf="showWarning">
    <div class="alert-icon">
      <i class="icon-alert-circle"></i>
    </div>
    <div class="alert-content">
      <h4 class="alert-title">Warning</h4>
      <p class="alert-description">{{ warningMessage }}</p>
    </div>
  </div>
  
  <div class="alert alert-error" *ngIf="showError">
    <div class="alert-icon">
      <i class="icon-x-circle"></i>
    </div>
    <div class="alert-content">
      <h4 class="alert-title">Error</h4>
      <p class="alert-description">{{ errorMessage }}</p>
    </div>
  </div>

  <!-- Simple alerts without titles -->
  <div class="alert alert-info">
    <div class="alert-icon">
      <i class="icon-info"></i>
    </div>
    <div class="alert-content">
      <p class="alert-description">Simple informational alert without a title.</p>
    </div>
  </div>
  
  <div class="alert alert-success">
    <div class="alert-icon">
      <i class="icon-check-circle"></i>
    </div>
    <div class="alert-content">
      <p class="alert-description">Operation completed successfully.</p>
    </div>
  </div>
</div>

// Component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-alert-example',
  templateUrl: './alert-example.component.html',
  styleUrls: ['./alert-example.component.scss']
})
export class AlertExampleComponent {
  showInfo = true;
  showSuccess = true;
  showWarning = true;
  showError = true;
  
  infoMessage = 'This is an informational message to provide context or additional details.';
  successMessage = 'Your changes have been saved successfully. All data is up to date.';
  warningMessage = 'Please review the information before proceeding. Some fields may need attention.';
  errorMessage = 'Something went wrong. Please try again or contact support if the issue persists.';

  dismissAlert(type: string) {
    switch(type) {
      case 'info': this.showInfo = false; break;
      case 'success': this.showSuccess = false; break;
      case 'warning': this.showWarning = false; break;
      case 'error': this.showError = false; break;
    }
  }
}`,
    ionic: `<!-- Ionic Implementation -->
<ion-content>
  <div class="ion-padding">
    <ion-item *ngIf="showInfo" class="alert-info">
      <ion-icon name="information-circle" slot="start"></ion-icon>
      <ion-label>
        <h3>Info</h3>
        <p>{{ infoMessage }}</p>
      </ion-label>
    </ion-item>
    
    <ion-item *ngIf="showSuccess" class="alert-success">
      <ion-icon name="checkmark-circle" slot="start"></ion-icon>
      <ion-label>
        <h3>Success</h3>
        <p>{{ successMessage }}</p>
      </ion-label>
    </ion-item>
    
    <ion-item *ngIf="showWarning" class="alert-warning">
      <ion-icon name="warning" slot="start"></ion-icon>
      <ion-label>
        <h3>Warning</h3>
        <p>{{ warningMessage }}</p>
      </ion-label>
    </ion-item>
    
    <ion-item *ngIf="showError" class="alert-error">
      <ion-icon name="close-circle" slot="start"></ion-icon>
      <ion-label>
        <h3>Error</h3>
        <p>{{ errorMessage }}</p>
      </ion-label>
    </ion-item>

    <!-- Simple alerts without titles -->
    <ion-item class="alert-info">
      <ion-icon name="information-circle" slot="start"></ion-icon>
      <ion-label>
        <p>Simple informational alert without a title.</p>
      </ion-label>
    </ion-item>
    
    <ion-item class="alert-success">
      <ion-icon name="checkmark-circle" slot="start"></ion-icon>
      <ion-label>
        <p>Operation completed successfully.</p>
      </ion-label>
    </ion-item>

    <!-- Toast alternatives -->
    <div class="space-y-3">
      <ion-toast
        [isOpen]="showToastInfo"
        message="This is an info toast message"
        duration="3000"
        position="top"
        color="primary"
        (didDismiss)="showToastInfo = false">
      </ion-toast>
      
      <ion-toast
        [isOpen]="showToastSuccess"
        message="Success! Your changes have been saved."
        duration="3000"
        position="top"
        color="success"
        (didDismiss)="showToastSuccess = false">
      </ion-toast>
    </div>
  </div>
</ion-content>

// Component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-alert-example',
  templateUrl: './alert-example.page.html',
  styleUrls: ['./alert-example.page.scss']
})
export class AlertExamplePage {
  showInfo = true;
  showSuccess = true;
  showWarning = true;
  showError = true;
  showToastInfo = false;
  showToastSuccess = false;
  
  infoMessage = 'This is an informational message to provide context or additional details.';
  successMessage = 'Your changes have been saved successfully. All data is up to date.';
  warningMessage = 'Please review the information before proceeding. Some fields may need attention.';
  errorMessage = 'Something went wrong. Please try again or contact support if the issue persists.';
  
  constructor() {}

  showToast(type: string) {
    if (type === 'info') this.showToastInfo = true;
    if (type === 'success') this.showToastSuccess = true;
  }

  dismissAlert(type: string) {
    switch(type) {
      case 'info': this.showInfo = false; break;
      case 'success': this.showSuccess = false; break;
      case 'warning': this.showWarning = false; break;
      case 'error': this.showError = false; break;
    }
  }
}`
  }
};