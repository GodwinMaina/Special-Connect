import mssql from 'mssql';
import { Request, Response } from "express";
import { v4 } from 'uuid';
import bcrypt from 'bcrypt';

import { specialistInterface } from '../../Interfaces/spInterface';
import { specialistSchema } from '../../Validators/specialistValidator';
import { sqlConfig } from '../../Config/sqlConfig';


export const registerSpecialist = async (req: Request, res: Response) => {

    try{
        const { firstName, lastName, email, password, photo, location, phone, education, languages, skills, role, experience, description, hourlyRate}:specialistInterface = req.body;
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
                .input("password", mssql.VarChar, hashPwd)
                .input("phone", mssql.VarChar, phone)
                .input("photo", mssql.VarChar, photo)
                .input("education", mssql.VarChar, education)
                .input("language", mssql.VarChar, languages)
                .input("skillSet", mssql.VarChar, skills)
                .input( "role", mssql.VarChar, role)
                .input( "experience", mssql.VarChar, experience)
                .input( "location", mssql.VarChar, location)
                .input("hourlyRate" , mssql.VarChar, hourlyRate)
                .input("description" , mssql.VarChar, description)
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
    
 
 
//getAllSpecialist
export const getAllSpecialists = async (req: Request, res: Response) => {

    try {  
        const pool = await mssql.connect(sqlConfig);
        let allSpecialists = (await pool.request().execute('getAllSpecialist')).recordset

        return res.json({
            message: allSpecialists
        })
    } catch (error) {
        return res.json({error})
    }
};



//getOneSpecialist
export const getOneSpecialist = async (req: Request, res: Response) => {

    try {
        const id = req.params.specialist_id
        const pool = await mssql.connect(sqlConfig)
        let specialist = (await pool.request().input("specialist_id", id).execute('getOneSP')).recordset
        return res.json({
            specialist
        })
    } catch (error) {
        return res.json({error})
    }
};



//updateUser
export const updateSpecialist = async (req: Request, res: Response) => {
    try {
        const id = req.params.specialist_id
        const { firstName, lastName, email, password, photo, location, phone, education, languages, skills, role, experience, description, hourlyRate}:specialistInterface = req.body;
        let { error } = specialistSchema.validate(req.body)
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
         .input("specialist_id", id)
         .query('SELECT COUNT(*) AS userCount FROM Specialist WHERE specialist_id = @specialist_id');
     
     if (userExist.recordset[0].userCount === 0) {
         return res.json({ error: "No such Specialist." });
     }

     else{
        let UpdateResult = (await pool.request()
        .input("specialist_id", mssql.VarChar, id) 
        .input("firstName", mssql.VarChar, firstName)
        .input("lastName", mssql.VarChar, lastName)
        .input("email", mssql.VarChar, email)
        .input("password", mssql.VarChar, hashPwd)
        .input("phone", mssql.VarChar, phone)
        .input("photo", mssql.VarChar, photo)
        .input("education", mssql.VarChar, education)
        .input("language", mssql.VarChar, languages)
        .input("skillSet", mssql.VarChar, skills)
        .input( "role", mssql.VarChar, role)
        .input( "experience", mssql.VarChar, experience)
        .input( "location", mssql.VarChar, location)
        .input("hourlyRate" , mssql.VarChar, hourlyRate)
        .input("description" , mssql.VarChar, description)
        .execute('updateSp')).rowsAffected

        console.log(UpdateResult);
        
        return res.json({
            message: "specialist updated successfully"
        })
       }
    }

    } catch (error) {
        return res.json({error})
    }
};

//deleteUser
export const deleteSpecialist = async (req: Request, res: Response) => {

    try {
        const id = req.params.specialist_id

        const pool = await mssql.connect(sqlConfig)

        let result = (await pool.request()
        .input("specialist_id", mssql.VarChar, id)
        .execute('deleteSp')
        ).rowsAffected

        console.log(result[0]);
        
        if(result[0] == 0){
            return res.json({
                error: "Specialist not found"
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
   