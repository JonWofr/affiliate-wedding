import * as express from 'express';
import * as functions from 'firebase-functions';

import { router as mailRouter } from './mails/routes';

export const app = express();

app.use((req: express.Request, res: express.Response, next) => {
  if (functions.config().environment.name === 'development') {
    res.header('Access-Control-Allow-Origin', '*');
  }
  else if (functions.config().environment.name === 'production') {
    res.header('Access-Control-Allow-Origin', '*')
  }
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  console.info('Time: ', Date.now(), req.method, req.originalUrl);
  next();
});

app.use('/mails', mailRouter);
