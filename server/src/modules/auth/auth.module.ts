import { Module } from "@nestjs/common";

import { DbService } from "src/infrastructure/database/db.service";
import { UserRepository } from "src/infrastructure/repository/user.repository";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";

@Module({
  controllers: [AuthController],
  providers: [UserRepository, DbService, AuthService],
})
export class AuthModule {}
