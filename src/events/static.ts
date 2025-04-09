import { type RedisValue, type RedisKey } from 'ioredis';

// Import your listeners here
import example from './promise-example';
import promiseExample from './promise-example';

export interface Listener {
    name: string;
    handler: (
        (() => void) |
        ((key?: RedisKey) => void) |
        ((key?: RedisKey, value?: RedisValue) => void)
    );
}

// put your listeners here
export const events: Listener[] = [
    {
        name: example.listenerName,
        handler: example.handler
    },
    {
        name: promiseExample.listenerName,
        handler: promiseExample.handler
    }
]