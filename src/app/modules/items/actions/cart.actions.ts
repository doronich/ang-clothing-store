import { Action } from "@ngrx/store";

export enum CartTypes {
    Add = "[Cart] Add",
    Remove = "[Cart] Remove",
    Clear = "[Cart] Clear"
}

export class AddCartItem implements Action {
    readonly type = CartTypes.Add;
    constructor(public payload: number) { }
}

export class RemoveCartItem implements Action {
    readonly type = CartTypes.Remove;
    constructor(public payload: number) { }
}

export class ClearCart implements Action {
    readonly type = CartTypes.Clear;
}

export type CartActionsUnion =
    | AddCartItem
    | RemoveCartItem
    | ClearCart;