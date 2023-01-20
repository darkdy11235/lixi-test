import { ResponseTokenDto } from "src/core/auth/dto/ResponseToken.dto";
import { RequestLoginByAcessTokenFBDto } from "../dto/RequestLoginByAcessTokenFB.dto";
import { RequestLoginByEmailPasswordDto } from "../dto/RequestLoginByEmailPassword.dto";
import { AuthService } from "./../../../../core/auth/service/auth.service";
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    loginByAccessTokenFb(request: RequestLoginByAcessTokenFBDto): Promise<ResponseTokenDto>;
    loginByEmailPassword(request: RequestLoginByEmailPasswordDto): Promise<ResponseTokenDto>;
    testConnectionServer(): string;
}
