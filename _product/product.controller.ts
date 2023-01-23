import express, { Request, Response, NextFunction } from 'express';

import products from './products.json';

const router = express.Router();

router.get('/', product);

function product(req: Request, res: Response, next: NextFunction) {
   try {
      res.json(products);
   } catch (err) {
      console.log(err);
      return next(err);
   }
}

module.exports = router;
