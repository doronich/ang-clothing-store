import { CartActionsUnion, CartTypes } from "../actions";


export interface State {
    items: number[]
}

const initialState: State = {
    items: localStorage.getItem('cart') !== null ? JSON.parse(localStorage.getItem('cart')) : [181]
}

export function reducer(state = initialState, action: CartActionsUnion) {
    const { items } = state;
    switch (action.type) {
        case CartTypes.Add: {

            if (!items.includes(action.payload)) {
                items.push(action.payload)
            }
            localStorage.setItem('cart', JSON.stringify(items))
            return {
                ...state,
                items
            }
        }
        case CartTypes.Remove: {
            items.splice(items.indexOf(action.payload), 1)
            localStorage.setItem('cart', JSON.stringify(items))
            return {
                ...state,
                items
            }
        }
        case CartTypes.Clear: {
            localStorage.removeItem('cart')
            return {
                ...state,
                items: []
            }
        }
        default:
            return state;
    }
}

export const getCartItems = (state: State) => state.items;
export const getCartItemsCount = (state: State) => state.items.length;