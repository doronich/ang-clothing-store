import { Injectable } from '@angular/core';
import { ApiService } from '../../core/services';
import { Filters, Fav, ItemForCart } from '../models';
import { HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ItemsResponse } from '../models/items-response';
import { CurrentItem } from '../models/current-item';


@Injectable()
export class ItemService {

  constructor(private apiServcie: ApiService) { }

  getBy(filters: Filters): Observable<ItemsResponse> {
    let params = new HttpParams();
    Object.keys(filters).forEach((item) => {
      if (filters[item] !== null && filters[item] !== undefined)
        params = params.set(item, filters[item]);
    });

    console.log('[GET_BY] Params', params)
    return this.apiServcie.get(`/item/q`, params).pipe(
      map(data => {
        return data as ItemsResponse;
      })
    )
  }

  getItem(id: number): Observable<CurrentItem> {
    return this.apiServcie.get(`/item/${id}`).pipe(
      map(data => {
        const result = data as CurrentItem;
        //console.log(result);
        return result;
      })
    )
  }

  addFavItem(obj: Fav) {
    return this.apiServcie.post(`/favitem`, obj).pipe(
      map(data => data)
    )
  }

  removeFavItem(obj: Fav) {
    return this.apiServcie.delete(`/favitem?userId=${obj.userId}&itemId=${obj.itemId}`).pipe(
      map(data => data)
    )
  }
}
