import { Body, Controller, Post, Res } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';
import { authUserDto } from './swagger/authUser';
import { UserService } from './user.service';

@ApiTags('Rota de usuarios')
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @ApiBody({
    description: 'Auth user: Login or Register with Google',
    type: authUserDto,
  })
  @ApiOperation({
    summary: 'Essa rota autentica o usuario utilizando Google Auth',
    description: 'Essa rota autentica o usuario utilizando Google Auth',
  })
  @Post('/auth')
  async auth(@Body() body, @Res() res) {
    return await this.userService.auth(body, res);
  }
}
