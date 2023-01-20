import { Injectable } from '@nestjs/common';
import { User } from 'src/entity/user.entity';
import { UserRepository } from '../repository/user.repository';
import * as bcrypt from 'bcrypt';
import { v4 as uuidv4 } from 'uuid';
@Injectable()
export class UserService {

    constructor(private readonly userRepository: UserRepository) {}

    public findById(id: number): Promise<User> {
        return this.userRepository.findOne(id);
    }

    public findByIdWithGift(userId: number): Promise<User> {
        return this.userRepository.findByIdWithGift(userId);
    }

    public findByEmail(email: string): Promise<User> {
        return this.userRepository.findOne({where: {email: email}});
    }

    public async createNewUser(user: User): Promise<User> {
        if (user.password == '' || user.password == null) {
            user.password = uuidv4();
        }
        const hash = await bcrypt.hash(user.password, 10);
        user.password = hash;
        return this.userRepository.save(user);
    }

}
