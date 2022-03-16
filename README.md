
# service-api


## Scripts

Para executar o projeto rode

```bash
  flyway migrate
  yarn install
  yarn start:dev
```


É preciso criar uma config do flyway para rodar as migrations.
## Variáveis de Ambiente

Para rodar esse projeto, você vai precisar adicionar as seguintes variáveis de ambiente no seu .env

`EMAIL_HOST`

`EMAIL_PORT`

`EMAIL_USER`

`EMAIL_PASSWORD`

`GOOGLE_CLIENT_ID`

`DB_URL`

`JWT_SECRET`