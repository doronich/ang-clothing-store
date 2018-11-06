import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../../services';
import { TokenService } from 'src/app/modules/auth/services';
import { User } from 'src/app/modules/auth/models/user';
import { UserInfo } from 'src/app/modules/admin/modules/orders/models';
import { tap, catchError, delay } from 'rxjs/operators';
import { of } from 'rxjs';
import { ChangePasswordModel } from '../../models';
import { utc, } from "moment";
import { statusHelper } from 'src/app/modules/profile/helpers';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {

  userData: UserInfo = {} as UserInfo;
  user: User;
  orders = [];
  userMessage: any = null;
  passwordMessage: any = null;
  constructor(private tokenService: TokenService, private userDataService: UserDataService) { }

  ngOnInit() {
    document.title = "STORE: profile"
    this.user = this.tokenService.getUser() as User;
    this.userDataService.getUserData(this.user.username).pipe(tap((data) => {
      this.userData = data;
    })).subscribe();
    this.userDataService.getOrders(this.user.id).pipe(tap(data => {
      this.orders = data.map((order) => {
        return {
          ...order,
          createDate: utc(order.createDate).local().format("DD-MM-YYYY HH:mm:ss"),
          status: statusHelper.getStatus(+order.status)
        }
      });
    })).subscribe();
  }

  changePassword(data: ChangePasswordModel) {
    this.userDataService.changePassword({ id: this.user.id, currentPassword: data.currentPassword, newPassword: data.newPassword })
      .pipe(
        tap(() => this.passwordMessage = "The password successfully changed."),
        catchError(err => {
          this.passwordMessage = "Incorrect password."
          return of(console.log(err))
        }),
        delay(2000),
        tap(() => {
          this.passwordMessage = null
        })
      ).subscribe();
  }

  changeUserData(data: UserInfo) {
    this.userDataService.changeUserData(data).pipe(
      tap(() => {
        this.userMessage = "User info is updated."
        this.userData = data;
      }),
      catchError(err => {
        this.userMessage = "Error while updating user info."
        return of(console.log(err))
      }),
      delay(2000),
      tap(() => {
        this.userMessage = null
      })
    ).subscribe();
  }

}
