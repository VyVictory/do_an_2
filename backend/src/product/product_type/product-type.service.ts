import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ProductType } from './product-type.schema';
import { CreateProductTypeDto, UpdateProductTypeDto } from './dto/product-type.dto';

@Injectable()
export class ProductTypeService {
  constructor(@InjectModel(ProductType.name) private productTypeModel: Model<ProductType>) {}

  async createProductType(createProductTypeDto: CreateProductTypeDto): Promise<ProductType> {
    const createdProductType = new this.productTypeModel(createProductTypeDto);
    return await createdProductType.save();
  }
  async updateProductType(id: string, updateProductTypeDto: UpdateProductTypeDto): Promise<ProductType> {
    return await this.productTypeModel.findByIdAndUpdate(id, updateProductTypeDto, { new: true }).exec();
  }

  async getAllProductTypes(): Promise<ProductType[]> {
    return await this.productTypeModel.find().exec();
  }

  async getProductTypeById(id: string): Promise<ProductType> {
    return await this.productTypeModel.findById(id).exec();
  }



  async deleteProductType(id: string): Promise<void> {
    await this.productTypeModel.findByIdAndDelete(id).exec();
  }
}
