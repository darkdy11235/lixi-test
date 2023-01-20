"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const auth_module_1 = require("./core/auth/auth.module");
const facebook_strategy_1 = require("./common/strategy/facebook.strategy");
const wish_module_1 = require("./core/wish/wish.module");
const config_1 = require("@nestjs/config");
const gift_module_1 = require("./core/gift/gift.module");
const config_app_module_1 = require("./core/config-app/config-app.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [config_1.ConfigModule.forRoot({ isGlobal: true }),
            typeorm_1.TypeOrmModule.forRoot(), auth_module_1.AuthModule, wish_module_1.WishModule, gift_module_1.GiftModule, config_app_module_1.ConfigAppModule],
        controllers: [],
        providers: [facebook_strategy_1.FacebookStrategy],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map