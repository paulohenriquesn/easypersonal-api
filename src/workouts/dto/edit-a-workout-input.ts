import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

@InputType()
export class EditAWorkoutInput {
  @Field((type?) => String, { nullable: true })
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  name?: string;

  @Field((type?) => String, { nullable: true })
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  muscular_group_id?: string;

  @Field((type?) => String, { nullable: true })
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  workout_time_id?: string;
}
