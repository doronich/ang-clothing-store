import * as fromOrders from './orders.reducers'
import * as fromShopCart from './cart.reducer'
import * as fromRoot from 'src/app/reducers'
import * as fromUser from './user-details.reducer'
import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';

export interface OrdersState {
    orders: fromOrders.State,
    cart: fromShopCart.State
    user: fromUser.State
}

export interface State extends fromRoot.State {
    orders: OrdersState
}

export const reducers: ActionReducerMap<OrdersState> = {
    orders: fromOrders.reducer,
    cart: fromShopCart.reducer,
    user: fromUser.reducer
}

export const selectOrdersState = createFeatureSelector<State, OrdersState>('orders');

export const selectOrdersEntitiesState = createSelector(
    selectOrdersState,
    (state: OrdersState) => state.orders
)

export const selectShopCartEntitiesState = createSelector(
    selectOrdersState,
    (state: OrdersState) => state.cart
)

export const selectUserDetEntitiesState = createSelector(
    selectOrdersState,
    (state: OrdersState) => state.user
)

export const getLoading = createSelector(
    selectOrdersEntitiesState,
    fromOrders.getLoading
)

export const getLoadingItems = createSelector(
    selectOrdersEntitiesState,
    fromOrders.getLoadingItems
)

export const getOrders = createSelector(
    selectOrdersEntitiesState,
    fromOrders.getOrders
)

export const getOrder = createSelector(
    selectOrdersEntitiesState,
    fromOrders.getOrder
)

export const getOrderItems = createSelector(
    selectOrdersEntitiesState,
    fromOrders.getOrderItems
)

export const getError = createSelector(
    selectOrdersEntitiesState,
    fromOrders.getError
)





export const getItems = createSelector(
    selectShopCartEntitiesState,
    fromShopCart.getItems
)

export const getCartError = createSelector(
    selectShopCartEntitiesState,
    fromShopCart.getError
)

export const getCartLoading = createSelector(
    selectShopCartEntitiesState,
    fromShopCart.getLoading
)

export const getCartTotal = createSelector(
    selectShopCartEntitiesState,
    fromShopCart.getTotal
)





export const getUserLoading = createSelector(
    selectUserDetEntitiesState,
    fromUser.getUserLoading
)

export const getUserInfo = createSelector(
    selectUserDetEntitiesState,
    fromUser.getUserInfo
)

export const getUserError = createSelector(
    selectUserDetEntitiesState,
    fromUser.getError
)

export const getCodeIsValid = createSelector(
    selectUserDetEntitiesState,
    fromUser.getCodeIsValid
)

export const getCheckOutLoading = createSelector(
    selectUserDetEntitiesState,
    fromUser.getCheckOutLoading
)