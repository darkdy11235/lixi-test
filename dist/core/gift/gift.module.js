"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GiftModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const gift_controller_1 = require("../../api/v1/gift/controller/gift.controller");
const config_app_module_1 = require("../config-app/config-app.module");
const user_module_1 = require("../user/user.module");
const wish_module_1 = require("../wish/wish.module");
const gift_repository_1 = require("./repository/gift.repository");
const user_gift_repository_1 = require("./repository/user-gift.repository");
const gift_service_1 = require("./service/gift.service");
let GiftModule = class GiftModule {
};
GiftModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([gift_repository_1.GiftRepository, user_gift_repository_1.UserGiftRepository]),
            user_module_1.UserModule, wish_module_1.WishModule, config_app_module_1.ConfigAppModule],
        controllers: [gift_controller_1.GiftController],
        providers: [gift_service_1.GiftService]
    })
], GiftModule);
exports.GiftModule = GiftModule;
//# sourceMappingURL=gift.module.js.map