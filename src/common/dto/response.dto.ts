import { HttpStatus } from "@nestjs/common";

export class ResponseDto {
    status: number = HttpStatus.ACCEPTED;
    data: Object;
    message: string = "No message";
}