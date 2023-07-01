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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
let ProfileService = exports.ProfileService = class ProfileService {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    async create(body, user) {
        var _a;
        const isPerfilExist = await this.prismaService.profile.count({
            where: {
                userId: user.id,
            },
        });
        if (isPerfilExist) {
            throw new common_1.BadRequestException('O Usuario ja tem um perfil associado.');
        }
        if (!body) {
            body = {
                name: null,
                photoUrl: null,
                bio: null,
            };
        }
        const data = {
            name: (_a = body.name) !== null && _a !== void 0 ? _a : user.email.split('@')[0],
            photoUrl: body.photoUrl,
            bio: body.bio,
            userId: user.id,
        };
        return this.prismaService.profile.create({
            data,
        });
    }
    async list() {
        return this.prismaService.profile.findMany();
    }
    async show(userId) {
        const usuario = await this.existsUserProfile(userId);
        await this.exists(usuario.profile.id);
        return this.prismaService.profile.findUnique({
            where: { id: usuario.profile.id },
        });
    }
    async update(userId, data) {
        const usuario = await this.existsUserProfile(userId);
        await this.exists(usuario.profile.id);
        data.userId = userId;
        return this.prismaService.profile.update({
            where: { id: usuario.profile.id },
            data,
        });
    }
    async updatePartial(userId, { bio, name, photoUrl }) {
        const usuario = await this.existsUserProfile(userId);
        await this.exists(usuario.profile.id);
        const data = {};
        if (bio)
            data.bio = bio;
        if (name)
            data.name = name;
        if (photoUrl)
            data.photoUrl = photoUrl;
        if (userId)
            data.userId = userId;
        return this.prismaService.profile.update({
            where: { id: usuario.profile.id },
            data,
        });
    }
    async delete(userId) {
        const usuario = await this.existsUserProfile(userId);
        await this.exists(usuario.profile.id);
        return this.prismaService.profile.delete({
            where: { id: usuario.profile.id },
        });
    }
    async exists(id) {
        const isUserExists = await this.prismaService.profile.count({
            where: { id },
        });
        if (!isUserExists) {
            this.throwErrorProfileDoesNotExist(id);
        }
    }
    async existsUserProfile(userId) {
        const usuario = await this.prismaService.user.findUnique({
            where: { id: userId },
            include: {
                profile: true,
            },
        });
        if (!usuario.profile) {
            throw new common_1.NotFoundException('Usuário não possui perfil.');
        }
        return usuario;
    }
    throwErrorProfileDoesNotExist(id) {
        throw new common_1.NotFoundException(`O perfil ${id} não existe.`);
    }
};
exports.ProfileService = ProfileService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ProfileService);
//# sourceMappingURL=profile.service.js.map