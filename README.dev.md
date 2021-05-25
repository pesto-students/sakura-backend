## DB migrations

To generate a new migration use the following command:

```
npm run typeorm:dev -- migration:generate -n initialSchema
```

> Note: replace "initialSchema" with name of the migration

To apply the migration use:

```
npm run typeorm:dev -- migration:run
```
> In production use ```npm run typeorm:prod``` in place of "dev"

## To drop all tables during development use
```
SET FOREIGN_KEY_CHECKS = 0;
SET SESSION group_concat_max_len = 1000000;

SET @TABLES = NULL;
SELECT GROUP_CONCAT('`', table_schema, '`.`', table_name,'`') INTO @TABLES FROM information_schema.tables 
  WHERE table_schema = 'sakuradb';

SET @TABLES = CONCAT('DROP TABLE IF EXISTS ', @TABLES);

PREPARE stmt FROM @TABLES;
EXECUTE stmt;
DEALLOCATE PREPARE stmt;

SET SESSION group_concat_max_len = 1024;
SET FOREIGN_KEY_CHECKS = 1
```

