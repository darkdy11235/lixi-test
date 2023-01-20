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
var GiftService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.GiftService = void 0;
const common_1 = require("@nestjs/common");
const config_app_service_1 = require("../../config-app/service/config-app.service");
const user_service_1 = require("../../user/service/user.service");
const wish_service_1 = require("../../wish/service/wish.service");
const gift_entity_1 = require("../../../entity/gift.entity");
const user_gift_entity_1 = require("../../../entity/user-gift.entity");
const user_entity_1 = require("../../../entity/user.entity");
const wish_entity_1 = require("../../../entity/wish.entity");
const gift_repository_1 = require("../repository/gift.repository");
const user_gift_repository_1 = require("../repository/user-gift.repository");
let GiftService = GiftService_1 = class GiftService {
    constructor(giftRepository, userGiftRepository, userService, wishService, configAppService) {
        this.giftRepository = giftRepository;
        this.userGiftRepository = userGiftRepository;
        this.userService = userService;
        this.wishService = wishService;
        this.configAppService = configAppService;
    }
    async getAllGifts(userId) {
        let user = await this.userService.findByIdWithGift(userId);
        if (user)
            delete user.password;
        let maxDraw = await this.configAppService.getMaxDrawEachPerson();
        return Object.assign(Object.assign({}, user), maxDraw);
    }
    async randomMyGift(userId) {
        var _a, _b;
        const maxDrawConfig = await this.configAppService.getMaxDrawEachPerson();
        const maxNumberOfRandomGiftPerUser = (maxDrawConfig === null || maxDrawConfig === void 0 ? void 0 : maxDrawConfig.value) || 10;
        console.log("maxNumberOfRandomGiftPerUser " + maxNumberOfRandomGiftPerUser);
        const user = await this.userService.findByIdWithGift(userId);
        if (!user) {
            throw new common_1.BadRequestException("UserID is not exist");
        }
        const numberRandomGiftOfUser = user.userGifts.length;
        if (numberRandomGiftOfUser >= maxNumberOfRandomGiftPerUser) {
            throw new common_1.BadRequestException("You have reached the maximum of random");
        }
        else {
            const giftData = await this.giftRepository.find();
            console.log(giftData);
            const winRateConfig = await this.configAppService.getWinRate();
            const rate = (winRateConfig === null || winRateConfig === void 0 ? void 0 : winRateConfig.value) || 10;
            console.log("rate " + rate);
            const giftList = new Map();
            giftData.forEach(gift => {
                if (gift.value != 0) {
                    let quantity = gift.maxQuantity - gift.issued;
                    giftList.set(gift.value, quantity > 0 ? quantity : 0);
                }
            });
            let totalCurrentQuantity = 0;
            const tmpArr = Array.from(giftList.values());
            tmpArr.forEach(quantity => totalCurrentQuantity += quantity);
            let winOrLoseCards = [];
            const totalNumberofWinOrLoseCards = Math.floor(totalCurrentQuantity * 100 / rate);
            for (let quantity of giftList.values()) {
                winOrLoseCards.push(...Array(quantity).fill(true));
            }
            for (let i = winOrLoseCards.length; i < totalNumberofWinOrLoseCards; i++) {
                winOrLoseCards.push(false);
            }
            GiftService_1.shuffer(winOrLoseCards);
            const luckyNumber = Math.floor(winOrLoseCards.length * Math.random());
            const isWin = winOrLoseCards[luckyNumber];
            console.log("isWin: " + isWin);
            let prize = 0;
            if (isWin) {
                let prizeCards = [];
                const constNum = 3;
                for (let [price, quantity] of giftList.entries()) {
                    const tmpArr = Array.from(Array(constNum * quantity)
                        .fill(price));
                    prizeCards.push(...tmpArr);
                }
                GiftService_1.shuffer(prizeCards);
                const luckyNumber = Math.floor(prizeCards.length * Math.random());
                prize = prizeCards[luckyNumber];
                console.log(luckyNumber + " --> " + prize);
            }
            let randomedWish = null;
            if (isWin) {
                const allWishes = await this.wishService.getWishesForWinner();
                if (allWishes.length == 0) {
                    throw new common_1.InternalServerErrorException("Hey Admin! Please insert you wishes in database 😑.");
                }
                const userWishes = [];
                (_a = user.userGifts) === null || _a === void 0 ? void 0 : _a.forEach(userGift => {
                    var _a;
                    if ((_a = userGift === null || userGift === void 0 ? void 0 : userGift.wish) === null || _a === void 0 ? void 0 : _a.id) {
                        userWishes.push(userGift.wish);
                    }
                });
                console.log(user);
                randomedWish = GiftService_1.randomWishes(allWishes, userWishes);
            }
            else {
                const allWishes = await this.wishService.getWishesForLosser();
                if (allWishes.length == 0) {
                    throw new common_1.InternalServerErrorException("Hey Admin! Please insert you wishes in database 😑.");
                }
                const userWishes = [];
                (_b = user.userGifts) === null || _b === void 0 ? void 0 : _b.forEach(userGift => {
                    var _a;
                    if ((_a = userGift === null || userGift === void 0 ? void 0 : userGift.wish) === null || _a === void 0 ? void 0 : _a.id) {
                        userWishes.push(userGift.wish);
                    }
                });
                console.log(user);
                randomedWish = GiftService_1.randomWishes(allWishes, userWishes);
            }
            let prizeGift = giftData.find(gift => gift.value == prize);
            const noGift = giftData.find(gift => gift.value == 0);
            prizeGift.issued = prizeGift.issued + 1;
            if (prizeGift.issued > prizeGift.value) {
                prizeGift = noGift;
            }
            const userGift = new user_gift_entity_1.UserGift();
            userGift.wish = randomedWish;
            userGift.user = user;
            userGift.gift = prizeGift;
            await this.userGiftRepository.save(userGift);
            return userGift;
        }
    }
    listAllWinner() {
        return this.giftRepository.getAllGiftWithUserEachGift();
    }
    static shuffer(arr) {
        let n = arr.length;
        while (n) {
            let i = Math.floor(Math.random() * n);
            n--;
            let tmp = arr[n];
            arr[n] = arr[i];
            arr[i] = tmp;
        }
    }
    static randomWishes(source, input) {
        let map = new Map();
        console.log(input);
        input.forEach(wish => map.set(wish.id, 0));
        this.shuffer(source);
        let result = null;
        for (let i = 0; i < source.length; i++) {
            if (!map.has(source[i].id)) {
                result = source[i];
                break;
            }
        }
        if (result == null) {
            result = source[Math.floor(source.length * Math.random())];
        }
        return result;
    }
};
GiftService = GiftService_1 = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [gift_repository_1.GiftRepository,
        user_gift_repository_1.UserGiftRepository,
        user_service_1.UserService,
        wish_service_1.WishService,
        config_app_service_1.ConfigAppService])
], GiftService);
exports.GiftService = GiftService;
//# sourceMappingURL=gift.service.js.map