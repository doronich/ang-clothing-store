import { Item } from "./item";

export interface ItemsResponse {
    hasNext: boolean;
    hasPrev: boolean;
    index: number;
    res: Item[];
    total: number;
}