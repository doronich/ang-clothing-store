import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable()
export class TokenService {

  constructor() { }

  getToken(): string {
    const token = window.localStorage["token"];
    return token ? JSON.parse(token).access_token : "";
  }

  getUser(): User {
    const data = window.localStorage["token"];
    let user: User;
    if (data) {
      user = JSON.parse(data);
    }
    return user;
  }

  saveToken(token: string) {
    window.localStorage["token"] = token;
  }

  destroyToken() {
    window.localStorage.removeItem("token");
  }
}
