import logger from '@log/logger';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { OAuth2Client } = require('google-auth-library');

const CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const CLIENT_ID_REACT_NATIVE = process.env.CLIENT_ID_REACT_NATIVE;
const client = new OAuth2Client(CLIENT_ID);

export async function validateToken(token: string): Promise<boolean> {
  logger.info('Validating Google Token Auth');
  try {
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: [CLIENT_ID, CLIENT_ID_REACT_NATIVE],
    });

    const payload = ticket.getPayload();
    const userid = payload['sub'];

    if (userid) return true;
  } catch (err) {
    logger.error(err);
    return false;
  }

  return false;
}
