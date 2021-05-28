import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
import { LoggerModel } from '../logger.model';
import { Cart } from '../order/cart.entity';
import { Favorite } from '../product/favorite.entity';
import { AppRole } from './role.entity';

@Entity("app_user")
export class AppUser {
  @PrimaryGeneratedColumn({ type: "int", unsigned: true })
  id: number;

  @Column("varchar", { length: 60 })
  email: string;

  @Column("varchar", { length: 400 })
  password: string;

  @Column({ type: "int", unsigned: true })
  roleId: number;

  @ManyToOne(() => AppRole)
  @JoinColumn({ name: "roleId" })
  role: AppRole;

  @Column({ default: false })
  accountVerified: boolean;

  @OneToMany(() => Cart, cart => cart.user)
  carts: Cart[];

  @OneToMany(() => Favorite, favorite => favorite.user)
  favorites: Favorite[];

  @Column(type => LoggerModel)
  logger: LoggerModel;
}