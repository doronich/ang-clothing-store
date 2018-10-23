import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { ApiService } from 'src/app/modules/core/services';
import { Observable } from 'rxjs';
import { Order, UpdateOrder, CreateOrder } from 'src/app/modules/orders/models';
import { OrderItem } from '../models/order-item';
import { ItemForCart } from '../../items/models';
import * as qs from 'qs'

@Injectable()
export class OrderService {

  constructor(private apiService: ApiService) { }

  getAll(): Observable<Order[]> {
    //console.log('Order service: getall()')
    return this.apiService.get('/order/orders')
      .pipe(map(data => {
        // console.log(`GET==Order serivce: orders received`)
        return data;
      }))
  }

  getOrderItems(id: number): Observable<OrderItem[]> {
    // console.log(`Order service: getOrderItems(${id})`)
    return this.apiService.get(`/order/${id}`)
      .pipe(
        map(data => {
          //console.log(`GET==Order serivce: orderItems received`)
          return data;
        })
      )
  }

  getToCart(ids: number[]): Observable<ItemForCart[]> {
    return this.apiService.get(`/item/cart?${qs.stringify({ itemsId: ids })}`).pipe(
      map(data => {
        return data
      })
    )
  }

  getUserOrders(id: number): Observable<Order[]> {
    //console.log(`Order service: getUserOrders(${id})`)
    return this.apiService.get(`/order/userorders?id=${id}`)
      .pipe(
        map(data => {
          //console.log(`GET==Order serivce: userOrders received`)
          return data;
        })
      )
  }

  getOrder(id: number): Observable<Order> {
    // console.log(`Order service: getOrder(${id})`)
    return this.apiService.get(`/order/order?id=${id}`)
      .pipe(
        map(data => {
          // console.log(`GET==Order serivce: order received`)
          return data;
        })
      )
  }

  deleteOrder(id: number) {
    //console.log(`Order service: deleteOrder(${id})`)
    return this.apiService.delete(`/order/${id}`)
      .pipe(
        map(data => {
          //  console.log(`DELETE==Order serivce: order deleted`)
          return data;
        })
      )
  }

  updateOrder(order: UpdateOrder) {
    //console.log(`Order service: updateOrder(order)`, order)
    return this.apiService.put(`/order/`, order)
      .pipe(
        map(data => {
          //  console.log(`PUT==Order serivce: order updated`)
          return data;
        })
      )
  }

  createOrder(order: CreateOrder) {
    //console.log(`Order service: createOrder(order)`, order)
    return this.apiService.post(`/order`, order)
      .pipe(
        map(data => {
          //  console.log(`POST==Order serivce: order created`)
          return data;
        })
      )
  }


}
