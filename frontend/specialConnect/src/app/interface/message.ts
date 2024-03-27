
export interface chatRespone {
  chats: [
      {
          chatId: string,
          client_id: string,
          specialist_id: string,
          startedAt: Date,
          fullName: string
      }
  ]
}

export interface Chat {
  chatId: string,
  client_id: string,
  specialist_id: string,
  startedAt: Date,
  fullName: string
}

export interface messagesResponse {
  messages: [
      {
          messagesId: string,
          chatId: string,
         txtMessage: string,
          sentAt: string,
          client_id: string,
          specialist_id: string,
      }
  ]
}

export interface MessageInterface {
  messagesId: string,
  chatId: string,
  txtMessage: string,
  sentAt: string,
  client_id: string,
  specialist_id: string,
}
