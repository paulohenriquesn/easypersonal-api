import { Class } from '@entities/Class';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClassesResolver } from './classes.resolver';
import { ClassesService } from './classes.service';

@Module({
  imports: [TypeOrmModule.forFeature([Class])],
  providers: [ClassesService, ClassesResolver],
})
export class ClassesModule {}
