import { Injectable } from '@angular/core';
import { ApiService } from '../../core/services';
import { map } from 'rxjs/operators';
import { Category, SubCategory } from '../models';
import { Observable } from 'rxjs';

@Injectable()
export class CategoryService {

  constructor(private apiServcie: ApiService) { }

  getCategories(): Observable<Category[]> {
    return this.apiServcie.get(`/category`).pipe(
      map(data => {
        return data as Category[];
      })
    )
  }

  getSubCategories(): Observable<SubCategory[]> {
    return this.apiServcie.get(`/category/sub`).pipe(
      map(data => {
        return data as SubCategory[];
      })
    )
  }
}
