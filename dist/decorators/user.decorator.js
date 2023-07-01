"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const common_1 = require("@nestjs/common");
exports.User = (0, common_1.createParamDecorator)((args, context) => {
    const request = context.switchToHttp().getRequest();
    if (request.user) {
        if (args) {
            return request.user[args];
        }
        return request.user;
    }
    else {
        throw new common_1.NotFoundException('Usuario não encontrado no Request. Use o AuthGuard para obter o usuário.');
    }
});
//# sourceMappingURL=user.decorator.js.map