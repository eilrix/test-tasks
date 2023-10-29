## Installation

`npm install`

Run local MongoDB in a Docker container:

```
docker run --name test-tasks-app-mongodb -d -p 27017:27017 mongodb/mongodb-community-server

```

Populate database with test data:

```
npm run seed
```

For preview start app locally in development:

```
npm run start-dev
```

Open http://localhost:3000/

## Backend

On the backend used MVC pattern. It is clean and familiar to devs who worked with Nest.js backend.

Mongoose used as ORM for MongoDB as it is provides simple way to model data and suites well for the CRUD application.

## API Docs

API docs are presented and auto generated by Swagger UI & swagger-jsdoc

Open http://localhost:3001/api/docs/

## Frontend

Standard React application. App structured by main features and reusable components. Next.js used as framework to simplify development setup.
