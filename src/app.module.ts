import { Module } from '@nestjs/common';
import { FakeDataModule } from './resources/fake-data/fake-data.module';
import { ProductModule } from './resources/product/product.module';
import { CategoryModule } from './resources/category/category.module';
import { CampaignModule } from './resources/campaign/campaign.module'; 1
import { EventPromoModule } from './resources/event-promo/event-promo.module';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { DB_HOST, DB_NAME, DB_PASS, DB_PORT, DB_USER } from './env';

const mysqlDbConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: DB_HOST || "localhost",
  port: parseInt(DB_PORT || "3306"),
  username: DB_USER,
  password: DB_PASS,
  database: DB_NAME,
  entities: ["src/entity/**/*.entity{.ts,.js}"],
  synchronize: false,
};
@Module({
  imports: [FakeDataModule, ProductModule, CategoryModule, CampaignModule, EventPromoModule, TypeOrmModule.forRoot(mysqlDbConfig)],
  controllers: [],
  providers: [],
})
export class AppModule { }
