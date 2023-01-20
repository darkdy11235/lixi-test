import { User } from "src/entity/user.entity";
import { Repository } from "typeorm";
export declare class UserRepository extends Repository<User> {
    findByIdWithGift(userId: number): Promise<User>;
}
