import { Box, Button, Fab } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { fetchApi } from 'src/utils/client';
import AddIcon from '@mui/icons-material/Add';

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
        <Fab color="primary" aria-label="add" onClick={() => createTask()}>
          <AddIcon />
        </Fab>
      </Box>
      <TasksTable />
    </Box>
  );
}
