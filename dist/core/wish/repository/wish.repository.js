"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WishRepository = void 0;
const wish_entity_1 = require("../../../entity/wish.entity");
const typeorm_1 = require("typeorm");
let WishRepository = class WishRepository extends typeorm_1.Repository {
};
WishRepository = __decorate([
    typeorm_1.EntityRepository(wish_entity_1.Wish)
], WishRepository);
exports.WishRepository = WishRepository;
//# sourceMappingURL=wish.repository.js.map