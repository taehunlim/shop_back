require('dotenv').config();
require('./_middleware/db');

import express, { Request, Response, NextFunction } from 'express';

const productController = require('./_product/product.controller');

const app = express();

app.use(express.json());

const port = process.env.PORT || 8081;

app.get('/welcome', (req: Request, res: Response, next: NextFunction) => {
   res.send('welcome!');
});

app.use('/product', productController);

app.listen(port, () => {
   console.log(`
  ################################################
  🛡️  Server running on port: ${port}
  ################################################
`);
});
