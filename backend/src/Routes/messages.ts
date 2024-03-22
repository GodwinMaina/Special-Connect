
import { Router } from "express";
import { createMessage,   getclientMessages, getChatSessionMessages, updateMessageStatus, getspecilistMessages } from "../Controllers/messages/messages";
import { verifyToken } from "../Middlewares/verifyToken";


const messageRouter = Router()

messageRouter.post('/',verifyToken, createMessage);
messageRouter.get('/specialist/:specialist_id',verifyToken,  getspecilistMessages);
messageRouter.get('/client/:client_id/', verifyToken, getclientMessages);
messageRouter.get('/specialist/:specialist_id/client/:client_id',verifyToken, getChatSessionMessages);
messageRouter.put('/:message_id',verifyToken,  updateMessageStatus);

export default messageRouter
