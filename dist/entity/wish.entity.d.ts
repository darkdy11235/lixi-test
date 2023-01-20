import { UserGift } from "./user-gift.entity";
export declare class Wish {
    id: number;
    content: string;
    forWinner: boolean;
    link_img: string;
    userGift: UserGift[];
}
