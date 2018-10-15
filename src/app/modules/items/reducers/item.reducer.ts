import { ItemActionsUnion, ItemActionTypes } from "../actions";
import { Item, PageData } from "../models";

/* export interface State extends EntityState<Item>{
    
} */

export interface State {
    data: PageData,
    items: Item[];
    isLoading: boolean;
    error: string | null;
}

const initialState: State = {
    data: {
        hasNext: false,
        hasPrev: false,
        index: 0,
        total: 0,
        pages: []
    },
    items: [],
    error: null,
    isLoading: false
}

export function reducer(state = initialState, action: ItemActionsUnion): State {
    switch (action.type) {
        case ItemActionTypes.Search: {
            return {
                ...state,
                isLoading: true,
                error: null
            }
        }
        case ItemActionTypes.SearchComplete: {
            const { res, hasNext, hasPrev, index, total } = action.payload;
            const pages = Array(total).fill(0).map((x, i) => i + 1);
            return {
                ...state,
                isLoading: false,
                items: res,
                data: {
                    hasNext,
                    hasPrev,
                    total,
                    index,
                    pages
                }
            }
        }
        case ItemActionTypes.SearchError: {
            return {
                ...state,
                isLoading: false,
                error: "Error while loading items."
            }
        }
        case ItemActionTypes.AddFav: {
            return {
                ...state,
                items: state.items.map(item => {
                    if (item.id === action.payload) return { ...item, isFavorite: true }
                    return item;
                })
            }
        }
        case ItemActionTypes.RemoveFav: {
            return {
                ...state,
                items: state.items.map(item => {
                    if (item.id === action.payload) return { ...item, isFavorite: false }
                    return item;
                })
            }
        }
        default:
            return state;
    }
}

export const getItems = (state: State) => state.items;
export const getError = (state: State) => state.error;
export const getLoading = (state: State) => state.isLoading;
export const getPageData = (state: State) => state.data;