import { Gift } from "./gift.entity";
import { User } from "./user.entity";
import { Wish } from "./wish.entity";
export declare class UserGift {
    id: number;
    user: User;
    wish: Wish;
    gift: Gift;
    createdAt: string;
}
