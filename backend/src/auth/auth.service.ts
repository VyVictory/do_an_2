import { LoginDto } from './../user/dto/login.dto';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './schemas/user.schema';
import * as bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';



@Injectable()
export class AuthService {
    constructor(
        @InjectModel(User.name)
        private userModel: Model<User>,
        private jwtService: JwtService
    ) {}

    async signUp(signUpDto): Promise<{ token: string }>{
        const { name, email, password,username,numberphone,gender } = signUpDto

        const hashPassword = await bcrypt.hash(password, 10)

        const user = await this.userModel.create({
            name,
            email,
            password: hashPassword,
            username,
            numberphone,
            gender
            
        })

        const token = this.jwtService.sign({ id: user._id})
        return { token };
    }

    async login( loginDto: LoginDto ):Promise  <{ token: string }>  {
        const { email, password } = loginDto;

        const user = await this.userModel.findOne({ email })

        if(!user) {
            throw new UnauthorizedException('Invalid email or password')
        }

        const isPasswordCorrect = await bcrypt.compare(password, user.password)

        if(!isPasswordCorrect) {
            throw new UnauthorizedException('Invalid email or password')
        }

        const token = this.jwtService.sign({ id: user._id});
        return { token };
        
    }

        
}