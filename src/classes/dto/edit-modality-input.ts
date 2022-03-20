import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

@InputType()
export class EditModalityInput {
  @Field((type?) => String, { nullable: true })
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  name?: string;

  @Field((type?) => String, { nullable: true })
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  color?: string;
}
