import logger from '@log/logger';

export async function getModalitiesOnStorage(
  userId,
  modalityRepository,
): Promise<any> {
  logger.db(`Fetching modalities from user ${userId}`);
  try {
    const modalities = await modalityRepository.find({
      where: { trainer_id: userId },
      select: ['id', 'name', 'color', 'created_at'],
      order: {
        created_at: 'DESC',
      },
    });
    logger.success(`Modalities from user ${userId} fetched`);
    return modalities;
  } catch (err) {
    logger.error(err);
    return [];
  }
}
