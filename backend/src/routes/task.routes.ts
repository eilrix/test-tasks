import express from 'express';
import { Container } from 'typedi';

import { TaskController } from 'src/controllers/task.controller';

const router = express.Router();

const taskController = Container.get(TaskController);

router.route('/tasks').get(taskController.getTasks.bind(taskController));

router
  .route('/task/:id')
  .post(taskController.createTask.bind(taskController))
  .put(taskController.updateTask)
  .delete(taskController.deleteTask);

export default router;
