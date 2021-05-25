import {MigrationInterface, QueryRunner} from "typeorm";

export class addedAppSetting1621937326292 implements MigrationInterface {
    name = 'addedAppSetting1621937326292'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `app_setting` (`id` int UNSIGNED NOT NULL AUTO_INCREMENT, `key` enum ('SEED_STATE', 'PWD_ENCRYPT_KEY') NOT NULL, `value` text NOT NULL, `createdById` int UNSIGNED NULL, `updatedById` int UNSIGNED NULL, `loggerCreatedon` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, `loggerUpdatedon` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, `loggerCreatedbyid` int UNSIGNED NULL, `loggerUpdatedbyid` int UNSIGNED NULL, UNIQUE INDEX `IDX_0d66bfb0d9f93124a4549d21af` (`key`), PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("ALTER TABLE `app_setting` ADD CONSTRAINT `FK_ccd250efe0d74b6b1f3afcebe21` FOREIGN KEY (`createdById`) REFERENCES `app_user`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `app_setting` ADD CONSTRAINT `FK_6ae25c3b28dd455c5afde642144` FOREIGN KEY (`updatedById`) REFERENCES `app_user`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `app_setting` DROP FOREIGN KEY `FK_6ae25c3b28dd455c5afde642144`");
        await queryRunner.query("ALTER TABLE `app_setting` DROP FOREIGN KEY `FK_ccd250efe0d74b6b1f3afcebe21`");
        await queryRunner.query("DROP INDEX `IDX_0d66bfb0d9f93124a4549d21af` ON `app_setting`");
        await queryRunner.query("DROP TABLE `app_setting`");
    }

}
