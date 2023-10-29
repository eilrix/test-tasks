import { Box, Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { fetchApi } from 'src/utils/client';

import { TaskModel } from './Task.model';
import { TasksTable } from './TasksTable';

export function Tasks() {
  const [tasks, setTasks] = useState<TaskModel[]>([]);

  const getTasks = async () => {
    const data = await fetchApi('tasks');
    setTasks(data);
  };

  useEffect(() => {
    getTasks();
  }, []);

  const handleCreateTask = async () => {
    const data = await fetchApi('task', {
      method: 'POST',
      body: JSON.stringify({
        title: 'New task',
        description: 'New task description',
      }),
    });

    console.log(`create data: `, data);

    getTasks();
  };

  const handleUpdateTask = async (task: TaskModel) => {
    const data = await fetchApi(`task/${task.id}`, {
      method: 'PUT',
      body: JSON.stringify(task),
    });

    console.log(`update data: `, data);

    getTasks();
  };

  const handleDeleteTask = async (id: string) => {
    const data = await fetchApi(`task/${id}`, {
      method: 'DELETE',
    });

    console.log(`delete data: `, data);

    getTasks();
  };

  return (
    <Box>
      <Box sx={{ my: 2 }}>
        <Button onClick={handleCreateTask} variant="contained">
          Create task
        </Button>
      </Box>
      <TasksTable tasks={tasks} onUpdateTask={handleUpdateTask} onDeleteTask={handleDeleteTask} />
    </Box>
  );
}
