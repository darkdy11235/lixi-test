import { IsBoolean, MinLength, IsOptional } from "class-validator";

export class UpdateWishDto {

    @MinLength(5)
    @IsOptional()
    content: string;

    @IsBoolean()
    @IsOptional()
    forWinner: boolean;
    
    @IsOptional()
    @MinLength(5)
    link_img: string;
    
}