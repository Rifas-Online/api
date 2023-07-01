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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileController = void 0;
const common_1 = require("@nestjs/common");
const user_decorator_1 = require("../../decorators/user.decorator");
const auth_guard_1 = require("../../guards/auth.guard");
const create_profile_dto_1 = require("./dto/create-profile.dto");
const update_patch_profile_dto_1 = require("./dto/update-patch-profile.dto");
const update_put_profile_dto_1 = require("./dto/update-put-profile.dto");
const profile_service_1 = require("./profile.service");
let ProfileController = exports.ProfileController = class ProfileController {
    constructor(profileService) {
        this.profileService = profileService;
    }
    async create(body, user) {
        return this.profileService.create(body, user);
    }
    async list() {
        return this.profileService.list();
    }
    async show(user) {
        return this.profileService.show(user.id);
    }
    async update(body, userId) {
        return this.profileService.update(userId, body);
    }
    async updatePartial(body, userId) {
        return this.profileService.updatePartial(userId, body);
    }
    async delete(userId) {
        return this.profileService.delete(userId);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, user_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_profile_dto_1.CreateProfileDTO, Object]),
    __metadata("design:returntype", Promise)
], ProfileController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProfileController.prototype, "list", null);
__decorate([
    (0, common_1.Get)('/me'),
    __param(0, (0, user_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProfileController.prototype, "show", null);
__decorate([
    (0, common_1.Put)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, user_decorator_1.User)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_put_profile_dto_1.UpdatePutProfileDTO, Number]),
    __metadata("design:returntype", Promise)
], ProfileController.prototype, "update", null);
__decorate([
    (0, common_1.Patch)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, user_decorator_1.User)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_patch_profile_dto_1.UpdatePatchProfileDTO, Number]),
    __metadata("design:returntype", Promise)
], ProfileController.prototype, "updatePartial", null);
__decorate([
    (0, common_1.Delete)(),
    __param(0, (0, user_decorator_1.User)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ProfileController.prototype, "delete", null);
exports.ProfileController = ProfileController = __decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Controller)('profiles'),
    __metadata("design:paramtypes", [profile_service_1.ProfileService])
], ProfileController);
//# sourceMappingURL=profile.controller.js.map