import { User } from '@entities/User';
import logger from '@log/logger';

export async function updateUserStorage(
  userEmail,
  updateObject,
  userRepository,
) {
  try {
    logger.db(
      `Updating [${Object.keys(updateObject).join(
        ',',
      )}] values on user ${userEmail}`,
    );
    await userRepository
      .createQueryBuilder()
      .update(User)
      .set(updateObject)
      .where('email = :email', { email: userEmail })
      .execute();
    logger.success(
      `Updated user ${userEmail} [${Object.keys(updateObject).join(
        ',',
      )}] values`,
    );
  } catch (err) {
    logger.error(err);
  }
}
