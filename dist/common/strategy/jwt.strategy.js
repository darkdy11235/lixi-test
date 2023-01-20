"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JwtStrategy = void 0;
const passport_1 = require("@nestjs/passport");
const passport_jwt_1 = require("passport-jwt");
const user_entity_1 = require("../../entity/user.entity");
class JwtStrategy extends passport_1.PassportStrategy(passport_jwt_1.Strategy, "jwt") {
    constructor() {
        super({
            jwtFromRequest: passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: "asdfalsfjdlaskfdj",
        });
    }
    async validate(payload) {
        return payload;
    }
}
exports.JwtStrategy = JwtStrategy;
//# sourceMappingURL=jwt.strategy.js.map