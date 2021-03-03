import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  CreateDateColumn,
  Entity,
  Index,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';
import bcrypt from 'bcryptjs';

import { v4 as uuid } from 'uuid';

@Entity()
class User {
  @PrimaryColumn()
  readonly id: string;

  @Column()
  name: string;

  @Column()
  @Index({ unique: true })
  email: string;

  @Column()
  @Index({ unique: true })
  whatsapp: string;

  @Column({ select: false })
  password: string;

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
  @BeforeInsert()
  @BeforeUpdate()
  hashPassword() {
    this.password = bcrypt.hashSync(this.password, 8);
  }
}

export { User };
