import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';

import { v4 as uuid } from 'uuid';
import { Subject } from './Subject';

@Entity()
class Schedule {
  @PrimaryColumn()
  readonly id: string;

  @Column()
  week_day: number;

  @Column()
  time_start: number;

  @Column()
  time_end: number;

  @Column()
  subject_id: string;

  @ManyToOne(() => Subject)
  @JoinColumn({ name: 'subject_id' })
  subject: Subject;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { Schedule };
