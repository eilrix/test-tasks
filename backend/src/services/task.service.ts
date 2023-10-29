import { TaskCreateDto } from 'src/models/task-create.dto';
import { TaskDeleteDto } from 'src/models/task-delete.dto';
import { TaskUpdateDto } from 'src/models/task-update.dto';
import { TaskDto } from 'src/models/task.dto';
import { Service } from 'typedi';

@Service('taskService')
export class TaskService {
  async getTasks(): Promise<TaskDto[]> {
    return [];
  }

  async createTask(input: TaskCreateDto): Promise<TaskDto> {}

  async updateTask(input: TaskUpdateDto): Promise<TaskDto> {}

  async deleteTask(input: TaskDeleteDto): Promise<TaskDto> {}
}
