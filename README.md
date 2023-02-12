# TS-Express Prisma starter

With full typesafe CRUD operation demo, [click here](https://github.com/edr3x/ts-prisma-starter/tree/main/src/routes) to see example endpoints

> Don't forget to put `.env` in `.gitignore` on your project

## Available Scripts

In the project directory, you can run:

### `yarn` or `npm i` or `pnpm i`

Get all required packages

### `yarn dev`

Runs the app in the development mode.\
Open [http://localhost:5050](http://localhost:5050) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `yarn build`

Generates the JS output in `dist` folder.

### `yarn start`

Runs the js code from `dist` folder.

### `yarn prisma migrate dev`

Does database migration

### `yarn prisma generate`

Generates type definations

### `yarn prisma studio`

Opens GUI database in localhost

> Have to rerun this if migration is done after

### `docker-compose -f docker-compose.db.yaml up -d`

Start postgres container
> Alternatively if on unix shell and have `make`, can use `make startdb`

### `docker-compose -f docker-compose.db.yaml down`

Stop postgres container
> Alternatively if on unix shell and have `make`, can use `make stopdb`
