import { Category, SubCategory } from "../models";
import { CatsActionsUnion, CatsTypes } from "../actions";

export interface State {
    loading: boolean;
    categories: Category[];
    error: string | null;
    subCategories: SubCategory[];
}

const initialState: State = {
    loading: false,
    categories: [],
    error: null,
    subCategories: []
}

export function reducer(state = initialState, action: CatsActionsUnion): State {
    switch (action.type) {
        case CatsTypes.Get_Cats: {
            return {
                ...state,
                loading: true,
                error: null
            }
        }
        case CatsTypes.Get_Cats_Success: {
            return {
                ...state,
                loading: false,
                categories: action.payload
            }
        }
        case CatsTypes.Get_Cats_Failure: {
            return {
                ...state,
                loading: false,
                error: "Error while loading categories."
            }
        }
        case CatsTypes.Get_SubCats: {
            return {
                ...state,
                loading: true,
                error: null
            }
        }
        case CatsTypes.Get_SubCats_Success: {
            return {
                ...state,
                loading: false,
                subCategories: action.payload
            }
        }
        case CatsTypes.Get_SubCats_Failure: {
            return {
                ...state,
                loading: false,
                error: "Error while loading subcategories."
            }
        }
        default:
            return state;
    }
}

export const getLoading = (state: State) => state.loading;
export const getCategories = (state: State) => state.categories;
export const getSubCategories = (state: State) => state.subCategories;
export const getError = (state: State) => state.error;