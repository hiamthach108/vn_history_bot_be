import { Module } from "@nestjs/common";

import { modules } from "./modules";
import { JwtModule } from "./core/jwt/jwt.service";
import { CacheModule } from "./infrastructure/cache/cache.service";

@Module({
  imports: [...modules, JwtModule, CacheModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
