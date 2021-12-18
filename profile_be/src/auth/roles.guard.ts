import {CanActivate, ExecutionContext, Injectable, UnauthorizedException} from '@nestjs/common'
import {Reflector} from "@nestjs/core";
import {ROLES_KEY} from "./roles-auth.decorator";
import {HttpException, HttpStatus} from "@nestjs/common";
import {Observable} from "rxjs";
import {JwtService} from "@nestjs/jwt";

@Injectable()
export class RolesGuard implements CanActivate{
    constructor(private jwtService: JwtService,
                private reflector: Reflector) {
    }

    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean>{
        try {
            const requiredRoles = this.reflector.getAllAndOverride<string[]>(ROLES_KEY, [
                context.getHandler(),
                context.getClass()
            ])

            if (!requiredRoles) {
                return true
            }

            const req = context.switchToHttp().getRequest()
            const authHeader = req.headers.authorization
            const headerContent = authHeader.split(' ')
            const bearer = headerContent[0]
            const token = headerContent[1]

            if (bearer !== 'Bearer' || !token) {
                throw new UnauthorizedException({message: 'User unauthorized'})
            }

            const user = this.jwtService.verify(token)
            req.user = user
            return user.roles.some(role => requiredRoles.includes(role.value))

        } catch (e) {
            throw new HttpException('Access forbidden', HttpStatus.FORBIDDEN)
        }
    }
}