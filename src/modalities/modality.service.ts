/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Modality } from '@entities/Modality';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { createAModality } from '@repositories/modalities/storage/createAModality';
import { deleteAModality } from '@repositories/modalities/storage/deleteAModality';
import { editAModality } from '@repositories/modalities/storage/editAModality';
import { getAllModalities } from '@repositories/modalities/storage/getAllModalities';
import { getAModality } from '@repositories/modalities/storage/getAModality';
import { Repository } from 'typeorm';
import { CreateModalityInput } from './dto/create-modality.input';
import { EditModalityInput } from './dto/edit-modality-input';

@Injectable()
export class ModalityService {
  constructor(
    @InjectRepository(Modality)
    private modalityRepository: Repository<Modality>,
  ) {}

  async getAllModalities(userId): Promise<Modality[]> {
    return await getAllModalities({ userId }, this.modalityRepository);
  }

  async getAModality(userId, modalityId): Promise<Modality> {
    return await getAModality({ userId, modalityId }, this.modalityRepository);
  }

  async createModality(data: CreateModalityInput): Promise<Modality> {
    return await createAModality({ data }, this.modalityRepository);
  }

  async deleteAModality(userId: string, modalityId: string): Promise<Modality> {
    return await deleteAModality(
      { userId, modalityId },
      this.modalityRepository,
    );
  }

  async editAModality(
    userId: string,
    modalityId: string,
    data: EditModalityInput,
  ): Promise<Modality> {
    return await editAModality(
      { userId, modalityId, data },
      this.modalityRepository,
    );
  }
}
