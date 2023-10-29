import { TaskCreateDto } from 'src/dto/task-create.dto';
import { TaskUpdateDto } from 'src/dto/task-update.dto';
import { TaskDto } from 'src/dto/task.dto';
import { TaskModel } from 'src/models/task.model';
import { Service } from 'typedi';

@Service('taskService')
export class TaskService {
  async getTasks(): Promise<TaskDto[]> {
    return (await TaskModel.find().sort({ createdAt: 'desc' })).map((task) => new TaskDto().parseModel(task));
  }

  async createTask(input: TaskCreateDto): Promise<TaskDto> {
    const task = new TaskModel();
    task.title = input.title;
    task.description = input.description;

    try {
      await task.save();
    } catch (error) {
      console.error(error);
      return null;
    }

    return new TaskDto().parseModel(task);
  }

  async updateTask(id: string, input: TaskUpdateDto): Promise<TaskDto | null> {
    const task = await TaskModel.findById(id);

    if (!task) {
      return null;
    }

    task.title = input.title;
    task.description = input.description;

    try {
      await task.save();
    } catch (error) {
      console.error(error);
      return null;
    }

    return new TaskDto().parseModel(task);
  }

  async deleteTask(id: string): Promise<string> {
    try {
      await TaskModel.deleteOne({ _id: id });
    } catch (error) {
      console.error(error);
      return null;
    }

    return id;
  }
}
