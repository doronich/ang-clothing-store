import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as fromAuth from '../../../auth/reducers'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  loggedIn$ = this.store.pipe(select(fromAuth.getLoggedIn));
  isAdmin$ = this.store.pipe(select(fromAuth.getIsAdmin));
  constructor(private store: Store<fromAuth.State>) { }

  ngOnInit() {
  }

}
