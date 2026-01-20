import './TaskItem.scss';

function TaskItem({ task, onToggleComplete, onDeleteTask }) {
  const handleToggleClick = () => {
    onToggleComplete(task.id, task.completed);
  };

  const handleDeleteClick = () => {
    if (window.confirm(`Delete task "${task.title}"?`)) {
      onDeleteTask(task.id);
    }
  };

  return (
    <div className={`task-item ${task.completed ? 'completed' : ''}`}>
      <div className="task-header">
        <div className="task-title-group">
          <button
            className="checkbox-btn"
            onClick={handleToggleClick}
            title={task.completed ? 'Mark as active' : 'Mark as completed'}
          >
            {task.completed ? '✓' : '○'}
          </button>
          <h3>{task.title}</h3>
        </div>
        <div className="task-actions">
          <span className={`priority priority-${task.priority}`}>
            {task.priority}
          </span>
          <button
            className="delete-btn"
            onClick={handleDeleteClick}
            title="Delete this task"
          >
            ✕
          </button>
        </div>
      </div>
      <p className="task-description">{task.description}</p>
      <div className="task-footer">
        <span className={`status ${task.completed ? 'completed' : 'pending'}`}>
          {task.completed ? '✓ Completed' : 'Pending'}
        </span>
      </div>
    </div>
  );
}

export default TaskItem;
