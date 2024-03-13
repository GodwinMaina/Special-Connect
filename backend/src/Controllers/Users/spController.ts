import mssql from 'mssql';
import { Request, Response } from "express";
import { v4 } from 'uuid';
import bcrypt from 'bcrypt';

import { specialistInterface } from '../../Interfaces/spInterface';
import { specialistSchema } from '../../Validators/specialistValidator';
import { sqlConfig } from '../../Config/sqlConfig';


export const registerSpecialist = async (req: Request, res: Response) => {

    try{
        const { firstName, lastName, email, password, photo, city, country,postal, phone}:specialistInterface = req.body;
        let { error } = specialistSchema.validate(req.body)
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

                const newSpecialist = (await pool.request()
                .input("specialist_id", mssql.VarChar, id) 
                .input("firstName", mssql.VarChar, firstName)
                .input("lastName", mssql.VarChar, lastName)
                .input("email", mssql.VarChar, email)
                .input("photo", mssql.VarChar, photo)
                .input("password", mssql.VarChar, hashPwd)
                .input("country", mssql.VarChar, country)
                .input("postal", mssql.VarChar, postal)
                .input("city", mssql.VarChar, city)
                .input("phone", mssql.VarChar, phone)
                .execute('createSpecialist')
                ).rowsAffected; 

                console.log(newSpecialist);

                if (newSpecialist) {
                    return res.json({
                        message: "Account for new specialist created successfully",
                    });
                } else {
                    return res.json({ error: "An error occurred while registering specialist." });
                }
            }
        }
    }
    //catch block
    catch (error) {
        console.error("Error creating specialist:", error);
        return res.json({ error: " The specialist account was not created." });
    }
///  end of catch block///
};

    //check if email exist functionallity
    async function checkIfEmailExists(email: string): Promise<boolean> {
        const pool = await mssql.connect(sqlConfig);
        const result = await pool
            .request()
            .input('email', mssql.VarChar, email)
            .query('SELECT COUNT(*) AS count FROM Specialist WHERE email = @email');
    
        return result.recordset[0].count > 0;
    }
    