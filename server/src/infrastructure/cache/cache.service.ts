import type { RedisClientOptions } from "redis";
import { Global, Inject, Injectable, Module } from "@nestjs/common";

import * as redisStore from "cache-manager-redis-store";

import {
  CACHE_MANAGER,
  CacheModule as NestCacheModule,
  CacheStore,
} from "@nestjs/cache-manager";

import { Cache } from "cache-manager";

import {
  APP_NAME,
  REDIS_HOST,
  REDIS_PASSWORD,
  REDIS_PORT,
} from "@/shared/constants/env.const";

@Injectable()
export class CacheService {
  // Cache service implementation
  constructor(
    @Inject(CACHE_MANAGER)
    private cacheManager: CacheStore,
  ) {}

  async get(key: string) {
    return await this.cacheManager.get(key);
  }

  async set(key: string, value: any, ttl?: number) {
    console.log("Setting cache", key, value, ttl);
    const k = `${APP_NAME}:${key}`;

    return await this.cacheManager.set(k, value, ttl);
  }
}

@Global()
@Module({
  imports: [
    NestCacheModule.register<RedisClientOptions>({
      store: redisStore,
      host: REDIS_HOST,
      port: REDIS_PORT,
      password: REDIS_PASSWORD,
    } as RedisClientOptions),
  ], // Configure as needed
  providers: [CacheService],
  exports: [CacheService],
})
export class CacheModule {}
