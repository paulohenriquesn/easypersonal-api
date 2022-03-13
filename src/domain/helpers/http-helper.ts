import { httpResponse } from '@interfaces/http';
import logger from '@log/logger';

export const badRequest = (error: Error): httpResponse => {
  logger.error(error.message);
  return {
    statusCode: 400,
    body: { message: error.message, error: error },
  };
};

export const serverError = (error: Error): httpResponse => {
  logger.error(error.message);
  return {
    statusCode: 500,
    body: { message: error.message, error },
  };
};
