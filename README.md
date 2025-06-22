# Advanced Todo App

A modern React todo application with priorities, categories, and smart filtering.

## Features

- ✅ Add, edit, delete, and complete tasks
- 🎯 Priority levels (Low, Medium, High)
- 📁 Custom categories
- 🔍 Filter by All/Active/Completed
- 📊 Progress tracking with visual stats
- 📱 Fully responsive design

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Usage

- **Add Task**: Type and press Enter
- **Edit**: Double-click task text
- **Complete**: Click checkbox
- **Filter**: Use All/Active/Completed buttons
- **Sort**: Choose from dropdown (Newest, Priority, A-Z)

## Tech Stack

- React + Next.js
- Tailwind CSS
- JavaScript (ES6+)

## Project Structure

```
├── components/
│   ├── header.jsx
│   ├── task-input.jsx
│   ├── task-stats.jsx
│   ├── task-filters.jsx
│   ├── task-item.jsx
│   └── task-list.jsx
├── App.jsx
```



![Todo App Screenshot](https://via.placeholder.com/800x600/4F46E5/FFFFFF?text=Advanced+Todo+App)

## 🚀 Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/shmuye/Todo.git
   cd Todo
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to see the app in action.

### Component Overview

- **`App.jsx`** - Main application component with state management
- **`header.jsx`** - App title and subtitle display
- **`task-stats.jsx`** - Statistics dashboard with progress tracking
- **`task-input.jsx`** - Form component for adding new tasks
- **`task-filters.jsx`** - Filter and sort controls
- **`task-item.jsx`** - Individual task component with inline editing
- **`task-list.jsx`** - Container for filtered and sorted tasks

## 🎯 Usage Guide

### Adding Tasks
1. Type your task in the input field
2. Optionally add a category
3. Select priority level (Low, Medium, High)
4. Press Enter or click "Add Task"

### Managing Tasks
- **Complete**: Click the checkbox next to any task
- **Edit**: Double-click on task text to edit inline
- **Delete**: Click the trash icon to remove a task
- **Priority**: Tasks are color-coded by priority level

### Filtering & Sorting
- **Filter**: Use "All", "Active", or "Completed" buttons
- **Sort**: Choose from Newest, Oldest, Priority, or Alphabetical
- **Clear**: Remove all completed tasks at once

### Keyboard Shortcuts
- **Enter** - Add new task or save edit
- **Escape** - Cancel editing
- **Double-click** - Start editing a task

## 🛠️ Built With

- **[React](https://reactjs.org/)** - JavaScript library for building user interfaces
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **JavaScript (ES6+)** - Modern JavaScript features

## 📱 Responsive Design

The app is fully responsive and works seamlessly across different screen sizes:

- **Desktop** (1024px+) - Full layout with all features
- **Tablet** (768px - 1023px) - Optimized layout for touch interaction
- **Mobile** (320px - 767px) - Compact design with stacked elements

## 🎨 Design Features

### Color Scheme
- **Primary**: Blue gradient (`from-blue-500 to-blue-600`)
- **Success**: Green (`green-500`) for completed tasks
- **Warning**: Yellow (`yellow-500`) for medium priority
- **Danger**: Red (`red-500`) for high priority and delete actions

### Priority Colors
- **Low Priority**: Green border and background
- **Medium Priority**: Yellow border and background  
- **High Priority**: Red border and background

## 🔧 Customization

### Adding New Features
The modular component structure makes it easy to extend functionality:

1. **New Components** - Add to the `components/` directory
2. **State Management** - Extend the main state in `todo-app.jsx`
3. **Styling** - Use Tailwind classes or add custom CSS

### Styling Modifications
- Edit Tailwind classes in component files
- Modify `tailwind.config.js` for theme customization
- Add custom CSS in `globals.css` if needed

## 📊 Performance

- **Fast Rendering** - Optimized React components
- **Efficient Updates** - Proper state management with hooks
- **Minimal Bundle** - Tree-shaking with modern build tools
- **Responsive Images** - Optimized for different screen sizes




**Happy Task Managing! 🎉**

Made with ❤️ using React and Tailwind CSS
```
