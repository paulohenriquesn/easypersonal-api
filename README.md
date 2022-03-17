
# service-api


## Scripts

Para executar o projeto rode

```bash
  flyway migrate
  yarn install
  yarn start:dev
```


É preciso criar uma config do flyway para rodar as migrations.

# Exemplo de Flyway Config
Você deve criar um `flyway.conf` dentro da pasta migrations/

```bash
flyway.baselineOnMigrate=true
flyway.locations=filesystem:.
flyway.url=jdbc:postgresql://DB_HOST:DB_PORT/DB_NAME
flyway.user=DB_USER
flyway.password=DB_PASSWORD
```

## Variáveis de Ambiente

Para rodar esse projeto, você vai precisar adicionar as seguintes variáveis de ambiente no seu .env

`EMAIL_HOST` Host SMTP para envio de emails

`EMAIL_PORT` Port SMTP

`EMAIL_USER` User SMTP

`EMAIL_PASSWORD` Password SMTP

`GOOGLE_CLIENT_ID` ClientID utilizado para autenticação para google/auth

`CLIENT_ID_REACT_NATIVE` ClientID Google utilizado para autenticação para google/auth

`DB_URL` URL Connection do Banco de Dados (PostgreSQL)

`JWT_SECRET` Secret text para geração de secure tokens

## Stages

`https://testapi.easypersonal.com.br/` (test-staged-api)

# Docs

`https://testapi.easypersonal.com.br/api` (test-staged-swagger-docs)