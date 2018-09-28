import { All, AuthActionTypes } from "../actions/actions";
import { User } from "../models/user";

export interface State {
    isLoading: boolean;
    isAuthenticated: boolean;
    user: User | null;
    error?: any;
    userExist: boolean | null
}

export const initialState: State = {
    isAuthenticated: window.localStorage.getItem('token') ? true : false,
    user: JSON.parse(window.localStorage.getItem('token')) || null,
    error: null,
    isLoading: false,
    userExist: null
}

export function reducer(state = initialState, action: All): State {
    switch (action.type) {
        case AuthActionTypes.LOGIN: {
            return {
                ...state,
                isLoading: true,
                error: null
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
        case AuthActionTypes.CHECK_USER: {
            return {
                ...state,
                isLoading: true,
                error: null
            }
        }
        case AuthActionTypes.CHECK_USER_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                userExist: action.payload,
                error: action.payload ? "Login or Email already exists." : null
            }
        }
        case AuthActionTypes.CHECK_USER_FAILUER: {
            return {
                ...state,
                isLoading: false,
                error: "Connection error."
            }
        }
        case AuthActionTypes.SIGNUP: {
            return {
                ...state,
                isLoading: true,
                error: null,
                userExist: null
            }
        }
        case AuthActionTypes.SIGNUP_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                user: action.payload,
                error: null,
                isAuthenticated: true
            }
        }
        case AuthActionTypes.SIGNUP_FAILURE: {
            return {
                ...state,
                isLoading: false,
                error: "Error...",
                userExist: null
            }
        }
        default:
            return state;
    }
}

export const getIsAuth = (state: State) => state.isAuthenticated;
export const getUser = (state: State) => state.user;
export const getError = (state: State) => state.error;
export const getPending = (state: State) => state.isLoading;
export const getUserExist = (state: State) => state.userExist;