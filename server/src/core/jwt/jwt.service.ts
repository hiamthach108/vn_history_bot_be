import { Injectable } from "@nestjs/common";
import { Payload } from "./payload";
import { JwtService as NestJwt } from "@nestjs/jwt";
import { randomString } from "@/shared/helpers/str.helper";

@Injectable()
export class JwtService {
  constructor(private readonly jwt: NestJwt) {}

  async generateAccessToken(payload: Payload) {
    // implementation
    const accessToken = await this.jwt.signAsync(payload);

    return accessToken;
  }

  async generateRefreshToken() {
    return randomString(16);
  }
}
