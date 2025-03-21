import Navbar from "./components/Navbar";
import Filters from "./components/Filters";
import Input from "./components/Input";
import Task from "./components/Task";
import { taskStore } from "./store";
import { BiCheckCircle } from "react-icons/bi";
import { FaRegClock, FaRegFaceSadTear } from "react-icons/fa6";

const App = () => {
  const { tasks, filter } = taskStore();

  const filteredTasks = tasks.filter((t) =>
    filter === "completed"
      ? t.completed
      : filter === "pending"
      ? !t.completed
      : true
  );

  const completedTasks = tasks.filter((t) => t.completed);

  return (
    <div className="w-full h-screen bg-gray dark:bg-dark-gray">
      <Navbar />
      <div className="flex flex-col gap-5 pt-5 px-4 w-full md:w-1/2 mx-auto">
        <Input />
        <Filters />
        {filteredTasks.length > 0 ? (
          <ul className="h-[42vh] lg:h-[48vh] overflow-y-auto">
            {filteredTasks.map((task) => (
              <li
                key={task.id}
                className="relative flex py-5 mr-3 items-center not-first:border-t-2 border-silver dark:border-muted"
              >
                <Task {...task} />
              </li>
            ))}
          </ul>
        ) : (
          <div className="h-[42vh] lg:h-[48vh] flex flex-col items-center justify-center">
            <div className="w-[100px] h-[100px] rounded-full bg-silver flex items-center justify-center">
              {filter === "completed" ? (
                <BiCheckCircle size={50} className="text-muted" />
              ) : filter === "pending" ? (
                <FaRegClock size={50} className="text-muted" />
              ) : (
                <FaRegFaceSadTear size={50} className="text-muted" />
              )}
            </div>
            <span className="text-[25px] mt-5 dark:text-white">
              No {filter === "all" ? "tasks yet" : `${filter} tasks`}
            </span>
            <span className="text-[15px] text-muted mt-1">
              {filter === "pending"
                ? "All done For Today"
                : filter === "completed"
                ? "Do your Tasks Please"
                : "Add your first task to get started"}
            </span>
          </div>
        )}
        <p className="text-muted">
          {tasks.length} tasks total . {completedTasks.length} completed
        </p>
      </div>
    </div>
  );
};

export default App;
