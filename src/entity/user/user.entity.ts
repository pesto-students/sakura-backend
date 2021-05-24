import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { LoggerModel } from '../logger.model';

@Entity("user")
export class User {
  @PrimaryGeneratedColumn({ type: "int", unsigned: true })
  id: number;

  @Column("varchar", { length: 60 })
  email: string;

  @Column("varchar", { length: 20 })
  password: string;

  @Column({ default: false })
  accountVerified: boolean;

  @Column(type => LoggerModel)
  logger: LoggerModel;
}