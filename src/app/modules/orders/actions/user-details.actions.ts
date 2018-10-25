import { Action } from "@ngrx/store";
import { UserInfo, CreateOrder } from "../models";

export enum UserDetTypes {
    Get_User_Info = "[UserDet] Get user info",
    Get_User_Info_Success = "[UserDet] Get user info Success",
    Get_User_Info_Failure = "[UserDet] Get user info Failure",
    CheckCode = "[UserDet] Check code",
    CheckCodeSuccess = "[UserDet] Check code Success",
    CheckCodeFailure = "[UserDet] Check code Failure",
    CreateOrder = "[UserDet] Create order",
    CreateOrderFailure = "[UserDet] Create order Failure",
    CreateOrderSuccess = "[UserDet] Create order Success"
}

export class GetUserInfo implements Action {
    readonly type = UserDetTypes.Get_User_Info
    constructor(public payload: string) { }
}

export class GetUserInfoSuccess implements Action {
    readonly type = UserDetTypes.Get_User_Info_Success
    constructor(public payload: UserInfo) { }
}

export class GetUserInfoFailure implements Action {
    readonly type = UserDetTypes.Get_User_Info_Failure
    constructor(public payload: any) { }
}

export class CheckCode implements Action {
    readonly type = UserDetTypes.CheckCode
    constructor(public payload: string) { }
}

export class CheckCodeSuccess implements Action {
    readonly type = UserDetTypes.CheckCodeSuccess
    constructor(public payload: boolean) { }
}

export class CheckCodeFailure implements Action {
    readonly type = UserDetTypes.CheckCodeFailure
    constructor(public payload: any) { }
}

export class CreateOrderReq implements Action {
    readonly type = UserDetTypes.CreateOrder
    constructor(public payload: CreateOrder) { }
}

export class CreateOrderSuccess implements Action {
    readonly type = UserDetTypes.CreateOrderSuccess
}

export class CreateOrderFailure implements Action {
    readonly type = UserDetTypes.CreateOrderFailure
    constructor(public payload: any) { }
}

export type UserDetActionsUnion =
    | GetUserInfo
    | GetUserInfoSuccess
    | GetUserInfoFailure
    | CheckCode
    | CheckCodeSuccess
    | CheckCodeFailure
    | CreateOrderReq
    | CreateOrderFailure
    | CreateOrderSuccess
    ;