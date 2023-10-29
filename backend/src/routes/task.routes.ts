import express from 'express';
import { Container } from 'typedi';

import { TaskController } from 'src/controllers/task.controller';

const router = express.Router();

const taskController = Container.get(TaskController);

/**
 * @swagger
 * tags:
 *   name: Tasks
 *   description: The tasks managing API
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Task:
 *       type: object
 *       required:
 *         - title
 *         - description
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the task
 *         title:
 *           type: string
 *           description: The title of your task
 *         description:
 *           type: string
 *           description: The description of your task
 *         createdAt:
 *           type: string
 *           format: date
 *           description: The date the task was added
 *       example:
 *         id: 653ece9c30d260cc6e0b1acd
 *         title: New task
 *         description: New task description
 *         createdAt: 2023-10-29T21:29:00.716Z
 */

/**
 * @swagger
 * /tasks:
 *   get:
 *     summary: Retrieve all tasks
 *     description: Retrieve all tasks from database.
 *     tags: [Tasks]
 *     responses:
 *       200:
 *         description: Array tasks.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Task'
 *
 *
 */
router.route('/tasks').get(taskController.getTasks.bind(taskController));

/**
 * @swagger
 * /tasks:
 *   post:
 *     summary: Create a new task
 *     tags: [Tasks]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Task'
 *     responses:
 *       200:
 *         description: The created task.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Task'
 *       500:
 *         description: Some server error
 *
 */
router.route('/tasks').post(taskController.createTask.bind(taskController));

/**
 * @swagger
 * /tasks/{id}:
 *   put:
 *     summary: Update a new task
 *     tags: [Tasks]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Task'
 *     responses:
 *       200:
 *         description: The created task.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Task'
 *       500:
 *         description: Some server error
 *
 */
router.route('/tasks/:id').put(taskController.updateTask.bind(taskController));

/**
 * @swagger
 * /tasks/{id}:
 *   delete:
 *     summary: Delete a new task
 *     tags: [Tasks]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Task'
 *     responses:
 *       200:
 *         description: The created task.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Task'
 *       500:
 *         description: Some server error
 *
 */
router.route('/tasks/:id').delete(taskController.deleteTask.bind(taskController));

export default router;
