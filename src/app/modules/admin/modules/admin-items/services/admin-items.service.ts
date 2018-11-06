import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/modules/core/services';
import { ItemForAdmin, EditItem, GetItem } from '../models';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class AdminItemsService {

  constructor(private apiService: ApiService) { }

  getAll(): Observable<ItemForAdmin[]> {
    return this.apiService.get(`/item/admin/all`).pipe(
      map(data => {
        return data as ItemForAdmin[];
      })
    )
  }

  deleteItem(id: number) {
    return this.apiService.delete(`/item/${id}`)
  }

  getItem(id: number): Observable<GetItem> {
    return this.apiService.get(`/item/${id}`).pipe(
      map(data => {
        return data as GetItem;
      })
    )
  }

  createItem(item: EditItem): Observable<any> {
    return this.apiService.post(`/item`, item)
  }

  updateItem(item: EditItem): Observable<any> {
    return this.apiService.put('/item', item)
  }
}
