import {MigrationInterface, QueryRunner} from "typeorm";

export class increasedUriLimitPublicAsset1622028191520 implements MigrationInterface {
    name = 'increasedUriLimitPublicAsset1622028191520'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `public_asset` DROP COLUMN `fileName`");
        await queryRunner.query("ALTER TABLE `public_asset` ADD `fileName` varchar(100) NOT NULL");
        await queryRunner.query("ALTER TABLE `public_asset` DROP COLUMN `uri`");
        await queryRunner.query("ALTER TABLE `public_asset` ADD `uri` varchar(250) NOT NULL");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `public_asset` DROP COLUMN `uri`");
        await queryRunner.query("ALTER TABLE `public_asset` ADD `uri` varchar(120) NOT NULL");
        await queryRunner.query("ALTER TABLE `public_asset` DROP COLUMN `fileName`");
        await queryRunner.query("ALTER TABLE `public_asset` ADD `fileName` varchar(70) NOT NULL");
    }

}
