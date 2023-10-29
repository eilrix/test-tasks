import 'reflect-metadata';

import { createServer } from './server';
import { connectMongo } from './db/mongo';

const PORT = process.env.PORT || 3001;

const main = async () => {
  await connectMongo();

  const app = createServer();

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};

main();
