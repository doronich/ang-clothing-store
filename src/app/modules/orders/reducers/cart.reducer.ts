import { ItemForCart } from "../../items/models";
import { ShopCartActionsUnion, ShopCartTypes } from "../actions/cart.actions";


export interface State {
    loading: boolean;
    error: string | null;
    items: ItemForCart[];
    total: number;
}

const initialState: State = {
    loading: false,
    error: null,
    items: [],
    total: 0
}

function sum(arr: ItemForCart[]): number {
    let res = 0;
    arr.forEach((i) => {
        res += i.amount * i.price;
    })
    return Math.round(res * 100) / 100;
}

export function reducer(state = initialState, action: ShopCartActionsUnion): State {
    switch (action.type) {
        case ShopCartTypes.Get_Items: {
            return {
                ...state,
                loading: true,
                error: null
            }
        }
        case ShopCartTypes.Get_Items_Success: {
            return {
                ...state,
                loading: false,
                items: action.payload.map(i => {
                    return { ...i, amount: 1 }
                }),
                total: sum(action.payload)
            }
        }
        case ShopCartTypes.Get_Items_Failure: {
            return {
                ...state,
                loading: false,
                error: "Error while loading items."
            }
        }
        case ShopCartTypes.Change_Amount: {
            const items = state.items.map(i => {
                if (i.id === action.payload.id) {
                    i.amount = action.payload.value;
                }
                return { ...i }
            });
            return {
                ...state,
                items,
                total: sum(items)
            }
        }
        case ShopCartTypes.Delete_Item: {
            const items = state.items.filter(i => {
                if (i.id !== action.payload) return i;
            });
            return {
                ...state,
                items,
                total: sum(items)
            }
        }
        default:
            return state;
    }
}

export const getTotal = (state: State) => state.total;
export const getLoading = (state: State) => state.loading;
export const getItems = (state: State) => state.items;
export const getError = (state: State) => state.error;