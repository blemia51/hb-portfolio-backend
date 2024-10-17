import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Project {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  stack: string;

  @Column({ type: 'text', nullable: true })
  link: string; // Link to GitHub or live project demo
}
