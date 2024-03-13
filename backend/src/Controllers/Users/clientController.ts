import mssql from 'mssql';
import { Request, Response } from "express";
import { v4 } from 'uuid';
import bcrypt from 'bcrypt';

import { sqlConfig } from '../../Config/sqlConfig';
import { clientInterface } from '../../Interfaces/clientInterface';
import { clientSchema } from '../../Validators/clientValidators';


export const registerClient = async (req: Request, res: Response) => {

    try{
        const { firstName, lastName, email, password ,phone}:clientInterface= req.body;
        let { error } = clientSchema.validate(req.body)
        if (error) {
            return res.json({
                error: error.details[0].message
            })
        }
        else {
            const emailExists = await checkIfEmailExists(email);
            if (emailExists) {
                return res.json({
                    error: 'Email is already registered',
                });
            } 
            else {
                const id = v4();
                const hashPwd = await bcrypt.hash(password, 5)
                const pool = await mssql.connect(sqlConfig)

                const newClient= (await pool.request()
                .input("client_id", mssql.VarChar, id) 
                .input("firstName", mssql.VarChar, firstName)
                .input("lastName", mssql.VarChar, lastName)
                .input("email", mssql.VarChar, email)
                .input("password", mssql.VarChar, hashPwd)
                .input("phone", mssql.VarChar, phone)
                .execute('createClient')
                ).rowsAffected; 

                console.log(newClient);

                if (newClient) {
                    return res.json({
                        message: "Account for new Client created successfully",
                    });
                } else {
                    return res.json({ error: "An error occurred while registerClient." });
                }
            }
        }
    }
    //catch block
    catch (error) {
        console.error("Error creating Client:", error);
        return res.json({ error: " The Client account was not created." });
    }
///  end of catch block///
};

    //check if email exist functionallity
    async function checkIfEmailExists(email: string): Promise<boolean> {
        const pool = await mssql.connect(sqlConfig);
        const result = await pool
            .request()
            .input('email', mssql.VarChar, email)
            .query('SELECT COUNT(*) AS count FROM Clients WHERE email = @email');
    
        return result.recordset[0].count > 0;
    }
    