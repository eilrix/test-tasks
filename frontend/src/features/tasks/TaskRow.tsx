import { Box, Button, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import React from 'react';
import { TaskModel } from './Task.model';
import { useTaskStore } from './hooks/useTaskStore';

export function TaskRow({ task }: { task: TaskModel }) {
  const deleteTask = useTaskStore((s) => s.deleteTask);

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
        <Box>
          <Typography component="h3" sx={{ fontSize: '1.5em' }}>
            {task.title}
          </Typography>
          <Typography component="p">{task.description}</Typography>
        </Box>
        <Box>
          {/* <Button onClick={() => onUpdateTask(row)}>Update</Button> */}
          <Button variant="outlined" onClick={() => deleteTask(task.id)}>
            Delete
          </Button>
        </Box>
      </TableCell>
    </TableRow>
  );
}
