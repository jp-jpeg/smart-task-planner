# Smart Task Planner

A modern, responsive task management application built with React 19. Smart Task Planner helps users organize, prioritize, and manage their daily tasks efficiently with an intuitive interface and seamless user experience.

## 📋 Project Overview

Smart Task Planner is a full-stack web application designed to provide a professional task management solution. The application features a React-based frontend that communicates with a JSON-based backend (powered by json-server for development). Whether you're managing personal projects, team tasks, or daily to-do lists, Smart Task Planner offers the tools you need to stay organized and productive.

### Key Features

- ✅ **Create Tasks** - Add new tasks with title, priority level, and descriptions
- ✅ **Task Filtering** - Filter tasks by status (all, active, completed)
- ✅ **Mark Complete** - Toggle task completion status with a single click
- ✅ **Delete Tasks** - Remove tasks with confirmation to prevent accidental deletion
- ✅ **Priority Levels** - Organize tasks by priority (Low, Medium, High)
- ✅ **Responsive Design** - Fully optimized for mobile, tablet, and desktop devices
- ✅ **Real-time Updates** - UI updates instantly reflect state changes
- ✅ **Error Handling** - Graceful error management with user-friendly feedback

## 🎯 Application Goals

- **Simplify Task Management** - Provide an intuitive interface for creating and managing tasks
- **Improve Productivity** - Help users organize priorities and track progress efficiently
- **Professional Design** - Deliver a clean, modern interface that's easy to use
- **Responsive Experience** - Ensure seamless functionality across all device sizes
- **Data Persistence** - Store task data securely with backend API integration

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed on your system:

- **Node.js** (version 14 or higher) - [Download](https://nodejs.org/)
- **npm** (version 6 or higher) - Comes with Node.js
- **Git** (optional, for cloning the repository) - [Download](https://git-scm.com/)

Verify your installations:
```bash
node --version
npm --version
```

### Installation

#### Step 1: Clone or Download the Project

```bash
# Clone the repository
git clone https://github.com/your-username/smart-task-planner.git
cd smart-task-planner

# Or navigate to the existing project directory
cd path/to/smart-task-planner
```

#### Step 2: Install Dependencies

Install all required npm packages:

```bash
npm install
```

This will install:
- React 19 - UI framework
- React DOM - React rendering engine
- React Scripts - Build and development tools
- SASS - CSS preprocessor for styling
- json-server - Mock backend API (dev dependency)
- Concurrently - Run multiple npm scripts simultaneously

### Running the Application

The Smart Task Planner requires both a React development server and a JSON API server to function properly.

#### Option 1: Run Both Servers Simultaneously (Recommended)

```bash
npm run dev
```

This command uses `concurrently` to start both:
- **React Development Server** - Available at `http://localhost:3000`
- **JSON Server (Backend)** - Available at `http://localhost:3001`

The React app will automatically open in your default browser.

#### Option 2: Run Servers Separately

**Terminal 1 - Start React App:**
```bash
npm start
```
- Opens `http://localhost:3000` in your browser
- Includes hot-reload on file changes
- Shows compilation errors in console

**Terminal 2 - Start JSON Server:**
```bash
npm run server
```
- Starts backend API at `http://localhost:3001`
- Watches `db.json` for changes
- Provides REST endpoints for CRUD operations

### Available npm Scripts

```bash
# Start both React app and json-server simultaneously
npm run dev

# Start React development server only
npm start

# Start json-server backend only
npm run server

# Build app for production
npm run build

# Run tests in watch mode
npm test

# Eject configuration (one-way operation, not recommended)
npm run eject
```

## 📁 Project Structure

```
smart-task-planner/
├── public/
│   ├── index.html          # Main HTML file
│   └── favicon.ico         # Website icon
├── src/
│   ├── api/
│   │   └── tasksApi.js     # Centralized API calls for task operations
│   ├── components/
│   │   ├── TaskForm/
│   │   │   ├── index.js    # Form component for creating tasks
│   │   │   └── TaskForm.scss
│   │   ├── TaskList/
│   │   │   ├── index.js    # Container for displaying task list
│   │   │   └── TaskList.scss
│   │   └── TaskItem/
│   │       ├── index.js    # Individual task component
│   │       └── TaskItem.scss
│   ├── styles/
│   │   ├── global.scss     # Global application styles
│   │   └── _variables.scss # SCSS variables, mixins, breakpoints
│   ├── App.js              # Main application component
│   ├── index.js            # React entry point
│   └── index.css           # Base styles
├── db.json                 # JSON server database (mock backend)
├── package.json            # Project dependencies and scripts
├── .gitignore              # Git ignored files
└── README.md               # This file
```

### Key Directories

- **`/src/api/`** - API integration layer providing centralized fetch logic
- **`/src/components/`** - Reusable React components
- **`/src/styles/`** - SCSS variables, mixins, and global styles
- **`/public/`** - Static assets served by the web server
- **`db.json`** - Mock database for json-server (development only)

## 🛠️ Technology Stack

### Frontend Framework
- **React 19.2.3** - Modern JavaScript library for building user interfaces
- **React DOM 19.2.3** - React rendering engine for web browsers

### Styling
- **SASS 1.97.2** - CSS preprocessor with variables, mixins, and nesting
- **SCSS Variables** - Centralized design tokens for colors, spacing, typography
- **Responsive Design** - Mobile-first approach with SCSS media query mixins

### Development Tools
- **Create React App 5.0.1** - Zero-configuration React build setup
- **Node.js Package Manager (npm)** - Dependency management

### Testing & Quality
- **Jest** - JavaScript testing framework (included with CRA)
- **ESLint** - Code quality and style checking

### Backend (Development)
- **json-server** - Mock REST API server for development
- **Concurrently** - Run multiple npm scripts concurrently

### Browser Compatibility
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Requires JavaScript enabled

## 🎨 Design Features

### Responsive Design
- **Mobile-First Approach** - Optimized for small screens first, enhanced for larger screens
- **Breakpoints:**
  - `576px` - Landscape phones
  - `768px` - Tablets
  - `992px` - Desktops
  - `1200px` - Large desktops

### Component Architecture
- **Separation of Concerns** - API logic isolated in `/api/tasksApi.js`
- **Reusable Components** - Modular component structure
- **State Management** - Centralized state in App component
- **Derived State** - Computed values for task filtering

### User Experience
- **Optimistic UI Updates** - Instant visual feedback before server confirmation
- **Error Handling** - Graceful error states with rollback capability
- **Loading States** - User-friendly loading indicators
- **Confirmation Dialogs** - Prevent accidental task deletion

## 📚 API Documentation

The application communicates with json-server which provides the following endpoints:

```
GET    /tasks                    # Fetch all tasks
POST   /tasks                    # Create new task
GET    /tasks/:id                # Fetch single task
PATCH  /tasks/:id                # Update task (partial)
DELETE /tasks/:id                # Delete task
```

### Task Object Structure

```json
{
  "id": 1,
  "title": "Learn React",
  "description": "Understand React fundamentals",
  "priority": "high",
  "completed": false,
  "createdAt": "2026-01-15T08:00:00Z",
  "dueDate": "2026-01-25T23:59:59Z"
}
```

### API Module Functions

All API calls are centralized in `src/api/tasksApi.js`:

```javascript
// Fetch all tasks
const tasks = await tasksApi.fetchTasks();

// Create new task
const newTask = await tasksApi.createTask({ title, priority, ... });

// Toggle completion status
const updated = await tasksApi.toggleTaskCompletion(taskId, currentStatus);

// Update task properties
const updated = await tasksApi.updateTask(taskId, { completed: true });

// Delete task
await tasksApi.deleteTask(taskId);
```

## 🧪 Testing

### Running Tests

```bash
npm test
```

Tests run in interactive watch mode. Press `q` to quit.

### Component Testing

Components are designed to be testable with:
- Controlled components for easy state inspection
- Props-based interactions for mocking
- Separated API logic for easy mocking

## 🚢 Building for Production

### Create Production Build

```bash
npm run build
```

This creates an optimized production build:
- Minified JavaScript and CSS
- Code splitting for better performance
- Optimized image assets
- Source maps for debugging

### Deployment

The production build can be deployed to:
- **Vercel** - Recommended for Next.js/React apps
- **Netlify** - Easy CI/CD integration
- **GitHub Pages** - Free static hosting
- **AWS S3** - Cost-effective static hosting
- **Traditional Servers** - Apache, Nginx, etc.

**Note:** Update `API_BASE_URL` in `src/api/tasksApi.js` to point to your production API before deploying.

## 🔧 Configuration

### API Base URL

To change the backend API endpoint, edit `src/api/tasksApi.js`:

```javascript
const API_BASE_URL = 'https://your-api-domain.com';
```

### SCSS Variables

Customize colors, spacing, and typography in `src/styles/_variables.scss`:

```scss
$primary-color: #4a90e2;
$spacing-md: 16px;
$font-family: 'Your Font', sans-serif;
```

## 📖 Development Workflow

### Recommended Development Workflow

1. **Start both servers:**
   ```bash
   npm run dev
   ```

2. **Edit components in `src/components/`:**
   - Changes hot-reload automatically
   - Browser updates instantly
   - No manual refresh needed

3. **Modify API calls in `src/api/tasksApi.js`:**
   - Centralized location for all backend communication
   - Easy to switch between different APIs

4. **Update styles in `.scss` files:**
   - SCSS files compile automatically
   - Live refresh in browser

5. **Test in browser at `http://localhost:3000`**

### Git Workflow

```bash
# Create feature branch
git checkout -b feature/task-filter

# Make changes, test locally
npm run dev

# Commit changes
git add .
git commit -m "feat: add task filtering"

# Push to remote
git push origin feature/task-filter

# Create pull request on GitHub
```

## ⚡ Performance Tips

- **Use Derived State** - Don't store redundant state
- **Memoize Expensive Computations** - Use `useMemo` for complex filters
- **Lazy Load Routes** - Use React.lazy() for code splitting
- **Optimize Images** - Compress images for web
- **Remove Console Logs** - Clean up debugging code before production

## 🐛 Troubleshooting

### Port Already in Use

If port 3000 or 3001 is already in use:

```bash
# Kill process on port 3000
lsof -i :3000
kill -9 <PID>

# Or specify different port
PORT=3002 npm start
```

### json-server Not Starting

```bash
# Ensure json-server is installed
npm install --save-dev json-server

# Ensure db.json exists in root directory
ls db.json
```

### Components Not Updating

```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

## 📝 License

This project is open source and available under the **MIT License**. See the LICENSE file for details.

## 🤝 Contributing

Contributions are welcome! To contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

Please ensure:
- Code follows project style guidelines
- Changes are tested locally
- Commit messages are descriptive

## 📧 Support

For issues, questions, or suggestions:
- Open an issue on GitHub
- Check existing issues for solutions
- Provide detailed reproduction steps

## 🎓 Learning Resources

- [React Documentation](https://react.dev/)
- [SCSS Documentation](https://sass-lang.com/)
- [MDN Web Docs](https://developer.mozilla.org/)
- [Create React App Guide](https://create-react-app.dev/)

## 📊 Project Status

**Development Status:** Active Development

**Current Version:** 0.1.0

**Last Updated:** January 20, 2026

---

**Happy Planning! 📅**

Made with ❤️ by the Smart Task Planner Team
