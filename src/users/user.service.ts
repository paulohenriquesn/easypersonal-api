import { User } from '@entities/User';
import { UserSubscriptions } from '@entities/UserSubscription';
import { MissingParamError } from '@errors/MissingParamError';
import { SchemaInvalid } from '@errors/SchemaInvalid';
import { TokenInvalid } from '@errors/TokenInvalid';
import { badRequest, serverError } from '@helpers/http-helper';
import { httpResponse } from '@interfaces/http';
import logger from '@log/logger';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { signIn } from '@repositories/user/functions/user/signIn';
import { signUp } from '@repositories/user/functions/user/signUp';
import { userExists } from '@repositories/user/functions/user/userExists';
import { validateJwtToken } from '@repositories/user/functions/user/validateToken';
import { validateToken } from '@repositories/user/providers/google/verifyToken';
import { getUser } from '@repositories/user/storage/getUser';
import { userSchema } from '@schemas/User/yupValidator';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    @InjectRepository(UserSubscriptions)
    private subscriptionsRepository: Repository<UserSubscriptions>,
  ) {}

  async authUser(body, response) {
    const { email, google_token } = body;

    const requiredFields = ['email', 'full_name', 'google_token'];

    for (const field of requiredFields) {
      if (body[field] === undefined) {
        return response
          .status(400)
          .json(badRequest(new MissingParamError(field)));
      }
    }

    if (!userSchema.isValidSync(body)) {
      return response.status(400).json(badRequest(new SchemaInvalid()));
    }

    try {
      const user = await userExists(email, this.userRepository);
      const verifyToken = await validateToken(google_token);

      if (!verifyToken) {
        if (user) {
          const signInUser = await signIn(body, {
            user: this.userRepository,
          });
          return response.status(signInUser.statusCode).json(signInUser);
        } else {
          const signUpUser = await signUp('trainer', body, {
            user: this.userRepository,
            subscription: this.subscriptionsRepository,
          });
          return response.status(signUpUser.statusCode).json(signUpUser);
        }
      } else {
        return response.status(401).json(serverError(new TokenInvalid()));
      }
    } catch (err) {
      return response.status(500).json(serverError(err));
    }
  }

  async fetchUser(token, response) {
    try {
      const token_decoded = validateJwtToken(token.split(' ')[1]);
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-ignore
      const user = await getUser(token_decoded.userEmail, this.userRepository);
      return response
        .status(200)
        .json(<httpResponse>{ statusCode: 200, body: user });
    } catch (err) {
      logger.error(err);
      return response.status(500).json(serverError(new TokenInvalid()));
    }
  }
}
