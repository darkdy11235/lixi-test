import { ConfigAppService } from 'src/core/config-app/service/config-app.service';
export declare class ConfigAppController {
    private readonly configAppService;
    constructor(configAppService: ConfigAppService);
    getWinRate(): Promise<import("../../../core/config-app/service/config-app.service").WinRateConfig>;
    getMaxDrawEachPerson(): Promise<import("../../../core/config-app/service/config-app.service").MaxDrawEachPersonConfig>;
    setWinRate(winRate: number): Promise<import("../../../entity/config.entity").ConfigApp>;
    setMaxDrawEachPerson(maxDraw: number): Promise<import("../../../entity/config.entity").ConfigApp>;
}
