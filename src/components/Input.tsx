import { taskStore } from "../store";

const Input = () => {
  const { addTask, title, setTitle } = taskStore();

  const handleAddTask = () => {
    addTask(title);
    setTitle("");
  };

  return (
    <div className="flex flex-col gap-4 md:flex-row">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="flex-1 p-2 dark:text-white bg-white dark:bg-stone border-2 border-muted dark:border-slate rounded-md ring-0 ring-light-gray dark:ring-muted focus:ring-3 focus:outline-none"
        placeholder="Add a new task..."
      />
      <button
        onClick={handleAddTask}
        className="py-2 px-4 text-white bg-blue rounded-md ring-0 ring-light-blue focus:ring-3 focus:outline-none"
      >
        + Add Task
      </button>
    </div>
  );
};

export default Input;
