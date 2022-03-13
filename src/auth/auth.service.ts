import { Trainer } from '@entities/Trainer';
import { serverError } from '@helpers/http-helper';
import { httpResponse } from '@interfaces/http';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { userExists } from '@repositories/user/functions/user/userExists';
import { Repository } from 'typeorm';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(Trainer)
    private trainerRepository: Repository<Trainer>,
  ) {}

  async authUser(body, response) {
    const { email } = body;
    try {
      const user = await userExists(email, this.trainerRepository);
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
