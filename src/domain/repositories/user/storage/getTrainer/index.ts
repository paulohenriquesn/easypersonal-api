import { MissingParamError } from '@errors/MissingParamError';
import { ParamInvalid } from '@errors/ParamInvalid';
import logger from '@log/logger';
import isEmail from 'validator/lib/isEmail';

export async function getTrainer(userEmail: string, trainerRepository?: any) {
  if (!userEmail) {
    throw new MissingParamError('email');
  }

  if (!isEmail(userEmail)) {
    throw new ParamInvalid('email');
  }

  logger.db(`Getting user ${userEmail} on trainers repository`);
  const user = await trainerRepository.findOne({ email: userEmail });

  if (user.email) {
    logger.success(`Fetched user ${userEmail} on trainers repository`);
    return user;
  }

  return {};
}
