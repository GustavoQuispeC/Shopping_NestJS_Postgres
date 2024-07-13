<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

1. clonar proyecto
2. `npm install`
3. Clonar el archivo `.env.template y renombrarlo a `.env```
4. Levantar la base de datos

```
docker-compose up -d
```

6. Ejecutar SEED

```
http://localhost:3002/api/seed

```

7. Levantar: `npm run start:dev`
