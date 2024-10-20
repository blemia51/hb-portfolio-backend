import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import { ProfileService } from './profile.service';
import { CreateProfileDto } from './dto/createProfile.dto';
import { UpdateProfileDto } from './dto/updateProfile.dto';
import { Profile } from './profile.entity';

@Controller('profile')
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}

  @Post()
  async create(@Body() createProfileDto: CreateProfileDto): Promise<Profile> {
    return this.profileService.create(createProfileDto);
  }

  @Get()
  async findAll(): Promise<Profile[]> {
    return this.profileService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Profile> {
    return this.profileService.findOne(id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: number,
    @Body() updateProfileDto: UpdateProfileDto,
  ): Promise<Profile> {
    return this.profileService.update(id, updateProfileDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: number): Promise<void> {
    return this.profileService.remove(id);
  }
}
