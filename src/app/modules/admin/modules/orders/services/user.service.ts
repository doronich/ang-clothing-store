import { Injectable } from '@angular/core';
import { ApiService } from '../../../../core/services';
import { UserInfo } from '../models';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable()
export class UserService {

  constructor(private apiService: ApiService) { }

  getUserInfo(username: string): Observable<UserInfo> {
    return this.apiService.get(`/user/user?username=${username}`).pipe(
      map(data => {
        //console.log("user-info", data);
        return data;
      })
    )
  }
}
