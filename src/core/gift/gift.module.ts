import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GiftController } from 'src/api/v1/gift/controller/gift.controller';
import { ConfigAppModule } from '../config-app/config-app.module';
import { UserModule } from '../user/user.module';
import { WishModule } from '../wish/wish.module';
import { GiftRepository } from './repository/gift.repository';
import { UserGiftRepository } from './repository/user-gift.repository';
import { GiftService } from './service/gift.service';

@Module({
  imports: [TypeOrmModule.forFeature([GiftRepository, UserGiftRepository]),
            UserModule, WishModule, ConfigAppModule],
  controllers: [GiftController],
  providers: [GiftService]
})
export class GiftModule {}
