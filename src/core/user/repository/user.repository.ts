import { User } from "src/entity/user.entity";
import { EntityRepository, Repository } from "typeorm";

@EntityRepository(User)
export class UserRepository extends Repository<User> {

    public findByIdWithGift(userId: number): Promise<User> {
        return this.createQueryBuilder("user")
                    .leftJoinAndSelect("user.userGifts", "userGift")
                    .leftJoinAndSelect("userGift.gift", "gift")
                    .leftJoinAndSelect("userGift.wish", "wish")
                    .where("user.id = :id", {id: userId})
                    .getOne();
    }

}