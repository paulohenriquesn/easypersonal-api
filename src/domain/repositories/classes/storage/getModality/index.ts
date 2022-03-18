import logger from '@log/logger';

export async function getModalityOnStorage(
  userId,
  modalityId,
  modalityRepository,
): Promise<any> {
  logger.db(`Fetching modality ${modalityId} from user ${userId}`);
  try {
    const modality = await modalityRepository.findOne({
      id: modalityId,
      trainer_id: userId,
    });
    logger.success(`Modality ${modalityId} from user ${userId} fetched`);
    return modality;
  } catch (err) {
    logger.error(err);
    return {};
  }
}
