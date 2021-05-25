import { Module } from '@nestjs/common';
import { FakeDataModule } from './resources/fake-data/fake-data.module';
import { ProductModule } from './resources/product/product.module';
import { CategoryModule } from './resources/category/category.module';
import { CampaignModule } from './resources/campaign/campaign.module'; 1
import { EventPromoModule } from './resources/event-promo/event-promo.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import  ormConfig from "../ormconfig";
@Module({
  imports: [FakeDataModule, ProductModule, CategoryModule, 
            CampaignModule, EventPromoModule, 
            TypeOrmModule.forRoot(ormConfig as any)
          ],
  controllers: [],
  providers: [],
})
export class AppModule { }
