import TaskForm from './components/TaskManager/TaskForm';
import TaskList from './components/TaskManager/TaskList';

function App() {
  return (
    <div className="container mx-auto max-w-2xl p-6">
      <header className="mb-8">
        <h1 className="mb-2 text-center text-3xl font-bold">Todo App</h1>
        <p className="text-center text-gray-600">Keep track of your tasks</p>
      </header>

      <main>
        <TaskForm />
        <TaskList />
      </main>
    </div>
  );
}

export default App;
