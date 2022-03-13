import { httpResponse } from '@interfaces/http';
import logger from '@log/logger';

export const badRequest = (error: Error): httpResponse => {
  logger.error(error.message);
  return {
    statusCode: 400,
    body: error,
  };
};

export const serverError = (error: Error): httpResponse => {
  logger.error(error.message);
  return {
    statusCode: 500,
    body: error,
  };
};
