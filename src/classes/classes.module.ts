import { Modality } from '@entities/Modality';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClassesResolver } from './classes.resolver';
import { ClassesService } from './classes.service';

@Module({
  imports: [TypeOrmModule.forFeature([Modality])],
  providers: [ClassesService, ClassesResolver],
})
export class ClassesModule {}
