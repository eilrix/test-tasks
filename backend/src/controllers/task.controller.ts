import { validate } from 'class-validator';
import { NextFunction, Request, Response } from 'express';
import { TaskCreateDto } from 'src/models/task-create.dto';
import { TaskUpdateDto } from 'src/models/task-update.dto';
import { TaskService } from 'src/services/task.service';
import { Service, Inject } from 'typedi';

@Service()
export class TaskController {
  @Inject('taskService')
  private taskService: TaskService;

  public async getTasks(req: Request, res: Response, next: NextFunction) {
    const tasks = await this.taskService.getTasks();
    res.json(tasks);
  }

  public createTask = async (req: Request, res: Response, next: NextFunction) => {
    const input = new TaskCreateDto();
    input.title = req.body.title;
    input.description = req.body.description;

    const errors = await validate(input);
    if (errors.length) {
      res.statusCode = 400;
      return res.send(errors);
    }

    const task = await this.taskService.createTask(input);
    res.json(task);
  };

  public updateTask = async (req: Request, res: Response, next: NextFunction) => {
    const input = new TaskUpdateDto();
    input.title = req.body.title;
    input.description = req.body.description;

    const errors = await validate(input);
    if (errors.length) {
      res.statusCode = 400;
      return res.send(errors);
    }

    const task = await this.taskService.updateTask(req.params.id, input);

    if (!task) {
      res.statusCode = 404;
      return res.send('Task not found');
    }

    res.json(task);
  };

  public deleteTask = async (req: Request, res: Response, next: NextFunction) => {
    if (!req.params.id) {
      res.statusCode = 400;
      return res.send('Missing id');
    }

    const task = await this.taskService.deleteTask(req.params.id);

    res.json({
      success: !!task,
    });
  };
}
