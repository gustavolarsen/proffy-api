import {
  Column,
  Entity,
  ManyToOne,
  JoinColumn,
  PrimaryColumn,
  CreateDateColumn,
} from 'typeorm';

import { v4 as uuid } from 'uuid';
import { Subject } from './Subject';
import { User } from './User';

@Entity()
class Contact {
  @PrimaryColumn()
  readonly id: string;

  @Column()
  user_id: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @Column()
  subject_id: string;

  @ManyToOne(() => Subject)
  @JoinColumn({ name: 'subject_id' })
  subject: Subject;

  @CreateDateColumn({ name: 'created_at' })
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { Contact };
