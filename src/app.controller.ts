import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { AppService } from './app.service';

@ApiTags('/')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @ApiOperation({
    summary: 'Essa rota retorona se o servidor está funcionando',
    description: 'Essa rota retorona se o servidor está funcionando',
  })
  @Get('/health')
  async getHello(): Promise<string> {
    return await this.appService.getHello();
  }
}
