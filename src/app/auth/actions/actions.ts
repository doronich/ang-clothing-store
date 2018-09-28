import { Action } from '@ngrx/store';
import { LoginModel, CheckUserModel, RegModel } from '../models/auth';
import { User } from '../models/user';

export enum AuthActionTypes {
    LOGIN = '[Auth] Login',
    LOGIN_SUCCESS = '[Auth] Login Success',
    LOGIN_FAILURE = '[Auth] Login Failure',
    SIGNUP = '[Auth] Signup',
    SIGNUP_SUCCESS = '[Auth] Signup Success',
    SIGNUP_FAILURE = '[Auth] Signup Failure',
    LOGOUT = '[Auth] Logout',
    CHECK_USER = '[Auth] CheckUser',
    CHECK_USER_SUCCESS = '[Auth] CheckUser Success',
    CHECK_USER_FAILUER = '[Auth] CheckUser Failure'
}

export class LogIn implements Action {
    readonly type = AuthActionTypes.LOGIN;
    constructor(public payload: LoginModel) { }
}

export class LogInSuccess implements Action {
    readonly type = AuthActionTypes.LOGIN_SUCCESS;
    constructor(public payload: User) { }
}

export class LogInFailure implements Action {
    readonly type = AuthActionTypes.LOGIN_FAILURE;
    constructor(public payload: any) { }
}

export class SignUp implements Action {
    readonly type = AuthActionTypes.SIGNUP;
    constructor(public payload: RegModel) { }
}

export class SignUpSuccess implements Action {
    readonly type = AuthActionTypes.SIGNUP_SUCCESS;
    constructor(public payload: any) { }
}

export class SignUpFailure implements Action {
    readonly type = AuthActionTypes.SIGNUP_FAILURE;
    constructor(public payload: any) { }
}

export class LogOut implements Action {
    readonly type = AuthActionTypes.LOGOUT;
}

export class CheckUser implements Action {
    readonly type = AuthActionTypes.CHECK_USER;
    constructor(public payload: CheckUserModel) { }
}

export class CheckUserSuccess implements Action {
    readonly type = AuthActionTypes.CHECK_USER_SUCCESS;
    constructor(public payload: boolean) { }
}

export class CheckUserFailure implements Action {
    readonly type = AuthActionTypes.CHECK_USER_FAILUER;
    constructor(public payload: any) { }
}

export type All =
    | LogIn
    | LogInSuccess
    | LogInFailure
    | SignUp
    | SignUpSuccess
    | SignUpFailure
    | LogOut
    | CheckUser
    | CheckUserSuccess
    | CheckUserFailure;