import { Field, InputType } from '@nestjs/graphql';
import { IsDate, IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class CreateAClassInput {
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
  modality_id: string;

  @Field((type) => Date!, { nullable: false })
  @IsDate()
  @IsNotEmpty({ message: 'Este campo não pode estar vazio' })
  start_date: Date;

  @Field((type) => Date!, { nullable: false })
  @IsDate()
  @IsNotEmpty({ message: 'Este campo não pode estar vazio' })
  end_date: Date;
}
