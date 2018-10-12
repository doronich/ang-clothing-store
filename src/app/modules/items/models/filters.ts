export interface Filters {
    color: string;
    brand: string;
    kind: number;
    subkind: number;
    status: string;
    size: string;
    sex: string;
    startPrice?: number;
    endPrice?: number;
    name: string;
    pageIndex?: number;
    pageSize?: number;
}