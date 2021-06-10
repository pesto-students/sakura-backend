import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AppSetting, AppSettingKey, AppSettingType, PasswordEncryptKey, SeedState } from 'src/db/entity/app-setting.entity';
import { Repository } from 'typeorm';
import * as randomstring from "randomstring";

@Injectable()
export class AppSettingSeederService {
    constructor(
        @InjectRepository(AppSetting)
        private appSettingRepository: Repository<AppSetting>,
    ) { }

    async isDbSeeded(): Promise<boolean> {
        const seedStateRow = await this.appSettingRepository.findOne({ where: { key: AppSettingKey.SEED_STATE } });
        if (!seedStateRow) return false;
        const seedVal = seedStateRow?.value as SeedState;
        return seedVal.isSeeded;
    }

    async setPasswordEncryptionKey() {
        try {
            const passwordEncKey = new AppSetting();
            passwordEncKey.key = AppSettingKey.PWD_ENCRYPT_KEY;
            passwordEncKey.value = {
                encryptionKey: randomstring.generate(10)
            } as PasswordEncryptKey;
            this.appSettingRepository.save(passwordEncKey);
            return true;
        } catch (error) {
            console.log(error);
            return false;
        }
    }

    async setSeeded(): Promise<boolean> {
        try {
            const seedState = new AppSetting();
            seedState.key = AppSettingKey.SEED_STATE;
            seedState.value = {
                isSeeded: true
            } as SeedState;
            this.appSettingRepository.save(seedState);
            console.log("seeding complete");
            return true;
        } catch (error) {
            console.log(error);
            return false;
        }
    }

}
