import { Field, InputType } from '@nestjs/graphql';
import { IsDate, IsNotEmpty, IsOptional, IsString } from 'class-validator';

@InputType()
export class EditClassInput {
  @Field((type?) => String, { nullable: true })
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  name?: string;

  @Field((type?) => String, { nullable: true })
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  modality_id?: string;

  @Field((type?) => Date, { nullable: true })
  @IsDate()
  @IsNotEmpty()
  @IsOptional()
  start_date?: Date;

  @Field((type?) => Date, { nullable: true })
  @IsDate()
  @IsNotEmpty()
  @IsOptional()
  end_date?: Date;
}
