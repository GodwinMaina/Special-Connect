import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { chatRespone, messagesResponse } from '../../interface/message';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {
  constructor(private http: HttpClient) { }

  getChats(userId: string){
    return this.http.get<chatRespone>(`http://localhost:4000/chats/user-chats/${userId}`)
  }

  getMessages(chatId: string){
    return this.http.get<messagesResponse>(`http://localhost:4000/chats/chat-messages/${chatId}`)
  }
}


