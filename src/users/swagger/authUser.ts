import { ApiProperty } from '@nestjs/swagger';

export class authUserDto {
  @ApiProperty()
  full_name: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  birthday: string;

  @ApiProperty()
  google_token: string;
}
