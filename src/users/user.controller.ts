import {
  Body,
  Controller,
  Get,
  Headers,
  Post,
  Put,
  Res,
  UseGuards
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBody, ApiOperation, ApiSecurity, ApiTags } from '@nestjs/swagger';
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
    return this.userService.auth(body, res);
  }

  @UseGuards(AuthGuard('jwt'))
  @ApiOperation({
    summary: 'Essa rota retorna os dados de um usuario utilizando (JWT Token)',
    description:
      'Essa rota retorna os dados de um usuario utilizando (JWT Token)',
  })
  @ApiSecurity('jwt_token')
  @Get('/')
  async fetch(@Headers() headers, @Res() res) {
    const token = headers.authorization;
    return this.userService.fetch(token, res);
  }

  @UseGuards(AuthGuard('jwt'))
  @ApiSecurity('jwt_token')
  @ApiOperation({
    summary: 'Essa rota atualiza os dados de um usuario utilizando (JWT Token)',
    description:
      'Essa rota atualiza os dados de um usuario utilizando (JWT Token)',
  })
  @Put('/')
  async updateUser(@Headers() headers, @Body() body, @Res() res) {
    const token = headers.authorization;
    return this.userService.update(token, body, res);
  }
}
