import {IsEmail, IsString, Length} from "class-validator";


export class CreateUserDto {
    @IsString({message: 'Must be a string'})
    @IsEmail({}, {message: 'Incorrect email entry'})
    readonly email: string

    @IsString({message: 'Must be a string'})
    @Length(4, 16, {message: 'not less than 4 and not more than 16 symbols'})
    readonly password: string
}