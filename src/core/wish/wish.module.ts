import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WishController } from 'src/api/v1/wish/controller/wish.controller';
import { WishRepository } from './repository/wish.repository';
import { WishService } from './service/wish.service';

@Module({
    imports: [TypeOrmModule.forFeature([WishRepository])],
    controllers: [WishController],
    providers: [WishService],
    exports: [WishService]
})
export class WishModule {}
