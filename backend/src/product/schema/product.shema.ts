import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { User } from "../../auth/schemas/user.schema";
import mongoose, { mongo } from "mongoose";
import {ProductType} from "../product_type/product-type.schema"

/*
export enum Loai {
    THIETBIDIENTU = 'thiết bị điện tử',
    DOGIADUNG = "đồ gia dụng",
    GIAYDEP = 'giày dép'

}
*/
@Schema({
    timestamps: true
})

export class Product {
    @Prop()
    ten: string;

    @Prop()
    gia: number;

    @Prop()
    mota: string;

    @Prop()
    soluong:number

    @Prop({type: mongoose.Schema.Types.ObjectId, ref:'ProductType'})
    loai: ProductType;

    @Prop({type: mongoose.Schema.Types.ObjectId, ref:'User'})
    user: User;
}
// const productSchema = new Product()
//export const ProductSchema = SchemaFactory.createForClass(() => Product);
// export const ProductSchema= SchemaFactory.createForClass(() => Product);
export const ProductSchema = SchemaFactory.createForClass(Product)