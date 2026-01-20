import { useState, useEffect } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

function App() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch tasks from json-server when component mounts
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const response = await fetch('http://localhost:3001/tasks');
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        setTasks(data);
      } catch (err) {
        setError(err.message);
        console.error('Failed to fetch tasks:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchTasks();
  }, []); // Dependency array - empty means run once on mount

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Smart Task Planner</h1>
        <p>Organize and manage your tasks efficiently</p>
      </header>
      
      <main className="app-main">
        <TaskForm setTasks={setTasks} />
        
        {loading && <p className="loading">Loading tasks...</p>}
        {error && <p className="error">Error: {error}</p>}
        {!loading && !error && <TaskList tasks={tasks} />}
      </main>
    </div>
  );
}

export default App;
