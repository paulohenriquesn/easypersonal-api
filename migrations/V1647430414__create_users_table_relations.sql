create table users_relations (
  user_email text not null,
  permission text not null default 'student'
);