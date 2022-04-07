import { Class } from '@entities/Class';

export async function getAClass(request, classesRepository): Promise<Class> {
  const { classId, userId } = request;
  return await classesRepository.findOne({
    trainer_id: userId,
    id: classId,
  });
}
