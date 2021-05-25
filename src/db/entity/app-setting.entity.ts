import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { LoggerModel } from './logger.model';

export enum AppSettingKey {
    SEED_STATE = "SEED_STATE",
    PWD_ENCRYPT_KEY = "PWD_ENCRYPT_KEY"
}

@Entity("app_setting")
export class AppSetting {
    @PrimaryGeneratedColumn({ type: "int", unsigned: true })
    id: number;

    @Column({ type: "enum", enum: AppSettingKey, unique: true })
    key: string;

    @Column("simple-json")
    value: { data: AppSettingVal, other: any }

    @Column(type => LoggerModel)
    logger: LoggerModel;
}


export type AppSettingVal = SeedState | PasswordEncryptKey;

export type SeedState = { isSeeded: boolean, other: null };
export type PasswordEncryptKey = { encryptionKey: string, other: null };
