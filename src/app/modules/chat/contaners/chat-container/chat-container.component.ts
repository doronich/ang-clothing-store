import { Component, OnInit } from '@angular/core';
import { HubConnection } from '@aspnet/signalr';
import * as signalR from '@aspnet/signalr';
import { environment } from 'src/environments/environment';
import { Message } from '../../models';
import { Store, select } from '@ngrx/store';
import * as fromAuth from '../../../auth/reducers'
import { User } from 'src/app/modules/auth/models/user';
import { TokenService } from 'src/app/modules/auth/services';

@Component({
  selector: 'app-chat-container',
  templateUrl: './chat-container.component.html',
  styleUrls: ['./chat-container.component.css']
})
export class ChatContainerComponent implements OnInit {
  private _hubConnection: HubConnection | undefined;
  public async: any;
  user: User;
  messages: Message[] = [];
  users: string[] = [];
  loggedIn$ = this.store.pipe(select(fromAuth.getLoggedIn));
  isOpened: boolean = false;
  typing: boolean = false;
  timerId = null;

  constructor(private store: Store<fromAuth.State>, private tokenService: TokenService) {
  }

  public sendMessage(m: string): void {
    this.user = this.tokenService.getUser() as User;
    const message = { message: m, username: this.user.username } as Message;
    this._hubConnection.invoke('SendMessage', message.username, message.message);
  }

  ngOnInit() {
    this.user = this.tokenService.getUser() as User;
    this._hubConnection = new signalR.HubConnectionBuilder()
      .withUrl(`${environment.api_url}/chat`)
      .configureLogging(signalR.LogLevel.Information)
      .build();

    this._hubConnection.start().catch(err => console.error(err.toString()));

    this._hubConnection.on('Send', (username, message) => {

      this.messages.push({ message, username })
    });

    this._hubConnection.on('StartTyping', (username) => {
      if (this.users.indexOf(username) < 0) {
        this.users = this.users.concat([username]);
        this.typing = this.users.length > 0;
      } else {
        this.typing = this.users.length > 0;
      }
    });

    this._hubConnection.on('StopTyping', (username) => {
      this.users = this.users.filter(i => i !== username);
      this.typing = this.users.length > 0;
    });
  }

  open() {
    this.isOpened = !this.isOpened;
  }

  startTyping() {
    this._hubConnection.invoke("SendTyping", this.user.username)

    clearTimeout(this.timerId)
    this.timerId = setTimeout(() => {
      this._hubConnection.invoke("DeleteTyping", this.user.username)
    }, 1000);
  }

}
