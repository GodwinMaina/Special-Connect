import mssql from 'mssql';
import { Request, Response } from "express";
import { v4 } from 'uuid';

import { sqlConfig } from '../../Config/sqlConfig';
import { profileSchema } from '../../Validators/spProfileValidators';
import { profileInterface } from '../../Interfaces/profileInterface';


export const createProfile = async (req: Request, res: Response) => {

    try{
        const {specialist_id,role,experience, education, languages, skills, description, hourlyRate }:profileInterface= req.body;
        let { error } = profileSchema.validate(req.body)
        if (error) {
            return res.json({
                error: error.details[0].message
            })
        }

            else {
                const id = v4();
                const pool = await mssql.connect(sqlConfig)

                const newProfile= (await pool.request()
                .input("profile_id", mssql.VarChar, id)
                .input("specialist_id", mssql.VarChar, specialist_id)  
                .input("role", mssql.VarChar, role)
                .input("experience", mssql.VarChar, experience)
                .input("education", mssql.VarChar, education)
                .input("languages", mssql.VarChar, languages)
                .input("skills", mssql.VarChar, skills)
                .input("description", mssql.VarChar, description)
                .input("hourlyRate", mssql.VarChar, hourlyRate)
                .execute('createProfile')
                ).rowsAffected; 

                console.log(newProfile);

                if (newProfile) {
                    return res.json({
                        message: "New profile created successfully",
                    });
                } else {
                    return res.json({ error: "An error occurred while creating profile." });
                }
            }
        }
    //catch block
    catch (error) {
        console.error("Error creating profile:", error);
        return res.json({ error: " The profile was not created." });
    }
};

    