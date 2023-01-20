import {MigrationInterface, QueryRunner, Table, TableIndex, TableColumn, TableForeignKey } from "typeorm";

export class CreateTable1612866630869 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        
        /* let query1: string ="CREATE TABLE config_app (" + 
                            "id int NOT NULL AUTO_INCREMENT," +
                            "my_key varchar(255) NOT NULL, " + 
                            "my_value varchar(255) NOT NULL, " +
                            "data_type varchar(255) NOT NULL, " +
                            "PRIMARY KEY(id) ) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci";

        let query2: string ="CREATE TABLE `user` ( " + 
                            "`id` int NOT NULL AUTO_INCREMENT, " + 
                            "`name` varchar(255) NOT NULL, " + 
                            "`email` varchar(255) NOT NULL, " + 
                            "`createdAt` datetime NOT NULL, " + 
                            "`role` varchar(255) NOT NULL DEFAULT 'USER', " + 
                            "`password` varchar(255) NOT NULL, " + 
                            "PRIMARY KEY (`id`), " + 
                            "UNIQUE KEY `IDX_e12875dfb3b1d92d7d7c5377e2` (`email`) " + 
                            ") ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci";

        let query3: string ="CREATE TABLE `wish` ( " +
                            "`id` int NOT NULL AUTO_INCREMENT, " +
                            "`content` varchar(255) NOT NULL, " +
                            "PRIMARY KEY (`id`) " +
                            ") ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci";
        
        let query4: string ="CREATE TABLE `gift` ( " +
                            "`id` int NOT NULL AUTO_INCREMENT, " +
                            "`value` int NOT NULL, " +
                            "`max_quantity` int NOT NULL, " +
                            "`issued` int NOT NULL, " +
                            "PRIMARY KEY (`id`), " +
                            "UNIQUE KEY `IDX_dc7cc09d02618eee14d397634e` (`value`) " +
                            ") ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci";
        
        let query5: string ="CREATE TABLE `user_gift` ( " +
                            "`user_id` int NOT NULL, " +
                            "`wish_id` int NOT NULL, " +
                            "`gift_id` int DEFAULT NULL, " +
                            "PRIMARY KEY (`user_id`,`wish_id`), " +
                            "KEY `FK_ae5561aeaee64b8fdd6e7d50e72` (`wish_id`), " +
                            "KEY `FK_5e07259c58f8550a5c4918ae96e` (`gift_id`), " +
                            "CONSTRAINT `FK_14031f3c85ff6cd7a55987fd46a` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`), " +
                            "CONSTRAINT `FK_5e07259c58f8550a5c4918ae96e` FOREIGN KEY (`gift_id`) REFERENCES `gift` (`id`), " +
                            "CONSTRAINT `FK_ae5561aeaee64b8fdd6e7d50e72` FOREIGN KEY (`wish_id`) REFERENCES `wish` (`id`) " +
                            ") ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci";
        console.log(query1);
        await queryRunner.query(query1);
        await queryRunner.query(query2);
        await queryRunner.query(query3);
        await queryRunner.query(query4);
        await queryRunner.query(query5); */

        await queryRunner.createTable(new Table({
            name: "config_app",
            columns: [
                {
                    name: "id",
                    type: "int",
                    isPrimary: true,
                    generationStrategy: "increment",
                    isGenerated: true
                },
                {
                    name: "my_key",
                    type: "varchar",
                    isNullable: false
                },
                {
                    name: "my_value",
                    type: "varchar",
                    isNullable: false
                },
                {
                    name: "data_type",
                    type: "varchar",
                    isNullable: false
                }
            ]
        }), true);

        await queryRunner.createTable(new Table({
            name: "user",
            columns: [
                {
                    name: "id",
                    type: "int",
                    isPrimary: true,
                    generationStrategy: "increment",
                    isGenerated: true
                },
                {
                    name: "name",
                    type: "varchar",
                    isNullable: false
                },
                {
                    name: "email",
                    type: "varchar",
                    isNullable: false,
                    isUnique: true
                },
                {
                    name: "createdAt",
                    type: "datetime",
                    isNullable: false
                },
                {
                    name: "role",
                    type: "varchar",
                    isNullable: false,
                    default: "'USER'"
                },
                {
                    name: "password",
                    type: "varchar",
                    isNullable: false
                }
            ]
        }), true);

        await queryRunner.createTable(new Table({
            name: "wish",
            columns: [
                {
                    name: "id",
                    type: "int",
                    isPrimary: true,
                    generationStrategy: "increment",
                    isGenerated: true
                },
                {
                    name: "content",
                    type: "nvarchar",
                    isNullable: false
                }, 
                {
                    name: "forWinner",
                    type: "boolean",
                    isNullable: false,
                    default: false
                },
                {
                    name: "link_img",
                    type: "varchar",
                    isNullable: true
                }
            ]
        }), true);

        await queryRunner.createTable(new Table({
            name: "gift",
            columns: [
                {
                    name: "id",
                    type: "int",
                    isPrimary: true,
                    generationStrategy: "increment",
                    isGenerated: true
                },
                {
                    name: "value",
                    type: "int",
                    isNullable: false
                },
                {
                    name: "max_quantity",
                    type: "int",
                    isNullable: false,
                    isUnique: true
                },
                {
                    name: "issued",
                    type: "int",
                    isNullable: false,
                    default: 0
                }
            ]
        }), true);

        await queryRunner.createTable(new Table({
            name: "user_gift",
            columns: [
                {
                    name: "id",
                    type: "int",
                    isPrimary: true,
                    generationStrategy: "increment",
                    isGenerated: true
                },
                {
                    name: "user_id",
                    type: "int",
                    isPrimary: false
                },
                {
                    name: "wish_id",
                    type: "int",
                    isPrimary: false
                },
                {
                    name: "gift_id",
                    type: "int",
                    isPrimary: false
                },
                {
                    name: "createdAt",
                    type: "datetime",
                    isNullable: false,
                }
            ]
        }), true);

        await queryRunner.createForeignKey("user_gift", new TableForeignKey({
            columnNames: ["user_id"],
            referencedColumnNames: ["id"],
            referencedTableName: "user",
            onDelete: "CASCADE"
        }));

        await queryRunner.createForeignKey("user_gift", new TableForeignKey({
            columnNames: ["wish_id"],
            referencedColumnNames: ["id"],
            referencedTableName: "wish",
            onDelete: "CASCADE"
        }));

        await queryRunner.createForeignKey("user_gift", new TableForeignKey({
            columnNames: ["gift_id"],
            referencedColumnNames: ["id"],
            referencedTableName: "gift",
            onDelete: "CASCADE"
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        const table = await queryRunner.getTable("user_gift");
        const fkUser = table.foreignKeys.find(fk => fk.columnNames.indexOf("user_id") != -1);
        const fkWish = table.foreignKeys.find(fk => fk.columnNames.indexOf("wish_id") != -1);
        const fkGift = table.foreignKeys.find(fk => fk.columnNames.indexOf("gift_id") != -1);
        
        await queryRunner.dropForeignKey("user_gift", fkUser);
        await queryRunner.dropForeignKey("user_gift", fkWish);
        await queryRunner.dropForeignKey("user_gift", fkGift);

        await queryRunner.dropColumn("user_gift", "user_id");
        await queryRunner.dropColumn("user_gift", "wish_id");
        await queryRunner.dropColumn("user_gift", "gift_id");

        await queryRunner.dropTable("user_gift");
        await queryRunner.dropTable("gift");
        await queryRunner.dropTable("wish");
        await queryRunner.dropTable("user");
        await queryRunner.dropTable("config_app");
        await queryRunner.dropTable("lixisgroup_migration_table");

    }

}
