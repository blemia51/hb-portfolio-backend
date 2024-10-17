// src/projects/projects.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Project } from './projects.entity';

@Injectable()
export class ProjectsService {
  constructor(
    @InjectRepository(Project)
    private projectsRepository: Repository<Project>,
  ) {}

  findAll(): Promise<Project[]> {
    return this.projectsRepository.find(); // SELECT * FROM project
  }

  findOne(id: number): Promise<Project> {
    return this.projectsRepository.findOneBy({ id });
  }

  create(project: Project): Promise<Project> {
    return this.projectsRepository.save(project); // INSERT INTO project
  }

  async remove(id: number): Promise<void> {
    await this.projectsRepository.delete(id); // DELETE FROM project WHERE id = ?
  }
}
