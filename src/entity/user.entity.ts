import { RoleEnum } from "src/common/enum/role.enum";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { UserGift } from "./user-gift.entity";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({unique: true})
    email: string;

    @Column()
    password: string;

    @Column()
    createdAt: Date = new Date();

    @Column({default: RoleEnum.USER})
    role: RoleEnum = RoleEnum.USER;

    @OneToMany(() => UserGift, userGift => userGift.user)
    userGifts: UserGift[];

}