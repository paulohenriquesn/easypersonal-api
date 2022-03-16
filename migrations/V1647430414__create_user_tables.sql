create table users(
  id uuid primary key not null,
  full_name text not null,
  email text not null unique,
  picture text,
  cpf text unique,
  address text,
  cellphone text,
  birthday timestamp without time zone not null,
  student boolean default false,
  created_at timestamp without time zone not null default now(),
  updated_at timestamp without time zone  not null default now()
);

create table subscriptions(
  id text primary key not null,
  user_id uuid not null unique,
  stripe_id text,
  stripe_subscription_id text,
  trial boolean not null default true,
  created_at timestamp without time zone not null default now(),
  updated_at timestamp without time zone not null default now(),
  foreign key(user_id) references users(id) on delete cascade
);