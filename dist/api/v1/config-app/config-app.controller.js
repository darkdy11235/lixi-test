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
exports.ConfigAppController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const auth_decorator_1 = require("../../../common/decorator/auth.decorator");
const role_enum_1 = require("../../../common/enum/role.enum");
const config_app_service_1 = require("../../../core/config-app/service/config-app.service");
let ConfigAppController = class ConfigAppController {
    constructor(configAppService) {
        this.configAppService = configAppService;
    }
    getWinRate() {
        return this.configAppService.getWinRate();
    }
    getMaxDrawEachPerson() {
        return this.configAppService.getMaxDrawEachPerson();
    }
    setWinRate(winRate) {
        console.log(winRate);
        return this.configAppService.setWinRate(winRate);
    }
    setMaxDrawEachPerson(maxDraw) {
        return this.configAppService.setMaxDrawEachPerson(maxDraw);
    }
};
__decorate([
    common_1.Get("/win-rate"),
    openapi.ApiResponse({ status: 200, type: require("../../../core/config-app/service/config-app.service").WinRateConfig }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ConfigAppController.prototype, "getWinRate", null);
__decorate([
    common_1.Get("/max-draw-each-person"),
    auth_decorator_1.Auth(role_enum_1.RoleEnum.USER),
    openapi.ApiResponse({ status: 200, type: require("../../../core/config-app/service/config-app.service").MaxDrawEachPersonConfig }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ConfigAppController.prototype, "getMaxDrawEachPerson", null);
__decorate([
    common_1.Post("/win-rate"),
    openapi.ApiResponse({ status: 201, type: require("../../../entity/config.entity").ConfigApp }),
    __param(0, common_1.Body("winRate")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ConfigAppController.prototype, "setWinRate", null);
__decorate([
    common_1.Post("/max-draw-each-person"),
    openapi.ApiResponse({ status: 201, type: require("../../../entity/config.entity").ConfigApp }),
    __param(0, common_1.Body("maxDraw")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ConfigAppController.prototype, "setMaxDrawEachPerson", null);
ConfigAppController = __decorate([
    common_1.Controller('/api/v1/config-app'),
    auth_decorator_1.Auth(role_enum_1.RoleEnum.ADMIN),
    __metadata("design:paramtypes", [config_app_service_1.ConfigAppService])
], ConfigAppController);
exports.ConfigAppController = ConfigAppController;
//# sourceMappingURL=config-app.controller.js.map