import logger from '@log/logger';

export async function deleteModalityOnStorage(
  userId,
  modalityId,
  modalityRepository,
): Promise<boolean> {
  logger.db(`Deleting modality ${modalityId} from user ${userId}`);
  try {
    const response = await modalityRepository.delete({
      id: modalityId,
      trainer_id: userId,
    });
    if (response.affected > 0) {
      logger.success(`Modality ${modalityId} from user ${userId} deleted`);
      return true;
    }
    logger.error(`Modality ${modalityId} not found`);
    return false;
  } catch (err) {
    logger.error(err);
    return false;
  }
}
