function TaskItem({ task }) {
  return (
    <div className="task-item">
      <div className="task-header">
        <h3>{task.title}</h3>
        <span className={`priority priority-${task.priority}`}>
          {task.priority}
        </span>
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
