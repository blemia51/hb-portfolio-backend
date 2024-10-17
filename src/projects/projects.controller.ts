import { Body, Controller, Delete, Get, Param, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Project } from './projects.entity';
import { ProjectsService } from './projects.service';

@Controller('projects')
export class ProjectsController {
  constructor(private readonly projectsService: ProjectsService) {}

  @Get()
  //@UseGuards(AuthGuard('jwt'))
  findAll(): Promise<Project[]> {
    return this.projectsService.findAll();
  }

  @Get(':id')
  @UseGuards(AuthGuard('jwt'))
  findOne(@Param('id') id: string): Promise<Project> {
    return this.projectsService.findOne(+id);
  }

  @Post()
  create(@Body() project: Project): Promise<Project> {
    return this.projectsService.create(project);
  }

  @Delete(':id')
  @UseGuards(AuthGuard('jwt'))
  remove(@Param('id') id: string): Promise<void> {
    return this.projectsService.remove(+id);
  }
}

