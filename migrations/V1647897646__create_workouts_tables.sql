create table workouts_muscular_groups(
  id text primary key,
  user_id uuid not null,
  icon_name text not null,
  name text not null,
  foreign key(user_id) references users(id) on delete cascade
);

create table workouts_times (
  id text primary key,
  user_id uuid not null,
  repeat_type text not null,
  repeat_value int not null,
  weight int not null,
  foreign key(user_id) references users(id) on delete cascade
);

create table workouts (
  id text primary key,
  muscular_group_id text not null,
  workout_time_id text not null,
  user_id uuid not null,
  name text not null,
  FOREIGN KEY (workout_time_id) REFERENCES workouts_times(id),
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
  FOREIGN KEY (muscular_group_id) REFERENCES workouts_muscular_groups(id)
);

create table workouts_groups (
  id text primary key,
  user_id uuid not null,
  name text not null,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

create table workouts_groups_relations (
  id text primary key,
  workout_group_id text not null,
  workout_id text not null, 
  user_id uuid not null,
  FOREIGN key (workout_group_id) REFERENCES workouts_groups(id),
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
  FOREIGN KEY (workout_id) REFERENCES workouts(id)
);
