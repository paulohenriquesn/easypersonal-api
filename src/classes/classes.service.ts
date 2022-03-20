/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Modality } from '@entities/Modality';
import logger from '@log/logger';
import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { nanoid } from 'nanoid';
import { Repository } from 'typeorm';
import { CreateModalityInput } from './dto/create-modality.input';
import { EditModalityInput } from './dto/edit-modality-input';

@Injectable()
export class ClassesService {
  constructor(
    @InjectRepository(Modality)
    private modalityRepository: Repository<Modality>,
  ) {}

  async getAllModalities(userId): Promise<Modality[]> {
    const modalities = await this.modalityRepository.find({
      trainer_id: userId,
    });
    return modalities;
  }

  async getAModality(userId, modalityId): Promise<Modality> {
    const modalities = await this.modalityRepository.findOne({
      trainer_id: userId,
      id: modalityId,
    });
    return modalities;
  }

  async createModality(data: CreateModalityInput): Promise<Modality> {
    const modalityId = nanoid();
    await this.modalityRepository.query(
      `insert into modalities (id, name,trainer_id, color) values ($1,$2,$3,$4)`,
      [modalityId, data.name, data.trainer_id, data.color],
    );
    const modality = await this.getAModality(data.trainer_id, modalityId);
    if (!modality) {
      logger.error('Problem on creating modality');
      throw new InternalServerErrorException('Problem on creating a modality');
    }
    return modality;
  }

  async deleteAModality(userId: string, modalityId: string): Promise<Modality> {
    const modality = await this.getAModality(userId, modalityId);

    if (!modality) {
      logger.error('Problem on delete modality');
      throw new InternalServerErrorException('Problem on delete a modality');
    }

    await this.modalityRepository.delete({
      id: modalityId,
      trainer_id: userId,
    });

    return modality;
  }

  async editAModality(
    userId: string,
    modalityId: string,
    data: EditModalityInput,
  ): Promise<Modality> {
    const modality = await this.getAModality(userId, modalityId);

    if (!modality) {
      logger.error('Problem on edit modality');
      throw new InternalServerErrorException('Problem on delete a modality');
    }

    await this.modalityRepository.update({ id: modalityId }, { ...data });

    const modalityUpdated = await this.modalityRepository.create({
      ...modality,
      ...data,
    });

    return modalityUpdated;
  }
}
