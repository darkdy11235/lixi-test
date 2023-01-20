import { Body, Controller, Get, Post } from "@nestjs/common";
import { ResponseTokenDto } from "src/core/auth/dto/ResponseToken.dto";
import { RequestLoginByAcessTokenFBDto } from "../dto/RequestLoginByAcessTokenFB.dto";
import { RequestLoginByEmailPasswordDto } from "../dto/RequestLoginByEmailPassword.dto";
import {AuthService} from "./../../../../core/auth/service/auth.service";

@Controller("/api/v1/auth")
export class AuthController {

    constructor(private readonly authService: AuthService) {}
    
    @Post("/login-fb")
    public loginByAccessTokenFb (@Body() request : RequestLoginByAcessTokenFBDto): Promise<ResponseTokenDto> {
        const {userID, accessToken} = request;
        return this.authService.loginByAccessTokenFb(accessToken, userID);
    }

    @Post("/login-account")
    public loginByEmailPassword(@Body() request: RequestLoginByEmailPasswordDto): Promise<ResponseTokenDto> {
        const {email, password} = request;
        return this.authService.loginByEmailPassword(email, password);
    }

    @Get("/test-connection-server")
    public testConnectionServer() {
        return "Test connection server";
    }
    
}