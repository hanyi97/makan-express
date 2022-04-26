# Makan Express

Simple ExpressJS api app for demo purposes.

## Scripts
### Install Dependencies
```
npm install
```

### Run Server
```
npm start
```

### Development Mode
```
npm run dev
```

### Check Linting
```
npm run lint
```

### Fix Linting
```
npm run lint:fix
```
---

## Project Structure
```
.
├── package-lock.json
├── package.json
├── src
│   ├── app.ts
│   ├── server.ts
│   ├── configs
│   │   ├── connection
│   │   │   ├── db.ts
│   │   │   └── db_init.ts
│   │   ├── constants
│   │   │   └── app_constants.ts
│   │   └── middlware
│   │       ├── auth.ts
│   │       ├── error.ts
│   │       └── not_found.ts
│   ├── controllers
│   │   ├── mobile
│   │   └── web
│   │       ├── auth_controllers.ts
│   │       ├── food_controllers.ts
│   │       └── user_controllers.ts
│   ├── dtos
│   │   ├── login_dto.ts
│   │   └── token_dto.ts
│   ├── models
│   │   ├── food.ts
│   │   └── user.ts
│   ├── routes
│   │   ├── auth_routes.ts
│   │   ├── food_routes.ts
│   │   ├── routes.ts
│   │   └── user_routes.ts
│   ├── services
│   │   ├── auth_service.ts
│   │   ├── food_service.ts
│   │   └── user_service.ts
│   ├── types
│   │   └── index.d.ts
│   └── utils
│       ├── http_exception.ts
│       └── jwt.ts
└── tsconfig.json
```

---
## References:
- [Using Sequelize with TS](https://blog.logrocket.com/using-sequelize-with-typescript/)
- [A elegant guide to Sequelize and Node.js](https://www.newline.co/@AoX04/an-elegant-guide-to-sequelize-and-nodejs--1378842c)
- [express-jsdoc-swagger](https://brikev.github.io/express-jsdoc-swagger-docs)
- [Airbnb Style Guide](https://github.com/airbnb/javascript)
- [Setup Node.js project with Typescript, ESLint, Prettier, Husky](https://gist.github.com/silver-xu/1dcceaa14c4f0253d9637d4811948437)
- [Node.js + Express + TypeScript: Unit Tests with Jest](https://losikov.medium.com/part-4-node-js-express-typescript-unit-tests-with-jest-5204414bf6f0)