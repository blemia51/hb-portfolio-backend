import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Experience } from './experience.entity';
import { CreateExperienceDto } from './dto/createExperience.dto';

@Injectable()
export class ExperienceService {
  constructor(
    @InjectRepository(Experience)
    private experienceRepository: Repository<Experience>,
  ) {}

  findAll(): Promise<Experience[]> {
    return this.experienceRepository.find();
  }

  findOne(id: number): Promise<Experience> {
    return this.experienceRepository.findOneBy({ id });
  }

  create(experienceData: CreateExperienceDto): Promise<Experience> {
    const newExperience = this.experienceRepository.create(experienceData);
    return this.experienceRepository.save(newExperience);
  }

  async update(id: number, experienceData: CreateExperienceDto): Promise<Experience> {
    await this.experienceRepository.update(id, experienceData);
    return this.experienceRepository.findOneBy({ id });
  }

  async delete(id: number): Promise<void> {
    await this.experienceRepository.delete(id);
  }
}

