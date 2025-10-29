export const cardDocumentation = {
  name: 'Card',
  description: 'Cards contain content and actions about a single subject. They serve as an entry point to more detailed information.',
  category: 'Data Display',
  examples: {
    react: `// React Implementation
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, CardAction } from './ui/card';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Badge } from './ui/badge';
import { Button } from './ui/button';

function UserCard({ user }) {
  return (
    <Card>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <Avatar>
              <AvatarImage src={user.avatar} alt={user.name} />
              <AvatarFallback>
                {user.name.split(' ').map(n => n[0]).join('')}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <h3 className="h6-heading">{user.name}</h3>
              <p className="caption-medium text-metadata">{user.role}</p>
            </div>
            <Badge variant="secondary">{user.status}</Badge>
          </div>
          <p className="paragraph-small-regular">
            {user.description}
          </p>
          <div className="flex gap-2">
            <Button size="sm">View Profile</Button>
            <Button variant="tertiary" size="sm">Message</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function CardExamples() {
  const sampleUser = {
    name: 'Sarah Johnson',
    role: 'Senior DSP',
    avatar: '/avatars/sarah.jpg',
    status: 'Active',
    description: 'Experienced DSP specializing in developmental disabilities with 5+ years of experience.'
  };

  return (
    <div className="space-y-6">
      <UserCard user={sampleUser} />
      
      {/* Basic Card */}
      <Card>
        <CardContent>
          <div className="space-y-4">
            <h3 className="h6-heading">Basic Card</h3>
            <p className="paragraph-small-regular">
              This is a basic card with some content and actions.
            </p>
            <div className="flex gap-2">
              <Button size="sm">Primary Action</Button>
              <Button variant="tertiary" size="sm">Secondary</Button>
            </div>
          </div>
        </CardContent>
      </Card>
      
      {/* Card with Header */}
      <Card>
        <CardHeader className="border-b">
          <CardTitle>Card Header</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="paragraph-small-regular">
            Card content goes here. This card has a separate header section.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}`,
    angular: `<!-- Angular Implementation -->
<div class="card">
  <div class="card-body">
    <div class="flex items-center gap-3">
      <div class="avatar">
        <img [src]="user.avatar" [alt]="user.name" />
      </div>
      <div class="flex-1">
        <h3 class="h6-heading">{{ user.name }}</h3>
        <p class="caption-medium text-metadata">{{ user.role }}</p>
      </div>
      <span class="badge badge-secondary">{{ user.status }}</span>
    </div>
    <p class="paragraph-small-regular">
      {{ user.description }}
    </p>
    <div class="flex gap-2">
      <button class="btn btn-sm">View Profile</button>
      <button class="btn btn-tertiary btn-sm">Message</button>
    </div>
  </div>
</div>

<!-- Basic Card Example -->
<div class="card">
  <div class="card-body">
    <h3 class="h6-heading">Basic Card</h3>
    <p class="paragraph-small-regular">
      This is a basic card with some content and actions.
    </p>
    <div class="flex gap-2">
      <button class="btn btn-sm">Primary Action</button>
      <button class="btn btn-tertiary btn-sm">Secondary</button>
    </div>
  </div>
</div>

<!-- Card with Header -->
<div class="card">
  <div class="card-header">
    <h3 class="h6-heading">Card Header</h3>
  </div>
  <div class="card-body">
    <p class="paragraph-small-regular">
      Card content goes here. This card has a separate header section.
    </p>
  </div>
</div>

// Component.ts
import { Component, Input } from '@angular/core';

interface User {
  name: string;
  role: string;
  avatar: string;
  status: string;
  description: string;
}

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent {
  @Input() user: User = {
    name: 'Sarah Johnson',
    role: 'Senior DSP',
    avatar: '/avatars/sarah.jpg',
    status: 'Active',
    description: 'Experienced DSP specializing in developmental disabilities with 5+ years of experience.'
  };
}`,
    ionic: `<!-- Ionic Implementation -->
<ion-card>
  <ion-card-content>
    <div class="flex items-center gap-3">
      <ion-avatar>
        <img [src]="user.avatar" [alt]="user.name" />
      </ion-avatar>
      <div class="flex-1">
        <h3 class="h6-heading">{{ user.name }}</h3>
        <p class="caption-medium text-metadata">{{ user.role }}</p>
      </div>
      <ion-badge color="secondary">{{ user.status }}</ion-badge>
    </div>
    <p class="paragraph-small-regular">
      {{ user.description }}
    </p>
    <div class="flex gap-2">
      <ion-button size="small">View Profile</ion-button>
      <ion-button fill="outline" size="small">Message</ion-button>
    </div>
  </ion-card-content>
</ion-card>

<!-- Basic Card Example -->
<ion-card>
  <ion-card-header>
    <ion-card-title>Basic Card</ion-card-title>
  </ion-card-header>
  <ion-card-content>
    <p>This is a basic card with some content and actions.</p>
    <div class="flex gap-2">
      <ion-button size="small">Primary Action</ion-button>
      <ion-button fill="outline" size="small">Secondary</ion-button>
    </div>
  </ion-card-content>
</ion-card>

// Component.ts
import { Component, Input } from '@angular/core';

interface User {
  name: string;
  role: string;
  avatar: string;
  status: string;
  description: string;
}

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.page.html',
  styleUrls: ['./user-card.page.scss']
})
export class UserCardPage {
  @Input() user: User = {
    name: 'Sarah Johnson',
    role: 'Senior DSP',
    avatar: '/avatars/sarah.jpg',
    status: 'Active',
    description: 'Experienced DSP specializing in developmental disabilities with 5+ years of experience.'
  };
}`
  }
};