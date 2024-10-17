import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Experience {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 })
  title: string;

  @Column({ length: 255 })
  company: string;

  @Column({ length: 255 })
  place: string;

  @Column({ type: 'date' })
  start_date: Date;

  @Column({ type: 'date', nullable: true })
  end_date: Date;

  @Column('simple-array') // Assuming stack is an array of strings
  stack: string[];

  @Column({ type: 'text' })
  details: string;
}
