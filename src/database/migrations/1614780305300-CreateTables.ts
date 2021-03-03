import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateTables1614780305300 implements MigrationInterface {
    name = 'CreateTables1614780305300'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `user` ADD `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)");
        await queryRunner.query("ALTER TABLE `user` ADD `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6)");
        await queryRunner.query("ALTER TABLE `teacher` ADD `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)");
        await queryRunner.query("ALTER TABLE `teacher` ADD `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6)");
        await queryRunner.query("ALTER TABLE `subject` ADD `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)");
        await queryRunner.query("ALTER TABLE `subject` ADD `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6)");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `subject` DROP COLUMN `updated_at`");
        await queryRunner.query("ALTER TABLE `subject` DROP COLUMN `created_at`");
        await queryRunner.query("ALTER TABLE `teacher` DROP COLUMN `updated_at`");
        await queryRunner.query("ALTER TABLE `teacher` DROP COLUMN `created_at`");
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `updated_at`");
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `created_at`");
    }

}
