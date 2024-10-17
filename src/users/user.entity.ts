// src/users/user.entity.ts
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  email: string;

  @Column()
  username: string;

  @Column()
  password: string;  // This will be hashed

  @Column({ default: true })
  isActive: boolean;

  @Column({ default: 'user' })
  role: string;  // Can be 'user' or 'admin'
}
