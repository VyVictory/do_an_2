import { Body, Controller, Get, HttpException, HttpStatus, Post, Request } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/createUser.dto';
import { UserResponseType } from './types/userResponse';
import { LoginDto } from './dto/login.dto';
import { UserEntity } from './user.entity';
import { request } from 'http';
import { ExpressRequest } from './midđlewares/auth.middleware';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Post('resgister')
    async createUser(
        @Body() createUserDto: CreateUserDto
    ): Promise<UserResponseType> {
        const user = await this.userService.createUser(createUserDto)
        return this.userService.buildUserRespone(user)
    }

    @Post('login')
    async login(
        @Body() loginDto: LoginDto
    ): Promise<UserResponseType> {
        const user = await this.userService.loginUser(loginDto)
        return this.userService.buildUserRespone(user)
    }

    @Get('user')
    async currentUser(@Request()request: ExpressRequest): Promise<UserResponseType> {
        if(!request.user) {
            if(!request.user){
                throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED)
            }
            return this.userService.buildUserRespone(request.user)
        }

    }
}
 