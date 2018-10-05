import { Code } from ".";

export interface Order {
    id: number;
    name: string;
    phoneNumber: string;
    email: string;
    comment: string;
    address: string;
    totalPrice: string;
    userId?: number;
    username: string;
    code: Code;
    status: number | string;
    createdDate: Date | string;
}