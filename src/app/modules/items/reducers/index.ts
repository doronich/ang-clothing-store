import * as fromItems from "./item.reducer";
import * as fromCats from './category.reducer'
import * as fromRoot from 'src/app/reducers'
import * as fromCart from './cart.reducer'
import { ActionReducerMap, createFeatureSelector, createSelector } from "@ngrx/store";

export interface ItemsState {
    items: fromItems.State,
    categories: fromCats.State,
    cart: fromCart.State
}

export interface State extends fromRoot.State {
    items: ItemsState
}

export const reducers: ActionReducerMap<ItemsState> = {
    items: fromItems.reducer,
    categories: fromCats.reducer,
    cart: fromCart.reducer
}

export const selectItemsState = createFeatureSelector<State, ItemsState>('items');

export const selectItemEntityState = createSelector(
    selectItemsState,
    (state: ItemsState) => state.items
)
export const selectCatsEntityState = createSelector(
    selectItemsState,
    (state: ItemsState) => state.categories
)

export const selectCartEntityState = createSelector(
    selectItemsState,
    (state: ItemsState) => state.cart
)

export const getItems = createSelector(
    selectItemEntityState,
    fromItems.getItems
)

export const getItem = createSelector(
    selectItemEntityState,
    fromItems.getItem
)

export const getLoading = createSelector(
    selectItemEntityState,
    fromItems.getLoading
)

export const getError = createSelector(
    selectItemEntityState,
    fromItems.getError
)

export const getPageData = createSelector(
    selectItemEntityState,
    fromItems.getPageData
)

export const getCategories = createSelector(
    selectCatsEntityState,
    fromCats.getCategories
)

export const getSubCategories = createSelector(
    selectCatsEntityState,
    fromCats.getSubCategories
)


export const getCatsLoading = createSelector(
    selectCatsEntityState,
    fromCats.getLoading
)

export const getCatsError = createSelector(
    selectCatsEntityState,
    fromCats.getError
)

export const getCartItems = createSelector(
    selectCartEntityState,
    fromCart.getCartItems
)

export const getCartItemsCount = createSelector(
    selectCartEntityState,
    fromCart.getCartItemsCount
)