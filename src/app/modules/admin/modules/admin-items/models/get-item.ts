export interface GetItem {
    id: number;
    active: boolean;
    createdBy: string;
    createdDate: Date;
    updatedBy: string;
    updatedDate: string;
    name: string;
    description: string;
    color: string;
    brand: string;
    price: number;
    discount: number;
    kind: number;
    categoryId: number;
    subCategoryId: number;
    size: string;
    amount: number;
    sex: number;
    previewImagePath: string;
    imagePath1: string;
    imagePath2: string;
    imagePath3: string;
}