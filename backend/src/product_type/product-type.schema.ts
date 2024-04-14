import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({
    timestamps: true
})
export class ProductType{
  @Prop()
  tenloai: string;

  @Prop()
  hangloai: number;
}

export const ProductTypeSchema = SchemaFactory.createForClass(ProductType);
//