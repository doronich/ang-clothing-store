import { UserInfo } from "../models";
import { UserDetActionsUnion, UserDetTypes } from "../actions";


export interface State {
    userLoading: boolean;
    checkOutLoading: boolean;
    error: string | any;
    userInfo: UserInfo;
    codeIsValid: boolean;
}

const initialState: State = {
    checkOutLoading: false,
    userLoading: false,
    error: null,
    userInfo: null,
    codeIsValid: false
}

export function reducer(state = initialState, action: UserDetActionsUnion): State {
    switch (action.type) {
        case UserDetTypes.Get_User_Info: {
            return {
                ...state,
                codeIsValid: false,
                error: null,
                userLoading: true
            }
        }
        case UserDetTypes.Get_User_Info_Success: {
            return {
                ...state,
                userLoading: false,
                userInfo: action.payload
            }
        }
        case UserDetTypes.Get_User_Info_Failure: {
            return {
                ...state,
                userLoading: false,
                error: "Error while loading user info."
            }
        }
        case UserDetTypes.CheckCode: {
            return {
                ...state,
                error: null,
                codeIsValid: false
            }
        }
        case UserDetTypes.CheckCodeSuccess: {
            return {
                ...state,
                codeIsValid: action.payload,
                error: action.payload ? null : "code"
            }
        }
        case UserDetTypes.CheckCodeFailure: {
            return {
                ...state,
                error: "loading"
            }
        }
        case UserDetTypes.CreateOrder: {
            return {
                ...state,
                checkOutLoading: true,
                error: null
            }
        }
        case UserDetTypes.CreateOrderSuccess: {
            return {
                ...state,
                checkOutLoading: false
            }
        }
        case UserDetTypes.CreateOrderFailure: {
            return {
                ...state,
                checkOutLoading: false,
                error: "Error while creating new order."
            }
        }
        default:
            return state;
    }
}

export const getUserInfo = (state: State) => state.userInfo;
export const getUserLoading = (state: State) => state.userLoading;
export const getError = (state: State) => state.error;

export const getCodeIsValid = (state: State) => state.codeIsValid;

export const getCheckOutLoading = (state: State) => state.checkOutLoading;