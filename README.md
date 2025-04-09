# redis-eventlistener
A Light weight Events listener for redis and mariadb/mysql

For my project, i made this to listen a key has expired then update that data to database.

## Installation

Just download this source code, then let's edit/make anything do u want.

- the only thing needed is **Install Dependencies**
    - npm
    ```bash:
    $ npm install
    ```
    - bun
    ```bash:
    $ bun install
    ```

## Configuration

Everything is in .env files.

### Redis
- `REDIS_HOST` for hostname/ip of redis
- `REDIS_PORT` for port of redis
- `REDIS_PASSWORD` for password of redis (optional)
- `REDIS_DB` database index. (optional)

### Database (mariadb/mysql)
- `DB_HOST` for hostname/ip of database
- `DB_PORT` for port of database
- `DB_USER` for username of database
- `DB_PASSWORD` for password of database
- `DB_NAME` for database name

## Make your own listener

first, create typescript file in `src/events` directory, and in that file required these exports:

- `listenerName` name of event to listen
- `handler` your function with these optional args: `pattern: string`, `channel: string`, `message: string`
- and last one is **export default** for all of that things.

and for now you need to provide manually your handler/listener in `src/events/static.ts`, put/import your listener to `events` constant with these required:

- `name` from `[your_listener].listenerName`
- `handler` from `[your_listener].handler`

### But don't worries!, all example are in those files.

e.g. `src/events/example.ts`, `src/events/promise-example.ts`

## Usage

It's very simple
- npm
    ```bash:
    $ npm dev
    ```
- bun
    ```bash:
    $ bun dev
    ```

### To build this, Run
- npm
    ```bash:
    $ npm build
    ```
- bun
    ```bash:
    $ bun build
    ```

### To run this on production
- npm
    ```bash:
    $ npm start
    ```
    OR
    ```bash:
    $ node dist/index.js
    ```
- bun
    ```bash:
    $ bun start
    ```
    OR
    ```bash:
    $ bun run dist/index.js
    ```

## CONTRIBUTION

Feel free to contribute to this project.

I made this for community and my personal project.

Please open issue first before pull request.

Thank you.

#### Made with ❤️ by community!
