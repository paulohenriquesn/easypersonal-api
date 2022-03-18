import { MissingParamError } from '@errors/MissingParamError';
import { ParamInvalid } from '@errors/ParamInvalid';
import { updateUserStorage } from '@repositories/user/storage/updateUser';
import isEmail from 'validator/lib/isEmail';

export async function updateUser(
  userEmail: string,
  updateObject: any,
  userRepository?: any,
): Promise<boolean> {
  if (!userEmail) {
    throw new MissingParamError('email');
  }

  if (!isEmail(userEmail)) {
    throw new ParamInvalid('email');
  }

  try {
    await updateUserStorage(userEmail, updateObject, userRepository);
    return true;
  } catch {
    return false;
  }
}
