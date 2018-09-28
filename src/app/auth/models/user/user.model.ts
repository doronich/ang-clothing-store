import { Roles } from ".";

export interface User {
    token: string;
    username: string;
    id: number;
    role: Roles.ADMIN | Roles.USER;
}