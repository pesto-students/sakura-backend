import { DB_HOST, DB_PORT, DB_USER, DB_PASS, DB_NAME } from "./env";
import { resolve } from "path";


const ormConfig = {
    "type": "mysql",
    "host": DB_HOST || "no db host provided",
    "port": DB_PORT || "no db port provided",
    "username": DB_USER || "no db user provided",
    "password": DB_PASS || "no db pass provided",
    "database": DB_NAME || "no db name provided",
    "entities": ["./src/entity/**/*.entity{.ts,.js}"],
    "migrations": ["./src/migrations/*{.ts, .js}"],
    "cli": {
        "migrationsDir": "src/migrations",
    }
}

export default ormConfig;
