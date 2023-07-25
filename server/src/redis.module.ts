import { DynamicModule } from '@nestjs/common';
import { Module } from '@nestjs/common';
import IORedis from 'ioredis';

@Module({})
export class RedisModule {
  static async registerAsync(): Promise<DynamicModule> {
    // DynamicModule is the type of nestjs,  the return value of this function
    return {
      module: RedisModule,
      imports: [],
      providers: [],
      exports: [],
    };
  }
}
