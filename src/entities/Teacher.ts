import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryColumn,
} from 'typeorm';

import { v4 as uuid } from 'uuid';
import { User } from './User';

@Entity()
class Teacher {
  @PrimaryColumn()
  readonly id: string;

  @Column()
  bio: string;

  @Column()
  avatar: string;

  @Column()
  user_id: string;

  @OneToOne(() => User, { eager: true })
  @JoinColumn({ name: 'user_id' })
  user: User;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { Teacher };
