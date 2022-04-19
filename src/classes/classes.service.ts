/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Class } from '@entities/Class';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { createAClass } from '@repositories/classes/functions/createAClass';
import { deleteAClass } from '@repositories/classes/storage/deleteAClass';
import { editAClass } from '@repositories/classes/storage/editAClass';
import { getAClass } from '@repositories/classes/storage/getAClass';
import { getAllClasses } from '@repositories/classes/storage/getAllClasses';
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
    return await getAClass({ userId, classId }, this.classesRepository);
  }

  async getAllClasses(userId): Promise<Class[]> {
    return await getAllClasses({ userId }, this.classesRepository);
  }

  async deleteAClass(userId: string, classId: string): Promise<Class> {
    return await deleteAClass({ userId, classId }, this.classesRepository);
  }

  async createAClass(data: CreateAClassInput): Promise<Class> {
    return await createAClass(data, this.classesRepository);
  }

  async editAClass(
    userId: string,
    classId: string,
    data: EditClassInput,
  ): Promise<Class> {
    return await editAClass({ userId, classId, data }, this.classesRepository);
  }
}
