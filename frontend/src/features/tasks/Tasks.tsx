import AddIcon from '@mui/icons-material/Add';
import { Box, Fab } from '@mui/material';
import React, { useEffect } from 'react';

import { useTaskStore } from './hooks/useTaskStore';
import { TasksTable } from './TasksTable';

export function Tasks() {
  const fetchTasks = useTaskStore((s) => s.fetchTasks);
  const createTask = useTaskStore((s) => s.createTask);

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <Box>
      <Box sx={{ my: 3 }}>
        <Fab color="primary" aria-label="add" onClick={() => createTask()}>
          <AddIcon />
        </Fab>
      </Box>
      <TasksTable />
    </Box>
  );
}
