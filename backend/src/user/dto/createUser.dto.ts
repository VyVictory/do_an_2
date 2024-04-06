import { IsEmail, IsNotEmpty } from "class-validator"


export class CreateUserDto {
    @IsNotEmpty()
    readonly Username: string
    @IsNotEmpty()
    @IsEmail()
    readonly email: string
    @IsNotEmpty()
    readonly password: string
}