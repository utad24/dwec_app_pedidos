import { Meta } from "@angular/platform-browser";

export interface Product {
    id?: number;
    documentId?: string;
    name?: string;
    price?: number;
    createdAt?: Date;
    updatedAt?: Date;
    publishedAt?: Date;
    locale?: null;
}

export interface ProductResponse {
    data: Product[];
    meta: Meta;
}
