import { create } from 'zustand';
import Task from '../models/Task';

interface TaskState {
  tasks: Task[];
  addTask: (name: string) => void;
  toggleTask: (id: string) => void;
  deleteTask: (id: string) => void;
  updateTask: (id: string, name: string) => void;
}

const useTaskStore = create<TaskState>(set => ({
  tasks: [],

  addTask: name =>
    set(state => ({
      tasks: [
        ...state.tasks,
        {
          id: crypto.randomUUID(),
          name,
          completed: false,
        },
      ],
    })),

  toggleTask: id =>
    set(state => ({
      tasks: state.tasks.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    })),

  deleteTask: id =>
    set(state => ({
      tasks: state.tasks.filter(task => task.id !== id),
    })),

  updateTask: (id, name) =>
    set(state => ({
      tasks: state.tasks.map(task => (task.id === id ? { ...task, name } : task)),
    })),
}));

export default useTaskStore;
