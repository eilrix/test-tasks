import { Schema, model } from 'mongoose';

const taskSchema = new Schema({
  title: String,
  description: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const TaskModel = model('Task', taskSchema);
