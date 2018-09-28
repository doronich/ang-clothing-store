import { Injectable } from '@angular/core';
import { LoginModel, RegModel, CheckUserModel } from "../models/auth";
import { ApiService } from '../../core/services';
import { map } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';
import { TokenService } from './token.service';
import { Roles } from '../models/user';
import { Observable } from 'rxjs';

@Injectable()
export class AuthService {

  constructor(private apiService: ApiService, private tokenService: TokenService) { }

  login(body: LoginModel) {
    /*     const reqHeaders =
          new HttpHeaders({ 'Content-Type': 'application/x-www-urlencoded', 'No-Auth': 'True' }) */
    return this.apiService.post('/token', body/* , { headers: reqHeaders } */)
      .pipe(map(
        data => this.tokenHelper('login', data)
      ));
  }

  public isAuthenticated(): boolean {
    return this.tokenService.getToken() ? true : false;
  }

  public getRole(): Roles {
    return this.tokenService.getUser().role as Roles;
  }

  public checkUser(body: CheckUserModel): Observable<boolean> {
    return this.apiService.post('/check', body).pipe(
      map(data => {
        console.log(`AuthService: CheckUser>`, data);
        return data;
      })
    )
  }

  public register(body: RegModel) {
    return this.apiService.post('/register', body)
      .pipe(map(
        data => this.tokenHelper('register', data)
      ))
  }

  private tokenHelper(methodName: string, data: string): string {
    const user = JSON.parse(data);
    console.log(`AuthService: ${methodName}>resp>data:`, user)
    this.tokenService.saveToken(data)
    return data;
  }

}
