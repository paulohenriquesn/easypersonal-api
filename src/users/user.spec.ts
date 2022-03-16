import { validateToken } from '@repositories/user/providers/google/verifyToken';

describe('auth', () => {
  it('throw an error if google_token is invalid', async () => {
    expect(await validateToken('teste')).toBe(false);
  });
});
