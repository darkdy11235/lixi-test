import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { Auth } from 'src/common/decorator/auth.decorator';
import { RoleEnum } from 'src/common/enum/role.enum';
import { WishService } from 'src/core/wish/service/wish.service';
import { Wish } from 'src/entity/wish.entity';
import { DeleteResult } from 'typeorm';
import { CreateWishDto } from '../dto/create-wish.dto';
import { UpdateWishDto } from '../dto/update-wish.dto';

@Controller('/api/v1/wishes')
@Auth(RoleEnum.ADMIN)
export class WishController {

    constructor(private readonly wishService: WishService) {}

    @Get()
    public getAllWishes(): Promise<Wish[]> {
        return this.wishService.getAllWishes();
    }

    @Get(":id")
    public getWishById(@Param("id") id: number): Promise<Wish> {
        return this.wishService.getWishById(id);
    }

    @Post()
    public createNewWish(@Body() createWishDto: CreateWishDto): Promise<Wish> {
        return this.wishService.createNewWish(createWishDto);
    }

    @Delete(":id")
    public deleteWishById(@Param("id") id: number): Promise<DeleteResult> {
        return this.wishService.deleteWishById(id);
    }

    @Patch(":id")
    public updateWishById(@Param("id") id: number, @Body() updateWishDto: UpdateWishDto): Promise<Wish> {
        return this.wishService.updateWishById(id, updateWishDto);
    }

}
