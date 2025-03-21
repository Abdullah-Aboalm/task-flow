import { create } from "zustand";
import { TaskStore, ThemeStore } from "./types";

export const themeStore = create<ThemeStore>((set) => {
  const storedTheme = localStorage.getItem("theme") || "light";
  document.documentElement.classList.toggle("dark", storedTheme === "dark");
  return {
    theme: storedTheme,

    toggleTheme: () =>
      set((state) => {
        const newTheme = state.theme === "dark" ? "light" : "dark";
        localStorage.setItem("theme", newTheme);
        document.documentElement.classList.toggle("dark");
        return { theme: newTheme };
      })
  };
});

export const taskStore = create<TaskStore>((set) => ({
  tasks: JSON.parse(localStorage.getItem("tasks") || "[]"),
  filter: "all",
  title: "",
  setFilter: (filter: string) => set({ filter }),
  setTitle: (newTitle: string) => set({ title: newTitle }),
  addTask: (title: string) =>
    set((state) => {
      if (title.trim() === "") return state;
      const newTasks = [
        ...state.tasks,
        {
          id: Date.now(),
          title: title.trim(),
          completed: false,
          editing: false
        }
      ];
      localStorage.setItem("tasks", JSON.stringify(newTasks));
      return { tasks: newTasks };
    }),
  removeTask: (id: number) =>
    set((state) => {
      const newTasks = state.tasks.filter((t) => t.id !== id);
      localStorage.setItem("tasks", JSON.stringify(newTasks));
      return { tasks: newTasks };
    }),
  toggleTask: (id: number) =>
    set((state) => {
      const newTasks = state.tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      );
      localStorage.setItem("tasks", JSON.stringify(newTasks));
      return {
        tasks: newTasks
      };
    })
}));
