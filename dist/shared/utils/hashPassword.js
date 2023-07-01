"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hashPassword = void 0;
const bcrypt = require("bcrypt");
async function hashPassword(password) {
    const salt = await bcrypt.genSalt();
    return bcrypt.hash(password, salt);
}
exports.hashPassword = hashPassword;
//# sourceMappingURL=hashPassword.js.map