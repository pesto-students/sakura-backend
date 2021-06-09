import { Module } from '@nestjs/common';
import { ProductModule } from './resources/product/product.module';
import { CategoryModule } from './resources/category/category.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import ormConfig from "../ormconfig";
import { SeederModule } from './db/seeder/seeder.module';
import { join } from 'path';
import { AppSettingModule } from './resources/app-setting/app-setting.module';
import { PromoModule } from './resources/promo/promo.module';
import { SubCategoryModule } from './resources/sub-category/sub-category.module';
import entities from './db/entity';

const ormConfigModified = Object.assign({},
  ormConfig,
  {
    entities: [...entities],
    migrations: [join(__dirname, "db", "migrations", "**", "*.entity{.ts,.js}")],
    cli: {
      migrationsDir: join(__dirname, "db", "migrations")
    }
  }
)
@Module({
  imports: [ProductModule, CategoryModule,
    SeederModule,
    AppSettingModule, PromoModule,
    SubCategoryModule,
    TypeOrmModule.forRoot(ormConfigModified as any)
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
