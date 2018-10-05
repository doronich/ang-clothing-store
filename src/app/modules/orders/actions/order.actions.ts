import { Action } from "@ngrx/store";
import { Order, OrderItem, UpdateOrder } from "../models";

export enum OrderActionsType {
    GetOrders = '[Order] Get Orders',
    GetOrdersSuccess = '[Order] Get Orders Success',
    GetOrdersFailure = '[Order] Get Orders Failure',
    RemoveOrder = '[Order] Remove Order',
    RemoveOrderFailure = '[Order] Remove Order Failure',
    RemoveOrderSuccess = '[Order] Remove Order Success',
    AddOrder = '[Order] Remove Order',
    AddOrderSuccess = '[Order] Remove Order Success',
    AddOrderFailure = '[Order] Remove Order Failure',
    UpdOrder = '[Order] Update Order',
    UpdOrderSuccess = '[Order] Update Order Success',
    UpdOrderFailure = '[Order] Update Order Failure',
    GetOrder = '[Order] Get Order',
    GetOrderSuccess = '[Order] Get Order Success',
    GetOrderFailure = '[Order] Get Order Failure',
    GetOrderItems = '[Order] Get OrderItems',
    GetOrderItemsSuccess = '[Order] Get OrderItems Success',
    GetOrderItemsFailure = '[Order] Get OrderItems Failure'
}

export class GetOrders implements Action {
    readonly type = OrderActionsType.GetOrders;
}

export class GetOrdersSuccess implements Action {
    readonly type = OrderActionsType.GetOrdersSuccess;

    constructor(public payload: Order[]) { }
}

export class GetOrdersFailure implements Action {
    readonly type = OrderActionsType.GetOrdersFailure;

    constructor(public payload: any) { }
}

export class GetOrder implements Action {
    readonly type = OrderActionsType.GetOrder;
    constructor(public payload: number) { }
}

export class GetOrderSuccess implements Action {
    readonly type = OrderActionsType.GetOrderSuccess;

    constructor(public payload: Order) { }
}

export class GetOrderFailure implements Action {
    readonly type = OrderActionsType.GetOrderFailure;

    constructor(public payload: any) { }
}

export class GetOrderItems implements Action {
    readonly type = OrderActionsType.GetOrderItems;
    constructor(public payload: number) { }
}

export class GetOrderItemsSuccess implements Action {
    readonly type = OrderActionsType.GetOrderItemsSuccess;

    constructor(public payload: OrderItem[]) { }
}

export class GetOrderItemsFailure implements Action {
    readonly type = OrderActionsType.GetOrderItemsFailure;

    constructor(public payload: any) { }
}

export class RemoveOrder implements Action {
    readonly type = OrderActionsType.RemoveOrder;
    constructor(public payload: Order) { }
}

export class RemoveOrderFailure implements Action {
    readonly type = OrderActionsType.RemoveOrderFailure
    constructor(public payload: Order) { }
}

export class RemoveOrderSuccess implements Action {
    readonly type = OrderActionsType.RemoveOrderSuccess

    constructor(public payload: Order) { }
}

export class AddOrder implements Action {
    readonly type = OrderActionsType.AddOrder

    constructor(public payload: Order) { }
}

export class AddOrderSuccess implements Action {
    readonly type = OrderActionsType.AddOrderSuccess

    constructor(public payload: Order) { }
}

export class AddOrderFailure implements Action {
    readonly type = OrderActionsType.AddOrderFailure

    constructor(public payload: Order) { }
}

export class UpdOrder implements Action {
    readonly type = OrderActionsType.UpdOrder

    constructor(public payload: UpdateOrder) { }
}

export class UpdOrderSuccess implements Action {
    readonly type = OrderActionsType.UpdOrderSuccess
    constructor(public payload: UpdateOrder) { }
}

export class UpdOrderFailure implements Action {
    readonly type = OrderActionsType.UpdOrderFailure

    constructor(public payload: any) { }
}

export type OrderActionsUnion =
    | GetOrders
    | GetOrdersSuccess
    | GetOrdersFailure
    | GetOrder
    | GetOrderSuccess
    | GetOrderFailure
    | GetOrderItems
    | GetOrderItemsSuccess
    | GetOrderItemsFailure
    | RemoveOrder
    | RemoveOrderFailure
    | RemoveOrderSuccess
    | AddOrder
    | AddOrderSuccess
    | AddOrderFailure
    | UpdOrder
    | UpdOrderSuccess
    | UpdOrderFailure;