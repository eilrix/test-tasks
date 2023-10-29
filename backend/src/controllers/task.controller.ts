import { validate } from 'class-validator';
import { NextFunction, Request, Response } from 'express';
import { TaskCreateDto } from 'src/models/task-create.dto';
import { TaskDeleteDto } from 'src/models/task-delete.dto';
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
    input.id = req.body.id;

    const errors = await validate(input);
    if (errors.length) {
      res.statusCode = 400;
      return res.send(errors);
    }

    const task = await this.taskService.updateTask(input);
    res.json(task);
  };

  public deleteTask = async (req: Request, res: Response, next: NextFunction) => {
    const input = new TaskDeleteDto();
    input.id = req.body.id;

    const errors = await validate(input);
    if (errors.length) {
      res.statusCode = 400;
      return res.send(errors);
    }

    const task = await this.taskService.deleteTask(input);

    res.json({
      success: !!task,
    });
  };
}
