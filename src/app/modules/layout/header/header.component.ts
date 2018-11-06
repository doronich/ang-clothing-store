import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as fromAuth from '../../auth/reducers'
import * as fromItems from '../../items/reducers'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  loggedIn$ = this.store.pipe(select(fromAuth.getLoggedIn));
  isAdmin$ = this.store.pipe(select(fromAuth.getIsAdmin));
  cartCount$ = this.itemStore.pipe(select(fromItems.getCartItemsCount))

  constructor(private store: Store<fromAuth.State>, private itemStore: Store<fromItems.State>) { }

  ngOnInit() {
  }

}
