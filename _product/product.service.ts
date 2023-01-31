import productModel, { Product } from './product.model';

async function getProduct(): Promise<Product[]> {
   const product = await productModel.find();
   return product.map((p) => p);
}

async function getProductDetail({ productId }: { productId?: number }) {
   const product = await productModel.findOne({ id: productId });

   return product;
}

async function searchProduct({ keyword }: { keyword?: string }) {
   const product = await productModel.find({
      name: {
         $regex: keyword,
      },
   });

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
   searchProduct,
};
