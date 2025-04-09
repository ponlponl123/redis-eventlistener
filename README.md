# pona-redis-eventlistener
A Light weight Events listener for pona redis

## Installation

Just download this source code, then let's edit/make anything do u want.

- Install Dependencies
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

### Database (mariadb/mysql)
- `DB_HOST` for hostname/ip of database
- `DB_PORT` for port of database
- `DB_USER` for username of database
- `DB_PASSWORD` for password of database
- `DB_DATABASE` for database name

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