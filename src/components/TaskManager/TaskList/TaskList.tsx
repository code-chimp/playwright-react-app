import Task from '../../../models/Task';
import useTaskStore from '../../../store/useTaskStore.ts';
import TaskItem from './TaskItem';

const TaskList = () => {
  const { tasks } = useTaskStore();

  return (
    <div className="mt-4" role="list" aria-label="Todo tasks">
      {tasks.length === 0 ? (
        <p className="text-center text-gray-500">No tasks yet. Add one to get started!</p>
      ) : (
        tasks.map((task: Task, index: number) => (
          <TaskItem key={task.id} task={task} position={index + 1} ofTotal={tasks.length} />
        ))
      )}
    </div>
  );
};

export default TaskList;
