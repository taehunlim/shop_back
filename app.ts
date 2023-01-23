require('dotenv').config();

import express, { Request, Response, NextFunction } from 'express';

const app = express();

const port = process.env.PORT || 8081;

app.get('/welcome', (req: Request, res: Response, next: NextFunction) => {
   res.send('welcome!');
});

app.listen(port, () => {
   console.log(`
  ################################################
  🛡️  Server running on port: ${port}
  ################################################
`);
});
