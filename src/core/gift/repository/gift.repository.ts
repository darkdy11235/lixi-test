import { Gift } from "src/entity/gift.entity";
import { EntityRepository, Repository } from "typeorm";

@EntityRepository(Gift)
export class GiftRepository extends Repository<Gift> {

    public getAllGiftWithUserEachGift() {
        return this.createQueryBuilder("gift")
                .leftJoinAndSelect("gift.userGifts", "userGift")
                .leftJoin("userGift.user", "user")
                .where("gift.value != :value", {value: 0})
                .addSelect(["user.id", "user.name", "user.email"])
                .getMany();
    }

}