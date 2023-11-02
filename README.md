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
- bootstrap
- mongoose
- connect-mongo
- brcypt
- passeport
- passeport-local
- multer
- errorhandler
- dotenv

## :computer: Use

- Rename .env.example file in .env
- Replace `DB` variable with mongoDB database link and replace user database name and password
- Then specify port with `PORT` varaible in .env.example then rename it in .env or leave the port 3000 by default
- Add your own `SESSION_SECRET` and specify `AUTH_AGE` in milliseconds.
- Write number of round to for password hash with brcypt in `BCRYPT_ROUND`

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
