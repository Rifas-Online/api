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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
const hashPassword_1 = require("../../shared/utils/hashPassword");
let UserService = exports.UserService = class UserService {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    async create(data) {
        const emailExists = await this.prismaService.user.findFirst({
            where: {
                email: data.email,
            },
        });
        if (emailExists) {
            throw new common_1.NotFoundException('Este email ja esta sendo utilizado.');
        }
        data.password = await (0, hashPassword_1.hashPassword)(data.password);
        const user = await this.prismaService.user.create({ data });
        return this.show(user.id);
    }
    async list() {
        return this.prismaService.user.findMany();
    }
    async show(id) {
        await this.exists(id);
        return this.prismaService.user.findUnique({
            where: { id },
            include: {
                profile: true,
            },
        });
    }
    async showProfile(id) {
        await this.exists(id);
        const userWithProfile = await this.prismaService.user.findUnique({
            where: { id },
            include: {
                profile: true,
            },
        });
        if (!userWithProfile.profile) {
            throw new common_1.NotFoundException('Usuário não possui perfil.');
        }
        return userWithProfile;
    }
    async update(id, data) {
        await this.exists(id);
        data.password = await (0, hashPassword_1.hashPassword)(data.password);
        return await this.prismaService.user.update({
            where: { id },
            data,
        });
    }
    async updatePartial(id, { email, password }) {
        await this.exists(id);
        const data = {};
        if (email)
            data.email = email;
        if (password)
            data.password = await (0, hashPassword_1.hashPassword)(password);
        return this.prismaService.user.update({
            where: { id },
            data,
        });
    }
    async delete(id) {
        return this.prismaService.user.delete({ where: { id } });
    }
    async exists(id) {
        const isUserExists = await this.prismaService.user.count({
            where: { id },
        });
        if (!isUserExists) {
            throw new common_1.NotFoundException(`O usuário ${id} não existe.`);
        }
    }
};
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], UserService);
//# sourceMappingURL=user.service.js.map