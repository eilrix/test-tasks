import { TaskCreateDto } from 'src/models/task-create.dto';
import { TaskUpdateDto } from 'src/models/task-update.dto';
import { TaskDto } from 'src/models/task.dto';
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

    await task.save();

    return new TaskDto().parseModel(task);
  }

  async updateTask(id: string, input: TaskUpdateDto): Promise<TaskDto | null> {
    const task = await TaskModel.findById(id);

    if (!task) {
      return null;
    }

    task.title = input.title;
    task.description = input.description;

    await task.save();

    return new TaskDto().parseModel(task);
  }

  async deleteTask(id: string): Promise<string> {
    await TaskModel.deleteOne({ _id: id });

    return id;
  }
}
