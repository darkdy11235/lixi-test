import { IsBoolean, IsOptional, MinLength } from "class-validator";

export class CreateWishDto {

    @MinLength(5)
    content: string;

    @IsBoolean()
    forWinner: boolean;
    
    @IsOptional()
    @MinLength(5)
    link_img: string;
}