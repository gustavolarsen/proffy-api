import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';

import { v4 as uuid } from 'uuid';
import { Schedule } from './Schedule';
import { Teacher } from './Teacher';

@Entity()
class Subject {
  @PrimaryColumn()
  readonly id: string;

  @Column()
  name: string;

  @Column({ type: 'decimal', precision: 5, scale: 2, default: 0 })
  cost: number;

  @Column()
  teacher_id: string;

  @ManyToOne(() => Teacher, { eager: true })
  @JoinColumn({ name: 'teacher_id' })
  teacher: Teacher;

  @OneToMany(() => Schedule, (schedule) => schedule.subject)
  schedules: Schedule[];

  @Column({ default: false })
  isActive: boolean;

  @CreateDateColumn({ name: 'created_at' })
  created_at: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updated_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { Subject };
