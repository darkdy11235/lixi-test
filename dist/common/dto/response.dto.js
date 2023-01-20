"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponseDto = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
class ResponseDto {
    constructor() {
        this.status = common_1.HttpStatus.ACCEPTED;
        this.message = "No message";
    }
    static _OPENAPI_METADATA_FACTORY() {
        return { status: { required: true, type: () => Number, default: common_1.HttpStatus.ACCEPTED }, data: { required: true, type: () => Object }, message: { required: true, type: () => String, default: "No message" } };
    }
}
exports.ResponseDto = ResponseDto;
//# sourceMappingURL=response.dto.js.map