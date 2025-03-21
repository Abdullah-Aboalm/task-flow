import { FC } from "react";
import { taskStore } from "../store";
import { BiCheckCircle, BiTrash } from "react-icons/bi";
import { TaskType } from "../types";

const Task: FC<TaskType> = ({ id, title, completed }) => {
  const { removeTask, toggleTask } = taskStore();

  return (
    <>
      <label
        htmlFor={`task${id}`}
        className="flex items-center w-full px-2 cursor-pointer"
      >
        <div className="relative flex items-center justify-center mr-3">
          <input
            type="checkbox"
            id={`task${id}`}
            onChange={() => toggleTask(id)}
            checked={completed}
            className="appearance-none cursor-pointer peer checked:bg-blue p-[10px] dark:text-white bg-white dark:bg-stone border-2 border-muted dark:border-slate rounded-md ring-0 ring-light-gray dark:ring-muted focus:ring-3 focus:outline-none"
          />
          <BiCheckCircle
            size={15}
            className="absolute text-white hidden peer-checked:block"
          />
        </div>
        <span
          className={`${
            completed
              ? "line-through text-muted dark:text-muted"
              : "dark:text-white"
          }`}
        >
          {title}
        </span>
      </label>
      <BiTrash
        size={25}
        onClick={() => removeTask(id)}
        className="absolute right-0 text-muted cursor-pointer"
      />
    </>
  );
};

export default Task;
