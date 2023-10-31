# Twitter :bird:

## :dart: Goal

- Create a fork of twitter with generated views from back-end.

## :clipboard: Description

- This application is similar to twitter. It generates views with pug.

## :wrench: TOOLS

- node
- express
- express-session
- morgan
- pug
- mongoose
- connect-mongo
- brcypt
- passeport
- passeport-local

## :computer: Use

- Create a database named `twitter` with mongoDB in cluster collections
- Then specify port with PORT varaible in .env.example then rename it in .env or leave the port 3000 by default
- Add user database name and password in .env
- Add your own `SESSION_SECRET` and specify `AUTH_AGE` in milliseconds.

- Install packages

```
npm i
```

- Run app in development :construction:

```
npm start
```

- Run app in production :rocket:

```
npm run start:prod
```
