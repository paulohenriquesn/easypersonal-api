import { Class } from '@entities/Class';
import { CreateAClassInput } from 'src/classes/dto/create-a-class.input';
import { Repository } from 'typeorm';

export async function createAClass(
  createClassDto: CreateAClassInput,
  classRepository: Repository<Class>,
): Promise<Class> {
  return;
}
