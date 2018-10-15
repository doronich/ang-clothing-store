import { Component, OnInit, OnDestroy } from '@angular/core';
import { Filters, Item, PageData, Category, SubCategory } from '../../models';
import { Store, select } from '@ngrx/store';
import * as fromItems from "../../reducers";
import * as fromAuth from '../../../auth/reducers'
import { Observable } from 'rxjs';
import * as ItemActions from '../../actions'

import { GetCats, GetSubCats } from '../../actions';


@Component({
  selector: 'app-items-page',
  templateUrl: './items-page.component.html',
  styleUrls: ['./items-page.component.css']
})
export class ItemsPageComponent implements OnInit {
  items$: Observable<Item[]> = this.store.pipe(select(fromItems.getItems));
  error$: Observable<any> = this.store.pipe(select(fromItems.getError));
  loading$: Observable<boolean> = this.store.pipe(select(fromItems.getLoading));
  pageData$: Observable<PageData> = this.store.pipe(select(fromItems.getPageData));
  catsLodaing$: Observable<boolean> = this.store.pipe(select(fromItems.getCatsLoading));
  categories$: Observable<Category[]> = this.store.pipe(select(fromItems.getCategories));
  subCategories$: Observable<SubCategory[]> = this.store.pipe(select(fromItems.getSubCategories));
  isLoggedIn$: Observable<boolean> = this.authStore.pipe(select(fromAuth.getLoggedIn));
  cartItems$: Observable<number[]> = this.store.pipe(select(fromItems.getCartItems));
  filters: Filters = {
    pageIndex: 1,
    pageSize: 5,
  } as Filters;


  ngOnInit(): void {
    this.store.dispatch(new GetCats())
    this.store.dispatch(new GetSubCats())
  }

  constructor(private store: Store<fromItems.State>, private authStore: Store<fromAuth.State>) { }

  search(filters: Filters) {
    this.filters = { ...this.filters, ...filters };
    this.store.dispatch(new ItemActions.Search(this.filters));
  }

  addToCart(id: number) {
    this.store.dispatch(new ItemActions.AddCartItem(id))
  }

  removeFromCart(id: number) {
    this.store.dispatch(new ItemActions.RemoveCartItem(id));
  }

  addFav(id: number) {
    this.store.dispatch(new ItemActions.AddFavItem(id))
  }

  removeFav(id: number) {
    this.store.dispatch(new ItemActions.RemoveFavItem(id))
  }
}
