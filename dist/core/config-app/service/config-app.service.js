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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfigAppService = exports.MaxDrawEachPersonConfig = exports.WinRateConfig = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const config_app_enum_1 = require("../../../common/enum/config-app.enum");
const config_entity_1 = require("../../../entity/config.entity");
const config_app_repository_1 = require("../repository/config-app.repository");
class WinRateConfig {
}
exports.WinRateConfig = WinRateConfig;
class MaxDrawEachPersonConfig {
}
exports.MaxDrawEachPersonConfig = MaxDrawEachPersonConfig;
let ConfigAppService = class ConfigAppService {
    constructor(configAppRepository, configService) {
        this.configAppRepository = configAppRepository;
        this.configService = configService;
    }
    async getWinRate() {
        const winRate = await this.configAppRepository.findOne({ my_key: config_app_enum_1.ConfigAppEnum.WIN_RATE });
        let winRateConfig = new WinRateConfig();
        if (!winRate) {
            winRateConfig.key = config_app_enum_1.ConfigAppEnum.WIN_RATE;
            winRateConfig.value = this.configService.get(config_app_enum_1.ConfigAppEnum.WIN_RATE) || 10;
        }
        else {
            winRateConfig.key = winRate.my_key;
            winRateConfig.value = Number(winRate.my_value);
        }
        return winRateConfig;
    }
    async getMaxDrawEachPerson() {
        const maxDrawConfig = await this.configAppRepository.findOne({ my_key: config_app_enum_1.ConfigAppEnum.MAX_DRAW_EACH_PERSON });
        let maxDrawEachPersonConfig = new MaxDrawEachPersonConfig();
        if (!maxDrawConfig) {
            maxDrawEachPersonConfig.key = config_app_enum_1.ConfigAppEnum.MAX_DRAW_EACH_PERSON;
            maxDrawEachPersonConfig.value = this.configService.get(config_app_enum_1.ConfigAppEnum.MAX_DRAW_EACH_PERSON) || 10;
        }
        else {
            maxDrawEachPersonConfig.key = maxDrawConfig.my_key;
            maxDrawEachPersonConfig.value = Number(maxDrawConfig.my_value);
        }
        return maxDrawEachPersonConfig;
    }
    async setWinRate(winRate) {
        if (winRate >= 0) {
            let winRateConfig = await this.configAppRepository.findOne({ my_key: config_app_enum_1.ConfigAppEnum.WIN_RATE });
            if (winRateConfig) {
                winRateConfig.my_value = String(winRate);
                return this.configAppRepository.save(winRateConfig);
            }
            else {
                throw new common_1.InternalServerErrorException(`${config_app_enum_1.ConfigAppEnum.WIN_RATE} config is not found in DB`);
            }
        }
        else {
            throw new common_1.BadRequestException(`${config_app_enum_1.ConfigAppEnum.WIN_RATE} must be unsigned number type`);
        }
    }
    async setMaxDrawEachPerson(maxDraw) {
        if (maxDraw >= 0) {
            let maxDrawConfig = await this.configAppRepository.findOne({ my_key: config_app_enum_1.ConfigAppEnum.MAX_DRAW_EACH_PERSON });
            if (maxDrawConfig) {
                maxDrawConfig.my_value = String(maxDraw);
                return this.configAppRepository.save(maxDrawConfig);
            }
            else {
                throw new common_1.InternalServerErrorException(`${config_app_enum_1.ConfigAppEnum.MAX_DRAW_EACH_PERSON} config is not found in DB`);
            }
        }
        else {
            throw new common_1.BadRequestException(`${config_app_enum_1.ConfigAppEnum.MAX_DRAW_EACH_PERSON} must be unsigned number type`);
        }
    }
};
ConfigAppService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [config_app_repository_1.ConfigAppRepository,
        config_1.ConfigService])
], ConfigAppService);
exports.ConfigAppService = ConfigAppService;
//# sourceMappingURL=config-app.service.js.map