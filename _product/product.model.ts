import mongoose from 'mongoose';

export interface Product {
   id: number;
   sku: string;
   name: string;
   slug: string;
   price: number;
   discount: number;
   stock: number;
   rating: number;
   ratingCount: number;
   saleCount: number;
   category: string[];
   tag: string[];
   variation: [
      {
         color: string;
         colorCode: string;
         image: string;
         size: [
            {
               name: string;
               stock: number;
            },
         ];
      },
   ];
   thumbImage: string[];
   image: string[];
   shortDescription: string;
   fullDescription: string;
   isNew: boolean;
}

const Schema = mongoose.Schema;

const schema = new Schema<Product>({
   id: {
      type: Number,
      unique: true,
   },
   sku: {
      type: String,
      require: true,
   },
   name: {
      type: String,
      unique: true,
      require: true,
   },
   slug: {
      type: String,
      unique: true,
   },
   price: {
      type: Number,
      require: true,
   },
   discount: {
      type: Number,
   },
   isNew: {
      type: Boolean,
   },
   rating: {
      type: Number,
   },
   ratingCount: {
      type: Number,
   },
   saleCount: {
      type: Number,
   },
   category: [
      {
         type: String,
         require: true,
      },
   ],
   tag: [String],
   stock: {
      type: Number,
      require: true,
   },
   variation: [
      {
         color: {
            type: String,
            require: true,
         },
         colorCode: {
            type: String,
            require: true,
         },
         image: {
            type: String,
            require: true,
         },
         size: [
            {
               name: {
                  type: String,
                  require: true,
               },
               stock: {
                  type: Number,
                  require: true,
               },
            },
         ],
      },
   ],
   thumbImage: [String],
   image: [String],
   shortDescription: {
      type: String,
      require: true,
   },
   fullDescription: {
      type: String,
      require: true,
   },
});

const productModel = mongoose.model('product', schema);

export default productModel;
