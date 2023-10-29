import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import React from 'react';

import { TaskModel } from './Task.model';
import { TaskRow } from './TaskRow';
import { useTaskStore } from './hooks/useTaskStore';

export function TasksTable() {
  const tasks = useTaskStore((s) => s.tasks);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableBody>
          {tasks.map((task) => (
            <TaskRow task={task} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
