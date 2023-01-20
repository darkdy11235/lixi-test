import { BadRequestException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { ConfigAppService, MaxDrawEachPersonConfig, WinRateConfig } from 'src/core/config-app/service/config-app.service';
import { UserService } from 'src/core/user/service/user.service';
import { WishService } from 'src/core/wish/service/wish.service';
import { Gift } from 'src/entity/gift.entity';
import { UserGift } from 'src/entity/user-gift.entity';
import { User } from 'src/entity/user.entity';
import { Wish } from 'src/entity/wish.entity';
import { GiftRepository } from '../repository/gift.repository';
import { UserGiftRepository } from '../repository/user-gift.repository';

@Injectable()
export class GiftService {

    constructor(private readonly giftRepository: GiftRepository,
                private readonly userGiftRepository: UserGiftRepository,
                private readonly userService: UserService,
                private readonly wishService: WishService,
                private readonly configAppService: ConfigAppService) {}

    public async getAllGifts(userId: number): Promise<User & MaxDrawEachPersonConfig> {
        let user = await this.userService.findByIdWithGift(userId);
        if (user)
            delete user.password;
        let maxDraw = await this.configAppService.getMaxDrawEachPerson()
        return {...user, ...maxDraw};
    }

    public async randomMyGift(userId: number): Promise<UserGift> {
        // !TODO: use DB config to get this number
        const maxDrawConfig: MaxDrawEachPersonConfig = await this.configAppService.getMaxDrawEachPerson();
        const maxNumberOfRandomGiftPerUser =  maxDrawConfig?.value || 10;
        console.log("maxNumberOfRandomGiftPerUser " + maxNumberOfRandomGiftPerUser);
        const user: User = await this.userService.findByIdWithGift(userId);
        if (!user) {
            throw new BadRequestException("UserID is not exist");
        }

        // console.log(user);
        // console.log(user.userGifts);

        // check userId' number of random is not exceed maxNumberOfRandomGiftPerUser
        const numberRandomGiftOfUser = user.userGifts.length;

        if (numberRandomGiftOfUser >= maxNumberOfRandomGiftPerUser) {
            // throw error with msg "You have reached the maximum of random";
            throw new BadRequestException("You have reached the maximum of random");
        } else {

            /* // random wish(unique)
            const allWishes: Wish[] = await this.wishService.getAllWishes();
            if (allWishes.length == 0) {
                throw new InternalServerErrorException("Hey Admin! Please insert you wishes in database 😑.");
            }
            const userWishes: Wish[] = [];
            // const userWishes: Wish[] = user.userGifts?.map(value => value?.wish);
            user.userGifts?.forEach(userGift => {
                if (userGift?.wish?.id) {
                    userWishes.push(userGift.wish);
                }
            })
            console.log(user);
            const randomedWish: Wish = GiftService.randomWishes(allWishes, userWishes); */

            // random gift
            const giftData: Gift[] = await this.giftRepository.find();
            console.log(giftData);

            // TODO: use RATE env variable
            // rate successful each drawing of person
            const winRateConfig: WinRateConfig = await this.configAppService.getWinRate();
            const rate: number = winRateConfig?.value || 10;
            console.log("rate " + rate);
            const giftList: Map<number, number> = new Map();
            giftData.forEach(gift => {
                if (gift.value != 0) {
                    let quantity = gift.maxQuantity - gift.issued;
                    giftList.set(gift.value, quantity > 0 ? quantity : 0);
                }
            })

            // giftDict.set(price, current max quantity);
            // giftList.set(20, 1);
            // giftList.set(10, 3);
            // giftList.set(5, 6);
            // giftList.set(2, 10);

            let totalCurrentQuantity = 0;
            const tmpArr: number[] = Array.from(giftList.values());
            tmpArr.forEach(quantity => totalCurrentQuantity += quantity);

            let winOrLoseCards: boolean[] = [];
            const totalNumberofWinOrLoseCards = Math.floor(totalCurrentQuantity * 100 / rate);
            for (let quantity of giftList.values()) {
                // let tmpQuantity = Math.floor(quantity * 100 / rate);
                winOrLoseCards.push(...Array(quantity).fill(true));
            }
            for (let i = winOrLoseCards.length; i < totalNumberofWinOrLoseCards; i++) {
                winOrLoseCards.push(false);
            }

            GiftService.shuffer(winOrLoseCards);
            const luckyNumber = Math.floor(winOrLoseCards.length * Math.random());
            const isWin = winOrLoseCards[luckyNumber];
            console.log("isWin: " + isWin);

            let prize: number = 0;
            if (isWin) {
                let prizeCards: number[] = [];
                const constNum = 3;
                for (let [price, quantity] of giftList.entries()) {
                    const tmpArr: number[] = Array.from(Array(constNum * quantity)
                                                        .fill(price))
                    prizeCards.push(...tmpArr);
                }

                GiftService.shuffer(prizeCards);
                const luckyNumber = Math.floor(prizeCards.length * Math.random());
                prize = prizeCards[luckyNumber];
                console.log(luckyNumber + " --> " + prize);
            }

            let randomedWish: Wish = null;
            if (isWin) {
                // random wish(unique)
                const allWishes: Wish[] = await this.wishService.getWishesForWinner();
                if (allWishes.length == 0) {
                    throw new InternalServerErrorException("Hey Admin! Please insert you wishes in database 😑.");
                }
                const userWishes: Wish[] = [];
                // const userWishes: Wish[] = user.userGifts?.map(value => value?.wish);
                user.userGifts?.forEach(userGift => {
                    if (userGift?.wish?.id) {
                        userWishes.push(userGift.wish);
                    }
                })
                console.log(user);
                randomedWish = GiftService.randomWishes(allWishes, userWishes);
            } else {
                // random wish(unique)
                const allWishes: Wish[] = await this.wishService.getWishesForLosser();
                if (allWishes.length == 0) {
                    throw new InternalServerErrorException("Hey Admin! Please insert you wishes in database 😑.");
                }
                const userWishes: Wish[] = [];
                // const userWishes: Wish[] = user.userGifts?.map(value => value?.wish);
                user.userGifts?.forEach(userGift => {
                    if (userGift?.wish?.id) {
                        userWishes.push(userGift.wish);
                    }
                })
                console.log(user);
                randomedWish = GiftService.randomWishes(allWishes, userWishes);
            }

            // save db
            let prizeGift: Gift = giftData.find(gift => gift.value == prize);
            const noGift: Gift = giftData.find(gift => gift.value == 0);
            prizeGift.issued = prizeGift.issued + 1;
            if (prizeGift.issued > prizeGift.value) {
                prizeGift = noGift;
            }
            const userGift: UserGift = new UserGift();
            userGift.wish = randomedWish;
            userGift.user = user;
            userGift.gift = prizeGift;
            await this.userGiftRepository.save(userGift);
            
            return userGift;
        }
    }

    public listAllWinner() {
        return this.giftRepository.getAllGiftWithUserEachGift();
    }

    private static shuffer(arr: any[]): void {
        let n = arr.length;
        while (n) {
            let i = Math.floor(Math.random() * n);
            n--;
            
            let tmp = arr[n];
            arr[n] = arr[i];
            arr[i] = tmp;
        }
    }

    private static randomWishes(source: Wish[], input: Wish[]): Wish {
        let map: Map<number, number> = new Map<number, number>();
        console.log(input);
        input.forEach(wish => map.set(wish.id, 0));

        this.shuffer(source);

        let result: Wish = null;
        for (let i = 0; i < source.length; i++) {
            if (!map.has(source[i].id)) {
                result = source[i];
                break;
            }
        }

        // FIX in case: result = null when input.length < source.length
        if (result == null) {
            /* if (source.length > 0)
                result = source[Math.floor(source.length * Math.random())];
            else {
                // Default wish if there is no wish in database
                result = new Wish();
                result.content = "Có làm thì mới có ăn, không làm mà đòi ăn thì chỉ có 16 hốt từ trái sang phải. Tặng bạn!";
                result.id = 0;
            } */
            result = source[Math.floor(source.length * Math.random())];
        }

        return result;
    }

}
