import { type RedisValue, type RedisKey } from 'ioredis';
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