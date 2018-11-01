import { Order, OrderItem } from "../models";
import { OrderActionsUnion, OrderActionsType } from "../actions/order.actions";
import { utc, } from "moment";
import { statusHelper } from "../helpers";

export interface State {
    isLoading: boolean;
    isLoadingItems: boolean;
    orders: Order[];
    error: string | null,
    currentOrder: Order,
    currentOrderItems: OrderItem[]
}

const initialState: State = {
    isLoadingItems: false,
    isLoading: false,
    orders: [],
    error: null,
    currentOrder: null,
    currentOrderItems: []
}

export function reducer(state = initialState, action: OrderActionsUnion): State {
    switch (action.type) {
        case OrderActionsType.GetOrders: {
            return {
                ...state,
                isLoading: true,
                error: null
            }
        }
        case OrderActionsType.GetOrdersSuccess: {
            return {
                ...state,
                isLoading: false,
                orders: action.payload.map(item => {
                    if (state.orders.length > 0) {
                        return item
                    }
                    return {
                        ...item,
                        createdDate: utc(item.createdDate).local().format("DD-MM-YYYY HH:mm:ss"),
                        status: statusHelper.getStatus(Number.parseInt(item.status.toString(), 10))
                    }
                })
            }
        }
        case OrderActionsType.GetOrdersFailure: {
            return {
                ...state,
                isLoading: false,
                error: "Error while loading orders"
            }
        }
        case OrderActionsType.GetOrder: {
            return {
                ...state,
                isLoading: true,
                error: null,
                currentOrder: null
            }
        }
        case OrderActionsType.GetOrderSuccess: {
            return {
                ...state,
                isLoading: false,
                currentOrder: action.payload
            }
        }
        case OrderActionsType.GetOrderFailure: {
            return {
                ...state,
                isLoading: false,
                error: "Error while loading order."
            }
        }
        case OrderActionsType.GetOrderItems: {
            return {
                ...state,
                isLoadingItems: true,
                error: null
            }
        }
        case OrderActionsType.GetOrderItemsSuccess: {
            return {
                ...state,
                isLoadingItems: false,
                currentOrderItems: action.payload
            }
        }
        case OrderActionsType.GetOrderItemsFailure: {
            return {
                ...state,
                isLoadingItems: false,
                error: "Error while loading order items."
            }
        }
        case OrderActionsType.RemoveOrder: {
            return {
                ...state,
                error: null
            }
        }
        case OrderActionsType.AddOrderFailure:
        case OrderActionsType.RemoveOrderSuccess: {
            return {
                ...state,
                orders: state.orders.filter(order => order.id !== action.payload.id)
            }
        }
        case OrderActionsType.AddOrderSuccess: {
            if (state.orders.indexOf(action.payload) > -1) {
                return state;
            }
            return {
                ...state,
                orders: [...state.orders, action.payload]
            }
        }
        case OrderActionsType.RemoveOrderFailure: {
            return {
                ...state,
                error: "Erorr while removing an order."
            }
        }
        case OrderActionsType.UpdOrder: {
            return {
                ...state,
                isLoading: true,
                error: null
            }
        }
        case OrderActionsType.UpdOrderSuccess: {
            return {
                ...state,
                isLoading: false,
                currentOrder: action.payload as Order
            }
        }
        case OrderActionsType.UpdOrderFailure: {
            return {
                ...state,
                isLoading: false,
                error: "Error while updating an order."
            }
        }
        default:
            return state;
    }
}

export const getLoading = (state: State) => state.isLoading;
export const getLoadingItems = (state: State) => state.isLoadingItems;
export const getOrders = (state: State) => state.orders;
export const getOrderItems = (state: State) => state.currentOrderItems;
export const getError = (state: State) => state.error;
export const getOrder = (state: State) => state.currentOrder;