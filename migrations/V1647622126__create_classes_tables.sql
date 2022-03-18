create table modalities(
  id text primary key,
  name text not null,
  trainer_id uuid not null,
  color text not null default '#3498db',
  created_at timestamp without time zone default now(),
  updated_at timestamp without time zone default now(),
  foreign key (trainer_id) references users(id) on delete cascade
);

create table classes(
  id text primary key,
  name text not null,
  trainer_id uuid not null,
  modality_id text not null,
  start_date timestamp without time zone,
  end_date timestamp without time zone,
  created_at timestamp without time zone default now(),
  updated_at timestamp without time zone default now(),
  foreign key (trainer_id) references users(id) on delete cascade,
  foreign key (modality_id) references modalities(id) on delete cascade
);

create table presences(
  id text primary key,
  user_id text not null,
  trainer_id uuid not null,
  class_id text not null,
  confirmed boolean not null default false,
  foreign key (trainer_id) references users(id) on delete cascade,
  foreign key (class_id) references classes(id) on delete cascade,
  created_at timestamp without time zone default now(),
  updated_at timestamp without time zone default now()
);