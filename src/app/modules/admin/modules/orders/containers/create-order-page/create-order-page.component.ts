import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as fromCart from '../../reducers'
import * as fromItems from 'src/app/modules/items/reducers'
import * as fromAuth from 'src/app/modules/auth/reducers'
import * as itemsActions from 'src/app/modules/items/actions'
import * as cartActions from '../../actions/cart.actions'
import { GetUserInfo, CheckCode, CreateOrderReq } from '../../actions';
import { CreateOrder } from '../../models';

@Component({
  selector: 'app-create-order-page',
  templateUrl: './create-order-page.component.html',
  styleUrls: ['./create-order-page.component.css']
})
export class CreateOrderPageComponent implements OnInit {
  ids$ = this.itemStore.pipe(select(fromItems.getCartItems));
  idsCount$ = this.itemStore.pipe(select(fromItems.getCartItemsCount));
  items$ = this.store.pipe(select(fromCart.getItems));
  total$ = this.store.pipe(select(fromCart.getCartTotal));
  userLoading$ = this.store.pipe(select(fromCart.getUserLoading));
  userError$ = this.store.pipe(select(fromCart.getUserError));
  userDetails$ = this.store.pipe(select(fromCart.getUserInfo));
  codeIsValid$ = this.store.pipe(select(fromCart.getCodeIsValid));
  checkoutLoading$ = this.store.pipe(select(fromCart.getCheckOutLoading));
  user$ = this.authStore.pipe(select(fromAuth.getUser));

  constructor(private store: Store<fromCart.State>, private itemStore: Store<fromItems.State>, private authStore: Store<fromAuth.State>) { }

  ngOnInit() {
    document.title = "STORE: shopping cart"
    this.store.dispatch(new GetUserInfo(""))
  }

  getItems(ids) {
    if (ids !== null)
      this.store.dispatch(new cartActions.GetItems(ids))
  }

  changeAmount(ev: { id: number, value: number }) {
    this.store.dispatch(new cartActions.ChangeAmount({ ...ev }))
  }

  removeItem(id: number) {
    this.store.dispatch(new cartActions.DeleteItem(id));
    this.itemStore.dispatch(new itemsActions.RemoveCartItem(id));
  }

  checkCode(code: string) {
    this.store.dispatch(new CheckCode(code));
  }

  createOrder(order: CreateOrder) {
    this.store.dispatch(new CreateOrderReq(order));
  }
}
