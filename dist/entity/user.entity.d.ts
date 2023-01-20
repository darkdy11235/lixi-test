import { RoleEnum } from "src/common/enum/role.enum";
import { UserGift } from "./user-gift.entity";
export declare class User {
    id: number;
    name: string;
    email: string;
    password: string;
    createdAt: Date;
    role: RoleEnum;
    userGifts: UserGift[];
}
