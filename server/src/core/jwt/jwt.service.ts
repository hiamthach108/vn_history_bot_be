import { Injectable, Module, Global } from "@nestjs/common";
import { Payload } from "./payload";
import { JwtService as NestJwt, JwtModule as NestJwtModule } from "@nestjs/jwt";
import { randomString } from "@/shared/helpers/str.helper";
import { JWT_SECRET } from "@/shared/constants/env.const";

@Injectable()
export class JwtService {
  constructor(private readonly jwt: NestJwt) {}

  async generateAccessToken(
    userId: string,
    roleId: string,
    session: string,
    exp: number,
  ) {
    // implementation
    const payload: Payload = {
      sub: userId,
      iat: Math.floor(Date.now() / 1000),
      exp,
      roleId,
      sessionId: session,
    };

    const accessToken = await this.jwt.signAsync(payload);

    return accessToken;
  }

  async generateRefreshToken() {
    return randomString(16);
  }

  async verifyAccessToken(token: string) {
    return this.jwt.verifyAsync<Payload>(token);
  }
}

@Global()
@Module({
  imports: [
    NestJwtModule.register({
      global: true,
      secret: JWT_SECRET,
    }),
  ], // Configure as needed
  providers: [JwtService],
  exports: [JwtService],
})
export class JwtModule {}
