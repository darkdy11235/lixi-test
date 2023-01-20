import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigAppController } from 'src/api/v1/config-app/config-app.controller';
import { ConfigAppRepository } from './repository/config-app.repository';
import { ConfigAppService } from './service/config-app.service';

@Module({
    imports: [TypeOrmModule.forFeature([ConfigAppRepository])],
    controllers: [ConfigAppController],
    providers: [ConfigAppService],
    exports: [ConfigAppService]
})
export class ConfigAppModule {}
