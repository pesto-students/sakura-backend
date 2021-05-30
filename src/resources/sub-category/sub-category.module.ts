import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { SubCategory } from "src/db/entity/product/sub-category.entity";
import { SubCategoryController } from "./sub-category.controller";
import { SubCategoryService } from "./sub-category.service";

@Module({
    providers: [SubCategoryService],
    controllers: [SubCategoryController],
    imports: [TypeOrmModule.forFeature([SubCategory])]
})
export class SubCategoryModule { }