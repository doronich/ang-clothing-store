export interface UserOrder {
    id: number;
    code: string;
    discount: number;
    name: string;
    comment: string;
    address: string;
    totalPrice: number;
    status: number;
    phoneNumber: string;
    createdDate: Date;
}