import { MissingParamError } from '@errors/MissingParamError';
import { ParamInvalid } from '@errors/ParamInvalid';
import { getUser } from '.';

describe('getUser', () => {
  it('should throws if no email is provided', async () => {
    let ThrowError;
    try {
      await getUser('');
    } catch (err) {
      ThrowError = err;
    }
    expect(ThrowError).toEqual(new MissingParamError('email'));
  });
  it('should throws if email is invalid', async () => {
    let ThrowError;
    try {
      await getUser('contato');
    } catch (err) {
      ThrowError = err;
    }
    expect(ThrowError).toEqual(new ParamInvalid('email'));
  });
});
