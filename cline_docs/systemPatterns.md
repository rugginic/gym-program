# System Patterns

## Architecture
The gym program is a single-page web application built with HTML, CSS, and JavaScript. It uses a tab-based navigation system to switch between different workout days and progress information.

## Key Technical Decisions
- **Single Page Application**: All content is loaded at once, with JavaScript controlling which tab is displayed
- **CSS Variables**: Used for consistent color theming throughout the application
- **Responsive Design**: Flexible layout that adapts to different screen sizes
- **Semantic HTML**: Proper use of HTML elements for better accessibility and structure

## Design Patterns
- **Tab Navigation Pattern**: Uses JavaScript to show/hide content based on selected tab
- **Card-based UI**: Information is organized into distinct card-like sections
- **Table Layout**: Exercise information is presented in structured tables
- **Consistent Visual Hierarchy**: Clear headings and subheadings for easy scanning
- **Icon + Text Pattern**: Uses emoji icons alongside text for visual reinforcement

## Component Structure
- Header section with title and subtitle
- Navigation tabs for different workout days
- Content sections for each workout day:
  - Warm-up section
  - Main workout table
  - Core circuit box
  - Cool down section
  - Information and warning boxes
- Progress section with progression plan and success tips
- Footer with creation information
