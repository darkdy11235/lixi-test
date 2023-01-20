import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { UserGift } from "./user-gift.entity";

@Entity()
export class Gift {
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column({unique: true})
    value: number;

    @Column({name: "max_quantity"})
    maxQuantity: number;

    @OneToMany(() => UserGift, userGift => userGift.gift)
    userGifts: UserGift[];

    @Column()
    issued: number = 0;
}