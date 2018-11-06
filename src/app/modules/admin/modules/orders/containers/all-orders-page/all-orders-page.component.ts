import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as fromOrders from "../../reducers";
import * as OrderActions from '../../actions/order.actions'
import { Order } from '../../models';

@Component({
  selector: 'app-all-orders-page',
  templateUrl: './all-orders-page.component.html',
  styleUrls: ['./all-orders-page.component.css']
})
export class AllOrdersPageComponent implements OnInit {

  orders$ = this.store.pipe(select(fromOrders.getOrders))
  isLoading$ = this.store.pipe(select(fromOrders.getLoading))

  constructor(private store: Store<fromOrders.State>) {

  }

  ngOnInit() {
    document.title = "STORE: orders"
    this.store.dispatch(new OrderActions.GetOrders())
  }

  removeOrder(order: Order) {
    this.store.dispatch(new OrderActions.RemoveOrder(order))
  }

}
