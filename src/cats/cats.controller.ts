import {
  Controller,
  Get,
  Header,
  Post,
  Query,
  Req,
  Redirect,
  Param,
  Body,
  Put,
  Delete,
  Res,
} from '@nestjs/common';
import { CreateCatDto } from './create-cat.dto';

@Controller('cats')
export class CatsController {
  @Get()
  findAll(@Res() res: Response): string {
    return 'This action returns all cats';
  }

  @Get(':id')
  findOne(@Param('id') id: string): string {
    return `This action returns a #${id} cat`;
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() createCatDto: CreateCatDto) {
    return `This action updates a #${id} cat`;
  }

  @Post()
  async create(@Body() createCatDto: CreateCatDto): Promise<string> {
    return 'This action adds a new cat';
  }

  @Delete()
  remove(@Query('id') id: string): string {
    return `This action removes a #${id} cat`;
  }
}
