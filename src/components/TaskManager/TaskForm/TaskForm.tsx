import { FormEvent, useState } from 'react';
import useTaskStore from '../../../store/useTaskStore.ts';
import styles from './TaskForm.module.css';

const TaskForm = () => {
  const [taskName, setTaskName] = useState<string>('');
  const addTask = useTaskStore(state => state.addTask);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (taskName.trim().length === 0) return;

    addTask(taskName);
    setTaskName('');
  };

  return (
    <div className={styles.container} aria-labelledby="formTitle">
      <form onSubmit={handleSubmit} className={styles.form} role="form">
        <h2 id="formTitle" className="sr-only">
          Add new task
        </h2>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Add a new task"
          value={taskName}
          onChange={e => setTaskName(e.target.value)}
          aria-required
          required
        />
        <button
          type="submit"
          disabled={taskName.trim().length === 0}
          aria-label="Add task to list">
          Add Task
        </button>
      </form>
    </div>
  );
};

export default TaskForm;
