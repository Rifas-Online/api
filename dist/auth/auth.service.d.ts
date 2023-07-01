import { JwtService } from '@nestjs/jwt';
import { User } from '@prisma/client';
import { UserService } from 'src/domain/user/user.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { ProfileService } from '../domain/profile/profile.service';
export interface JWTPayload {
    id: number;
    iat: number;
    exp: number;
    iss: string;
}
export declare class AuthService {
    private readonly jwtService;
    private readonly prismaService;
    private readonly userService;
    private readonly profileService;
    private readonly issuer;
    private readonly expiresIn;
    constructor(jwtService: JwtService, prismaService: PrismaService, userService: UserService, profileService: ProfileService);
    createToken(user: User): Promise<{
        accessToken: string;
        user: {
            id: number;
            email: string;
            status: number;
            deleted: boolean;
            createdAt: Date;
            updatedAt: Date;
        };
    }>;
    checkToken(token: string): Promise<any>;
    isValidToken(token: string): Promise<boolean>;
    login(email: string, password: string): Promise<{
        accessToken: string;
        user: {
            id: number;
            email: string;
            status: number;
            deleted: boolean;
            createdAt: Date;
            updatedAt: Date;
        };
    }>;
    forget(email: string): Promise<string>;
    reset(password: string, token: string): Promise<string>;
    register(data: any): Promise<{
        accessToken: string;
        user: {
            id: number;
            email: string;
            status: number;
            deleted: boolean;
            createdAt: Date;
            updatedAt: Date;
        };
    }>;
}
