// src/about/about.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { About } from './about.entity';

@Injectable()
export class AboutService {
  constructor(
    @InjectRepository(About)
    private aboutRepository: Repository<About>,
  ) {}

  // Create a new about section
  async create(aboutText: string): Promise<About> {
    const newAbout = this.aboutRepository.create({ about: aboutText });
    return this.aboutRepository.save(newAbout);  // Save the new record
  }

  // Update an existing about section by ID
  async update(id: number, aboutText: string): Promise<About> {
    const about = await this.aboutRepository.findOneBy({ id });
    if (!about) {
      throw new NotFoundException(`About section with ID ${id} not found`);
    }
    about.about = aboutText;
    return this.aboutRepository.save(about);
  }

  // Get the latest about section (or null if none exists)
  async findLatest(): Promise<About> {
    const about = await this.aboutRepository.find({
      order: { id: 'DESC' },  // Get the latest entry by ID
      take: 1,  // Limit the result to one entry
    });
    return about.length ? about[0] : null;  // Return the first result or null
  }

  // Delete the about section by ID
  async remove(id: number): Promise<void> {
    const about = await this.aboutRepository.findOneBy({ id });
    if (!about) {
      throw new NotFoundException(`About section with ID ${id} not found`);
    }
    await this.aboutRepository.remove(about);
  }
}
