import { Injectable, NestMiddleware } from "@nestjs/common";
import { UserEntity } from "../user.entity";
import { NextFunction } from "express";
import { verify } from "jsonwebtoken";
import { UserService } from "../user.service";


export interface ExpressRequest extends Request {
    user?: UserEntity
}

@Injectable()
export class AuthMiddleware implements NestMiddleware {
    constructor(private readonly userSerivice: UserService){}
    async use(req: ExpressRequest, res: Response, next: NextFunction){
        if (!req.headers['authorization']) {
            req.user = null
            next()
            return
        }
        const token = req.headers['authorization'].split(' ')[1]

        try {
            const decode = verify(token, 'JWT_SECRET') as {email: string}
            const user = await this.userSerivice.findByEmail(decode.email)
            req.user = user
            next()
        } catch (error) {
            req.user = null 
            next()
        }
    }
}