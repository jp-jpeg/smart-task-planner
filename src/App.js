import { useState } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

function App() {
  // Hardcoded temporary tasks array
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: 'Learn React',
      description: 'Understand React fundamentals and hooks',
      completed: false,
      priority: 'high'
    },
    {
      id: 2,
      title: 'Build a component',
      description: 'Create a reusable task component',
      completed: false,
      priority: 'medium'
    },
    {
      id: 3,
      title: 'Add styling',
      description: 'Style the application with SCSS',
      completed: true,
      priority: 'low'
    }
  ]);

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Smart Task Planner</h1>
        <p>Organize and manage your tasks efficiently</p>
      </header>
      
      <main className="app-main">
        <TaskForm />
        <TaskList tasks={tasks} />
      </main>
    </div>
  );
}

export default App;
