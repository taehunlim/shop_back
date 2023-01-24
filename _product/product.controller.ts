import express, { Request, Response, NextFunction } from 'express';

import productService from './product.service';

const router = express.Router();

router.get('/', getProduct);
// router.post('/update', addProduct);

function getProduct(req: Request, res: Response, next: NextFunction) {
   productService
      .getProduct()
      .then((product) => res.json(product))
      .catch(next);
}

// function addProduct(req: Request, res: Response, next: NextFunction) {
//    productService
//       .addProduct(req.body)
//       .then((product: any) => product)
//       .catch(next);
// }

module.exports = router;
