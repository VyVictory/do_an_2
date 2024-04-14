
import { IsEmpty, IsEnum, IsNumber, IsOptional, IsString } from "class-validator";
import { ProductType } from "../../product_type/product-type.schema";
import { User } from "../../auth/schemas/user.schema";
import { ObjectId } from "mongoose";


export class UpdateProductDto{


    @IsOptional()
    @IsString()
    readonly ten:string;

    @IsOptional()
    @IsNumber()
    readonly gia: number;

    @IsOptional()
    @IsString()
    readonly mota: string;

    @IsOptional()
    @IsNumber()
    readonly soluong: number

    @IsOptional()
    @IsString()
    readonly hinh: string


    @IsEmpty({message: 'please enter correct loai'})
    readonly loai: ObjectId;

    @IsEmpty({ message: 'use cannot post user id' })
    readonly user: User;

}