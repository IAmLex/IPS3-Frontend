import { Injectable } from '@angular/core';
import { Message } from '../../models/message.model';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {
  private _webSocket: WebSocket;
  private _messages: Message[] = [];

  constructor() { }

  public openWebsocket() {
    this._webSocket = new WebSocket(`ws://localhost:8080/chat`);

    this._webSocket.onopen = (e) => {
      console.log(`Openend connection`);
    };
    
    // Incoming message from the server
    this._webSocket.onmessage = (e) => {
      let message = JSON.parse(e.data);
      this._messages.push(message);
    }

    this._webSocket.onclose = (e) => {
      console.log(`Closed connection`);
    }
  }

  public sendMessage(message: Message) {
    this._webSocket.send(JSON.stringify(message));
  }

  public closeWebsocket() {
    this._webSocket.close();
  }

  public getMessages(): Message[] {
    return this._messages
  }
}
