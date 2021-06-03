import {MigrationInterface, QueryRunner} from "typeorm";

export class correctedDescriptionTypes1622620332357 implements MigrationInterface {
    name = 'correctedDescriptionTypes1622620332357'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `discount` DROP COLUMN `description`");
        await queryRunner.query("ALTER TABLE `discount` ADD `description` longtext NOT NULL");
        await queryRunner.query("ALTER TABLE `event_promo` DROP COLUMN `description`");
        await queryRunner.query("ALTER TABLE `event_promo` ADD `description` longtext NOT NULL");
        await queryRunner.query("ALTER TABLE `product_asset` DROP COLUMN `description`");
        await queryRunner.query("ALTER TABLE `product_asset` ADD `description` longtext NOT NULL");
        await queryRunner.query("ALTER TABLE `review` DROP COLUMN `description`");
        await queryRunner.query("ALTER TABLE `review` ADD `description` longtext NOT NULL");
        await queryRunner.query("ALTER TABLE `category` DROP COLUMN `description`");
        await queryRunner.query("ALTER TABLE `category` ADD `description` longtext NOT NULL");
        await queryRunner.query("ALTER TABLE `sub_category` DROP COLUMN `description`");
        await queryRunner.query("ALTER TABLE `sub_category` ADD `description` longtext NOT NULL");
        await queryRunner.query("ALTER TABLE `product_class` DROP COLUMN `description`");
        await queryRunner.query("ALTER TABLE `product_class` ADD `description` longtext NOT NULL");
        await queryRunner.query("ALTER TABLE `app_user` DROP COLUMN `password`");
        await queryRunner.query("ALTER TABLE `app_user` ADD `password` varchar(400) NOT NULL");
        await queryRunner.query("CREATE UNIQUE INDEX `UQ_CAMPAIGN` ON `event_collection` (`productId`, `discountId`)");
        await queryRunner.query("ALTER TABLE `event_collection` ADD CONSTRAINT `FK_00ab15b8535b0004e16cec7827d` FOREIGN KEY (`discountId`) REFERENCES `discount`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `event_collection` DROP FOREIGN KEY `FK_00ab15b8535b0004e16cec7827d`");
        await queryRunner.query("DROP INDEX `UQ_CAMPAIGN` ON `event_collection`");
        await queryRunner.query("ALTER TABLE `app_user` DROP COLUMN `password`");
        await queryRunner.query("ALTER TABLE `app_user` ADD `password` varchar(20) NOT NULL");
        await queryRunner.query("ALTER TABLE `product_class` DROP COLUMN `description`");
        await queryRunner.query("ALTER TABLE `product_class` ADD `description` varchar(500) NOT NULL");
        await queryRunner.query("ALTER TABLE `sub_category` DROP COLUMN `description`");
        await queryRunner.query("ALTER TABLE `sub_category` ADD `description` varchar(150) NOT NULL");
        await queryRunner.query("ALTER TABLE `category` DROP COLUMN `description`");
        await queryRunner.query("ALTER TABLE `category` ADD `description` varchar(150) NOT NULL");
        await queryRunner.query("ALTER TABLE `review` DROP COLUMN `description`");
        await queryRunner.query("ALTER TABLE `review` ADD `description` varchar(500) NOT NULL");
        await queryRunner.query("ALTER TABLE `product_asset` DROP COLUMN `description`");
        await queryRunner.query("ALTER TABLE `product_asset` ADD `description` varchar(200) NOT NULL");
        await queryRunner.query("ALTER TABLE `event_promo` DROP COLUMN `description`");
        await queryRunner.query("ALTER TABLE `event_promo` ADD `description` varchar(200) NOT NULL");
        await queryRunner.query("ALTER TABLE `discount` DROP COLUMN `description`");
        await queryRunner.query("ALTER TABLE `discount` ADD `description` varchar(150) NOT NULL");
    }

}
