import { IsEmail, IsNotEmpty, IsString, Length } from 'class-validator';

export class CreateCustomerDto {
  @IsNotEmpty({ message: 'name should not be empty' })
  @IsString()
  name: string;

  @IsEmail({}, { message: 'email must be an email' })
  email: string;

  @IsNotEmpty()
  @Length(11, 15, { message: 'phone must be longer than or equal to 11 characters' })
  phone: string;

  @IsNotEmpty()
  @Length(8, 100, { message: 'password must be longer than or equal to 8 characters' })
  password: string;
}
