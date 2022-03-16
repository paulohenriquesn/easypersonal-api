import { MissingParamError } from '@errors/index';
import { badRequest } from '@helpers/http-helper';
import { httpRequest } from '@interfaces/http';
import { signUp } from '.';

describe('signUp', () => {
  it('throw an error if no email is provided', async () => {
    const response = await signUp('trainer', <httpRequest>{
      body: {
        full_name: 'Paulo Henrique',
        birthday: '02-07-2003',
      },
    });
    expect(response).toEqual(badRequest(new MissingParamError('email')));
  });

  it('throw an error if no full_name is provided', async () => {
    const response = await signUp('trainer', <httpRequest>{
      body: {
        email: 'paulo@blocksrvt.com',
        google_token: 'token',
        birthday: '02-07-2003',
      },
    });
    expect(response).toEqual(badRequest(new MissingParamError('full_name')));
  });

  it('throw an error if no birthday is provided', async () => {
    const response = await signUp('trainer', <httpRequest>{
      body: {
        email: 'paulo@blocksrvt.com',
        full_name: 'Paulo Henrique',
      },
    });
    expect(response).toEqual(badRequest(new MissingParamError('birthday')));
  });
});
