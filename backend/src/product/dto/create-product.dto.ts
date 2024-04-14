import { IsEmpty, IsEnum, IsNotEmpty, IsNumber, IsString } from "class-validator";
import { User } from "../..//auth/schemas/user.schema";
import { ProductType } from "../../product_type/product-type.schema";
import { ObjectId } from "mongoose";


export class CreateProductDto{
    @IsNotEmpty()
    @IsString()
    readonly ten:string;

    @IsNotEmpty()
    @IsNumber()
    readonly gia: number;

    @IsNotEmpty()
    @IsString()
    readonly mota: string;

    @IsNotEmpty()
    @IsNumber()
    readonly soluong:number

    @IsNotEmpty()
    @IsString()
    readonly hinh: string

    @IsNotEmpty({ message: 'please enter correct loai' })
    readonly loai: ObjectId;

    @IsEmpty({ message: 'use cannot post user id' })
    readonly user: User;

}