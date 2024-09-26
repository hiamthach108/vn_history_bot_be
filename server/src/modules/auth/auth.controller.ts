import { Controller, Get } from "@nestjs/common";
import { AuthService } from "./auth.service";

@Controller("auth")
export class AuthController {
  constructor(private readonly _service: AuthService) {}

  @Get("admin-token")
  async generateAdminToken() {
    return await this._service.generateAdminToken();
  }
}
