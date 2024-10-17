import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { ExperienceService } from './experience.service';
import { CreateExperienceDto } from './dto/createExperience.dto';

@Controller('experience')
export class ExperienceController {
  constructor(private readonly experienceService: ExperienceService) {}

  @Get()
  findAll() {
    return this.experienceService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.experienceService.findOne(id);
  }

  @Post()
  create(@Body() createExperienceDto: CreateExperienceDto) {
    return this.experienceService.create(createExperienceDto);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() updateExperienceDto: CreateExperienceDto) {
    return this.experienceService.update(id, updateExperienceDto);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.experienceService.delete(id);
  }
}
