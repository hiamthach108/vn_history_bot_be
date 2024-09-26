import { JwtService } from "@/core/jwt/jwt.service";
import { CacheService } from "@/infrastructure/cache/cache.service";
import ApiResp from "@/shared/helpers/api.helper";
import { Injectable } from "@nestjs/common";

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly cache: CacheService,
  ) {}

  async generateAdminToken() {
    const expAt = Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 60; // 60 days

    const token = await this.jwtService.generateAccessToken(
      "admin",
      "admin",
      "admin",
      expAt,
    );

    await this.cache.set("admin-token", token, expAt);

    return ApiResp.Ok({ token });
  }
}
