import { Modality } from '@entities/Modality';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ModalityResolver } from './modality.resolver';
import { ModalityService } from './modality.service';

@Module({
  imports: [TypeOrmModule.forFeature([Modality])],
  providers: [ModalityService, ModalityResolver],
})
export class ModalitiesModule {}
