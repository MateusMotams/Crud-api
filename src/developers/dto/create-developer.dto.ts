import { IsDateString, IsEmail, IsString } from "class-validator";

export class CreateDeveloperDto {
    //Faz a validação dos dados usando a class-validator 
    @IsString() 
    name: string;
    @IsEmail()
    email: string;
    @IsDateString()
    dateOfBirth: Date;
}
