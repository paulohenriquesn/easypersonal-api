import {
  Body,
  Controller,
  Get,
  Headers,
  Post,
  Res,
  UseGuards
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
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

  @UseGuards(AuthGuard('jwt'))
  @Get('/')
  async fetch(@Headers() headers, @Res() res) {
    const token = headers.authorization;
    return this.userService.fetchUser(token, res);
  }
}
