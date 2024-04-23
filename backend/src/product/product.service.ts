import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Product } from './schema/product.shema';
import { User } from '..//auth/schemas/user.schema';


@Injectable()
export class ProductService {
    constructor(
        @InjectModel(Product.name)
        private productModel: mongoose.Model<Product>,
    ) {}


 async findAll(): Promise<Product[]>{
    const products = await this.productModel.find()
    return products;
 }

 async create(product: Product, user: User): Promise<Product>{

   const data = Object.assign(product, {user: user._id})
    const res = await this.productModel.create(data);
    return res;
 }
 async updateById(id: string, product: Product): Promise<Product>{
   return await this.productModel.findByIdAndUpdate(id,product, {
       new: true,
       runValidators: true,
   });
}
 async findById(id: string): Promise<Product>{
    const product = await this.productModel.findById(id)

    if (!product) {
        throw new NotFoundException('product not found :(');
    }
    return product;
 }

 async deteleById(id: string): Promise<Product>{
    return await this.productModel.findByIdAndDelete(id)
 } 
}
