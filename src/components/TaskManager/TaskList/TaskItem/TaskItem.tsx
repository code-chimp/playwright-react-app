import clsx from 'clsx';
import Task from '../../../../models/Task.ts';
import useTaskStore from '../../../../store/useTaskStore.ts';
import styles from './TaskItem.module.css';

export interface TaskItemProps {
  task: Task;
  position: number;
  ofTotal: number;
}

const TaskItem = ({ task, position, ofTotal }: TaskItemProps) => {
  const { toggleTask, deleteTask } = useTaskStore();

  const taskClass = clsx({
    'text-gray-500 line-through': task.completed,
    'text-lg': true,
  });

  return (
    <div role="listitem" aria-posinset={position} aria-setsize={ofTotal}>
      <div className={styles.itemCard}>
        <div className={styles.item}>
          <label htmlFor={task.id}>
            <input
              type="checkbox"
              name={task.id}
              id={task.id}
              checked={task.completed}
              onChange={() => toggleTask(task.id)}
              aria-label={`Mark ${task.name} as ${task.completed ? 'incomplete' : 'complete'}`}
            />
            <span className={taskClass}>{task.name}</span>
          </label>
        </div>
        <button
          type="button"
          role="button"
          aria-label={`Delete task: ${task.name}`}
          onClick={() => deleteTask(task.id)}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
