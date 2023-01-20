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
exports.UserGift = void 0;
const openapi = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
const gift_entity_1 = require("./gift.entity");
const user_entity_1 = require("./user.entity");
const wish_entity_1 = require("./wish.entity");
let UserGift = class UserGift {
    constructor() {
        this.createdAt = new Date().toISOString();
    }
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => Number }, user: { required: true, type: () => require("./user.entity").User }, wish: { required: true, type: () => require("./wish.entity").Wish }, gift: { required: true, type: () => require("./gift.entity").Gift }, createdAt: { required: true, type: () => String, default: new Date().toISOString() } };
    }
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], UserGift.prototype, "id", void 0);
__decorate([
    typeorm_1.ManyToOne(() => user_entity_1.User, user => user.userGifts, { primary: true }),
    typeorm_1.JoinColumn([{ name: 'user_id', referencedColumnName: 'id' }]),
    __metadata("design:type", user_entity_1.User)
], UserGift.prototype, "user", void 0);
__decorate([
    typeorm_1.ManyToOne(() => wish_entity_1.Wish, wish => wish.userGift, { primary: true }),
    typeorm_1.JoinColumn([{ name: 'wish_id', referencedColumnName: 'id' }]),
    __metadata("design:type", wish_entity_1.Wish)
], UserGift.prototype, "wish", void 0);
__decorate([
    typeorm_1.ManyToOne(() => gift_entity_1.Gift, gift => gift.userGifts, { cascade: true }),
    typeorm_1.JoinColumn({ name: "gift_id", referencedColumnName: "id" }),
    __metadata("design:type", gift_entity_1.Gift)
], UserGift.prototype, "gift", void 0);
__decorate([
    typeorm_1.CreateDateColumn(),
    __metadata("design:type", String)
], UserGift.prototype, "createdAt", void 0);
UserGift = __decorate([
    typeorm_1.Entity({ name: "user_gift" }),
    typeorm_1.Check(`"gift" IN (10, 20)`)
], UserGift);
exports.UserGift = UserGift;
//# sourceMappingURL=user-gift.entity.js.map