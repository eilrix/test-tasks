import { Box, Button, Typography, TextField, Input, TextareaAutosize, CircularProgress } from '@mui/material';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import React from 'react';

import { useTaskStore } from './hooks/useTaskStore';
import { TaskModel } from './Task.model';
import { useTaskForm } from './hooks/useTaskForm';

export function TaskRow({ task }: { task: TaskModel }) {
  const deleteTask = useTaskStore((s) => s.deleteTask);
  const updateTask = useTaskStore((s) => s.updateTask);

  const [loading, setLoading] = React.useState(false);

  const {
    register,
    formState: { isDirty },
    getValues,
    reset,
  } = useTaskForm({
    task,
  });

  const handleUpdateTask = async (id: string, task: TaskModel) => {
    setLoading(true);
    const data = await updateTask(id, task);
    reset(data);
    setLoading(false);
  };

  return (
    <TableRow key={task.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
      <TableCell
        component="th"
        scope="row"
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Input disableUnderline sx={{ fontSize: '1.5em' }} {...register('title', { required: true })} />
          <TextareaAutosize {...register('description', { required: true })} />
        </Box>
        <Box>
          {loading && <CircularProgress />}
          {!loading && (
            <>
              {isDirty && (
                <Button sx={{ mr: 1 }} variant="contained" onClick={() => handleUpdateTask(task.id, getValues())}>
                  Save
                </Button>
              )}
              <Button variant="outlined" onClick={() => deleteTask(task.id)}>
                Delete
              </Button>
            </>
          )}
        </Box>
      </TableCell>
    </TableRow>
  );
}
