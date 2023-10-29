import { spawn } from 'child_process';

spawn('npx tsx watch src/main', {
  shell: true,
  stdio: 'inherit',
  cwd: './backend',
});

spawn('npx next', {
  shell: true,
  stdio: 'inherit',
  cwd: './frontend',
});
