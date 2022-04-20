import { Workout } from '@entities/Workout';

export async function getWorkoutsFromGroup(
  request,
  workoutGroupRelationRepository,
): Promise<Workout[]> {
  const { userId, workoutGroupId } = request;
  const workouts_ids = await workoutGroupRelationRepository.query(
    'select workout_id from workouts_groups_relations where user_id = $1 and workout_group_id = $2',
    [userId, workoutGroupId],
  );
  const formatOnlyIds = workouts_ids.map((i) => i.workout_id);

  console.log(
    `select * from workouts where id in (${formatOnlyIds.map((i) => {
      let raw = `'`;
      for (let x = 0; x < i.length; x++) {
        raw += i[x];
      }
      return (raw = raw + `'`);
    })})`,
  );

  const workouts = await workoutGroupRelationRepository.query(
    `select * from workouts where id in (${formatOnlyIds.map((i) => {
      let raw = `'`;
      for (let x = 0; x < i.length; x++) {
        raw += i[x];
      }
      return (raw = raw + `'`);
    })})`,
  );
  return workouts;
}
