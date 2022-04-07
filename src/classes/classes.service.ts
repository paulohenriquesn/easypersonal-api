/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Class } from '@entities/Class';
import logger from '@log/logger';
import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { nanoid } from 'nanoid';
import { Repository } from 'typeorm';
import { CreateAClassInput } from './dto/create-a-class.input';
import { EditClassInput } from './dto/edit-class-input';

@Injectable()
export class ClassesService {
  constructor(
    @InjectRepository(Class)
    private classesRepository: Repository<Class>,
  ) {}

  async getAClass(userId, classId): Promise<Class> {
    const classes = await this.classesRepository.findOne({
      trainer_id: userId,
      id: classId,
    });
    return classes;
  }

  async getAllClasses(userId): Promise<Class[]> {
    const classes = await this.classesRepository
      .createQueryBuilder('classes')
      .where('classes.trainer_id= :trainer_id', { trainer_id: userId })
      .orderBy('created_at', 'DESC')
      .getMany();
    return classes;
  }

  async deleteAClass(userId: string, classId: string): Promise<Class> {
    const _class = await this.getAClass(userId, classId);

    if (!_class) {
      logger.error('Problem on delete class');
      throw new InternalServerErrorException('Problem on delete a class');
    }

    await this.classesRepository.query(
      `delete from classes where id=$1 and trainer_id=$2`,
      [classId, userId],
    );

    return _class;
  }

  async createAClass(data: CreateAClassInput): Promise<Class> {
    if (!data.start_date || !data.end_date) {
      logger.error('Invalid dates on creating class');
      throw new InternalServerErrorException('Invalid dates on creating class');
    }
    const classId = nanoid();
    await this.classesRepository.query(
      `insert into classes (id, name, trainer_id, modality_id, start_date, end_date) values ($1,$2,$3,$4, $5, $6)`,
      [
        classId,
        data.name,
        data.trainer_id,
        data.modality_id,
        data.start_date,
        data.end_date,
      ],
    );
    const _class = await this.getAClass(data.trainer_id, classId);
    if (!_class) {
      logger.error('Problem on creating class');
      throw new InternalServerErrorException('Problem on creating a class');
    }
    return _class;
  }

  async editAClass(
    userId: string,
    classId: string,
    data: EditClassInput,
  ): Promise<Class> {
    const _class = await this.getAClass(userId, classId);

    if (!_class) {
      logger.error('Problem on edit class');
      throw new InternalServerErrorException('Problem on delete a class');
    }

    await this.classesRepository.update(
      { id: classId },
      { ...data, updated_at: new Date().toISOString() },
    );

    const classUpdated = await this.classesRepository.create({
      ..._class,
      ...data,
    });

    return classUpdated;
  }
}
