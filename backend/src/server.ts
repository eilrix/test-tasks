import 'src/services/task.service';

import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import taskRouter from 'src/routes/task.routes';

export const createServer = () => {
  const app = express();

  const corsOptions = {
    origin: '*', // Allow all for now / testing
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    optionsSuccessStatus: 204,
  };

  app.use(cors(corsOptions));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.get('/', (req, res) => {
    res.send('Server is running!');
  });

  app.use('/api', taskRouter);

  return app;
};
