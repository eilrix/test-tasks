import { useForm } from 'react-hook-form';
import { TaskModel } from '../Task.model';

export function useTaskForm({ task }: { task: TaskModel }) {
  const form = useForm<TaskModel>({
    defaultValues: task,
  });

  return form;
}
