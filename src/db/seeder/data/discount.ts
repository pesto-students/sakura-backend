import { convertToJsObj } from "./common";

export const discountData: object[] = convertToJsObj([
  {
    "id": "1",
    "name": "womens day discount",
    "description": "",
    "coupon": "WOMEN001",
    "status": "active",
    "discountRate": "10",
    "minimumOrderValue": "",
    "minimumOrderQuantity": "",
    "createdOn": "20-05-2021 00:00",
    "updatedOn": "20-05-2021 00:00"
  },
  {
    "id": "2",
    "name": "summer clearance",
    "description": "",
    "coupon": "SUMMER21",
    "status": "active",
    "discountRate": "20",
    "minimumOrderValue": "1000",
    "minimumOrderQuantity": "",
    "createdOn": "20-05-2021 00:00",
    "updatedOn": "20-05-2021 00:00"
  },
  {
    "id": "3",
    "name": "Gala Clearance",
    "description": "",
    "coupon": "GALA55N",
    "status": "active",
    "discountRate": "5",
    "minimumOrderValue": "200",
    "minimumOrderQuantity": "",
    "createdOn": "20-05-2021 00:00",
    "updatedOn": "20-05-2021 00:00"
  }
]);