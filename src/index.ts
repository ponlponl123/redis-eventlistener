import ioredis from 'ioredis';
import mariadb from 'mariadb';
import events from './events/index';

const DB_HOST = process.env.DB_HOST;
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_NAME = process.env.DB_NAME;
const DB_PORT = Number(process.env.DB_PORT);
const REDIS_HOST = process.env.REDIS_HOST;
const REDIS_PORT = Number(process.env.REDIS_PORT);
const REDIS_PASSWORD = process.env.REDIS_PASSWORD;
const REDIS_DB = Number(process.env.REDIS_DB || 0);

console.info(
    '[Database Connection Info] -------------\n' +
    `  DB_HOST: ${DB_HOST}\n` +
    `  DB_USER: ${DB_USER}\n` +
    `  DB_NAME: ${DB_NAME}\n` +
    `  DB_PORT: ${DB_PORT}\n` +
    '[Redis Connection Info] ----------------\n' +
    `  REDIS_HOST: ${REDIS_HOST}\n` +
    `  REDIS_PORT: ${REDIS_PORT}\n` +
    `  REDIS_DB: ${REDIS_DB}\n` +
    '----------------------------------------'
)

export const database = mariadb.createPool({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME,
    port: DB_PORT,
    connectionLimit: 5,
    acquireTimeout: 30000,
    connectTimeout: 30000,
    debug: false
});

export const redisClient = new ioredis({
    host: REDIS_HOST,
    port: REDIS_PORT,
    password: REDIS_PASSWORD,
    db: REDIS_DB,
    lazyConnect: true,
    enableReadyCheck: true,
    retryStrategy: (times) => {
        return Math.min(times * 50, 2000);
    }
});

export const eventsListener = new events(database, redisClient);
