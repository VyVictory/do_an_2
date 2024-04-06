import { CreateUserDto } from './dto/createUser.dto';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UserEntity } from './user.entity';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { UserResponseType } from './types/userResponse';
import { LoginDto } from './dto/login.dto';
import { compare } from 'bcrypt'
//import { Sign } from 'crypto';
import { sign } from 'jsonwebtoken';




@Injectable()
export class UserService {
    constructor(@InjectModel(UserEntity.name) private userModel: Model<UserEntity>){}

    async createUser(CreateUserDto:CreateUserDto): Promise<UserEntity>{
        const user = await this.userModel.findOne({email: CreateUserDto.email})

        if (user){
            throw new HttpException('Email is already token', HttpStatus.UNPROCESSABLE_ENTITY)
        }
        const createdUser = new this.userModel(CreateUserDto)
        return createdUser.save()
    }

    async loginUser(loginDto: LoginDto): Promise<UserEntity>{
        const user = await this.userModel.findOne({email: loginDto.email}).select('+password')

        if(!user) {
            throw new HttpException('User not found', HttpStatus.UNPROCESSABLE_ENTITY)
        }
        const isPasswordCorrect = await compare(loginDto.password, user.password)

        if(!isPasswordCorrect) {
            throw new HttpException('Incorrect password',HttpStatus.UNPROCESSABLE_ENTITY)
        }
        return user

    }

    buildUserRespone(userEntity: UserEntity): UserResponseType{
        return {
            username : userEntity.username,
            email : userEntity.email,
            token: this.generateJwt(userEntity)
        }
    }

    generateJwt(UserEntity: UserEntity): string {
        return sign({ email: UserEntity.email }, 'JWT_SECRET')
    }
    async findByEmail(email:string): Promise<UserEntity>{
        return this.userModel.findOne({email})
    }
}
