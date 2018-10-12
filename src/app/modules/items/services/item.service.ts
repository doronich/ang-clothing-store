import { Injectable } from '@angular/core';
import { ApiService } from '../../core/services';
import { Filters } from '../models';
import { HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ItemsResponse } from '../models/items-response';

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
}
