import { ApiProperty } from '@nestjs/swagger';

export class createModalityDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  color: string;
}
