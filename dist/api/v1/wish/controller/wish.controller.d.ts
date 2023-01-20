import { WishService } from 'src/core/wish/service/wish.service';
import { Wish } from 'src/entity/wish.entity';
import { DeleteResult } from 'typeorm';
import { CreateWishDto } from '../dto/create-wish.dto';
import { UpdateWishDto } from '../dto/update-wish.dto';
export declare class WishController {
    private readonly wishService;
    constructor(wishService: WishService);
    getAllWishes(): Promise<Wish[]>;
    getWishById(id: number): Promise<Wish>;
    createNewWish(createWishDto: CreateWishDto): Promise<Wish>;
    deleteWishById(id: number): Promise<DeleteResult>;
    updateWishById(id: number, updateWishDto: UpdateWishDto): Promise<Wish>;
}
