import { Module } from "@nestjs/common";

import { DbService } from "src/infrastructure/database/db.service";
import { UserRepository } from "src/infrastructure/repository/user.repository";
import { UserController } from "./user.controller";

@Module({
  controllers: [UserController],
  providers: [UserRepository, DbService],
})
export class UserModule {}
