import { Injectable } from "@nestjs/common";
import { Prisma } from "@prisma/client";
import { DbService } from "src/infrastructure/database/db.service";

@Injectable()
export class UserRepository {
  constructor(private dbCtx: DbService) {}

  async findUserById(id: Prisma.UserWhereUniqueInput) {
    return this.dbCtx.user.findUnique({ where: id });
  }

  async getListUsers() {
    return this.dbCtx.user.findMany();
  }

  async createUser(data: Prisma.UserCreateInput) {
    return this.dbCtx.user.create({ data });
  }

  async updateUser(
    id: Prisma.UserWhereUniqueInput,
    data: Prisma.UserUpdateInput,
  ) {
    return this.dbCtx.user.update({ where: id, data });
  }
}
