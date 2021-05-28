import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AppSetting, AppSettingKey, PasswordEncryptKey } from 'src/db/entity/app-setting.entity';
import { Repository } from 'typeorm';


@Injectable()
export class AppSettingService {
    constructor(
        @InjectRepository(AppSetting)
        private appUserRepository: Repository<AppSetting>
    ) { }

    async getAppPasswordEncodingKey() {
        const pwdRow = await this.appUserRepository.findOne({ where: { key: AppSettingKey.PWD_ENCRYPT_KEY } });
        const pwdVal = pwdRow?.value as PasswordEncryptKey;
        return pwdVal.encryptionKey;
    }
}