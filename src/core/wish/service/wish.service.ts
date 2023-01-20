import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateWishDto } from 'src/api/v1/wish/dto/create-wish.dto';
import { UpdateWishDto } from 'src/api/v1/wish/dto/update-wish.dto';
import { Wish } from 'src/entity/wish.entity';
import { DeleteResult } from 'typeorm';
import { WishRepository } from '../repository/wish.repository';

@Injectable()
export class WishService {

    constructor(private readonly wishRepository: WishRepository) {}

    public getAllWishes(): Promise<Wish[]> {
        return this.wishRepository.find();
    }

    public getWishesForWinner(): Promise<Wish[]> {
        return this.wishRepository.find({where: {forWinner: true}});
    }

    public getWishesForLosser(): Promise<Wish[]> {
        return this.wishRepository.find({where: {forWinner: false}});
    }

    public async getWishById(id: number): Promise<Wish> {
        const wish: Wish = await this.wishRepository.findOne(id);
        if (!wish) {
            throw new NotFoundException("id is not found")
        }
        return wish;
    }

    public createNewWish(createWishDto: CreateWishDto): Promise<Wish> {
        const {content, forWinner, link_img} = createWishDto;
        const wish: Wish = new Wish();
        
        if (content)
            wish.content = content;
        
        if (forWinner != null) 
            wish.forWinner = forWinner;
        
        if (link_img)
            wish.link_img = link_img;

        return this.wishRepository.save(wish);
    }

    public async deleteWishById(id: number): Promise<DeleteResult> {
        return this.wishRepository.delete(id);
    }

    public async updateWishById(id: number, updateWishDto: UpdateWishDto): Promise<Wish> {
        const {content, forWinner, link_img} = updateWishDto;
        const wish: Wish = await this.wishRepository.findOne(id);

        if (!wish) {
            throw new NotFoundException("id is not found")
        }

        if (content)
            wish.content = content;
        
        if (forWinner != null) 
            wish.forWinner = forWinner;
        
        if (link_img)
            wish.link_img = link_img;
        
        return this.wishRepository.save(wish);
    }

}
