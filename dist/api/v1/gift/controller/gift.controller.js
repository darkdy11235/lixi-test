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
exports.GiftController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const auth_decorator_1 = require("../../../../common/decorator/auth.decorator");
const current_user_decorator_1 = require("../../../../common/decorator/current-user.decorator");
const current_user_dto_1 = require("../../../../common/dto/current-user.dto");
const payload_jwt_dto_1 = require("../../../../common/dto/payload-jwt.dto");
const role_enum_1 = require("../../../../common/enum/role.enum");
const gift_service_1 = require("../../../../core/gift/service/gift.service");
let GiftController = class GiftController {
    constructor(giftService) {
        this.giftService = giftService;
    }
    getAllGifts(user) {
        return this.giftService.getAllGifts(user === null || user === void 0 ? void 0 : user.id);
    }
    randomMyGift(user) {
        console.log(user);
        return this.giftService.randomMyGift(user.id);
    }
    listAllWinner() {
        return this.giftService.listAllWinner();
    }
};
__decorate([
    common_1.Get(),
    auth_decorator_1.Auth(role_enum_1.RoleEnum.USER),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, current_user_decorator_1.CurrentUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [current_user_dto_1.CurrentUserDto]),
    __metadata("design:returntype", void 0)
], GiftController.prototype, "getAllGifts", null);
__decorate([
    common_1.Post("/random-my-gift"),
    auth_decorator_1.Auth(role_enum_1.RoleEnum.USER),
    openapi.ApiResponse({ status: 201, type: require("../../../../entity/user-gift.entity").UserGift }),
    __param(0, current_user_decorator_1.CurrentUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [current_user_dto_1.CurrentUserDto]),
    __metadata("design:returntype", void 0)
], GiftController.prototype, "randomMyGift", null);
__decorate([
    common_1.Get("/winner"),
    openapi.ApiResponse({ status: 200, type: [require("../../../../entity/gift.entity").Gift] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], GiftController.prototype, "listAllWinner", null);
GiftController = __decorate([
    common_1.Controller('/api/v1/gifts'),
    __metadata("design:paramtypes", [gift_service_1.GiftService])
], GiftController);
exports.GiftController = GiftController;
//# sourceMappingURL=gift.controller.js.map