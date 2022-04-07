import { Class } from '@entities/Class';

export async function getAllClasses(
  request,
  classesRepository,
): Promise<Class[]> {
  const { userId } = request;
  return await classesRepository
    .createQueryBuilder('classes')
    .where('classes.trainer_id= :trainer_id', { trainer_id: userId })
    .orderBy('created_at', 'DESC')
    .getMany();
}
