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
exports.WishController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const auth_decorator_1 = require("../../../../common/decorator/auth.decorator");
const role_enum_1 = require("../../../../common/enum/role.enum");
const wish_service_1 = require("../../../../core/wish/service/wish.service");
const wish_entity_1 = require("../../../../entity/wish.entity");
const create_wish_dto_1 = require("../dto/create-wish.dto");
const update_wish_dto_1 = require("../dto/update-wish.dto");
let WishController = class WishController {
    constructor(wishService) {
        this.wishService = wishService;
    }
    getAllWishes() {
        return this.wishService.getAllWishes();
    }
    getWishById(id) {
        return this.wishService.getWishById(id);
    }
    createNewWish(createWishDto) {
        return this.wishService.createNewWish(createWishDto);
    }
    deleteWishById(id) {
        return this.wishService.deleteWishById(id);
    }
    updateWishById(id, updateWishDto) {
        return this.wishService.updateWishById(id, updateWishDto);
    }
};
__decorate([
    common_1.Get(),
    openapi.ApiResponse({ status: 200, type: [require("../../../../entity/wish.entity").Wish] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], WishController.prototype, "getAllWishes", null);
__decorate([
    common_1.Get(":id"),
    openapi.ApiResponse({ status: 200, type: require("../../../../entity/wish.entity").Wish }),
    __param(0, common_1.Param("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], WishController.prototype, "getWishById", null);
__decorate([
    common_1.Post(),
    openapi.ApiResponse({ status: 201, type: require("../../../../entity/wish.entity").Wish }),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_wish_dto_1.CreateWishDto]),
    __metadata("design:returntype", Promise)
], WishController.prototype, "createNewWish", null);
__decorate([
    common_1.Delete(":id"),
    openapi.ApiResponse({ status: 200 }),
    __param(0, common_1.Param("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], WishController.prototype, "deleteWishById", null);
__decorate([
    common_1.Patch(":id"),
    openapi.ApiResponse({ status: 200, type: require("../../../../entity/wish.entity").Wish }),
    __param(0, common_1.Param("id")), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_wish_dto_1.UpdateWishDto]),
    __metadata("design:returntype", Promise)
], WishController.prototype, "updateWishById", null);
WishController = __decorate([
    common_1.Controller('/api/v1/wishes'),
    auth_decorator_1.Auth(role_enum_1.RoleEnum.ADMIN),
    __metadata("design:paramtypes", [wish_service_1.WishService])
], WishController);
exports.WishController = WishController;
//# sourceMappingURL=wish.controller.js.map