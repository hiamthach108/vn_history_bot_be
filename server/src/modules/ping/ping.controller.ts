import { APP_ENV, APP_NAME, APP_VERSION } from "@/shared/constants/env.const";
import { Controller, Get } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";

@ApiTags("HealthCheck")
@Controller("ping")
export class PingController {
  constructor() {
    console.log("PingController created");
  }

  @Get()
  async ping() {
    return {
      message: "pong",
      app: APP_NAME,
      env: APP_ENV,
      version: APP_VERSION,
    };
  }
}
