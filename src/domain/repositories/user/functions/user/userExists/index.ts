import { MissingParamError } from '@errors/MissingParamError';
import { ParamInvalid } from '@errors/ParamInvalid';
import { getUser } from '@repositories/user/storage/getUser';
import isEmail from 'validator/lib/isEmail';

export async function userExists(
  userEmail: string,
  userRepository?: any,
): Promise<boolean> {
  if (!userEmail) {
    throw new MissingParamError('email');
  }

  if (!isEmail(userEmail)) {
    throw new ParamInvalid('email');
  }

  try {
    await getUser(userEmail, userRepository);
    return true;
  } catch {
    return false;
  }
}
