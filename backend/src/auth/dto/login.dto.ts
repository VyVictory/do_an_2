import { IsEmail, IsNotEmpty, IsString, MinLength, isNotEmpty, isString } from "class-validator";


export class LoginDto{

@IsNotEmpty()
@IsEmail()
readonly email: string;

@IsNotEmpty()
@MinLength(8)
@IsString()
readonly password: string;
}