import {MigrationInterface, QueryRunner} from "typeorm";

export class correctedEventPromoAndCollectionRelation1622196759613 implements MigrationInterface {
    name = 'correctedEventPromoAndCollectionRelation1622196759613'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `app_user` DROP COLUMN `password`");
        await queryRunner.query("ALTER TABLE `app_user` ADD `password` varchar(400) NOT NULL");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `app_user` DROP COLUMN `password`");
        await queryRunner.query("ALTER TABLE `app_user` ADD `password` varchar(20) NOT NULL");
    }

}
