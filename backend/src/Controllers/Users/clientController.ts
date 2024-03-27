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
                    emailError: 'Email is already registered',
                    error: 'Email is already registered'
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
                    return res.status(201).json({
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
    async function checkIfInClients(email: string): Promise<boolean> {
        const pool = await mssql.connect(sqlConfig);
        const result = await pool
            .request()
            .input('email', mssql.VarChar, email)
            .query('SELECT COUNT(*) AS count FROM Clients WHERE email = @email');
    
        return result.recordset[0].count > 0;
    }
    
    async function checkIfInSpecialist(email: string): Promise<boolean> {
        const pool = await mssql.connect(sqlConfig);
        const result = await pool
            .request()
            .input('email', mssql.VarChar, email)
            .query('SELECT COUNT(*) AS count FROM Specialist WHERE email = @email');
    
        return result.recordset[0].count > 0;
    }
    
    async function checkIfEmailExists(email: string) {
        const InClients = await checkIfInClients(email);
        const InSpecialists = await checkIfInSpecialist(email);
        
        if (InClients || InSpecialists) {
            return "Email is already registered.";
        }
    }
    


    
//getAllClients
export const getAllClients = async (req: Request, res: Response) => {

    try {  
        const pool = await mssql.connect(sqlConfig);
        let allClients = (await pool.request().execute('getAllClients')).recordset

        return res.json({
            message: allClients
        })
    } catch (error) {
        return res.json({error})
    }
};



//getOneClient
export const getOneClient = async (req: Request, res: Response) => {

    try {
        const id = req.params.client_id
        const pool = await mssql.connect(sqlConfig)
        let client = (await pool.request().input("client_id", id).execute('getOneClient')).recordset
        return res.json({
            client
        })
    } catch (error) {
        return res.json({error})
    }
};



//updateClient
export const updateClient = async (req: Request, res: Response) => {
    try {
        const id = req.params.client_id
        const { firstName, lastName, email, password ,phone}:clientInterface= req.body;
        let { error } = clientSchema.validate(req.body)
        if (error) {
            return res.json({
                error: error.details[0].message
            })
        }

    else{
       const hashPwd = await bcrypt.hash(password, 5)
        const pool = await mssql.connect(sqlConfig)

         // Check if user with the provided user_id exists first
         const userExist = await pool.request()
         .input("client_id", id)
         .query('SELECT COUNT(*) AS userCount FROM Clients WHERE client_id = @client_id');
     
     if (userExist.recordset[0].userCount === 0) {
         return res.json({ error: "No such Client." });
     }

     else{
        let UpdateResult = (await pool.request()
        .input("client_id", mssql.VarChar, id) 
        .input("firstName", mssql.VarChar, firstName)
        .input("lastName", mssql.VarChar, lastName)
        .input("email", mssql.VarChar, email)
        .input("password", mssql.VarChar, hashPwd)
        .input("phone", mssql.VarChar, phone)
        .execute('updateClient')).rowsAffected

        console.log(UpdateResult);
        
        return res.json({
            message: "Client updated successfully"
        })
       }
    }

    } catch (error) {
        return res.json({error})
    }
};

//deleteClient
export const deleteClient = async (req: Request, res: Response) => {

    try {
        const id = req.params.client_id
        const pool = await mssql.connect(sqlConfig)
        let result = (await pool.request()
        .input("client_id", mssql.VarChar, id)
        .execute('deleteClient')
        ).rowsAffected

        console.log(result[0]);
        
        if(result[0] == 0){
            return res.json({
                error: "Client not found"
            })
            
        }else{
            return res.json({
                message: "Account deleted successfully"
            })
        }


    } catch (error) {
        return res.json({error})
    }
};
   