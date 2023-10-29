import { Box, Button, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import React from 'react';

import { TaskModel } from './Task.model';

export function TasksTable({
  tasks,
  onUpdateTask,
  onDeleteTask,
}: {
  tasks: TaskModel[];
  onUpdateTask: (task: TaskModel) => void;
  onDeleteTask: (id: string) => void;
}) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableBody>
          {tasks.map((row) => (
            <TableRow key={row.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
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
                    {row.title}
                  </Typography>
                  <Typography component="p">{row.description}</Typography>
                </Box>
                <Box>
                  <Button onClick={() => onUpdateTask(row)}>Update</Button>
                  <Button onClick={() => onDeleteTask(row.id)}>Delete</Button>
                </Box>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
