import { Body, Controller, Post, Res } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post('/')
  async auth(@Body() body, @Res() res) {
    return this.authService.authUser(body, res);
  }
}
