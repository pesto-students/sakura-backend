import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { LoggerModel } from './logger.model';

export enum FileTypeEnum {
  image = "image",
  video = "video",
  pdf = "pdf"
}


@Entity("public_asset")
export class PublicAsset {
  @PrimaryGeneratedColumn({ type: "int", unsigned: true })
  id: number;

  @Column("varchar", { length: 100 })
  fileName: string;

  @Column({ type: "enum", enum: FileTypeEnum, default: FileTypeEnum.image })
  fileType: FileTypeEnum;

  @Column("varchar", { length: 250 })
  uri: string;

  @Column("simple-json")
  attributes: { tags: string[] }

  @Column(type => LoggerModel)
  logger: LoggerModel;

}