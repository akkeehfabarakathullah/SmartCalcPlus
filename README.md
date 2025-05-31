# SmartCalc+ – A Modern Calculator with Memory, Search, and Labeling

SmartCalc+ is an advanced, web-based calculator designed to offer more than just calculations. Built with modern aesthetics and clean UI/UX, this app enables users to not only perform basic and scientific operations but also store, search, and organize their calculations using intuitive labels and categories.

This project aims to bridge the gap between a simple calculator and a powerful personal assistant for numbers — ideal for students, developers, freelancers, and professionals who frequently reuse or reference past calculations.

## Key Features

### All-in-One Calculator
- Supports basic arithmetic (+, −, ×, ÷)
- Includes scientific functions (√, %, ^, log, sin, cos, tan, etc.)
- Smart expression handling with brackets and order of operations

### Named Calculations
- Users can name each calculation, e.g., "Physics Formula", "Grocery Budget"
- Helps keep track of frequently reused logic

### Search Functionality
- Instant search through previous calculations by:
  - Name
  - Expression content
  - Category or tag
- Makes it easy to retrieve any past entry, even months later

### Local History with Storage
- All calculations are automatically saved to local storage
- No need for sign-in or cloud account
- Persistent across sessions (data remains after browser is closed)

### Categories and Tags
- Organize calculations by custom tags like "Finance", "School", "Work"
- Filter view to see only relevant entries

### Favorites and Quick Access
- Mark important calculations as favorites
- Access frequently used calculations from a dedicated section

### Clean and Modern UI/UX
- Designed with minimalism and functionality in mind
- Responsive layout for mobile and desktop
- Dark/light mode toggle for visual comfort

## Technical Stack

- Frontend: React, Tailwind CSS — for building responsive, modern interfaces
- State Management: Zustand — for handling calculator logic and UI state
- Storage: Local Storage API — to save all user data and history locally
- Math Library: mathjs — for accurate calculation handling

## Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Start the development server: `npm run dev`
4. Build for production: `npm run build`

## Usage

1. Enter expressions using the keypad
2. Toggle between basic and scientific modes for additional functions
3. Save calculations with a name and tags
4. Search and filter through your calculation history
5. Mark important calculations as favorites
6. Use the theme toggle to switch between light and dark mode

## License

MIT