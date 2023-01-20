"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurrentUser = void 0;
const common_1 = require("@nestjs/common");
exports.CurrentUser = common_1.createParamDecorator((data, ctx) => {
    var _a, _b, _c, _d, _e;
    const request = ctx.switchToHttp().getRequest();
    return data ? (_c = (_b = (_a = request.user) === null || _a === void 0 ? void 0 : _a.payload) === null || _b === void 0 ? void 0 : _b.user) === null || _c === void 0 ? void 0 : _c[data] : (_e = (_d = request.user) === null || _d === void 0 ? void 0 : _d.payload) === null || _e === void 0 ? void 0 : _e.user;
});
//# sourceMappingURL=current-user.decorator.js.map