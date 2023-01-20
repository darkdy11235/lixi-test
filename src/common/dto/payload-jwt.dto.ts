import { RoleEnum } from "../enum/role.enum";

export class PayloadJwtDto {
    user: {
        id: number;
        name: string;
        email: string;
        createdAt: Date;
        role: RoleEnum
    }
}