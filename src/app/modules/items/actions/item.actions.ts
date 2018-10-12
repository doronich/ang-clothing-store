import { Action } from "@ngrx/store";
import { Filters } from "../models";
import { ItemsResponse } from "../models/items-response";

export enum ItemActionTypes {
    Search = '[Item] Search',
    SearchComplete = '[Item] Search Complete',
    SearchError = '[Item] Search Error'
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

export type ItemActionsUnion =
    | Search
    | SearchComplete
    | SearchError;

