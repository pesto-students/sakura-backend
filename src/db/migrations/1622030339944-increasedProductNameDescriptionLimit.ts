import {MigrationInterface, QueryRunner} from "typeorm";

export class increasedProductNameDescriptionLimit1622030339944 implements MigrationInterface {
    name = 'increasedProductNameDescriptionLimit1622030339944'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `product` DROP COLUMN `name`");
        await queryRunner.query("ALTER TABLE `product` ADD `name` varchar(200) NOT NULL");
        await queryRunner.query("ALTER TABLE `product` DROP COLUMN `description`");
        await queryRunner.query("ALTER TABLE `product` ADD `description` varchar(2000) NOT NULL");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `product` DROP COLUMN `description`");
        await queryRunner.query("ALTER TABLE `product` ADD `description` varchar(500) NOT NULL");
        await queryRunner.query("ALTER TABLE `product` DROP COLUMN `name`");
        await queryRunner.query("ALTER TABLE `product` ADD `name` varchar(30) NOT NULL");
    }

}
