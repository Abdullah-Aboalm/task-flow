export interface ThemeStore {
  theme: string;
  toggleTheme: () => void;
}

export interface TaskType {
  id: number;
  title: string;
  completed: boolean;
}

export interface TaskStore {
  tasks: TaskType[];
  filter: string;
  title: string;
  setFilter: (filter: string) => void;
  setTitle: (newTitle: string) => void;
  addTask: (title: string) => void;
  removeTask: (id: number) => void;
  toggleTask: (id: number) => void;
}
