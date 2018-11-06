import { Component, OnInit } from '@angular/core';
import { LoginModel } from '../../models/auth';
import { Store, select } from '@ngrx/store';
import * as fromAuth from '../../reducers'
import * as fromItems from '../../../items/reducers'
import * as AuthActions from "../../actions/actions";
import * as ItemActions from "../../../items/actions"

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  returnUrl: string;
  error$ = this.store.pipe(select(fromAuth.getAuthError));
  isPending$ = this.store.pipe(select(fromAuth.getAuthPending));

  constructor(
    private store: Store<fromAuth.State>,
    private itemStore: Store<fromItems.State>
  ) { }

  ngOnInit() {
    document.title = "STORE: login"
    this.store.dispatch(new AuthActions.LogOut())
    this.itemStore.dispatch(new ItemActions.ClearCart())
    /*     this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/'; */
  }

  onSubmit($event: LoginModel) {
    this.store.dispatch(new AuthActions.LogIn($event))
  }
}
