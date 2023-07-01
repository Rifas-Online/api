"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePatchProfileDTO = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_profile_dto_1 = require("./create-profile.dto");
class UpdatePatchProfileDTO extends (0, mapped_types_1.PartialType)(create_profile_dto_1.CreateProfileDTO) {
}
exports.UpdatePatchProfileDTO = UpdatePatchProfileDTO;
//# sourceMappingURL=update-patch-profile.dto.js.map