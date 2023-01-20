import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './core/auth/auth.module';
import { FacebookStrategy } from './common/strategy/facebook.strategy';
import { WishModule } from './core/wish/wish.module';
import { ConfigModule } from '@nestjs/config';
import { GiftModule } from './core/gift/gift.module';
import { ConfigAppModule } from './core/config-app/config-app.module';

@Module({
  imports: [ConfigModule.forRoot({isGlobal: true}), 
    TypeOrmModule.forRoot(), AuthModule, WishModule, GiftModule, ConfigAppModule],
  controllers: [],
  providers: [FacebookStrategy],
})
export class AppModule {}
