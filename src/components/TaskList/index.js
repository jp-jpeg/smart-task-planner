import TaskItem from '../TaskItem';

function TaskList({ tasks, onToggleComplete }) {
  return (
    <div className="task-list">
      <h2>Tasks ({tasks.length})</h2>
      {tasks.length === 0 ? (
        <p className="empty-state">No tasks yet. Create one to get started!</p>
      ) : (
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>
              <TaskItem 
                task={task} 
                onToggleComplete={onToggleComplete}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default TaskList;
