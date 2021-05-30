import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AppSetting } from "src/db/entity/app-setting.entity";
import { AppSettingService } from "./app-setting.service";

@Module({
    providers: [AppSettingService],
    imports: [TypeOrmModule.forFeature([AppSetting])],
    exports: [TypeOrmModule, AppSettingService]
})
export class AppSettingModule { }