import * as fromOrders from './orders.reducers'
import * as fromRoot from 'src/app/reducers'
import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';

export interface OrdersState {
    orders: fromOrders.State
}

export interface State extends fromRoot.State {
    orders: OrdersState
}

export const reducers: ActionReducerMap<OrdersState> = {
    orders: fromOrders.reducer
}

export const selectOrdersState = createFeatureSelector<State, OrdersState>('orders');

export const selectOrdersEntitiesState = createSelector(
    selectOrdersState,
    (state: OrdersState) => state.orders
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