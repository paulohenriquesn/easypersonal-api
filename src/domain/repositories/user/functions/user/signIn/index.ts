import { serverError } from '@helpers/http-helper';
import { httpResponse } from '@interfaces/http';
import logger from '@log/logger';
import { generateUserToken } from '../generateToken';
import { userExists } from '../userExists';

export async function signIn(body: any, repositories: any) {
  logger.info(`Trying to sign user ${body.email}`);
  try {
    const user = await userExists(body.email, repositories.user);
    if (user) {
      const user_data = await repositories.user.findOne({ email: body.email });

      const token = await generateUserToken({
        id: user_data.id,
        student: user_data.student,
        email: body.email,
      });
      return <httpResponse>{
        statusCode: 200,
        message: 'User authenticated',
        body: { token },
      };
    }
  } catch (error) {
    logger.error(error);
    return serverError(error);
  }
}
