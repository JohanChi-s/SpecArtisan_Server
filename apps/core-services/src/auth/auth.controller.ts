import { Body, Controller, Post } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { AuthService } from "./auth.service";
import { CreateUserDto, Credentials } from "../auth/Credentials";
import { UserInfo } from "./UserInfo";

@ApiTags("auth")
@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post("login")
  async login(@Body() body: Credentials): Promise<UserInfo> {
    return this.authService.login(body);
  }
@Post("register")
  async register(@Body() body: CreateUserDto): Promise<UserInfo> {
    return this.authService.register(body);
  }
}
