import { Injectable } from "@angular/core";
import { Router, ActivatedRoute } from '@angular/router';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { switchMap, catchError, map, tap } from "rxjs/operators";
import { AuthActionTypes, LogIn, LogInFailure, LogInSuccess } from "../actions/actions";
import { LoginModel } from "../models/auth";
import { AuthService, TokenService } from "../services";
import { User } from "../models/user";

@Injectable()
export class AuthEffects {
    returnUrl: string;
    constructor(
        private actions$: Actions,
        private accountService: AuthService,
        private router: Router,
        private tokenService: TokenService
    ) { }

    @Effect()
    login$: Observable<any> = this.actions$.pipe(
        ofType<LogIn>(AuthActionTypes.LOGIN),
        map(action => {
            return action.payload;
        }),
        switchMap((payload: LoginModel) => {
            return this.accountService.login(payload).pipe(
                map(user => {
                    const serUser = JSON.parse(user);
                    const { id, access_token, username, role } = serUser;
                    const res = {
                        id,
                        token: access_token,
                        username,
                        role
                    }
                    return new LogInSuccess(res as User)
                }),
                catchError(err => of(new LogInFailure(err)))
            )
        })
    );

    @Effect({ dispatch: false })
    loginSuccess$: Observable<any> = this.actions$.pipe(
        ofType(AuthActionTypes.LOGIN_SUCCESS),
        tap(() => {
            console.warn("#Sign in")
            this.router.navigate(['/'])
        })
    );

    @Effect({ dispatch: false })
    loginFailure$: Observable<any> = this.actions$.pipe(
        ofType(AuthActionTypes.LOGIN_FAILURE)
    );

    @Effect({ dispatch: false })
    logout$: Observable<any> = this.actions$.pipe(
        ofType(AuthActionTypes.LOGOUT),
        tap(() => {
            console.warn("#Logout")
            this.tokenService.destroyToken();
        })
    )

}