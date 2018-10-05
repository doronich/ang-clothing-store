import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as fromOrders from "../../reducers";
import * as OrderActions from '../../actions/order.actions'
import { ActivatedRoute } from '@angular/router';
import { UpdateOrder } from '../../models';

@Component({
  selector: 'app-order-page',
  templateUrl: './order-page.component.html',
  styleUrls: ['./order-page.component.css']
})
export class OrderPageComponent implements OnInit {

  order$ = this.store.pipe(select(fromOrders.getOrder));
  orderItems$ = this.store.pipe(select(fromOrders.getOrderItems));
  isPending$ = this.store.pipe(select(fromOrders.getLoading));
  isPendingItems$ = this.store.pipe(select(fromOrders.getLoadingItems));

  constructor(private store: Store<fromOrders.State>, private route: ActivatedRoute) { }

  ngOnInit() {

    if (this.route.snapshot.params.id) {
      this.store.dispatch(new OrderActions.GetOrder(this.route.snapshot.params.id))
      this.store.dispatch(new OrderActions.GetOrderItems(this.route.snapshot.params.id))
    }
    //console.log(this.order$)
  }

  update(event$) {
    this.store.dispatch(new OrderActions.UpdOrder(event$))
  }

}
