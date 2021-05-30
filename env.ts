const path = require("path");
const devConfigPath = "./env/.dev.env";
const prodConfigPath = "./env/.prod.env";

export const PROD_ENV = "production";
export const DEV_ENV = "development";
export let APP_ENV: string;

if (process.env.NODE_ENV === PROD_ENV) {
    require("dotenv").config({ path: path.join(__dirname, prodConfigPath) });
    APP_ENV = PROD_ENV;
} else {
    require("dotenv").config({ path: path.join(__dirname, devConfigPath) });
    APP_ENV = DEV_ENV;
}

export const APP_PORT = process.env["APP_PORT"];

// Db configs

export const DB_HOST = process.env["DB_HOST"];
export const DB_PORT = process.env["DB_PORT"];
export const DB_USER = process.env["DB_USER"];
export const DB_PASS = process.env["DB_PASS"];
export const DB_NAME = process.env["DB_NAME"];



