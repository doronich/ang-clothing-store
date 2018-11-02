import { CreateOrderItem } from "./create-order-item";

export interface CreateOrder {
    username: string;
    name: string;
    phoneNumber: string;
    email: string;
    comment: string;
    address: string;
    code: string;
    totalPrice: number;
    items: CreateOrderItem[];
}