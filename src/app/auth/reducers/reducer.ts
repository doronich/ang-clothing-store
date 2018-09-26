import { All, AuthActionTypes } from "../actions/actions";
import { User } from "../models/user";

export interface State {
    isLoading: boolean;
    isAuthenticated: boolean;
    user: User | null;
    error?: any;
}

export const initialState: State = {
    isAuthenticated: window.localStorage.getItem('token') ? true : false,
    user: null,
    error: null,
    isLoading: false
}

export function reducer(state = initialState, action: All): State {
    switch (action.type) {
        case AuthActionTypes.LOGIN: {
            return {
                ...state,
                isLoading: true
            }
        }
        case AuthActionTypes.LOGIN_SUCCESS: {
            return {
                ...state,
                isAuthenticated: true,
                user: action.payload,
                error: null,
                isLoading: false
            }
        }
        case AuthActionTypes.LOGIN_FAILURE: {
            return {
                ...state,
                isLoading: false,
                error: 'Incorrect login and/or password.'
            }
        }
        case AuthActionTypes.LOGOUT: {
            return {
                ...initialState,
                isAuthenticated: false
            };
        }
        default:
            return state;
    }
}

export const getIsAuth = (state: State) => state.isAuthenticated;
export const getUser = (state: State) => state.user;
export const getError = (state: State) => state.error;
export const getPending = (state: State) => state.isLoading;