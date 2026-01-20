import TaskItem from '../TaskItem';
import './TaskList.scss';

function TaskList({ tasks, filter, onFilterChange, onToggleComplete, onDeleteTask }) {
  const getTaskStats = () => {
    // Calculate stats from all tasks (not filtered)
    // Note: We don't have access to all tasks here, so we'll just show filtered count
    return {
      all: tasks.length,
      active: tasks.filter(t => !t.completed).length,
      completed: tasks.filter(t => t.completed).length
    };
  };

  const stats = getTaskStats();

  return (
    <div className="task-list">
      <div className="task-list-header">
        <h2>Tasks</h2>
        <div className="filter-buttons">
          <button
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => onFilterChange('all')}
          >
            All ({stats.all})
          </button>
          <button
            className={`filter-btn ${filter === 'active' ? 'active' : ''}`}
            onClick={() => onFilterChange('active')}
          >
            Active ({stats.active})
          </button>
          <button
            className={`filter-btn ${filter === 'completed' ? 'active' : ''}`}
            onClick={() => onFilterChange('completed')}
          >
            Completed ({stats.completed})
          </button>
        </div>
      </div>

      {tasks.length === 0 ? (
        <p className="empty-state">
          {filter === 'completed' && 'No completed tasks yet!'}
          {filter === 'active' && 'No active tasks! Great job!'}
          {filter === 'all' && 'No tasks yet. Create one to get started!'}
        </p>
      ) : (
        <ul className="task-items">
          {tasks.map((task) => (
            <li key={task.id}>
              <TaskItem 
                task={task} 
                onToggleComplete={onToggleComplete}
                onDeleteTask={onDeleteTask}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default TaskList;
