import { MuscularGroup } from '@entities/MuscularGroup';
import { Workout } from '@entities/Workout';
import { WorkoutGroup } from '@entities/WorkoutGroup';
import { WorkoutGroupRelation } from '@entities/WorkoutGroupRelation';
import { WorkoutTime } from '@entities/WorkoutTime';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WorkoutsResolver } from './workouts.resolver';
import { WorkoutsService } from './workouts.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      MuscularGroup,
      WorkoutTime,
      WorkoutGroup,
      Workout,
      WorkoutGroupRelation,
    ]),
  ],
  providers: [WorkoutsResolver, WorkoutsService],
})
export class WorkoutsModule {}
