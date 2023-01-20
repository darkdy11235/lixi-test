import { CurrentUserDto } from 'src/common/dto/current-user.dto';
import { GiftService } from 'src/core/gift/service/gift.service';
export declare class GiftController {
    private readonly giftService;
    constructor(giftService: GiftService);
    getAllGifts(user: CurrentUserDto): Promise<import("../../../../entity/user.entity").User & import("../../../../core/config-app/service/config-app.service").MaxDrawEachPersonConfig>;
    randomMyGift(user: CurrentUserDto): Promise<import("../../../../entity/user-gift.entity").UserGift>;
    listAllWinner(): Promise<import("../../../../entity/gift.entity").Gift[]>;
}
