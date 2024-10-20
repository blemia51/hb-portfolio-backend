import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('profiles') // Table name in the database
export class Profile {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  name: string;

  @Column({ nullable: false })
  jobTitle: string;

  @Column('simple-array') // To store a list of tech stacks
  techStack: string[];

  @Column({ nullable: true })
  linkedin: string;

  @Column({ nullable: true })
  github: string;

  @Column({ nullable: true })
  email: string;

  @Column({ nullable: true })
  profilePic: string; // URL to the profile picture
}
