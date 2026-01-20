import { useState, useEffect } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

function App() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState('all'); // 'all', 'active', 'completed'

  // Derived state - filter tasks based on selected filter
  const filteredTasks = tasks.filter((task) => {
    if (filter === 'completed') {
      return task.completed;
    } else if (filter === 'active') {
      return !task.completed;
    }
    return true; // 'all' filter
  });

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
  // Toggle task completion status
  const toggleTaskCompletion = async (taskId, currentStatus) => {
    try {
      const response = await fetch(`http://localhost:3001/tasks/${taskId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          completed: !currentStatus
        })
      });

      if (!response.ok) {
        throw new Error('Failed to update task');
      }

      const updatedTask = await response.json();

      // Update tasks state with the updated task
      setTasks((prevTasks) =>
        prevTasks.map((task) =>
          task.id === taskId ? updatedTask : task
        )
      );
    } catch (err) {
      console.error('Error toggling task completion:', err);
    }
  };

  // Delete a task
  const deleteTask = async (taskId) => {
    // Optimistic UI update - remove from state immediately
    const previousTasks = tasks;
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));

    try {
      const response = await fetch(`http://localhost:3001/tasks/${taskId}`, {
        method: 'DELETE'
      });

      if (!response.ok) {
        throw new Error('Failed to delete task');
      }
    } catch (err) {
      // Revert state if deletion fails
      setTasks(previousTasks);
      console.error('Error deleting task:', err);
      alert('Failed to delete task. Please try again.');
    }
  };

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
        {!loading && !error && (
          <TaskList 
            tasks={filteredTasks}
            filter={filter}
            onFilterChange={setFilter}
            onToggleComplete={toggleTaskCompletion}
            onDeleteTask={deleteTask}
          />
        )}
      </main>
    </div>
  );
}

export default App;
