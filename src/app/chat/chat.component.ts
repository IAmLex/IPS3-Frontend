import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { Message } from '../models/message.model';
import { WebsocketService } from '../services/websocket/websocket.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  public icon = faPaperPlane;

  constructor(public webSocketService: WebsocketService) { }

  ngOnInit(): void {
    this.webSocketService.openWebsocket();
  }

  onSubmit(form: NgForm) {
    console.log("Sending message");
    let userId = +sessionStorage.getItem("userId"); // 2
    let toUserId = 2;
    let messageText = form.value.message;

    // Setup the user ID 
    // TODO: on init of websocket
    let message = new Message(1, userId, null, null);
    this.webSocketService.sendMessage(message);

    message = new Message(0, userId, toUserId, messageText);
    this.webSocketService.sendMessage(message);

    console.log(form.value.message)
  }

  ngOnDestroy() {
    this.webSocketService.closeWebsocket();
  }

}
