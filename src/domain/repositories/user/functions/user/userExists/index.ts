import { MissingParamError } from '@errors/MissingParamError';
import { ParamInvalid } from '@errors/ParamInvalid';
import { getTrainer } from '@repositories/user/storage/getTrainer';
import isEmail from 'validator/lib/isEmail';

export async function userExists(
  userEmail: string,
  trainerRepository?: any,
): Promise<boolean> {
  if (!userEmail) {
    throw new MissingParamError('email');
  }

  if (!isEmail(userEmail)) {
    throw new ParamInvalid('email');
  }

  try {
    await getTrainer(userEmail, trainerRepository);
    return true;
  } catch {
    return false;
  }
}
