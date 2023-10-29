import { create } from 'zustand';
import { TaskModel } from '../Task.model';
import { fetchApi } from 'src/utils/client';

export const useTaskStore = create<{
  tasks: TaskModel[];
  setTasks: (tasks: TaskModel[]) => void;
  fetchTasks: () => Promise<void>;
  deleteTask: (id: string) => Promise<void>;
  createTask: () => Promise<void>;
  updateTask: (id: string, task: TaskModel) => Promise<TaskModel>;
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

    await useTaskStore.getState().fetchTasks();

    return data;
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

    await useTaskStore.getState().fetchTasks();

    return data;
  },

  updateTask: async (id: string, task: TaskModel) => {
    const data = await fetchApi(`task/${id}`, {
      method: 'PUT',
      body: JSON.stringify(task),
    });

    console.log(`update data: `, data);

    await useTaskStore.getState().fetchTasks();

    return data;
  },
}));
