import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { ItemService } from '../services';
import {
  catchError,
  debounceTime,
  map,
  skip,
  switchMap,
  takeUntil,
} from 'rxjs/operators';
import { Observable, asyncScheduler, of } from 'rxjs';
import { Search, ItemActionTypes, SearchComplete, SearchError, GetCats, CatsTypes, GetCatsSuccess, GetCatsFailure, GetSubCats, GetSubCatsFailure, GetSubCatsSuccess } from '../actions';
import { Action } from '@ngrx/store';
import { ItemsResponse } from '../models/items-response';
import { CategoryService } from '../services/category.service';


@Injectable()
export class ItemEffects {

  constructor(private actions$: Actions, private itemService: ItemService, private categoryService: CategoryService) { }

  @Effect()
  search$ = ({ debounce = 300, scheduler = asyncScheduler } = {}): Observable<Action> => this.actions$.pipe(
    ofType<Search>(ItemActionTypes.Search),
    debounceTime(debounce, scheduler),
    map(action => action.payload),
    switchMap(filters => {
      return this.itemService.getBy(filters).pipe(
        map((data: ItemsResponse) => {
          console.log("ItemEffect:search")
          return new SearchComplete(data);
        }),
        catchError(err => of(new SearchError(err))
        )
      )
    }
    ))

  @Effect()
  categories$: Observable<Action> = this.actions$.pipe(
    ofType<GetCats>(CatsTypes.Get_Cats),
    switchMap(() => {
      return this.categoryService.getCategories().pipe(
        map(data => {
          console.log("ItemEffect:categoires")
          return new GetCatsSuccess(data);
        }),
        catchError(err => of(new GetCatsFailure(err)))
      )
    })
  )

  @Effect()
  subCategories$: Observable<Action> = this.actions$.pipe(
    ofType<GetSubCats>(CatsTypes.Get_SubCats),
    switchMap(() => {
      return this.categoryService.getSubCategories().pipe(
        map(data => {
          console.log("ItemEffect:subCategoires")
          return new GetSubCatsSuccess(data);
        }),
        catchError(err => of(new GetSubCatsFailure(err)))
      )
    })
  )
}
