import { HttpModule, Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from 'src/api/v1/auth/controller/auth.controller';
import { JwtStrategy } from 'src/common/strategy/jwt.strategy';
import { UserModule } from '../user/user.module';
import { AuthService } from './service/auth.service';

@Module({
    imports: [HttpModule, UserModule, JwtModule.registerAsync({
        imports: [ConfigModule],
        useFactory: async (configService: ConfigService) => ({
            secret:  configService.get<string>("JWT_SECRETKEY"),
            signOptions: {
                expiresIn: configService.get<string>("JWT_EXPIRES_IN")
            }
        }),
        inject: [ConfigService]
    })],
    controllers: [AuthController],
    providers: [AuthService, JwtStrategy]
})
export class AuthModule {}
