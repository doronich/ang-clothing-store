import { Injectable } from '@angular/core';
import { LoginModel } from "../models/auth";
import { ApiService } from '../../core/services';
import { map } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';
import { TokenService } from './token.service';

@Injectable()
export class AuthService {

  constructor(private apiService: ApiService, private tokenService: TokenService) { }

  login(body: LoginModel) {
    const reqHeaders =
      new HttpHeaders({ 'Content-Type': 'application/x-www-urlencoded', 'No-Auth': 'True' })
    return this.apiService.post('/token', body, { headers: reqHeaders })
      .pipe(map(
        data => {
          const user = JSON.parse(data);
          console.log(`AuthService: login>resp>data:`, user)
          this.tokenService.saveToken(data)
          return data;
        }
      ));
  }

}
