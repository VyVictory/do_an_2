import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { ProductType } from './product-type.schema';
import { ProductTypeService } from './product-type.service';
import { CreateProductTypeDto, UpdateProductTypeDto } from './dto/product-type.dto';

@Controller('product-types')
export class ProductTypeController {
  constructor(private readonly productTypeService: ProductTypeService) {}

  @Get()
  async getAllProductTypes(): Promise<ProductType[]> {
    return this.productTypeService.getAllProductTypes();
  }

  @Get(':id')
  async getProductTypeById(@Param('id') id: string): Promise<ProductType> {
    return this.productTypeService.getProductTypeById(id);
  }

  @Post()
  async createProductType(@Body() createProductTypeDto: CreateProductTypeDto): Promise<ProductType> {
    return this.productTypeService.createProductType(createProductTypeDto);
  }

  @Put(':id')
  async updateProductType(@Param('id') id: string, @Body() updateProductTypeDto: UpdateProductTypeDto): Promise<ProductType> {
    return this.productTypeService.updateProductType(id, updateProductTypeDto);
  }

  @Delete(':id')
  async deleteProductType(@Param('id') id: string): Promise<void> {
    return this.productTypeService.deleteProductType(id);
  }
}
