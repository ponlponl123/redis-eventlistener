import ioredis from 'ioredis';
import mariadb from 'mariadb';
import events from './events/index';

export const database = mariadb.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: Number(process.env.DB_PORT),
    connectionLimit: 5,
    acquireTimeout: 30000,
    connectTimeout: 30000,
    debug: false
});

export const redisClient = new ioredis({
    host: process.env.REDIS_HOST,
    port: Number(process.env.REDIS_PORT),
    password: process.env.REDIS_PASSWORD,
    db: Number(process.env.REDIS_DB),
    lazyConnect: true,
    enableReadyCheck: true,
    retryStrategy: (times) => {
        return Math.min(times * 50, 2000);
    }
});

export const eventsListener = new events(database, redisClient);