import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { map } from 'rxjs/operators';

@Injectable()
export class OrderService {

  constructor(private apiService: ApiService) { }

  getAll() {
    console.log('Order service: getall()')
    return this.apiService.get('/order/orders')
      .pipe(map(data => {
        console.log(`Order serivce: orders received`)
        return data;
      }))
  }
}
