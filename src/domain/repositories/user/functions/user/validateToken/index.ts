import logger from '@log/logger';
import { verify } from 'jsonwebtoken';

export function validateJwtToken(token: string) {
  try {
    const decoded = verify(token, process.env.JWT_SECRET);
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    return decoded;
  } catch (err) {
    logger.error(err);
    return;
  }
}
