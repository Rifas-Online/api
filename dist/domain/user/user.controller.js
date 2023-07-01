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
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const param_id_decorator_1 = require("../../decorators/param-id.decorator");
const dto_1 = require("./dto");
const user_service_1 = require("./user.service");
let UserController = exports.UserController = class UserController {
    constructor(userService) {
        this.userService = userService;
    }
    async create(body) {
        return this.userService.create(body);
    }
    async list() {
        return this.userService.list();
    }
    async show(id) {
        return this.userService.show(id);
    }
    async showProfile(id) {
        return this.userService.showProfile(id);
    }
    async update(body, id) {
        return this.userService.update(id, body);
    }
    async updatePartial(body, id) {
        return this.userService.updatePartial(id, body);
    }
    async delete(id) {
        return this.userService.delete(id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.CreateUserDTO]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserController.prototype, "list", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, param_id_decorator_1.ParamId)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "show", null);
__decorate([
    (0, common_1.Get)(':id/profile'),
    __param(0, (0, param_id_decorator_1.ParamId)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "showProfile", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, param_id_decorator_1.ParamId)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.UpdatePutUserDTO, Number]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "update", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, param_id_decorator_1.ParamId)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.UpdatePatchUserDTO, Number]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "updatePartial", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, param_id_decorator_1.ParamId)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "delete", null);
exports.UserController = UserController = __decorate([
    (0, common_1.Controller)('users'),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UserController);
//# sourceMappingURL=user.controller.js.map