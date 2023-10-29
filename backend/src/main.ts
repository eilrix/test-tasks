import 'reflect-metadata';

import { createServer } from './server';

const PORT = process.env.PORT || 3001;

const main = async () => {
  const app = createServer();

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};

main();
