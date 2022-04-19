import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class CreateAWorkoutTimeInput {
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
  repeat_type: string;

  @Field((type) => Number)
  @IsString()
  @IsNotEmpty({ message: 'Este campo não pode estar vazio' })
  repeat_value: number;

  @Field((type) => Number)
  @IsString()
  @IsNotEmpty({ message: 'Este campo não pode estar vazio' })
  weight: number;
}
