import { MissingParamError } from '@errors/MissingParamError';
import { ParamInvalid } from '@errors/ParamInvalid';
import logger from '@log/logger';
import isEmail from 'validator/lib/isEmail';

export async function getUser(userEmail: string, userRepository?: any) {
  if (!userEmail) {
    throw new MissingParamError('email');
  }

  if (!isEmail(userEmail)) {
    throw new ParamInvalid('email');
  }

  logger.db(`Getting user ${userEmail} on users repository`);
  const user = await userRepository.findOne({ email: userEmail });

  if (user.email) {
    logger.success(`Fetched user ${userEmail} on users repository`);
    return user;
  }

  return {};
}
