/* eslint-disable @typescript-eslint/ban-ts-comment */
import { MissingParamError, SchemaInvalid } from '@errors/index';
import { badRequest, serverError } from '@helpers/http-helper';
import { httpResponse } from '@interfaces/http';
import { createUser as createUserStorage } from '@repositories/user/storage/createUser';
import { userSchema } from '@schemas/User/yupValidator';
import { generateUserToken } from '../generateToken';

export async function signUp(body, repositories?): Promise<httpResponse> {
  const requiredFields = ['email', 'full_name'];

  for (const field of requiredFields) {
    if (body[field] === undefined) {
      return badRequest(new MissingParamError(field));
    }
  }

  if (!userSchema.isValidSync(body)) {
    return badRequest(new SchemaInvalid());
  }

  //@ts-ignore
  const user = await createUserStorage(body, repositories);
  if (user.created) {
    const userToken = await generateUserToken({
      student: false,
      email: body.email,
      id: user.user_data.id,
    });
    return <httpResponse>{
      statusCode: 200,
      message: 'User created with successfull',
      body: {
        token: userToken,
      },
    };
  } else {
    return serverError(new Error('Error on creating user on storage'));
  }
}
