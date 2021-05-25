import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { LoggerModel } from './logger.model';

export enum AppSettingKey {
    SEED_STATE = "SEED_STATE",
    PWD_ENCRYPT_KEY = "PWD_ENCRYPT_KEY"
}

@Entity("app_setting")
export class AppSetting<T extends AppSettingType> {
    @PrimaryGeneratedColumn({ type: "int", unsigned: true })
    id: number;

    @Column({ type: "enum", enum: AppSettingKey, unique: true })
    key: string;

    @Column("simple-json")
    value: T;

    @Column(type => LoggerModel)
    logger: LoggerModel;
}


export type AppSettingType = SeedState | PasswordEncryptKey;

export type SeedState = { isSeeded: boolean };
export type PasswordEncryptKey = { encryptionKey: string };
