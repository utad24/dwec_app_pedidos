import { Meta } from "@angular/platform-browser";
import { Product } from "./product";

export interface OrderResponse {
    data?: Order[];
    meta?: Meta;
}

export interface Order {
    id?: number;
    documentId?: string;
    orderStatus?: string;
    createdAt?: Date;
    updatedAt?: Date;
    publishedAt?: Date;
    locale?: null;
    userData?: UserData;
    totalPrice?: number;
    products?: Product[];
}


export interface UserData {
    phone?: string;
    address?: string;
    fullName?: string;
}
