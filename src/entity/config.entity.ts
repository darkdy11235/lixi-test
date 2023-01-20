import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: "config_app"})
export class ConfigApp {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    my_key: string;

    @Column()
    my_value: string;

    @Column()
    data_type: string;

}