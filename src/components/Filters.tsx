import { BiCheckCircle } from "react-icons/bi";
import { FaBars, FaRegClock } from "react-icons/fa6";
import { taskStore } from "../store";

const Filters = () => {
  const { filter, setFilter } = taskStore();

  return (
    <div className="text-white text-[15px] flex flex-wrap items-center gap-3">
      <button
        onClick={() => setFilter("all")}
        className={`flex items-center py-2 px-4 ${
          filter === "all"
            ? "bg-blue ring-light-blue text-white"
            : "bg-transparent dark:bg-stone border-2 border-muted dark:border-0 text-black dark:text-white"
        } rounded-md ring-0 focus:ring-3 focus:outline-none`}
      >
        <FaBars className="mr-2" /> All Tasks
      </button>
      <button
        onClick={() => setFilter("pending")}
        className={`flex items-center py-2 px-4 ${
          filter === "pending"
            ? "bg-blue ring-light-blue text-white"
            : "bg-transparent dark:bg-stone border-2 border-muted dark:border-0 text-black dark:text-white"
        } rounded-md ring-0 focus:ring-3 focus:outline-none`}
      >
        <FaRegClock className="mr-2" /> Pending
      </button>
      <button
        onClick={() => setFilter("completed")}
        className={`flex items-center py-2 px-4 ${
          filter === "completed"
            ? "bg-blue ring-light-blue text-white"
            : "bg-transparent dark:bg-stone border-2 border-muted dark:border-0 text-black dark:text-white"
        } rounded-md ring-0 focus:ring-3 focus:outline-none`}
      >
        <BiCheckCircle className="mr-2" /> Completed
      </button>
    </div>
  );
};

export default Filters;
