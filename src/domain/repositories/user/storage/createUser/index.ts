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
  userType: string,
  repositories?: any,
  trainerRelation?: any,
): Promise<any> {
  if (!isEmail(userObject.email)) {
    throw new ParamInvalid('email');
  }
  logger.db(`Creating user ${userObject.email} on users repository`);

  try {
    const userId = uuidv4();
    await repositories.user.query(
      'insert into users(id, full_name,email,student) values ($1,$2,$3,$4)',
      [
        userId,
        userObject.full_name,
        userObject.email,
        userType === 'student' ? true : false,
      ],
    );
    if (userType === 'trainer') {
      await repositories.subscription.query(
        'insert into subscriptions(id, user_id) values ($1,$2)',
        [nanoid(), userId],
      );
    }
    if (userType === 'student') {
      //trainerRelation
    }
    logger.success(
      `User ${userObject.email} with permission ${userType} created with successfull`,
    );

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
