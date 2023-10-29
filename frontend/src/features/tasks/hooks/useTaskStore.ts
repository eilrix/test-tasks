import { create } from 'zustand';
import { TaskModel } from '../Task.model';
import { fetchApi } from 'src/utils/client';

export const useTaskStore = create<{
  tasks: TaskModel[];
  setTasks: (tasks: TaskModel[]) => void;
  fetchTasks: () => Promise<void>;
  deleteTask: (id: string) => Promise<void>;
  createTask: () => Promise<void>;
  updateTask: (task: TaskModel) => Promise<void>;
}>((set) => ({
  tasks: [],
  setTasks: (tasks) => set({ tasks }),

  fetchTasks: async () => {
    const data = await fetchApi('tasks');
    set({ tasks: data });
  },

  deleteTask: async (id: string) => {
    const data = await fetchApi(`task/${id}`, {
      method: 'DELETE',
    });

    console.log(`delete data: `, data);

    useTaskStore.getState().fetchTasks();
  },

  createTask: async () => {
    const data = await fetchApi('task', {
      method: 'POST',
      body: JSON.stringify({
        title: 'New task',
        description: 'New task description',
      }),
    });

    console.log(`create data: `, data);

    useTaskStore.getState().fetchTasks();
  },

  updateTask: async (task: TaskModel) => {
    const data = await fetchApi(`task/${task.id}`, {
      method: 'PUT',
      body: JSON.stringify(task),
    });

    console.log(`update data: `, data);

    useTaskStore.getState().fetchTasks();
  },
}));