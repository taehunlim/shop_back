import express, { Request, Response, NextFunction } from 'express';

import productService from './product.service';

const router = express.Router();

router.get('/', getProduct);
router.get('/:productId', getProductDetail);
router.get('/search/:keyword', searchProduct);

// router.post('/update', addProduct);

function getProduct(req: Request, res: Response, next: NextFunction) {
   productService
      .getProduct()
      .then((product) => res.json(product))
      .catch(next);
}

function getProductDetail(req: Request, res: Response, next: NextFunction) {
   const { productId: id } = req.params;
   const productId = Number(id);

   if (productId) {
      productService
         .getProductDetail({ productId })
         .then((product) => res.json(product))
         .catch(next);
   }
}

function searchProduct(req: Request, res: Response, next: NextFunction) {
   productService
      .searchProduct(req.params)
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
