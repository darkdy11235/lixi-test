import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { User } from "src/entity/user.entity";
import { PayloadJwtDto } from "../dto/payload-jwt.dto";

export class JwtStrategy extends PassportStrategy(Strategy, "jwt") {

    constructor() {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: "asdfalsfjdlaskfdj",
        });
    }

    async validate(payload: PayloadJwtDto) {
        return payload;
    }
    
}