import ioredis from 'ioredis';
import mariadb from 'mariadb';
import _debugger from '../debugger';
import { events } from './static';

class EventsListener {
    private static db_pool: mariadb.Pool;
    private static redis_client: ioredis;
    
    constructor(db_pool: mariadb.Pool, redis_client: ioredis) {
        EventsListener.db_pool = db_pool;
        EventsListener.redis_client = redis_client;

        _debugger(redis_client);
        EventsListener.init();
        console.log('EventsListener initialized');
    }

    private static registerListeners() {
        const listeners = events;
        for (const listener of listeners) {
            if (listener.handler)
                console.log(`Registering listener: ${listener.name}`),
                EventsListener.redis_client.on(listener.name, listener.handler)
            else
                console.error(`Listener ${listener.name} does not have a handler`);
        }
    }

    private static async init() {
        try {
            await EventsListener.redis_client.connect();
            console.log('Redis client connected');
            EventsListener.redis_client.on('ready', this.registerListeners)
        }
        catch (error) {
            console.error('Error connecting to Redis:', error);
        }
    }

    public static async close() {
        try {
            await EventsListener.redis_client.quit();
            console.log('Redis client disconnected');
        } catch (error) {
            console.error('Error disconnecting from Redis:', error);
        }
    }
    public static getDbPool(): mariadb.Pool {
        return EventsListener.db_pool;
    }
    public static getRedisClient(): ioredis {
        return EventsListener.redis_client;
    }
    public static async executeQuery(query: string, params: any[]): Promise<any> {
        try {
            const connection = await EventsListener.db_pool.getConnection();
            const result = await connection.query(query, params);
            connection.release();
            return result;
        } catch (error) {
            console.error('Error executing query:', error);
            throw error;
        }
    }
}

export default EventsListener;