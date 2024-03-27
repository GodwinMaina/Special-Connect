import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ChatService } from '../../services/chartService/chart.service';
import { AuthService } from '../../services/authServices/auth.service';
import { ActivatedRoute } from '@angular/router';
import { MessagesService } from '../../services/msgServices/messages.service';
import { Chat, MessageInterface } from '../../interface/message';
import { Message } from '../messages/messages.component';

@Component({
  selector: 'app-client-messages',
  standalone: true,
  imports: [],
  templateUrl: './client-messages.component.html',
  styleUrl: './client-messages.component.css'
})
export class ClientMessagesComponent {


  // message: string = '';
  messages: Message[] = []
  senderId!: string;
  recipientId!: string;
  messageForm!: FormGroup;
  chats: Chat[] = []
  Messages:MessageInterface [] = []

  getRecepientId() {
    this.route.params.subscribe(params => {
      this.recipientId = params['id']
    })
    this.socket.emit('create-chat', { senderId: this.senderId, receiverId: this.recipientId })
  }

  getUserId() {

    const token: string = localStorage.getItem("token") as string;
    this.authservice.checkUserDetails(token).subscribe(res => {
      this.senderId = res.info.client_id
      this.setHeaders();
      this.getRecepientId();
      this.getChats(this.senderId)
    })
  }

  constructor(private socket: ChatService, private authservice: AuthService, private route: ActivatedRoute, private fb: FormBuilder, private messageservice: MessagesService) {
    this.messageForm = this.fb.group({
      message: ['', Validators.required]
    })
    this.getUserId()
    this.getMessage()
  }

  setHeaders() {
    console.log("Your id", this.senderId);

    this.socket.ioSocket.io.opts.extraHeaders = {
      senderId: this.senderId
    };
    this.socket.connect()
  }

  sendMessage() {
    if(this.messageForm.valid){
    this.socket.emit('message', { message: this.messageForm.value.message, recipientId: this.recipientId });
    let messageObj = {
      message: this.messageForm.value.message,
      sender: this.senderId
    }

    this.messages.push(messageObj)
    console.log(this.messages);
    this.messageForm.reset()
  }


  }
  getMessage() {
    this.socket.fromEvent('message').subscribe((data: any) => {
      this.messages.push(data);
      // this.recipientId = data.sender;
    });
  }

  getChats(userId: string){
    this.messageservice.getChats(userId).subscribe(res => {
      res.chats.forEach(chat => {
        this.chats.push(chat)
      })
    })
  }

  getMessages(chatId: string){
    this.messageservice.getMessages(chatId).subscribe(res => {
      console.log(res);
      res.messages.forEach(message => {
        this.Messages.push(message)
      })

    })
  }





}
