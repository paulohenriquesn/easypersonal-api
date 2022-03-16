create table users(
  id uuid primary key not null,
  full_name text not null,
  email text not null,
  picture text,
  cpf text,
  address text,
  cellphone text,
  birthday timestamp without timezone not null,
  student boolean default false,
  created_at timestamp without timezone not null default now(),
  updated_at timestamp without timezone not null default now()
)

create table subscriptions(
  id text primary key not null,
  user_id uuid not null,
  stripe_id text,
  stripe_subscription_id text,
  trial boolean not null default true,
   created_at timestamp without timezone not null default now(),
  updated_at timestamp without timezone not null default now()
)