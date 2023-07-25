import { DynamicModule, FactoryProvider, ModuleMetadata } from '@nestjs/common';
import { Module } from '@nestjs/common';
import IORedis, { Redis, RedisOptions } from 'ioredis';

export const IORedisKey = 'IORedis';

type RedisModuleOptions = {
  // this is the return value of the registerAsync function
  connectionOptions: RedisOptions;
  onClientReady?: (client: Redis) => void; // this is a function that takes a Redis client and returns void and is optional
};

type RedisAsyncModuleOptions = {
  // this is the return value of the registerAsync function that takes in a RedisModuleOptions and returns a RedisModuleOptions
  useFactory: (
    ...args: any[]
  ) => Promise<RedisModuleOptions> | RedisModuleOptions;
} & Pick<ModuleMetadata, 'imports'> & // ModuleMetadata and imports here implies that the RedisAsyncModuleOptions type has the imports property of the ModuleMetadata type
  Pick<FactoryProvider, 'inject'>; // the pick here implies that the RedisAsyncModuleOptions type has the inject property of the FactoryProvider type

@Module({})
export class RedisModule {
  static async registerAsync({
    useFactory,
    imports,
    inject,
  }: RedisAsyncModuleOptions): Promise<DynamicModule> {
    // DynamicModule is the type of nestjs,  the return value of this function

    const redisProvider = {
      provide: IORedisKey,
      useFactory: async (...args) => {
        const { connectionOptions, onClientReady } = await useFactory(...args);
        const client = new IORedis(connectionOptions);
        if (onClientReady) {
          onClientReady(client);
        }
        return client;
      },
      inject,
    };

    return {
      module: RedisModule,
      imports,
      providers: [redisProvider],
      exports: [redisProvider],
    };
  }
}
