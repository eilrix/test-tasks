import { Box, Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { fetchApi } from 'src/utils/client';

import { TaskModel } from './Task.model';
import { TasksTable } from './TasksTable';
import { useTaskStore } from './hooks/useTaskStore';

export function Tasks() {
  const fetchTasks = useTaskStore((s) => s.fetchTasks);
  const createTask = useTaskStore((s) => s.createTask);

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <Box>
      <Box sx={{ my: 2 }}>
        <Button onClick={createTask} variant="contained">
          Create task
        </Button>
      </Box>
      <TasksTable />
    </Box>
  );
}
