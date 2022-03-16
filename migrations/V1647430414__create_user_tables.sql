create table users(
  id uuid primary key not null,
  full_name text not null,
  email text not null,
  picture text,
  cpf text,
  address text,
  cellphone text,
  birthday timestamp without timezone not null,
  student 

)