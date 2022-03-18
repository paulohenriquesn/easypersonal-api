import { Modality } from '@entities/Modality';
import logger from '@log/logger';

export async function editModalityOnStorage(
  userId,
  modalityId,
  body,
  modalityRepository,
) {
  try {
    logger.db(
      `Updating [${Object.keys(body).join(',')}] values on user ${modalityId}`,
    );
    const response = await modalityRepository
      .createQueryBuilder()
      .update(Modality)
      .set(body)
      .where('id = :id', { id: modalityId })
      .execute();
    if (response.affected > 0) {
      logger.success(
        `Updated modality ${modalityId} [${Object.keys(body).join(
          ',',
        )}] values`,
      );
      return true;
    }
    logger.error(`Modality ${modalityId} not found`);
    return false;
  } catch (err) {
    logger.error(err);
    return false;
  }
}
