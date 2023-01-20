import { UserGift } from "src/entity/user-gift.entity";
import { EntityRepository, Repository } from "typeorm";

@EntityRepository(UserGift)
export class UserGiftRepository extends Repository<UserGift> {

}