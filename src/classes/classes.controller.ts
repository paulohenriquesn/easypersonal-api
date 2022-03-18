import {
  Body,
  Controller,
  Get,
  Headers,
  Param,
  Post,
  Res
} from '@nestjs/common';
import { ApiBody, ApiOperation, ApiSecurity, ApiTags } from '@nestjs/swagger';
import { ClassesService } from './classes.service';
import { createModalityDto } from './swagger/createModality';

@ApiTags('Rota das aulas')
@Controller('classes')
export class ClassesController {
  constructor(private readonly classesService: ClassesService) {}

  @ApiBody({
    description: 'Create a Modality for a Class',
    type: createModalityDto,
  })
  @ApiOperation({
    summary: 'Essa rota cria uma modalidade para uma aula',
    description: 'Essa rota cria uma modalidade para uma aula',
  })
  @ApiSecurity('jwt_token')
  @Post('/modality')
  async createModality(@Headers() headers, @Body() body, @Res() res) {
    const token = headers.authorization;
    return await this.classesService.createModality(token, body, res);
  }

  @ApiBody({
    description: 'Fetch modalities',
  })
  @ApiOperation({
    summary:
      'Essa rota retorna todas as modalidades de um treinador (JWT Token)',
    description:
      'Essa rota retorna todas as modalidades de um treinador (JWT Token)',
  })
  @ApiSecurity('jwt_token')
  @Get('/modality')
  async fetchModalities(@Headers() headers, @Res() res) {
    const token = headers.authorization;
    return await this.classesService.fetchModalities(token, res);
  }

  @ApiBody({
    description: 'Fetch a modality',
  })
  @ApiOperation({
    summary:
      'Essa rota retorna uma modalidade especifica treinador (JWT Token)',
    description:
      'Essa rota retorna uma modalidade especifica treinador (JWT Token)',
  })
  @ApiSecurity('jwt_token')
  @Get('/modality/:modality_id')
  async fetchModality(
    @Headers() headers,
    @Param('modality_id') modality_id,
    @Res() res,
  ) {
    const token = headers.authorization;
    return await this.classesService.fetchModality(token, modality_id, res);
  }
}
