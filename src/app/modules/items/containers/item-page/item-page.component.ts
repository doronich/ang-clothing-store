import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as fromItem from '../../reducers'
import { Store, select } from '@ngrx/store';
import { GetItem, AddCartItem, RemoveCartItem } from '../../actions';

@Component({
  selector: 'app-item-page',
  templateUrl: './item-page.component.html',
  styleUrls: ['./item-page.component.css']
})
export class ItemPageComponent implements OnInit, OnChanges {
  id;
  isLoading$ = this.store.pipe(select(fromItem.getLoading));
  error$ = this.store.pipe(select(fromItem.getError));
  item$ = this.store.pipe(select(fromItem.getItem));
  cartItems$ = this.store.pipe(select(fromItem.getCartItems));
  constructor(route: ActivatedRoute, private store: Store<fromItem.State>) {
    this.id = route.snapshot.params['id'];
  }

  ngOnInit() {
    this.store.dispatch(new GetItem(this.id))
  }

  ngOnChanges(changes: SimpleChanges): void {

  }

  addToCart() {
    this.store.dispatch(new AddCartItem(Number.parseInt(this.id, 10)))
  }

  removeFromCart() {
    this.store.dispatch(new RemoveCartItem(Number.parseInt(this.id, 10)))
  }

  checkForCart(i, arr: number[]): boolean {
    const id = Number.parseInt(i, 10)
    if (arr !== null) {

      return arr.includes(id)
    }
    return false;
  }
}
