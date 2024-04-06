
import { IsEmpty, IsEnum, IsNumber, IsOptional, IsString } from "class-validator";
import { ProductType } from "../product_type/product-type.schema";
import { User } from "../..//auth/schemas/user.schema";


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


    @IsEmpty({message: 'please enter correct loai'})
    readonly loai: ProductType;

    @IsEmpty({ message: 'use cannot post user id' })
    readonly user: User;

}