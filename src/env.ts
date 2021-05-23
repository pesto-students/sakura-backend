import { join } from "path";
const devConfigPath = "../env/.dev.env";
const prodConfigPath = "../env/.prod.env";

const PROD_ENV = "production";
const DEV_ENV = "development";

if (process.env.NODE_ENV === PROD_ENV) {
    require("dotenv").config({ path: join(__dirname, prodConfigPath) })
} else {
    require("dotenv").config({ path: join(__dirname, devConfigPath) })
}

export const APP_PORT = process.env["APP_PORT"];

// Db configs

export const DB_HOST=process.env["DB_HOST"];
export const DB_PORT=process.env["DB_PORT"];
export const DB_USER=process.env["DB_USER"];
export const DB_PASS=process.env["DB_PASS"];
export const DB_NAME=process.env["DB_NAME"];

