import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { UserGift } from "./user-gift.entity";

@Entity()
export class Wish {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    content: string;

    @Column()
    forWinner: boolean = false;

    @Column({nullable: true})
    link_img: string;

    @OneToMany(() => UserGift, userGift => userGift.wish)
    userGift: UserGift[];
}