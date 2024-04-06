
import { IsEmail, IsNotEmpty, IsNumber, IsString, MinLength, isDate} from "class-validator";

export class SignUpDto {

@IsNotEmpty()
@IsString()
readonly name: string;

@IsNotEmpty()
@IsEmail({}, { message: 'plase enter corect email'})
readonly email: string;

@IsNotEmpty()
@IsString()
@MinLength(8)
readonly password: string;

@IsNotEmpty()
@IsString()
readonly username: string;

@IsNotEmpty()
@IsNumber()
readonly numberphone: number;

@IsNotEmpty()
@IsString()
readonly gender: string;


}



// nemo fix first time
// (cái auth sửa lại thành: username, pass, họ tên(text), nickname(text), ngày sinh(text), giới tính(text), số điện thoại(number), email(text) , hình ảnh(cái này là đường dẫn vào hình), cấp bật(number)) by tiểu vy [idea]