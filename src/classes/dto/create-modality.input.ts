import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class CreateModalityInput {
  @Field((type) => String)
  @IsString()
  @IsNotEmpty({ message: 'Este campo não pode estar vazio' })
  name: string;

  @Field((type) => String)
  @IsString()
  @IsNotEmpty({ message: 'Este campo não pode estar vazio' })
  trainer_id: string;

  @Field((type) => String)
  @IsString()
  @IsNotEmpty({ message: 'Este campo não pode estar vazio' })
  color: string;
}
