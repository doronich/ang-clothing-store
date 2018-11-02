import { Injectable } from '@angular/core';
import { ApiService } from '../../core/services';
import { Observable } from 'rxjs';
import { UserInfo } from 'src/app/modules/admin/modules/orders/models';
import { map } from 'rxjs/operators';
import { ChangePasswordModel, UserOrder } from '../models';

@Injectable()
export class UserDataService {

  constructor(private apiService: ApiService) { }

  getUserData(username): Observable<UserInfo> {
    return this.apiService.get(`/user/user?username=${username}`).pipe(
      map(data => {
        return data as UserInfo;
      })
    )
  }

  changeUserData(data: UserInfo): Observable<any> {
    return this.apiService.put(`/User/Update`, data)
  }

  changePassword(data: ChangePasswordModel): Observable<any> {
    return this.apiService.post(`/ChangePassword`, data)
  }

  getOrders(id: number): Observable<UserOrder[]> {
    return this.apiService.get(`/order/userorders?id=${id}`).pipe(
      map(data => {
        return data as UserOrder[];
      })
    )
  }
}
