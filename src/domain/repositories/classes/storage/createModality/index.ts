import logger from '@log/logger';
import { nanoid } from 'nanoid';

export async function createModalityOnStorage(
  body,
  userId,
  modalityRepository,
): Promise<boolean> {
  logger.db(`Creating modality ${body.name} from user ${userId}`);
  try {
    await modalityRepository.query(
      'insert into modalities(id, name,color,trainer_id) values ($1,$2,$3,$4)',
      [nanoid(), body.name, body.color, userId],
    );
    logger.success(
      `Modality ${body.name} created with successfull from user ${userId}`,
    );
    return true;
  } catch (err) {
    logger.error(err);
    return false;
  }
}
