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
  dates jsonb not null,
  created_at timestamp without time zone default now(),
  updated_at timestamp without time zone default now(),
  foreign key (trainer_id) references users(id) on delete cascade,
  foreign key (modality_id) references modalities(id) on delete cascade
);
