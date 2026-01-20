import { useState } from 'react';
import './TaskForm.scss';

function TaskForm({ setTasks }) {
  // Controlled component state
  const [formData, setFormData] = useState({
    title: '',
    priority: 'medium'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  // Handle input changes - controlled component
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validation
    if (!formData.title.trim()) {
      setSubmitError('Please enter a task title');
      return;
    }

    try {
      setIsSubmitting(true);
      setSubmitError(null);

      // Create new task object
      const newTask = {
        title: formData.title.trim(),
        priority: formData.priority,
        description: '',
        completed: false,
        createdAt: new Date().toISOString(),
        dueDate: null
      };

      // POST to json-server
      const response = await fetch('http://localhost:3001/tasks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newTask)
      });

      if (!response.ok) {
        throw new Error('Failed to create task');
      }

      const createdTask = await response.json();

      // Update parent component's tasks state
      setTasks((prevTasks) => [...prevTasks, createdTask]);

      // Reset form
      setFormData({
        title: '',
        priority: 'medium'
      });
    } catch (err) {
      setSubmitError(err.message);
      console.error('Error creating task:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <h2>Add New Task</h2>

      <div className="form-group">
        <label htmlFor="title">Task Title *</label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Enter task title..."
          disabled={isSubmitting}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="priority">Priority</label>
        <select
          id="priority"
          name="priority"
          value={formData.priority}
          onChange={handleChange}
          disabled={isSubmitting}
        >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </div>

      {submitError && <p className="form-error">{submitError}</p>}

      <button
        type="submit"
        disabled={isSubmitting}
        className="submit-btn"
      >
        {isSubmitting ? 'Adding...' : 'Add Task'}
      </button>
    </form>
  );
}

export default TaskForm;
