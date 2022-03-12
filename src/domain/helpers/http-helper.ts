import logger from '@domain/log/logger';
import { httpResponse } from '@interfaces/http';

export const badRequest = (error: Error): httpResponse => {
  logger.error(error.message);
  return {
    statusCode: 400,
    body: error,
  };
};
