import { Body, Controller, Get, Post } from '@nestjs/common';
import { Auth } from 'src/common/decorator/auth.decorator';
import { RoleEnum } from 'src/common/enum/role.enum';
import { ConfigAppService } from 'src/core/config-app/service/config-app.service';

@Controller('/api/v1/config-app')
@Auth(RoleEnum.ADMIN)
export class ConfigAppController {

    constructor(private readonly configAppService: ConfigAppService) {}

    @Get("/win-rate")
    public getWinRate() {
        return this.configAppService.getWinRate();
    }

    @Get("/max-draw-each-person")
    @Auth(RoleEnum.USER)
    public getMaxDrawEachPerson() {
        return this.configAppService.getMaxDrawEachPerson();
    }

    @Post("/win-rate")
    public setWinRate(@Body("winRate") winRate: number) {
        console.log(winRate);
        return this.configAppService.setWinRate(winRate);
    }

    @Post("/max-draw-each-person")
    public setMaxDrawEachPerson(@Body("maxDraw") maxDraw: number) {
        return this.configAppService.setMaxDrawEachPerson(maxDraw);
    }
}
