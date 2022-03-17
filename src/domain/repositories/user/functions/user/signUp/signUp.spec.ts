import { MissingParamError } from '@errors/index';
import { badRequest } from '@helpers/http-helper';
import { signUp } from '.';

describe('signUp', () => {
  it('throw an error if no email is provided', async () => {
    const response = await signUp('trainer', {
      full_name: 'paulo',
    });
    expect(response).toEqual(badRequest(new MissingParamError('email')));
  });

  it('throw an error if no full_name is provided', async () => {
    const response = await signUp('trainer', {
      email: 'paulo@blocksrvt.com',
    });
    expect(response).toEqual(badRequest(new MissingParamError('full_name')));
  });
});
