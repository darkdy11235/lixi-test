import { UserGift } from "./user-gift.entity";
export declare class Gift {
    id: number;
    value: number;
    maxQuantity: number;
    userGifts: UserGift[];
    issued: number;
}
