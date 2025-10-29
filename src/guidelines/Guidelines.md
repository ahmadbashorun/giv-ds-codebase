# Giv Design System Guidelines

## Overview
Giv is a B2B SaaS platform for IDD (Intellectual and Developmental Disabilities) agencies to manage their operations comprehensively. The platform consists of a web application for agency administrators and a mobile app for caregivers, covering shift management, client care, billing, and documentation.

## Core Design Principles

1. **Clarity First** - Reduce cognitive load through clear hierarchy and spacing
2. **Consistency** - Use established patterns and solutions throughout
3. **Efficiency** - Optimize for quick task completion and daily workflows
4. **Accessibility** - WCAG AA compliant with full keyboard support

## Typography Usage

### Default Text Sizes
- **Display Text**: H1-H4 (40px-28px) - Reserved for marketing/landing pages only
- **Page Titles**: H5 (24px) - Main page headers
- **Section Headers**: H6 (20px) - Major sections within a page
- **Subsection Headers**: H7 (16px) - Smaller groupings and card headers
- **Body Text**: Paragraph Small Regular (14px) - Default for all content
- **Supporting Text**: Caption Large (14px) - Secondary information
- **Metadata**: Caption Medium (12px) - Timestamps, labels, helper text

### Text Hierarchy Rules
- H1-H4 are display sizes, use H5 and below for UI content
- Never skip heading levels within UI content (H5→H6→H7)
- Body text should maintain 1.3 line height for readability
- Limit line length to 65-75 characters for optimal reading

## Component Standards

### Default Sizes
- **Buttons**: Medium (40px height) - Use small/large only when context demands
- **Inputs**: Medium (40px height) - Consistent with buttons for form alignment
- **Icons**: 20px for UI elements, 16px for inline text

### Forms & Inputs
- **Labels**: Always above inputs, never rely solely on placeholders
- **Required Fields**: Mark with red asterisk (*) and include legend
- **Validation**: Show inline errors below fields with clear messages
- **Helper Text**: Use sparingly, place below input fields

### Buttons & Actions
- **Primary**: One per section, most important action
- **Secondary**: Supporting actions, often paired with primary
- **Tertiary**: Less important actions, minimal visual weight
- **Placement**: Primary actions right-aligned, secondary left

## Date & Time Formats

### Standard Formats
1. **Full DateTime**: `MMM D, YYYY h:mm A` (e.g., "Apr 15, 2024 2:30 PM")
2. **Short Date**: `MM/DD/YY` (e.g., "04/15/24")
3. **Time Only**: `h:mm A` (e.g., "2:30 PM")
4. **Relative Time**: "X minutes/hours/days ago" (up to 7 days)

## Layout Principles

### Spacing System
- **Base Unit**: 8px grid
- **Component Spacing**: 16px between related items, 24px between sections
- **Page Margins**: 24px standard
- **Max Content Width**: 1400px centered

### Visual Hierarchy
- Use elevation (shadows) sparingly for important elements
- Group related content with cards or subtle borders
- Maintain consistent alignment across components

## Interaction Patterns

### Loading States
- **Initial Load**: Show skeleton screens matching layout
- **Data Loading**: 15-20 items initially, lazy load on scroll
- **Lazy Loading**: Show spinner at bottom of list when loading more items
- **Actions**: Disable button and show loading spinner

### Feedback
- **Success**: Green confirmation with specific message
- **Errors**: Red text below fields with recovery instructions
- **Warnings**: Yellow for important but non-critical information

### Navigation
- **Breadcrumbs**: For multi-step workflows
- **Tabs**: For organizing related content
- **Pagination**: Lazy loading with visual indicator

## Writing Guidelines

### UI Copy
- **Actions**: Start with verbs (Save, Create, Delete)
- **Errors**: Be specific and helpful
- **Empty States**: Positive and action-oriented
- **Labels**: Clear and concise, avoid jargon

### Terminology
- Client (not patient)
- Caregiver (not staff)
- Shift (not appointment)
- Agency (not company)

## Quality Standards

### Accessibility
- Keyboard navigation for all interactive elements
- Proper ARIA labels and roles
- Color not sole indicator of meaning
- Focus indicators clearly visible

### Performance
- Debounce inputs (300ms)
- Lazy load lists with visual spinner when fetching more items
- Virtualize very long lists (100+ items)
- Optimize images and assets

### Responsive Design
- Desktop-first approach (1440px)
- Graceful degradation to tablet/mobile
- Test at key breakpoints