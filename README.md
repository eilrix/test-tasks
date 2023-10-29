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
