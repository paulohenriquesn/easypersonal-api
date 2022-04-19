import { MuscularGroup } from '@entities/MuscularGroup';
import { WorkoutTime } from '@entities/WorkoutTime';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WorkoutsResolver } from './workouts.resolver';
import { WorkoutsService } from './workouts.service';

@Module({
  imports: [TypeOrmModule.forFeature([MuscularGroup, WorkoutTime])],
  providers: [WorkoutsResolver, WorkoutsService],
})
export class WorkoutsModule {}
