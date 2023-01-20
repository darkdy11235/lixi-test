import { HttpService } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/core/user/service/user.service';
import { ResponseTokenDto } from '../dto/ResponseToken.dto';
export declare class AuthService {
    private readonly httpService;
    private readonly userSerivce;
    private readonly jwtService;
    private readonly logger;
    constructor(httpService: HttpService, userSerivce: UserService, jwtService: JwtService);
    loginByAccessTokenFb(accessToken: string, userID: string): Promise<ResponseTokenDto>;
    loginByEmailPassword(email: string, pwd: string): Promise<ResponseTokenDto>;
}
