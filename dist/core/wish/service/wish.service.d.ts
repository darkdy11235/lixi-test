import { CreateWishDto } from 'src/api/v1/wish/dto/create-wish.dto';
import { UpdateWishDto } from 'src/api/v1/wish/dto/update-wish.dto';
import { Wish } from 'src/entity/wish.entity';
import { DeleteResult } from 'typeorm';
import { WishRepository } from '../repository/wish.repository';
export declare class WishService {
    private readonly wishRepository;
    constructor(wishRepository: WishRepository);
    getAllWishes(): Promise<Wish[]>;
    getWishesForWinner(): Promise<Wish[]>;
    getWishesForLosser(): Promise<Wish[]>;
    getWishById(id: number): Promise<Wish>;
    createNewWish(createWishDto: CreateWishDto): Promise<Wish>;
    deleteWishById(id: number): Promise<DeleteResult>;
    updateWishById(id: number, updateWishDto: UpdateWishDto): Promise<Wish>;
}
