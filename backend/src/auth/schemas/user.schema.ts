import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
@Schema({
    timestamps: true
})

export class User extends Document{
    @Prop()
    name: string;
    

    // @Prop()
    // email: string;
    @Prop({unique: [ true, 'duplicate email enter' ]})
    email: string;
    
    @Prop()
    password: string;

    @Prop({unique: [true, 'duplicate username enter please change your username' ]})
    username: string;

    @Prop({ unique: [true, 'duplicate number phone please change your numberphone']})
    numberphone: number;

    @Prop()
    born: Date;

    @Prop()
    avata: string;

    @Prop()
    gender: string;

    @Prop()
    level: number;

}

// const UserSchema= SchemaFactory.createForClass(() => User);
export const UserSchema = SchemaFactory.createForClass(User);

// (cái auth sửa lại thành: username, pass, họ tên(text), nickname(text), ngày sinh(text), giới tính(text), số điện thoại(number), email(text) , hình ảnh(cái này là đường dẫn vào hình), cấp bật(number)) by tiểu vy [idea]