"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTable1612866630869 = void 0;
const typeorm_1 = require("typeorm");
class CreateTable1612866630869 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
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
        await queryRunner.createTable(new typeorm_1.Table({
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
        await queryRunner.createTable(new typeorm_1.Table({
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
        await queryRunner.createTable(new typeorm_1.Table({
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
        await queryRunner.createTable(new typeorm_1.Table({
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
        await queryRunner.createForeignKey("user_gift", new typeorm_1.TableForeignKey({
            columnNames: ["user_id"],
            referencedColumnNames: ["id"],
            referencedTableName: "user",
            onDelete: "CASCADE"
        }));
        await queryRunner.createForeignKey("user_gift", new typeorm_1.TableForeignKey({
            columnNames: ["wish_id"],
            referencedColumnNames: ["id"],
            referencedTableName: "wish",
            onDelete: "CASCADE"
        }));
        await queryRunner.createForeignKey("user_gift", new typeorm_1.TableForeignKey({
            columnNames: ["gift_id"],
            referencedColumnNames: ["id"],
            referencedTableName: "gift",
            onDelete: "CASCADE"
        }));
    }
    async down(queryRunner) {
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
exports.CreateTable1612866630869 = CreateTable1612866630869;
//# sourceMappingURL=1612866630869-CreateTable.js.map