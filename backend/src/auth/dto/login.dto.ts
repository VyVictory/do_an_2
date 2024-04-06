import { IsEmail, IsNotEmpty, IsString, MinLength, isNotEmpty, isString } from "class-validator";


export class LoginDto{

@IsNotEmpty()
@IsEmail()
readonly email: string;

@IsNotEmpty()
@IsString()
@MinLength(8)
readonly password: string;
}