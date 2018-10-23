import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as fromCart from '../../reducers'
import * as fromItems from 'src/app/modules/items/reducers'
import * as itemsActions from 'src/app/modules/items/actions'
import * as cartActions from '../../actions/cart.actions'

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

  constructor(private store: Store<fromCart.State>, private itemStore: Store<fromItems.State>) { }

  ngOnInit() {
    console.log(this.store)
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

}
