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
exports.Gift = void 0;
const openapi = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
const user_gift_entity_1 = require("./user-gift.entity");
let Gift = class Gift {
    constructor() {
        this.issued = 0;
    }
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => Number }, value: { required: true, type: () => Number }, maxQuantity: { required: true, type: () => Number }, userGifts: { required: true, type: () => [require("./user-gift.entity").UserGift] }, issued: { required: true, type: () => Number, default: 0 } };
    }
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Gift.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ unique: true }),
    __metadata("design:type", Number)
], Gift.prototype, "value", void 0);
__decorate([
    typeorm_1.Column({ name: "max_quantity" }),
    __metadata("design:type", Number)
], Gift.prototype, "maxQuantity", void 0);
__decorate([
    typeorm_1.OneToMany(() => user_gift_entity_1.UserGift, userGift => userGift.gift),
    __metadata("design:type", Array)
], Gift.prototype, "userGifts", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Gift.prototype, "issued", void 0);
Gift = __decorate([
    typeorm_1.Entity()
], Gift);
exports.Gift = Gift;
//# sourceMappingURL=gift.entity.js.map