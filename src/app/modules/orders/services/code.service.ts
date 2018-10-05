import { Injectable } from '@angular/core';
import { ApiService } from '../../core/services';
import { pipe } from '@angular/core/src/render3/pipe';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable()
export class CodeService {

  constructor(private apiService: ApiService) { }

  checkCode(code: string): Observable<boolean> {
    console.log(`Code service: checkCode(${code})`)
    return this.apiService.get(`/order/checkcode?code=${code}`)
      .pipe(
        map(data => {
          console.log(`GET==Code serivce: code received`)
          return data;
        })
      )
  }
}
