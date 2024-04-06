import { IsEmpty, IsEnum, IsNotEmpty, IsNumber, IsString } from "class-validator";
import { User } from "../..//auth/schemas/user.schema";
import { ProductType } from "../product_type/product-type.schema";


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

    

    @IsEmpty({ message: 'please enter correct loai' })
    readonly loai: ProductType;

    @IsEmpty({ message: 'use cannot post user id' })
    readonly user: User;

}