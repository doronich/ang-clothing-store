import { Action } from "@ngrx/store";
import { Filters } from "../models";
import { ItemsResponse } from "../models/items-response";

export enum ItemActionTypes {
    Search = '[Item] Search',
    SearchComplete = '[Item] Search Complete',
    SearchError = '[Item] Search Error',
    AddFav = "[Fav] Add",
    AddFavResp = "[Fav] Add Response",
    RemoveFav = "[Fav] Remove",
    RemoveFavResp = "[Fav] Remove Response",
    GetFavs = "[Fav] Get"
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

export type ItemActionsUnion =
    | Search
    | SearchComplete
    | SearchError
    | AddFavItem
    | AddFavItemResp
    | RemoveFavItem
    | RemoveFavItemResp
    | GetFavs;

