"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurrentUserDto = void 0;
const openapi = require("@nestjs/swagger");
class CurrentUserDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => Number }, name: { required: true, type: () => String }, email: { required: true, type: () => String }, createdAt: { required: true, type: () => Date }, role: { required: true, enum: require("../enum/role.enum").RoleEnum } };
    }
}
exports.CurrentUserDto = CurrentUserDto;
//# sourceMappingURL=current-user.dto.js.map