import { Wish } from "src/entity/wish.entity";
import { EntityRepository, Repository } from "typeorm";

@EntityRepository(Wish)
export class WishRepository extends Repository<Wish> {

}