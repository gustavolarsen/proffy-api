import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateTablesUserTeacherSubjectSchedule1614691633371 implements MigrationInterface {
    name = 'CreateTablesUserTeacherSubjectSchedule1614691633371'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `user` (`id` varchar(255) NOT NULL, `name` varchar(255) NOT NULL, `email` varchar(255) NOT NULL, `whatsapp` varchar(255) NOT NULL, `password` varchar(255) NOT NULL, UNIQUE INDEX `IDX_e12875dfb3b1d92d7d7c5377e2` (`email`), UNIQUE INDEX `IDX_d4453ec968566aea01d4e72b31` (`whatsapp`), PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `teacher` (`id` varchar(255) NOT NULL, `bio` varchar(255) NOT NULL, `avatar` varchar(255) NOT NULL, `user_id` varchar(255) NOT NULL, UNIQUE INDEX `REL_93f6fa64874b010c5f3a87c3b8` (`user_id`), PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `subject` (`id` varchar(255) NOT NULL, `name` varchar(255) NOT NULL, `cost` decimal(5,2) NOT NULL DEFAULT '0.00', `teacher_id` varchar(255) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `schedule` (`id` varchar(255) NOT NULL, `week_day` int NOT NULL, `time_start` int NOT NULL, `time_end` int NOT NULL, `subject_id` varchar(255) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("ALTER TABLE `teacher` ADD CONSTRAINT `FK_93f6fa64874b010c5f3a87c3b8b` FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `subject` ADD CONSTRAINT `FK_363efd8b6cb5ef4bb5858627075` FOREIGN KEY (`teacher_id`) REFERENCES `teacher`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `schedule` ADD CONSTRAINT `FK_0d4aea6fb531a16d5f953f79000` FOREIGN KEY (`subject_id`) REFERENCES `subject`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `schedule` DROP FOREIGN KEY `FK_0d4aea6fb531a16d5f953f79000`");
        await queryRunner.query("ALTER TABLE `subject` DROP FOREIGN KEY `FK_363efd8b6cb5ef4bb5858627075`");
        await queryRunner.query("ALTER TABLE `teacher` DROP FOREIGN KEY `FK_93f6fa64874b010c5f3a87c3b8b`");
        await queryRunner.query("DROP TABLE `schedule`");
        await queryRunner.query("DROP TABLE `subject`");
        await queryRunner.query("DROP INDEX `REL_93f6fa64874b010c5f3a87c3b8` ON `teacher`");
        await queryRunner.query("DROP TABLE `teacher`");
        await queryRunner.query("DROP INDEX `IDX_d4453ec968566aea01d4e72b31` ON `user`");
        await queryRunner.query("DROP INDEX `IDX_e12875dfb3b1d92d7d7c5377e2` ON `user`");
        await queryRunner.query("DROP TABLE `user`");
    }

}
