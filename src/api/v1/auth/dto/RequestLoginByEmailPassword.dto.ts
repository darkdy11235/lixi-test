import { IsEmail, MinLength } from "class-validator";

export class RequestLoginByEmailPasswordDto {
    @IsEmail()
    email;

    @MinLength(8)
    password;
}