import { Body, Controller, Post, Res } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Post('/auth')
  async auth(@Body() body, @Res() res) {
    return this.userService.authUser(body, res);
  }
}
