import { User } from 'src/entity/user.entity';
import { UserRepository } from '../repository/user.repository';
export declare class UserService {
    private readonly userRepository;
    constructor(userRepository: UserRepository);
    findById(id: number): Promise<User>;
    findByIdWithGift(userId: number): Promise<User>;
    findByEmail(email: string): Promise<User>;
    createNewUser(user: User): Promise<User>;
}
