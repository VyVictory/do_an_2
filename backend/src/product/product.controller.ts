import { User } from './../auth/schemas/user.schema';
import { Body, Controller, Delete, Get, Param, Post, Put, Query, Req, UseGuards } from '@nestjs/common';
import { ProductService } from './product.service';
import { Product } from './schema/product.shema';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { AuthGuard } from '@nestjs/passport';


@Controller('product')
export class ProductController {
    constructor(private productService: ProductService) {}

    @Get()
    async getAllProducts(): Promise<Product[]>{
        return this.productService.findAll();
    }

    @Post()
    @UseGuards(AuthGuard())
    async createProduct(
        @Body()
        product: CreateProductDto,
        @Req() req,
    ): Promise<Product> {
        return this.productService.create(product, req.user);
    }

    @Get()
    async getProduct(
        @Param('id')
        id: string
    ): Promise<Product> {
        return this.productService.findById(id);
    }

    @Put()
    @UseGuards(AuthGuard())
    async updateProduct(
        @Param('id')
        id: string,
        @Body()
        product: UpdateProductDto,
    ): Promise<Product> {
        return this.productService.updateById(id, product);
    }

    @Delete(':id')
    @UseGuards(AuthGuard())
    async deleteProduct(
        @Param('id')
        id: string,
    ): Promise<Product> {
        return this.productService.deteleById(id);
    }

}

