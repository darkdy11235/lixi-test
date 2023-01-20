"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PayloadJwtDto = void 0;
const openapi = require("@nestjs/swagger");
class PayloadJwtDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { user: { required: true, type: () => ({ id: { required: true, type: () => Number }, name: { required: true, type: () => String }, email: { required: true, type: () => String }, createdAt: { required: true, type: () => Date }, role: { required: true, enum: require("../enum/role.enum").RoleEnum } }) } };
    }
}
exports.PayloadJwtDto = PayloadJwtDto;
//# sourceMappingURL=payload-jwt.dto.js.map