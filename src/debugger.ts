import ioredis from 'ioredis';

export default function _debugger(redis: ioredis): void {
    console.log(
        '\nRedis Debugger initialized. Listening for Redis events...',
        '\n----------------------------------------'
    );
    redis.on('error', (err) => {
        console.error('Redis error:', err);
    });
    redis.on('connect', () => {
        console.log('Redis connected');
    });
    redis.on('ready', () => {
        console.log('Redis ready');
    });
    redis.on('close', () => {
        console.log('Redis connection closed');
    });
    redis.on('reconnecting', () => {
        console.log('Redis reconnecting');
    });
    redis.on('end', () => {
        console.log('Redis connection ended');
    });
    redis.on('warning', (err) => {
        console.warn('Redis warning:', err);
    });
    redis.on('info', (err) => {
        console.info('Redis info:', err);
    });
    redis.on('message', (channel, message) => {
        console.log(`Redis message from ${channel}:`, message);
    });
}