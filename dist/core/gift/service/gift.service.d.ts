import { ConfigAppService, MaxDrawEachPersonConfig } from 'src/core/config-app/service/config-app.service';
import { UserService } from 'src/core/user/service/user.service';
import { WishService } from 'src/core/wish/service/wish.service';
import { Gift } from 'src/entity/gift.entity';
import { UserGift } from 'src/entity/user-gift.entity';
import { User } from 'src/entity/user.entity';
import { GiftRepository } from '../repository/gift.repository';
import { UserGiftRepository } from '../repository/user-gift.repository';
export declare class GiftService {
    private readonly giftRepository;
    private readonly userGiftRepository;
    private readonly userService;
    private readonly wishService;
    private readonly configAppService;
    constructor(giftRepository: GiftRepository, userGiftRepository: UserGiftRepository, userService: UserService, wishService: WishService, configAppService: ConfigAppService);
    getAllGifts(userId: number): Promise<User & MaxDrawEachPersonConfig>;
    randomMyGift(userId: number): Promise<UserGift>;
    listAllWinner(): Promise<Gift[]>;
    private static shuffer;
    private static randomWishes;
}
