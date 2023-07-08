
# POC NestJS + Serverless

<p>A POC tem como objetivo desenvolver uma aplicação utilizando AWS Lambda e o framework Serverless.</p>

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.


# Links
- [API Local](http://localhost:3000/dev)
- [Serverless](https://www.serverless.com/)


## Pre requisitos para execução localmente

É necessario instalar as seguintes ferramentas para executar a POC localmente:

* [Serverless](https://www.serverless.com/framework/docs/getting-started)
* [Yarn](https://classic.yarnpkg.com/lang/en/docs/install/#mac-stable)
* [AWS CLI](https://docs.aws.amazon.com/pt_br/cli/latest/userguide/getting-started-install.html) - Necessário para fazer deploy


## Rodar aplicação localmente

Os comandos devem ser rodados na pasta raiz do projeto.

```bash
# gerar pasta dist
$ yarn build

# rodar serverless cliente
$ sls offline
```
### ou

```bash
# rodar custom script
$ yarn start:local

```

## Teste

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```

## Deploy

```bash
# gerar pasta dist
$ yarn build

# realizar deploy
$ sls deploy
```

## Deploy Prod

```bash
# gerar pasta dist
$ yarn build

# realizar deploy
$ sls deploy --stage prod
```
