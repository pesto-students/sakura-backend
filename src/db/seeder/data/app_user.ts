import { convertToJsObj } from "./common";

export const appUserData = convertToJsObj([
    {
        "id": "1",
        "email": "admin@sakura.com",
        "password": "admin123",
        "roleId": "2",
        "accountVerified": "1"
    },
    {
        "id": "2",
        "email": "customer@gmail.com",
        "password": "customer123",
        "roleId": "1",
        "accountVerified": "1"
    }
]);