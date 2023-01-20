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
exports.Wish = void 0;
const openapi = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
const user_gift_entity_1 = require("./user-gift.entity");
let Wish = class Wish {
    constructor() {
        this.forWinner = false;
    }
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => Number }, content: { required: true, type: () => String }, forWinner: { required: true, type: () => Boolean, default: false }, link_img: { required: true, type: () => String }, userGift: { required: true, type: () => [require("./user-gift.entity").UserGift] } };
    }
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Wish.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Wish.prototype, "content", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Boolean)
], Wish.prototype, "forWinner", void 0);
__decorate([
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", String)
], Wish.prototype, "link_img", void 0);
__decorate([
    typeorm_1.OneToMany(() => user_gift_entity_1.UserGift, userGift => userGift.wish),
    __metadata("design:type", Array)
], Wish.prototype, "userGift", void 0);
Wish = __decorate([
    typeorm_1.Entity()
], Wish);
exports.Wish = Wish;
//# sourceMappingURL=wish.entity.js.map