"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const ResponseToken_dto_1 = require("../../../../core/auth/dto/ResponseToken.dto");
const RequestLoginByAcessTokenFB_dto_1 = require("../dto/RequestLoginByAcessTokenFB.dto");
const RequestLoginByEmailPassword_dto_1 = require("../dto/RequestLoginByEmailPassword.dto");
const auth_service_1 = require("./../../../../core/auth/service/auth.service");
let AuthController = class AuthController {
    constructor(authService) {
        this.authService = authService;
    }
    loginByAccessTokenFb(request) {
        const { userID, accessToken } = request;
        return this.authService.loginByAccessTokenFb(accessToken, userID);
    }
    loginByEmailPassword(request) {
        const { email, password } = request;
        return this.authService.loginByEmailPassword(email, password);
    }
    testConnectionServer() {
        return "Test connection server";
    }
};
__decorate([
    common_1.Post("/login-fb"),
    openapi.ApiResponse({ status: 201, type: require("../../../../core/auth/dto/ResponseToken.dto").ResponseTokenDto }),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [RequestLoginByAcessTokenFB_dto_1.RequestLoginByAcessTokenFBDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "loginByAccessTokenFb", null);
__decorate([
    common_1.Post("/login-account"),
    openapi.ApiResponse({ status: 201, type: require("../../../../core/auth/dto/ResponseToken.dto").ResponseTokenDto }),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [RequestLoginByEmailPassword_dto_1.RequestLoginByEmailPasswordDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "loginByEmailPassword", null);
__decorate([
    common_1.Get("/test-connection-server"),
    openapi.ApiResponse({ status: 200, type: String }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "testConnectionServer", null);
AuthController = __decorate([
    common_1.Controller("/api/v1/auth"),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], AuthController);
exports.AuthController = AuthController;
//# sourceMappingURL=auth.controller.js.map