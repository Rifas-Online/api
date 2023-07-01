"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const bcrypt = require("bcrypt");
const user_service_1 = require("../domain/user/user.service");
const prisma_service_1 = require("../prisma/prisma.service");
const profile_service_1 = require("../domain/profile/profile.service");
let AuthService = exports.AuthService = class AuthService {
    constructor(jwtService, prismaService, userService, profileService) {
        this.jwtService = jwtService;
        this.prismaService = prismaService;
        this.userService = userService;
        this.profileService = profileService;
        this.issuer = 'login';
        this.expiresIn = process.env.JWT_EXPIRES_IN;
    }
    async createToken(user) {
        const { password } = user, userWithoutPassword = __rest(user, ["password"]);
        return {
            accessToken: await this.jwtService.signAsync({
                id: user.id,
            }, {
                expiresIn: this.expiresIn,
                issuer: this.issuer,
            }),
            user: userWithoutPassword,
        };
    }
    async checkToken(token) {
        try {
            const data = await this.jwtService.verifyAsync(token, {
                issuer: 'login',
            });
            return data;
        }
        catch (error) {
            throw new common_1.BadRequestException(error);
        }
    }
    async isValidToken(token) {
        try {
            await this.checkToken(token);
            return true;
        }
        catch (error) {
            return false;
        }
    }
    async login(email, password) {
        const user = await this.prismaService.user.findFirst({
            where: { email },
            include: {
                profile: true,
            },
        });
        if (!user) {
            throw new common_1.UnauthorizedException('Email e/ou senha incorretos.');
        }
        const isValidPassword = await bcrypt.compare(password, user.password);
        if (!isValidPassword) {
            throw new common_1.UnauthorizedException('Email e/ou senha incorretos.');
        }
        return this.createToken(user);
    }
    async forget(email) {
        return email;
    }
    async reset(password, token) {
        return password;
    }
    async register(data) {
        const user = await this.userService.create(data);
        await this.profileService.create(null, user);
        const userWithProfile = await this.userService.show(user.id);
        return this.createToken(userWithProfile);
    }
};
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [jwt_1.JwtService,
        prisma_service_1.PrismaService,
        user_service_1.UserService,
        profile_service_1.ProfileService])
], AuthService);
//# sourceMappingURL=auth.service.js.map