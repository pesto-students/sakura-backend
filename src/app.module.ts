import { Module } from '@nestjs/common';
import { FakeDataModule } from './fake-data/fake-data.module';
import { ProductModule } from './product/product.module';
import { CategoryModule } from './category/category.module';
import { CampaignModule } from './campaign/campaign.module'; 1
import { EventPromoModule } from './event-promo/event-promo.module';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { DB_HOST, DB_NAME, DB_PASS, DB_PORT, DB_USER } from './env';

const mysqlDbConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: DB_HOST || "localhost",
  port: parseInt(DB_PORT || "3306"),
  username: DB_USER,
  password: DB_PASS,
  database: DB_NAME,
  entities: ["src/models/**/*.entity{.ts,.js}"],
  synchronize: false,
};
@Module({
  imports: [FakeDataModule, ProductModule, CategoryModule, CampaignModule, EventPromoModule, TypeOrmModule.forRoot(mysqlDbConfig)],
  controllers: [],
  providers: [],
})
export class AppModule { }
