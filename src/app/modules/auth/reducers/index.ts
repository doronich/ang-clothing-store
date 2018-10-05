import {
    createSelector,
    createFeatureSelector,
    ActionReducerMap,
} from '@ngrx/store';
import * as fromRoot from 'src/app/reducers';
import * as fromAuth from './reducer';

export interface AuthState {
    auth: fromAuth.State;
    //loginPage: fromLoginPage.State;
}

export interface State extends fromRoot.State {
    auth: AuthState;
}

export const reducers: ActionReducerMap<AuthState> = {
    auth: fromAuth.reducer,
    //loginPage: fromLoginPage.reducer,
};

export const selectAuthState = createFeatureSelector<State, AuthState>('auth');

export const selectAuthStatusState = createSelector(
    selectAuthState,
    (state: AuthState) => state.auth
);
export const getLoggedIn = createSelector(
    selectAuthStatusState,
    fromAuth.getIsAuth
);
export const getUser = createSelector(selectAuthStatusState, fromAuth.getUser);

/* export const selectLoginPageState = createSelector(
    selectAuthState,
    (state: AuthState) => state.auth
); */

export const getAuthError = createSelector(
    selectAuthStatusState,
    fromAuth.getError
);
export const getAuthPending = createSelector(
    selectAuthStatusState,
    fromAuth.getPending
);

export const getAuthUserExist = createSelector(
    selectAuthStatusState,
    fromAuth.getUserExist
)