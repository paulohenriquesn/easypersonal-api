/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Modality } from '@entities/Modality';
import { MissingParamError } from '@errors/MissingParamError';
import { serverError } from '@helpers/http-helper';
import { httpResponse } from '@interfaces/http';
import logger from '@log/logger';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { createModality } from '@repositories/classes/functions/createModality';
import { getModalities } from '@repositories/classes/functions/getModalities';
import { getTrainerData } from '@utils/getTrainerData';
import { Repository } from 'typeorm';

@Injectable()
export class ClassesService {
  constructor(
    @InjectRepository(Modality)
    private modalityRepository: Repository<Modality>,
  ) {}
  async createModality(token, body, res) {
    const requiredFields = ['name', 'color'];

    for (const field of requiredFields) {
      if (body[field] === undefined) {
        return res.status(401).json(<httpResponse>{
          statusCode: 401,
          message: `Field ${field} is missing`,
          body: new MissingParamError(field),
        });
      }
    }

    const trainer_data = getTrainerData(token);

    //@ts-ignore
    if (trainer_data.error === true) {
      return res.status(401).json(trainer_data);
    }

    if (
      //@ts-ignore
      await createModality(
        body,
        trainer_data.body.userId,
        this.modalityRepository,
      )
    ) {
      return res.status(200).json(<httpResponse>{
        statusCode: 200,
        message: 'Modality created with successfull',
        body: body,
      });
    } else {
      return res
        .status(500)
        .json(serverError(new Error('Error on creating modality')));
    }
  }

  async fetchModalities(token, res) {
    const trainer_data = getTrainerData(token);
    //@ts-ignore
    if (trainer_data.error === true) {
      return res.status(401).json(trainer_data);
    }

    try {
      const modalities = await getModalities(
        trainer_data.body.userId,
        this.modalityRepository,
      );
      return res
        .status(200)
        .json(<httpResponse>{ statusCode: 200, body: modalities });
    } catch (err) {
      logger.error(err);
    }
  }
}
