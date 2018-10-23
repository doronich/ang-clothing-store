import { Action } from "@ngrx/store";
import { ItemForCart } from "../../items/models";

export enum ShopCartTypes {
    Get_Items = "[ShopCart] Get Items",
    Get_Items_Success = "[ShopCart] Get Items Success",
    Get_Items_Failure = "[ShopCart] Get Items Failure",
    Change_Amount = "[ShopCart] Change amount",
    Delete_Item = "[ShopCart] Delete item"
}

export class GetItems implements Action {
    readonly type = ShopCartTypes.Get_Items
    constructor(public payload: number[]) { }
}

export class GetItemsSuccess implements Action {
    readonly type = ShopCartTypes.Get_Items_Success
    constructor(public payload: ItemForCart[]) { }
}

export class GetItemsFailure implements Action {
    readonly type = ShopCartTypes.Get_Items_Failure
    constructor(public payload: any) { }
}

export class ChangeAmount implements Action {
    readonly type = ShopCartTypes.Change_Amount
    constructor(public payload: { id: number, value: number }) { }
}

export class DeleteItem implements Action {
    readonly type = ShopCartTypes.Delete_Item
    constructor(public payload: number) { }
}

export type ShopCartActionsUnion =
    | DeleteItem
    | ChangeAmount
    | GetItems
    | GetItemsSuccess
    | GetItemsFailure;