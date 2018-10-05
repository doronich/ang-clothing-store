import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as fromAuth from '../../reducers'
import * as AuthActions from "../../actions/actions";
import { RegModel, CheckUserModel } from '../../models/auth';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  error$ = this.store.pipe(select(fromAuth.getAuthError));
  isPending$ = this.store.pipe(select(fromAuth.getAuthPending));
  userExist$ = this.store.pipe(select(fromAuth.getAuthUserExist))

  constructor(private store: Store<fromAuth.State>) { }

  ngOnInit() {
    this.store.dispatch(new AuthActions.LogOut())
  }

  onSubmit($event: RegModel) {
    this.store.dispatch(new AuthActions.SignUp($event))
  }

  onCheck($event: CheckUserModel) {
    const model = {
      email: $event.email,
      login: $event.login
    };
    this.store.dispatch(new AuthActions.CheckUser(model))
  }
}
