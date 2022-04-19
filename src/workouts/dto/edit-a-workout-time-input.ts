import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

@InputType()
export class EditAWorkoutTimeInput {
  @Field((type?) => String, { nullable: true })
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  name?: string;

  @Field((type?) => String, { nullable: true })
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  repeat_type?: string;

  @Field((type?) => Number, { nullable: true })
  @IsNumber()
  @IsNotEmpty()
  @IsOptional()
  repeat_value?: number;

  @Field((type?) => Number, { nullable: true })
  @IsNumber()
  @IsNotEmpty()
  @IsOptional()
  weight?: number;
}
