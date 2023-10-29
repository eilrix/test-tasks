import 'reflect-metadata';

import { createServer } from './server';
import { connectMongo } from './utils/connectMongo';
import { useSwagger } from './utils/swagger';

const PORT = process.env.PORT || 3001;

const main = async () => {
  await connectMongo();

  const app = createServer();

  if (process.env.NODE_ENV !== 'production') {
    useSwagger(app, Number(PORT));
  }

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`); // eslint-disable-line
  });
};

main();
