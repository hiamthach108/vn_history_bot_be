import { Controller, Get, Param, Post } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { UserRepository } from "src/infrastructure/repository/user.repository";

@ApiTags("Users")
@Controller("users")
export class UserController {
  constructor(private readonly userRepo: UserRepository) {}

  @Get()
  async getUsers() {
    return this.userRepo.getListUsers();
  }

  @Get(":id")
  async getUserById(@Param("id") id: string) {
    return this.userRepo.findUserById({ id });
  }

  @Post()
  async createUser() {
    return this.userRepo.createUser({
      email: "test@test.gmail.com",
      fullName: "Test User",
      avatar: "https://picsum.photos/200",
      isActive: true,
      lastAccess: new Date(),
      Role: {
        connect: {
          id: "ADMIN",
        },
      },
    });
  }
}
