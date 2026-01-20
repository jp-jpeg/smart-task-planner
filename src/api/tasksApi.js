// ===========================
// Tasks API Module
// ===========================
// Centralized API calls for task management
// Provides single interface for all backend communication

const API_BASE_URL = 'http://localhost:3001';

/**
 * Fetch all tasks from the server
 * @returns {Promise<Array>} Array of task objects
 * @throws {Error} If the request fails
 */
export const fetchTasks = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/tasks`);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (err) {
    console.error('Failed to fetch tasks:', err);
    throw err;
  }
};

/**
 * Create a new task
 * @param {Object} taskData - Task object with title, priority, description, etc.
 * @returns {Promise<Object>} The created task with ID from server
 * @throws {Error} If the request fails
 */
export const createTask = async (taskData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/tasks`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(taskData)
    });

    if (!response.ok) {
      throw new Error('Failed to create task');
    }

    return await response.json();
  } catch (err) {
    console.error('Error creating task:', err);
    throw err;
  }
};

/**
 * Update a task (partial update using PATCH)
 * @param {number} taskId - ID of the task to update
 * @param {Object} updates - Object with only the fields to update
 * @returns {Promise<Object>} The updated task
 * @throws {Error} If the request fails
 */
export const updateTask = async (taskId, updates) => {
  try {
    const response = await fetch(`${API_BASE_URL}/tasks/${taskId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updates)
    });

    if (!response.ok) {
      throw new Error('Failed to update task');
    }

    return await response.json();
  } catch (err) {
    console.error('Error updating task:', err);
    throw err;
  }
};

/**
 * Toggle task completion status
 * @param {number} taskId - ID of the task to toggle
 * @param {boolean} currentStatus - Current completion status
 * @returns {Promise<Object>} The updated task
 * @throws {Error} If the request fails
 */
export const toggleTaskCompletion = async (taskId, currentStatus) => {
  return updateTask(taskId, { completed: !currentStatus });
};

/**
 * Delete a task
 * @param {number} taskId - ID of the task to delete
 * @returns {Promise<void>}
 * @throws {Error} If the request fails
 */
export const deleteTask = async (taskId) => {
  try {
    const response = await fetch(`${API_BASE_URL}/tasks/${taskId}`, {
      method: 'DELETE'
    });

    if (!response.ok) {
      throw new Error('Failed to delete task');
    }
  } catch (err) {
    console.error('Error deleting task:', err);
    throw err;
  }
};

export default {
  fetchTasks,
  createTask,
  updateTask,
  toggleTaskCompletion,
  deleteTask
};
