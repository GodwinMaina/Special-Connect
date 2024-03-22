

import mssql from 'mssql';
import { Request, Response } from "express";
import {v4} from 'uuid';
import { message } from '../../Interfaces/message';
import { MessageSchema } from '../../Validators/messageSchema';
import { sqlConfig } from '../../Config/sqlConfig';
import {io} from '../../server'


export const createMessage = async (req:Request, res: Response) => {
    try {
        const id = v4()

        const {client_id, specialist_id, messagetxt, timestamp}:message= req.body

        let {error} = MessageSchema.validate(req.body)

        if(error){
            return res.json({
                error: error
            })
        }

        const pool = await mssql.connect(sqlConfig)

        let result = (await pool.request()
        .input("message_id", id)
        .input("client_id", client_id)
        .input("specialist_id", specialist_id)
        .input("messagetxt", messagetxt)
        .execute('SendMessage')).rowsAffected

        io.emit('message', {
            message_id: id,
            client_id,
            specialist_id,
            messagetxt,
        });

        return res.json({
            result: "message created succesfully"
        })
    } catch (error) {
        return res.json({error})
    }
}


export  const getspecilistMessages = async (req:Request, res: Response) => {
    try {
        const specialist_id = req.params.specialist_id

        const pool = await mssql.connect(sqlConfig)

        let messages = (await pool.request()
        .input("specialist_id", specialist_id)
        .execute('getSpMessages')).recordset

        res.json({messages})
    } catch (error){
        return res.json({error})
    }
}



export const getclientMessages = async (req:Request, res: Response) => {
    try {
        const client_id = req.params.client_id

        const pool = await mssql.connect(sqlConfig)

        let messages = (await pool.request()
        .input("client_id", client_id)
        .execute('getClientMessages')).recordset

        res.json({messages})

    } catch (error){
        res.json({error})
    }
}



export const getChatSessionMessages = async(req:Request, res: Response) => {
    try{
        const {client_id, specialist_id} = req.params

        const pool = await mssql.connect(sqlConfig)

        let messages = (await pool.request()
        .input("specialist_id", specialist_id)
        .input("client_id", client_id)
        .execute('getChatSessionMessages')).recordset

        res.json({messages})
    } catch (error){
        res.json({error})
    }
}



export const updateMessageStatus = async (req: Request, res: Response) => {
    try {
        const message_id = req.params.message_id;
        const status = req.body.status; 

        const pool = await mssql.connect(sqlConfig);

        let result = await pool.request()
            .input("message_id", message_id)
            .input("status", status)
            .execute('updateMessageStatus');

        res.json({ result });
    } catch (error) {
        res.json({ error });
    }
};
