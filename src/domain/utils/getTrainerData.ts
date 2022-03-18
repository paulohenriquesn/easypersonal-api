/* eslint-disable @typescript-eslint/ban-ts-comment */
import { TokenInvalid } from '@errors/TokenInvalid';
import { YouArentTrainer } from '@errors/YouArentTrainer';
import { httpResponse } from '@interfaces/http';
import { validateJwtToken } from '@repositories/user/functions/user/validateToken';

export function getTrainerData(token) {
  if (!token) {
    return <httpResponse>{
      statusCode: 401,
      error: true,
      message: 'Your token is invalid',
      body: new TokenInvalid(),
    };
  }

  const token_decoded = validateJwtToken(token.split(' ')[1]);

  //@ts-ignore
  if (token_decoded === undefined) {
    return <httpResponse>{
      statusCode: 401,
      error: true,
      message: 'Your token is invalid',
      body: new TokenInvalid(),
    };
  }
  //@ts-ignore
  if (token_decoded.userIsStudent) {
    return <httpResponse>{
      statusCode: 401,
      error: true,
      message: 'You arent trainer to do that.',
      body: new YouArentTrainer(),
    };
  }
  return {
    error: false,
    body: token_decoded,
  };
}
