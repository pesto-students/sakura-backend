import { DB_HOST, DB_PORT, DB_USER, DB_PASS, DB_NAME } from "./env";
import { join, resolve } from "path";


const ormConfig = {
    "type": "mysql",
    "host": DB_HOST || "no db host provided",
    "port": DB_PORT || "no db port provided",
    "username": DB_USER || "no db user provided",
    "password": DB_PASS || "no db pass provided",
    "database": DB_NAME || "no db name provided",
    "entities": [join("src", "db", "entity", "**/*.entity{.ts,.js}")],
    "migrations": [join("src", "db", "migrations", "*{.ts, .js}")],
    "cli": {
        "migrationsDir": join("src", "db", "migrations"),
    },
    "synchronize": false,
    "logging": false
}

export default ormConfig;
