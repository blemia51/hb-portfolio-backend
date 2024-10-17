// src/about/about.controller.ts
import { Controller, Get, Post, Delete, Body, Param, Patch, NotFoundException } from '@nestjs/common';
import { AboutService } from './about.service';
import { About } from './about.entity';

@Controller('about')
export class AboutController {
  constructor(private readonly aboutService: AboutService) {}

  // Get the latest about section
  @Get()
  async findLatest(): Promise<About> {
    const about = await this.aboutService.findLatest();
    if (!about) {
      throw new NotFoundException('No About section found');
    }
    return about;
  }

  // Create a new about section
  @Post()
  create(@Body('about') aboutText: string): Promise<About> {
    return this.aboutService.create(aboutText);
  }

  // Update the about section by ID
  @Patch(':id')
  update(@Param('id') id: number, @Body('about') aboutText: string): Promise<About> {
    return this.aboutService.update(id, aboutText);
  }

  // Delete the about section by ID
  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.aboutService.remove(id);
  }
}
