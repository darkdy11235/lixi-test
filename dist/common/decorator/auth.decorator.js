"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Auth = void 0;
const common_1 = require("@nestjs/common");
const jwt_auth_guard_1 = require("../guard/jwt-auth.guard");
const roles_guard_1 = require("../guard/roles.guard");
const role_decorator_1 = require("./role.decorator");
function Auth(...roles) {
    return common_1.applyDecorators(common_1.SetMetadata(role_decorator_1.ROLES_KEY, roles), common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard));
}
exports.Auth = Auth;
//# sourceMappingURL=auth.decorator.js.map