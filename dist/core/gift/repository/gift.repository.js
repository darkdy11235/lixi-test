"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GiftRepository = void 0;
const gift_entity_1 = require("../../../entity/gift.entity");
const typeorm_1 = require("typeorm");
let GiftRepository = class GiftRepository extends typeorm_1.Repository {
    getAllGiftWithUserEachGift() {
        return this.createQueryBuilder("gift")
            .leftJoinAndSelect("gift.userGifts", "userGift")
            .leftJoin("userGift.user", "user")
            .where("gift.value != :value", { value: 0 })
            .addSelect(["user.id", "user.name", "user.email"])
            .getMany();
    }
};
GiftRepository = __decorate([
    typeorm_1.EntityRepository(gift_entity_1.Gift)
], GiftRepository);
exports.GiftRepository = GiftRepository;
//# sourceMappingURL=gift.repository.js.map