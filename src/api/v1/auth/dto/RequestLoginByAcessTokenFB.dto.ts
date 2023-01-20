import { MinLength } from "class-validator";

export class RequestLoginByAcessTokenFBDto {
    @MinLength(1)
    userID: string;

    @MinLength(1)
    accessToken: string;
}