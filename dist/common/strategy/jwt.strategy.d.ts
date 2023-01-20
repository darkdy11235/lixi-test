import { Strategy } from "passport-jwt";
import { PayloadJwtDto } from "../dto/payload-jwt.dto";
declare const JwtStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtStrategy extends JwtStrategy_base {
    constructor();
    validate(payload: PayloadJwtDto): Promise<PayloadJwtDto>;
}
export {};
