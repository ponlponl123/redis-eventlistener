import ioredis from 'ioredis';
import mariadb from 'mariadb';
import _debugger from '../debugger';

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

    private static async init() {
        try {
            await EventsListener.redis_client.connect();
            console.log('Redis client connected');
        }
        catch (error) {
            console.error('Error connecting to Redis:', error);
        }
    }
}

export default EventsListener;