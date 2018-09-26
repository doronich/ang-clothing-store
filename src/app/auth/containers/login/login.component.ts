import { Component, OnInit } from '@angular/core';
import { LoginModel } from '../../models/auth';
import { Store, select } from '@ngrx/store';
import * as fromAuth from '../../reducers'
import * as AuthActions from "../../actions/actions";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  returnUrl: string;
  error$ = this.store.pipe(select(fromAuth.getLoginPageError));
  isPending$ = this.store.pipe(select(fromAuth.getLoginPagePending));

  constructor(
    private store: Store<fromAuth.State>
  ) { }

  ngOnInit() {
    this.store.dispatch(new AuthActions.LogOut())
    /*     this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/'; */
  }

  onSubmit($event: LoginModel) {
    this.store.dispatch(new AuthActions.LogIn($event))
  }
}
