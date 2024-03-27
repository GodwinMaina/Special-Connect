


import { Injectable } from '@angular/core';
import { Socket, SocketIoConfig } from 'ngx-socket-io';

const config:SocketIoConfig = { url: 'http://localhost:3001', options: {
  autoConnect: false
}}

@Injectable({
  providedIn: 'root'
})
export class ChatService extends Socket {

  constructor() {
    super(config)
   }
}






