import { User } from '@entities/User';
import { UserSubscriptions } from '@entities/UserSubscription';
import { MissingParamError } from '@errors/MissingParamError';
import { SchemaInvalid } from '@errors/SchemaInvalid';
import { TokenInvalid } from '@errors/TokenInvalid';
import { badRequest, serverError } from '@helpers/http-helper';
import { httpResponse } from '@interfaces/http';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { signUp } from '@repositories/user/functions/user/signUp';
import { userExists } from '@repositories/user/functions/user/userExists';
import { validateToken } from '@repositories/user/providers/google/verifyToken';
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

    const requiredFields = ['email', 'full_name', 'birthday', 'google_token'];

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
          //Login()
        } else {
          const signUpUser = await signUp('trainer', body, {
            user: this.userRepository,
            subscription: this.subscriptionsRepository,
            response,
          });
          return response.status(signUpUser.statusCode).json(signUpUser);
        }
      } else {
        return response.status(401).json(serverError(new TokenInvalid()));
      }

      return response.status(200).json(<httpResponse>{
        statusCode: 200,
        body: {
          message: user ? 'Esse mlk ai existe!' : 'esse ai nao existe n',
        },
      });
    } catch (err) {
      return response.status(500).json(serverError(err));
    }
  }
}
