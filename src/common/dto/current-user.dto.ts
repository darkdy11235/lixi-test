import { RoleEnum } from "../enum/role.enum";

export class CurrentUserDto {
    id: number;
    name: string;
    email: string;
    createdAt: Date;
    role: RoleEnum
}