import { TaskModel } from 'src/models/task.model';

export class TaskDto {
  id: string;
  title: string;
  description: string;
  createdAt: Date;

  parseModel(task: InstanceType<typeof TaskModel>) {
    this.id = task._id.toString();
    this.title = task.title;
    this.description = task.description;
    this.createdAt = task.createdAt;

    return this;
  }
}
