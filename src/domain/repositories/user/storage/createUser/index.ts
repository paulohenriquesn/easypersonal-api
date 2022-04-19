import { ParamInvalid } from '@errors/ParamInvalid';
import logger from '@log/logger';
import { nanoid } from 'nanoid';
import { v4 as uuidv4 } from 'uuid';
import isEmail from 'validator/lib/isEmail';

interface IUser {
  full_name: string;
  email: string;
  google_token?: string;
}

export async function createUser(
  userObject: IUser,
  repositories?: any,
): Promise<any> {
  if (!isEmail(userObject.email)) {
    throw new ParamInvalid('email');
  }
  logger.db(`Creating user ${userObject.email} on users repository`);

  try {
    const userId = uuidv4();
    await repositories.user.query(
      'insert into users(id, full_name,email) values ($1,$2,$3)',
      [userId, userObject.full_name, userObject.email],
    );
    await repositories.subscription.query(
      'insert into subscriptions(id, user_id) values ($1,$2)',
      [nanoid(), userId],
    );
    logger.success(`User ${userObject.email} created with successfull`);

    return {
      created: true,
      message: 'User created with successfull',
      user_data: {
        id: userId,
        full_name: userObject.full_name,
        email: userObject.email,
      },
    };
  } catch (error) {
    logger.error(error);
  }
  return { created: false };
}
