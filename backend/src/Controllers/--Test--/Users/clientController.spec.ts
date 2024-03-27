import bcrypt from 'bcrypt'
import mssql from 'mssql'

import { registerClient } from '../../Users/clientController'

describe("User Registration", ()=>{

    let res: any

    beforeEach(()=>{
        res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn().mockReturnThis()
        }
    })

    it('successfully registers a Client', async()=>{
        const req ={
            body:{
                    firstName: "client",
                    lastName: "maina",
                    email: "kingangiduncan47@gmail.com",
                    password: "123456",
                    phone:"072345600" 
            }
        }

        jest.spyOn(bcrypt, 'hash').mockResolvedValueOnce("HashedPwd" as never)

        const mockedInput = jest.fn().mockReturnThis() //makes it chainable

        const mockedExecute = jest.fn().mockResolvedValue({rowsAffected: [1]})

        const mockedRequest = {
            input: mockedInput,
            execute: mockedExecute
        }

        const mockedPool = {
            request: jest.fn().mockReturnValue(mockedRequest)
        }

        jest.spyOn(mssql, 'connect').mockResolvedValue(mockedPool as never)

        await registerClient(req as any, res)

        expect(res.status).toHaveBeenCalledWith(201);
        expect(res.json).toHaveBeenCalledWith({ message: "Account for new Client created successfully" });

    })


})