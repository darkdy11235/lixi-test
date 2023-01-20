import { Check, Column, CreateDateColumn, Entity, JoinColumn, JoinTable, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Gift } from "./gift.entity";
import { User } from "./user.entity";
import { Wish } from "./wish.entity";

@Entity({name: "user_gift"})
@Check(`"gift" IN (10, 20)`)
export class UserGift {
    @PrimaryGeneratedColumn()
    id: number;
    
    @ManyToOne(() => User, user => user.userGifts, {primary: true})
    @JoinColumn([{name: 'user_id', referencedColumnName: 'id'}])
    user: User;

    @ManyToOne(() => Wish, wish => wish.userGift, {primary: true})
    @JoinColumn([{name: 'wish_id', referencedColumnName: 'id'}])
    wish: Wish;

    @ManyToOne(() => Gift, gift => gift.userGifts, {cascade: true})
    @JoinColumn({name: "gift_id", referencedColumnName: "id"})
    gift: Gift;

    @CreateDateColumn()
    createdAt: string = new Date().toISOString();
}