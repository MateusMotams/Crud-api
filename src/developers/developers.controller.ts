import { Controller, Get, Post, Body, Patch, Param, Delete, NotFoundException } from '@nestjs/common';
import { DevelopersService } from './developers.service';
import { CreateDeveloperDto } from './dto/create-developer.dto';
import { UpdateDeveloperDto } from './dto/update-developer.dto';
import { not } from 'rxjs/internal/util/not';

@Controller('developers')
export class DevelopersController {
  constructor(private readonly developersService: DevelopersService) {}

  @Post()
  create(@Body() createDeveloperDto: CreateDeveloperDto) {
    return this.developersService.create(createDeveloperDto);
  }

  @Get()
  findAll() {
    return this.developersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.developersService.findOne(id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateDeveloperDto: UpdateDeveloperDto) {
    //Quando o developer não for encontrado, lança uma exceção retornando 404
    const developer = await this.developersService.update(id,  updateDeveloperDto);
      if (!developer) throw new NotFoundException();
    return developer;
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const developer = await this.developersService.remove(id);
    if (!developer) throw new NotFoundException();
  }
}
