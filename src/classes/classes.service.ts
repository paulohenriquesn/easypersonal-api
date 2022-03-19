/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Modality } from '@entities/Modality';
import { MissingParamError } from '@errors/MissingParamError';
import { SchemaInvalid } from '@errors/SchemaInvalid';
import { badRequest, serverError } from '@helpers/http-helper';
import { httpResponse } from '@interfaces/http';
import logger from '@log/logger';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { createModality } from '@repositories/classes/functions/createModality';
import { deleteModality } from '@repositories/classes/functions/deleteModality';
import { editModality } from '@repositories/classes/functions/editModality';
import { getModalities } from '@repositories/classes/functions/getModalities';
import { getModality } from '@repositories/classes/functions/getModality';
import { createModalitySchema } from '@schemas/Classes/yupValidator';
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
        return res.status(201).json(badRequest(new MissingParamError(field)));
      }
    }

    if (!createModalitySchema.isValidSync(body)) {
      return res.status(400).json(badRequest(new SchemaInvalid()));
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
      return res.status(500).json(serverError(err));
    }
  }

  async fetchModality(token, modality_id, res) {
    const trainer_data = getTrainerData(token);
    //@ts-ignore
    if (trainer_data.error === true) {
      return res.status(401).json(trainer_data);
    }
    try {
      const modality = await getModality(
        trainer_data.body.userId,
        modality_id,
        this.modalityRepository,
      );
      if (modality) {
        return res
          .status(200)
          .json(<httpResponse>{ statusCode: 200, body: modality });
      } else {
        return res
          .status(500)
          .json(serverError(new Error(`Modality ${modality_id} not found`)));
      }
    } catch (err) {
      logger.error(err);
      return res.status(500).json(serverError(err));
    }
  }

  async deleteAModality(token, modality_id, res) {
    const trainer_data = getTrainerData(token);
    //@ts-ignore
    if (trainer_data.error === true) {
      return res.status(401).json(trainer_data);
    }

    try {
      if (
        await deleteModality(
          trainer_data.body.userId,
          modality_id,
          this.modalityRepository,
        )
      ) {
        return res.status(200).json(<httpResponse>{
          statusCode: 200,
          message: `Modality ${modality_id} deleted`,
          body: {},
        });
      } else {
        return res
          .status(500)
          .json(serverError(new Error(`Modality ${modality_id} not found`)));
      }
    } catch (err) {
      logger.error(err);
      return res.status(500).json(serverError(err));
    }
  }

  async editAModality(token, modality_id, body, res) {
    const trainer_data = getTrainerData(token);
    //@ts-ignore
    if (trainer_data.error === true) {
      return res.status(401).json(trainer_data);
    }
    try {
      if (
        await editModality(
          trainer_data.body.userId,
          modality_id,
          body,
          this.modalityRepository,
        )
      ) {
        return res.status(200).json(<httpResponse>{
          statusCode: 200,
          body,
        });
      } else {
        return res
          .status(500)
          .json(serverError(new Error(`Modality ${modality_id} not found`)));
      }
    } catch (err) {
      logger.error(err);
      return res.status(500).json(serverError(err));
    }
  }
}
