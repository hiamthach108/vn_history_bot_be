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
    };
  }
}
