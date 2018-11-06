import { Injectable } from '@angular/core';
import { HubConnection } from '@aspnet/signalr';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private _hubConnection: HubConnection | undefined;
  public async: any;
  message = '';
  messages: string[] = [];

  constructor() { }

  public sendMessage(): void {
    const data = ``
  }
}
