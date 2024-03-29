import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class CreateAWorkoutInput {
  @Field((type) => String)
  @IsString()
  @IsNotEmpty({ message: 'Este campo não pode estar vazio' })
  name: string;

  @Field((type) => String)
  @IsString()
  @IsNotEmpty({ message: 'Este campo não pode estar vazio' })
  user_id: string;

  @Field((type) => String)
  @IsString()
  @IsNotEmpty({ message: 'Este campo não pode estar vazio' })
  muscular_group_id: string;

  @Field((type) => String)
  @IsString()
  @IsNotEmpty({ message: 'Este campo não pode estar vazio' })
  workout_time_id: string;
}
