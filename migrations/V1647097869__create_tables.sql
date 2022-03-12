CREATE TABLE leads(email text primary key);

CREATE TABLE trainers(
  id uuid primary key,
  name text not null,
  email text not null,
  cpf text not null,
  address text not null,
  birthday timestamp without time zone not null,
  cellphone text not null,
  cognito_id text,
  stripe_id text,
  stripe_subscription_id text,
  created_at timestamp without time zone default now()
);

CREATE TABLE students(
  id uuid primary key not null,
  name text not null,
  email text not null,
  cellphone text not null,
  address text not null,
  cpf text not null,
  birthday timestamp without time zone not null,
  trainer_id uuid not null,
  created_at timestamp without time zone default now(),
  FOREIGN KEY (trainer_id) REFERENCES trainers(id) ON DELETE CASCADE
  );

CREATE TABLE students_subscriptions(
  id text primary key,
  trainer_id uuid not null,
  student_id uuid not null,
  price decimal not null,
  created_at timestamp without time zone default now(),
  updated_at timestamp without time zone default now(),
  FOREIGN KEY (trainer_id) REFERENCES trainers(id) ON DELETE CASCADE,
  FOREIGN KEY (student_id) REFERENCES students(id) ON DELETE CASCADE
);

CREATE TABLE students_data (
  student_id uuid not null,
  weight decimal,
  height decimal,
  objective text,
  biotype text,
  exercises boolean,
  difficulties text,
  created_at timestamp without time zone default now(),
  updated_at timestamp without time zone default now(),
  FOREIGN KEY (student_id) REFERENCES students(id) ON DELETE CASCADE
);

CREATE TABLE modalities(
id text primary key,
name text not null
);

CREATE TABLE classes(
id text primary key,
trainer_id uuid not null,
modality_id text not null,
name text,
class_start timestamp without time zone not null,
class_end timestamp without time zone not null,
created_at timestamp without time zone default now(),
FOREIGN KEY (trainer_id) REFERENCES trainers(id) ON DELETE CASCADE,
FOREIGN KEY (modality_id) REFERENCES modalities(id)
);

CREATE TABLE invoices(
  id text primary key,
  trainer_id uuid not null,
  student_id uuid not null,
  created_at timestamp without time zone default now(),
  paid boolean not null
);


