import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
import { LoggerModel } from '../logger.model';
import { Cart } from '../order/cart.entity';
import { Role } from './role.entity';

@Entity("user")
export class User {
  @PrimaryGeneratedColumn({ type: "int", unsigned: true })
  id: number;

  @Column("varchar", { length: 60 })
  email: string;

  @Column("varchar", { length: 20 })
  password: string;

  @Column({ type: "int", unsigned: true })
  roleId: number;

  @ManyToOne(() => Role)
  @JoinColumn({ name: "roleId" })
  role: Role;

  @Column({ default: false })
  accountVerified: boolean;

  @OneToMany(() => Cart, cart => cart.user)
  carts: Cart[];

  @Column(type => LoggerModel)
  logger: LoggerModel;
}