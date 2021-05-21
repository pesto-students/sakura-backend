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
