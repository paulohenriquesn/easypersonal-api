create table workouts(
  id text primary key,
  trainer_id uuid not null,
  name text not null,
  note text,
  FOREIGN KEY(trainer_id) references users(id) on delete cascade,
  created_at timestamp without time zone default now(),
  updated_at timestamp without time zone default now()
);

create table students_workouts(
  student_id uuid not null,
  workout_id text not null,
  FOREIGN KEY(student_id) references users(id) on delete cascade,
  FOREIGN KEY(workout_id) references workouts(id) on delete cascade
);