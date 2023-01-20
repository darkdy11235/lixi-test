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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var AuthService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const operators_1 = require("rxjs/operators");
const user_service_1 = require("../../user/service/user.service");
const user_entity_1 = require("../../../entity/user.entity");
const ResponseToken_dto_1 = require("../dto/ResponseToken.dto");
const uuid_1 = require("uuid");
const bcrypt_util_1 = require("../../../common/util/bcrypt.util");
let AuthService = AuthService_1 = class AuthService {
    constructor(httpService, userSerivce, jwtService) {
        this.httpService = httpService;
        this.userSerivce = userSerivce;
        this.jwtService = jwtService;
        this.logger = new common_1.Logger(AuthService_1.name);
    }
    async loginByAccessTokenFb(accessToken, userID) {
        try {
            const urlGraphApi = `https://graph.facebook.com/v9.0/${userID}?fields=id,name,email,first_name,last_name&access_token=${accessToken}`;
            const response = await this.httpService
                .get(urlGraphApi)
                .pipe(operators_1.map(response => response.data))
                .toPromise();
            this.logger.log(response);
            const { id, name, email } = response;
            if (!email) {
                throw new common_1.BadRequestException("Access token's permissions haven't email permission");
            }
            const user = await this.userSerivce.findByEmail(email);
            let token = '';
            if (user != null) {
                const { password } = user, data = __rest(user, ["password"]);
                token = this.jwtService.sign({ payload: { user: data } });
            }
            else {
                const newUser = new user_entity_1.User();
                newUser.email = email;
                newUser.name = name;
                newUser.password = uuid_1.v4();
                newUser.createdAt = new Date();
                const insertedUser = await this.userSerivce.createNewUser(newUser);
                const { password } = insertedUser, data = __rest(insertedUser, ["password"]);
                token = this.jwtService.sign({ payload: { user: data } });
            }
            const responseTokenDto = new ResponseToken_dto_1.ResponseTokenDto();
            responseTokenDto.data = { token };
            return responseTokenDto;
        }
        catch (e) {
            console.log(e);
            this.logger.error(e);
            if (e.response.status == 400) {
                throw new common_1.BadRequestException(e.message);
            }
            throw new common_1.InternalServerErrorException(e.message);
        }
    }
    async loginByEmailPassword(email, pwd) {
        const user = await this.userSerivce.findByEmail(email);
        if (user == null) {
            throw new common_1.NotFoundException("Email hasn't been found");
        }
        const isEqual = await bcrypt_util_1.BCryptUtils.compare(pwd, user.password);
        if (!isEqual) {
            throw new common_1.NotFoundException("Email/Password wrong");
        }
        const { password } = user, data = __rest(user, ["password"]);
        const token = this.jwtService.sign({ payload: { user: data } });
        const responseTokenDto = new ResponseToken_dto_1.ResponseTokenDto();
        responseTokenDto.data = { token };
        return responseTokenDto;
    }
};
AuthService = AuthService_1 = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [common_1.HttpService,
        user_service_1.UserService,
        jwt_1.JwtService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map