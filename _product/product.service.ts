import productModel, { Product } from './product.model';

async function getProduct(): Promise<Product[]> {
   const product = await productModel.find();
   return product.map((p) => p);
}

async function getProductDetail({ productId }: { productId?: string }) {
   console.log(productId);
   const product = await productModel.findOne({ id: Number(productId) });

   return product;
}

// async function addProduct({ ...props }: any) {
//    for (const [i, p] of props.body.entries()) {
//       console.log(p, i + 1);
//       const product = await new productModel({
//          ...p,
//          id: i,
//       });

//       await product.save();
//    }

//    return;
// }

export default {
   getProduct,
   getProductDetail,
};