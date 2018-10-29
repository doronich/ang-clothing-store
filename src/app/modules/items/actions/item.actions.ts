import { Action } from "@ngrx/store";
import { Filters } from "../models";
import { ItemsResponse } from "../models/items-response";
import { CurrentItem } from "../models/current-item";

export enum ItemActionTypes {
    Search = '[Item] Search',
    SearchComplete = '[Item] Search Complete',
    SearchError = '[Item] Search Error',
    AddFav = "[Fav] Add",
    AddFavResp = "[Fav] Add Response",
    RemoveFav = "[Fav] Remove",
    RemoveFavResp = "[Fav] Remove Response",
    GetFavs = "[Fav] Get",
    GetItem = "[Item] Get item",
    GetItemSuccess = "[Item] Get item success",
    GetItemFailure = "[Item] Get item failure"
}

export class Search implements Action {
    readonly type = ItemActionTypes.Search;

    constructor(public payload: Filters) { }
}

export class SearchComplete implements Action {
    readonly type = ItemActionTypes.SearchComplete;

    constructor(public payload: ItemsResponse) { }
}

export class SearchError implements Action {
    readonly type = ItemActionTypes.SearchError;

    constructor(public payload: string) { }
}

export class AddFavItem implements Action {
    readonly type = ItemActionTypes.AddFav;
    constructor(public payload: number) { }
}

export class AddFavItemResp implements Action {
    readonly type = ItemActionTypes.AddFavResp;
}

export class RemoveFavItem implements Action {
    readonly type = ItemActionTypes.RemoveFav;
    constructor(public payload: number) { }
}

export class RemoveFavItemResp implements Action {
    readonly type = ItemActionTypes.RemoveFavResp;
}

export class GetFavs implements Action {
    readonly type = ItemActionTypes.GetFavs
}

export class GetItem implements Action {
    readonly type = ItemActionTypes.GetItem
    constructor(public payload: number) { }
}

export class GetItemSuccess implements Action {
    readonly type = ItemActionTypes.GetItemSuccess
    constructor(public payload: CurrentItem) { }
}

export class GetItemFailure implements Action {
    readonly type = ItemActionTypes.GetItemFailure
    constructor(public payload: any) { }
}


export type ItemActionsUnion =
    | Search
    | SearchComplete
    | SearchError
    | AddFavItem
    | AddFavItemResp
    | RemoveFavItem
    | RemoveFavItemResp
    | GetFavs
    | GetItemFailure
    | GetItemSuccess
    | GetItem;

