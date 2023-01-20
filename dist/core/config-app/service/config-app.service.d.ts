import { ConfigService } from '@nestjs/config';
import { ConfigApp } from 'src/entity/config.entity';
import { ConfigAppRepository } from '../repository/config-app.repository';
export declare class WinRateConfig {
    key: string;
    value: number;
}
export declare class MaxDrawEachPersonConfig {
    key: string;
    value: number;
}
export declare class ConfigAppService {
    private readonly configAppRepository;
    private readonly configService;
    constructor(configAppRepository: ConfigAppRepository, configService: ConfigService);
    getWinRate(): Promise<WinRateConfig>;
    getMaxDrawEachPerson(): Promise<MaxDrawEachPersonConfig>;
    setWinRate(winRate: number): Promise<ConfigApp>;
    setMaxDrawEachPerson(maxDraw: number): Promise<ConfigApp>;
}
