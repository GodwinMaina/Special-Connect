import { Component } from '@angular/core';
import { ChatService } from '../../services/chartService/chart.service';
import { AuthService } from '../../services/authServices/auth.service';



export interface Message {
  message: string,
  sender: string
}

@Component({
  selector: 'app-messages',
  standalone: true,
  imports: [],
  templateUrl: './messages.component.html',
  styleUrl: './messages.component.css'
})



export class MessagesComponent {

  message:string = '';
  messages:Message[] = []
  userId!: string;

  getUserId(){
    const token: string = localStorage.getItem("specialty_token") as string;

    this.authservice.checkUserDetails(token).subscribe(res => {
      this.userId = res.info.client_id
      this.setHeaders();
    })
  }
  recipientId: string = "c58b30b2-07f3-44e7-84a0-714e445ef954"

  constructor(private socket: ChatService, private authservice: AuthService){
    this.getUserId()
    this.getMessage()
  }

  setHeaders(){
    console.log("Your id", this.userId);

    this.socket.ioSocket.io.opts.extraHeaders = {
      userId: this.userId
    };
    this.socket.connect()
}

  sendMessage(){
    this.socket.emit('message', {message: this.message, recipientId: this.recipientId});
    let messageObj = {
      message: this.message,
      sender: this.userId
    }

    this.messages.push(messageObj)
    console.log(this.messages);

    this.message = ''
  }
  getMessage(){
  this.socket.fromEvent('message').subscribe((data : any)=> {
    this.messages.push(data)
    this.recipientId = data.sender
  })
  }

}
