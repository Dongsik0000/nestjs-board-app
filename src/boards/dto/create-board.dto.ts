import { IsNotEmpty, IsString } from "class-validator";

export class CreateBoardDto {
    @IsNotEmpty() // null값 체크
    @IsString() // 문자열 체크
    author : string;

    @IsNotEmpty()
    @IsString()
    title: string;

    @IsNotEmpty()
    @IsString()
    contents: string;
}