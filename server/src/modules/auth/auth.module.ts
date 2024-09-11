import { Module } from "@nestjs/common";

import { DbService } from "src/infrastructure/database/db.service";
import { UserRepository } from "src/infrastructure/repository/user.repository";
import { AuthController } from "./auth.controller";

@Module({
  controllers: [AuthController],
  providers: [UserRepository, DbService],
})
export class UserModule {}
