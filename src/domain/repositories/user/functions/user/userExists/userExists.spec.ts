import { MissingParamError } from '@errors/MissingParamError';
import { ParamInvalid } from '@errors/ParamInvalid';
import { userExists } from '.';

describe('userExists', () => {
  it('should throws if no email is provided', async () => {
    let ThrowError;
    try {
      await userExists('');
    } catch (err) {
      ThrowError = err;
    }
    expect(ThrowError).toEqual(new MissingParamError('email'));
  });
  it('should throws if email is invalid', async () => {
    let ThrowError;
    try {
      await userExists('contato');
    } catch (err) {
      ThrowError = err;
    }
    expect(ThrowError).toEqual(new ParamInvalid('email'));
  });
});
