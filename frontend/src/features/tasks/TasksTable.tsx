import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import React from 'react';

import { useTaskStore } from './hooks/useTaskStore';
import { TaskRow } from './TaskRow';

export function TasksTable() {
  const tasks = useTaskStore((s) => s.tasks);

  return (
    <TableContainer component={Paper} elevation={2}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableBody>
          {tasks.map((task) => (
            <TaskRow key={task.id} task={task} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
