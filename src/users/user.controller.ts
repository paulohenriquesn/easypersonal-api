import { Body, Controller, Post, Res } from '@nestjs/common';
import { ApiBody } from '@nestjs/swagger';
import { authUserDto } from './swagger/authUser';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Post('/auth')
  @ApiBody({
    description: 'Auth user: Login or Register with Google',
    type: authUserDto,
  })
  async auth(@Body() body, @Res() res) {
    return this.userService.authUser(body, res);
  }
}
