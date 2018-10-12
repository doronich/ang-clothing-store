import { Action } from "@ngrx/store";
import { Category, SubCategory } from "../models";

export enum CatsTypes {
    Get_Cats = "[Category] Get",
    Get_Cats_Success = "[Category] Get Success",
    Get_Cats_Failure = "[Category] Get Failure",
    Get_SubCats = "[Category] Get Sub",
    Get_SubCats_Success = "[Category] Get Sub Success",
    Get_SubCats_Failure = "[Category] Get Sub Failure",
}

export class GetCats implements Action {
    readonly type = CatsTypes.Get_Cats
}

export class GetCatsSuccess implements Action {
    readonly type = CatsTypes.Get_Cats_Success
    constructor(public payload: Category[]) { }
}

export class GetCatsFailure implements Action {
    readonly type = CatsTypes.Get_Cats_Failure
    constructor(public payload: any) { }
}

export class GetSubCats implements Action {
    readonly type = CatsTypes.Get_SubCats
}

export class GetSubCatsSuccess implements Action {
    readonly type = CatsTypes.Get_SubCats_Success
    constructor(public payload: SubCategory[]) { }
}

export class GetSubCatsFailure implements Action {
    readonly type = CatsTypes.Get_SubCats_Failure
    constructor(public payload: any) { }
}


export type CatsActionsUnion =
    | GetSubCats
    | GetSubCatsSuccess
    | GetSubCatsFailure
    | GetCats
    | GetCatsSuccess
    | GetCatsFailure;