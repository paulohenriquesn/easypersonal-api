import { Trainer } from '@entities/Trainer';
import { MissingParamError } from '@errors/MissingParamError';
import { SchemaInvalid } from '@errors/SchemaInvalid';
import { TokenInvalid } from '@errors/TokenInvalid';
import { badRequest, serverError } from '@helpers/http-helper';
import { httpResponse } from '@interfaces/http';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { userExists } from '@repositories/user/functions/user/userExists';
import { validateToken } from '@repositories/user/providers/google/verifyToken';
import { userSchema } from '@schemas/User/yupValidator';
import { Repository } from 'typeorm';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(Trainer)
    private trainerRepository: Repository<Trainer>,
  ) {}

  async authUser(body, response) {
    const { email, google_token, name } = body;

    const requiredFields = ['email', 'name', 'google_token'];

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
      const user = await userExists(email, this.trainerRepository);
      const verifyToken = await validateToken(google_token);
      if (verifyToken) {
        if (user) {
          //Login()
        }

        if (!user) {
          //Register()
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
