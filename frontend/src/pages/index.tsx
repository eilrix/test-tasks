import React from 'react';

import { Tasks } from 'src/features/tasks/Tasks';
import { Box } from '@mui/material';

export default function Home() {
  return (
    <Box
      sx={{
        maxWidth: '800px',
        margin: '0 auto',
      }}
    >
      <Tasks />
    </Box>
  );
}
