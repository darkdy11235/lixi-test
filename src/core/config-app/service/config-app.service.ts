import { BadRequestException, Get, Injectable, InternalServerErrorException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ConfigAppEnum } from 'src/common/enum/config-app.enum';
import { ConfigApp } from 'src/entity/config.entity';
import { ConfigAppRepository } from '../repository/config-app.repository';

export class WinRateConfig {
    key: string;
    value: number;
}

export class MaxDrawEachPersonConfig {
    key: string;
    value: number;
}

@Injectable()
export class ConfigAppService {

    constructor(private readonly configAppRepository: ConfigAppRepository,
                private readonly configService: ConfigService) {

    }

    public async getWinRate(): Promise<WinRateConfig> {
        const winRate: ConfigApp =  await this.configAppRepository.findOne({my_key: ConfigAppEnum.WIN_RATE});
        let winRateConfig: WinRateConfig = new WinRateConfig();
        if (!winRate) {
            winRateConfig.key = ConfigAppEnum.WIN_RATE;
            winRateConfig.value = this.configService.get<number>(ConfigAppEnum.WIN_RATE) || 10;
        } else {
            winRateConfig.key = winRate.my_key;
            winRateConfig.value = Number(winRate.my_value);
        }
        return winRateConfig;
    }

    public async getMaxDrawEachPerson(): Promise<MaxDrawEachPersonConfig> {
        const maxDrawConfig: ConfigApp = await this.configAppRepository.findOne({my_key: ConfigAppEnum.MAX_DRAW_EACH_PERSON});
        let maxDrawEachPersonConfig: MaxDrawEachPersonConfig = new MaxDrawEachPersonConfig();
        if (!maxDrawConfig) {
            maxDrawEachPersonConfig.key = ConfigAppEnum.MAX_DRAW_EACH_PERSON;
            maxDrawEachPersonConfig.value = this.configService.get<number>(ConfigAppEnum.MAX_DRAW_EACH_PERSON) || 10;
        } else {
            maxDrawEachPersonConfig.key = maxDrawConfig.my_key;
            maxDrawEachPersonConfig.value = Number(maxDrawConfig.my_value);
        }

        return maxDrawEachPersonConfig;
    }

    public async setWinRate(winRate: number) {
        if (winRate >= 0) {
            let winRateConfig = await this.configAppRepository.findOne({my_key: ConfigAppEnum.WIN_RATE});
            if (winRateConfig) {
                winRateConfig.my_value = String(winRate);
                return this.configAppRepository.save(winRateConfig);
            } else {
                throw new InternalServerErrorException(`${ConfigAppEnum.WIN_RATE} config is not found in DB`);
            }
        } else {
            throw new BadRequestException(`${ConfigAppEnum.WIN_RATE} must be unsigned number type`);
        }
    }

    public async setMaxDrawEachPerson(maxDraw: number) {
        if (maxDraw >= 0) {
            let maxDrawConfig = await this.configAppRepository.findOne({my_key: ConfigAppEnum.MAX_DRAW_EACH_PERSON});
            if (maxDrawConfig) {
                maxDrawConfig.my_value = String(maxDraw);
                return this.configAppRepository.save(maxDrawConfig);
            } else {
                throw new InternalServerErrorException(`${ConfigAppEnum.MAX_DRAW_EACH_PERSON} config is not found in DB`);
            }
        } else {
            throw new BadRequestException(`${ConfigAppEnum.MAX_DRAW_EACH_PERSON} must be unsigned number type`);
        }
    }

}
