import { MissingParamError, SchemaInvalid } from '@errors/index';
import { badRequest, serverError } from '@helpers/http-helper';
import { httpResponse } from '@interfaces/http';
import { createUser as createUserStorage } from '@repositories/user/storage/createUser';
import { userSchema } from '@schemas/User/yupValidator';

export async function signUp(
  userType,
  request,
  repositories?,
): Promise<httpResponse> {
  const requiredFields = ['email', 'full_name', 'birthday'];

  for (const field of requiredFields) {
    if (request.body[field] === undefined) {
      return badRequest(new MissingParamError(field));
    }
  }

  if (!userSchema.isValidSync(request.body)) {
    return badRequest(new SchemaInvalid());
  }

  if (
    (await createUserStorage(request.body, userType, repositories)) === true
  ) {
    return <httpResponse>{
      statusCode: 200,
      message: 'User created with successfull',
    };
  } else {
    return serverError(new Error('Error on creating user on storage'));
  }
}
