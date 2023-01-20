"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfigAppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const config_app_controller_1 = require("../../api/v1/config-app/config-app.controller");
const config_app_repository_1 = require("./repository/config-app.repository");
const config_app_service_1 = require("./service/config-app.service");
let ConfigAppModule = class ConfigAppModule {
};
ConfigAppModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([config_app_repository_1.ConfigAppRepository])],
        controllers: [config_app_controller_1.ConfigAppController],
        providers: [config_app_service_1.ConfigAppService],
        exports: [config_app_service_1.ConfigAppService]
    })
], ConfigAppModule);
exports.ConfigAppModule = ConfigAppModule;
//# sourceMappingURL=config-app.module.js.map