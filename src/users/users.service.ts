// src/users/users.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import * as bcrypt from 'bcryptjs';  // For hashing passwords

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  // Find all users
  findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  // Find a user by ID
  findOne(id: number): Promise<User> {
    return this.usersRepository.findOneBy({ id });
  }

  // Find a user by email
  findByUserEmail(email: string): Promise<User> {
    return this.usersRepository.findOneBy({ email });
  }

  // Create a new user
  async create(user: Partial<User>): Promise<User> {
    const hashedPassword = await bcrypt.hash(user.password, 10); // Hash the password
    const newUser = this.usersRepository.create({ ...user, password: hashedPassword });
    return this.usersRepository.save(newUser); // Save the user to the database
  }

  // Delete a user by ID
  async remove(id: number): Promise<void> {
    await this.usersRepository.delete(id);
  }
}
