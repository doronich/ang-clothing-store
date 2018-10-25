import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { map, catchError, mergeMap, withLatestFrom, tap } from 'rxjs/operators';
import { Action, Store } from '@ngrx/store';
import { OrderActionsType, GetOrdersFailure, GetOrdersSuccess, GetOrders, RemoveOrder, RemoveOrderSuccess, RemoveOrderFailure, GetOrder, GetOrderSuccess, GetOrderFailure, GetOrderItems, GetOrderItemsSuccess, GetOrderItemsFailure, UpdOrder, UpdOrderSuccess, UpdOrderFailure } from '../actions/order.actions';
import { switchMap } from 'rxjs/operators';
import { OrderService, CodeService } from 'src/app/modules/orders/services';
import * as fromOrders from "../reducers";
import * as fromItems from "../../items/reducers"
import { Order, UpdateOrder, CreateOrder } from 'src/app/modules/orders/models';
import { GetItems, ShopCartTypes, GetItemsSuccess, GetItemsFailure } from '../actions/cart.actions';
import { GetUserInfo, UserDetTypes, GetUserInfoSuccess, GetUserInfoFailure, CheckCode, CheckCodeSuccess, CheckCodeFailure, CreateOrderReq, CreateOrderSuccess, CreateOrderFailure } from '../actions';
import { UserService } from '../services/user.service';
import { AuthService, TokenService } from '../../auth/services';
import { User } from '../../auth/models/user';
import { Router } from '@angular/router';
import { ClearCart } from '../../items/actions';

@Injectable()
export class OrderEffects {


  constructor(private actions$: Actions,
    private orderService: OrderService,
    private store$: Store<fromOrders.State>,
    private itemStore$: Store<fromItems.State>,
    private userService: UserService,
    private tokenService: TokenService,
    private codeService: CodeService,
    private router: Router) { }

  @Effect()
  getOrders$: Observable<Action> = this.actions$.pipe(
    ofType<GetOrders>(OrderActionsType.GetOrders),
    withLatestFrom(this.store$),
    switchMap(([action, store]) => {

      //console.log(`Order Effects: getOrders`)
      const curOrders = store.orders.orders.orders;
      if (curOrders.length > 0) {
        //console.log(curOrders);
        return of(new GetOrdersSuccess(curOrders as Order[]));
      }

      return this.orderService.getAll().pipe(
        map(data => {
          //console.log(data);
          return new GetOrdersSuccess(data);
        }),
        catchError(err => of(new GetOrdersFailure(err)))
      )
    })
  )

  @Effect()
  getOrderItems$: Observable<any> = this.actions$.pipe(
    ofType<GetOrderItems>(OrderActionsType.GetOrderItems),
    map(action => action.payload),
    switchMap(id => {
      //console.log(`Order Effects: getOrderItems`);
      return this.orderService.getOrderItems(id).pipe(
        map(data => {
          //console.log(data);
          return new GetOrderItemsSuccess(data)
        }),
        catchError(err => of(new GetOrderItemsFailure(err)))
      )
    })
  )

  @Effect()
  removeOrder$: Observable<Action> = this.actions$.pipe(
    ofType<RemoveOrder>(OrderActionsType.RemoveOrder),
    map(action => action.payload),
    mergeMap(order => {
      //console.log(`Order Effects: removeOrder`)
      return this.orderService.deleteOrder(order.id).pipe(
        map(() => new RemoveOrderSuccess(order)),
        catchError(() => of(new RemoveOrderFailure(order)))
      )
    })
  )

  @Effect()
  getOrder$: Observable<Action> = this.actions$.pipe(
    ofType<GetOrder>(OrderActionsType.GetOrder),
    map(action => action.payload),
    switchMap((id) => {
      //console.log(`Order Effects: getOrder`)
      return this.orderService.getOrder(id).pipe(
        map(data => {
          //console.log(data)
          return new GetOrderSuccess(data);
        }),
        catchError((err) => of(new GetOrderFailure(err)))
      )
    })
  )

  @Effect()
  updateOrder$: Observable<any> = this.actions$.pipe(
    ofType<UpdOrder>(OrderActionsType.UpdOrder),
    map(act => act.payload),
    switchMap(data => {
      //console.log(`Order Effects: updOrder`)
      return this.orderService.updateOrder(data).pipe(
        map(() => {
          return new UpdOrderSuccess(data);
        }),
        catchError((err) => of(new UpdOrderFailure(err))
        )
      )
    }
    ))


  @Effect()
  getCartItems$: Observable<any> = this.actions$.pipe(
    ofType<GetItems>(ShopCartTypes.Get_Items),
    map(action => action.payload),
    switchMap(arr => {
      //console.log(`Order Effects: getCartItems`);
      return this.orderService.getToCart(arr).pipe(
        map(data => {
          //console.log(data);
          return new GetItemsSuccess(data)
        }),
        catchError(err => of(new GetItemsFailure(err)))
      )
    })
  )

  @Effect()
  getUserInfo$: Observable<any> = this.actions$.pipe(
    ofType<GetUserInfo>(UserDetTypes.Get_User_Info),
    map(action => action.payload),
    switchMap(userInfo => {
      const user = this.tokenService.getUser() as User;
      return this.userService.getUserInfo(user.username).pipe(
        map(data => {
          return new GetUserInfoSuccess(data);
        }),
        catchError(err => of(new GetUserInfoFailure(err)))
      )
    })
  )

  @Effect()
  checkCode$: Observable<any> = this.actions$.pipe(
    ofType<CheckCode>(UserDetTypes.CheckCode),
    map(action => action.payload),
    switchMap((code: string) => {
      return this.codeService.checkCode(code).pipe(
        map(data => {
          return new CheckCodeSuccess(data);
        }),
        catchError(err => of(new CheckCodeFailure(err)))
      )
    })
  )

  @Effect()
  checkout$: Observable<any> = this.actions$.pipe(
    ofType<CreateOrderReq>(UserDetTypes.CreateOrder),
    map(action => action.payload),
    switchMap((order: CreateOrder) => {
      return this.orderService.createOrder(order).pipe(
        map(data => {

          return new CreateOrderSuccess()
        }),
        catchError(err => of(new CreateOrderFailure(err)))
      )
    })
  )

  @Effect({ dispatch: false })
  checkoutSuccess$: Observable<any> = this.actions$.pipe(
    ofType(UserDetTypes.CreateOrderSuccess),
    tap(() => {
      this.router.navigate(['/'])
      this.itemStore$.dispatch(new ClearCart())
    })
  );
}
