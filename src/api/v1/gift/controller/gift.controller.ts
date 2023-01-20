import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { Auth } from 'src/common/decorator/auth.decorator';
import { CurrentUser } from 'src/common/decorator/current-user.decorator';
import { CurrentUserDto } from 'src/common/dto/current-user.dto';
import { PayloadJwtDto } from 'src/common/dto/payload-jwt.dto';
import { RoleEnum } from 'src/common/enum/role.enum';
import { GiftService } from 'src/core/gift/service/gift.service';

@Controller('/api/v1/gifts')
export class GiftController {

    constructor(private readonly giftService: GiftService) {}

    @Get()
    @Auth(RoleEnum.USER)
    public getAllGifts(@CurrentUser() user: CurrentUserDto) {
        return this.giftService.getAllGifts(user?.id);
    }

    @Post("/random-my-gift")
    @Auth(RoleEnum.USER)
    public randomMyGift(@CurrentUser() user: CurrentUserDto) {
        console.log(user);
        return this.giftService.randomMyGift(user.id);
    }

    @Get("/winner")
    public listAllWinner() {
        return this.giftService.listAllWinner();
    }

}
