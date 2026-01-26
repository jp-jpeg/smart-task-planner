# Smart Task Planner

A task management application built with React. Create, organize, and track tasks with priority levels and status filtering.

## Features

- Create and delete tasks
- Filter tasks by status (all, active, completed)
- Mark tasks as complete
- Set priority levels (Low, Medium, High)
- Responsive design for mobile, tablet, and desktop
- Real-time UI updates

## Technologies

- **React 19** - UI framework
- **SASS** - CSS preprocessing
- **json-server** - Mock REST API for development
- **Create React App** - Build tooling

## Setup

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

```bash
npm install
```

## Running the Application

Start both the React development server and json-server:

```bash
npm run dev
```

This runs the app at `http://localhost:3000` and the API at `http://localhost:3001`.

### Alternative: Run Servers Separately

**Terminal 1 - React App:**
```bash
npm start
```

**Terminal 2 - JSON Server:**
```bash
npm run server
```

## Available Scripts

```bash
npm run dev        # Run React and json-server concurrently
npm start          # Start React development server
npm run server     # Start json-server (API on port 3001)
npm run build      # Create production build
npm test           # Run tests in watch mode
```

## Project Structure

```
src/
├── api/
│   └── tasksApi.js         # API calls
├── components/
│   ├── TaskForm/
│   ├── TaskList/
│   └── TaskItem/
├── styles/
├── App.js
└── index.js
db.json                      # Mock database
```

## API Endpoints

The json-server provides these endpoints:

```
GET    /tasks              # Get all tasks
POST   /tasks              # Create task
PATCH  /tasks/:id          # Update task
DELETE /tasks/:id          # Delete task
```
