import { RoleEnum } from "../enum/role.enum";
export declare class PayloadJwtDto {
    user: {
        id: number;
        name: string;
        email: string;
        createdAt: Date;
        role: RoleEnum;
    };
}
