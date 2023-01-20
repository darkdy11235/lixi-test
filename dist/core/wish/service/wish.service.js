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
exports.WishService = void 0;
const common_1 = require("@nestjs/common");
const create_wish_dto_1 = require("../../../api/v1/wish/dto/create-wish.dto");
const update_wish_dto_1 = require("../../../api/v1/wish/dto/update-wish.dto");
const wish_entity_1 = require("../../../entity/wish.entity");
const wish_repository_1 = require("../repository/wish.repository");
let WishService = class WishService {
    constructor(wishRepository) {
        this.wishRepository = wishRepository;
    }
    getAllWishes() {
        return this.wishRepository.find();
    }
    getWishesForWinner() {
        return this.wishRepository.find({ where: { forWinner: true } });
    }
    getWishesForLosser() {
        return this.wishRepository.find({ where: { forWinner: false } });
    }
    async getWishById(id) {
        const wish = await this.wishRepository.findOne(id);
        if (!wish) {
            throw new common_1.NotFoundException("id is not found");
        }
        return wish;
    }
    createNewWish(createWishDto) {
        const { content, forWinner, link_img } = createWishDto;
        const wish = new wish_entity_1.Wish();
        if (content)
            wish.content = content;
        if (forWinner != null)
            wish.forWinner = forWinner;
        if (link_img)
            wish.link_img = link_img;
        return this.wishRepository.save(wish);
    }
    async deleteWishById(id) {
        return this.wishRepository.delete(id);
    }
    async updateWishById(id, updateWishDto) {
        const { content, forWinner, link_img } = updateWishDto;
        const wish = await this.wishRepository.findOne(id);
        if (!wish) {
            throw new common_1.NotFoundException("id is not found");
        }
        if (content)
            wish.content = content;
        if (forWinner != null)
            wish.forWinner = forWinner;
        if (link_img)
            wish.link_img = link_img;
        return this.wishRepository.save(wish);
    }
};
WishService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [wish_repository_1.WishRepository])
], WishService);
exports.WishService = WishService;
//# sourceMappingURL=wish.service.js.map