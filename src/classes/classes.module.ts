import { Modality } from '@entities/Modality';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClassesController } from './classes.controller';
import { ClassesService } from './classes.service';

@Module({
  imports: [TypeOrmModule.forFeature([Modality])],
  controllers: [ClassesController],
  providers: [ClassesService],
})
export class ClassesModule {}
