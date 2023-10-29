import { create } from 'zustand';
import { TaskModel } from '../Task.model';
import { fetchApi } from 'src/utils/client';
import { toast } from 'react-toastify';

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
    const data = await fetchApi('tasks').catch(() => {
      toast.error('Failed to fetch tasks');
      return [];
    });
    set({ tasks: data });
  },

  deleteTask: async (id: string) => {
    const data = await fetchApi(`tasks/${id}`, {
      method: 'DELETE',
    }).catch((error) => {
      toast.error('Failed to delete task: ' + error.message);
      return null;
    });

    console.log(`delete data: `, data); // eslint-disable-line

    await useTaskStore.getState().fetchTasks();

    return data;
  },

  createTask: async () => {
    const data = await fetchApi('tasks', {
      method: 'POST',
      body: JSON.stringify({
        title: 'New task',
        description: 'New task description',
      }),
    }).catch((error) => {
      toast.error('Failed to create task: ' + error.message);
      return null;
    });

    console.log(`create data: `, data); // eslint-disable-line

    if (data?.id) {
      set((state) => ({ tasks: [data, ...state.tasks] }));
    }

    return data;
  },

  updateTask: async (id: string, task: TaskModel) => {
    const data = await fetchApi(`tasks/${id}`, {
      method: 'PUT',
      body: JSON.stringify(task),
    }).catch((error) => {
      toast.error('Failed to update task: ' + error.message);
      return null;
    });

    console.log(`update data: `, data); // eslint-disable-line

    return data;
  },
}));
