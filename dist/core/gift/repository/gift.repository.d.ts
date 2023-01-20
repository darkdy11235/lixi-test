import { Gift } from "src/entity/gift.entity";
import { Repository } from "typeorm";
export declare class GiftRepository extends Repository<Gift> {
    getAllGiftWithUserEachGift(): Promise<Gift[]>;
}
