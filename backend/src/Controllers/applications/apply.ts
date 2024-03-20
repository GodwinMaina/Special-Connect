import mssql from 'mssql';
import { Request, Response } from "express";
import {v4} from 'uuid';
import { sqlConfig } from "../../Config/sqlConfig";
import { application } from "../../Interfaces/application";
import { createApplicationSchema } from "../../Validators/applicationSchema";

export const createApplication = async (req: Request, res: Response) => {
    try {
        
        

       

        const {error} = createApplicationSchema.validate(req.body)

        if(error){
            return res.json({ error: error })
        } 
        
        else {
            const pool = await mssql.connect(sqlConfig);
                    
            const { job_id, client_id, specialist_id }= req.body;
            const apply_id = v4()            

            if(pool.connected){
                const result = (await pool.request()
                .input("apply_id", mssql.VarChar, apply_id)
                .input("job_id", mssql.VarChar, job_id)
                .input("client_id", mssql.VarChar, client_id)
                .input("specialist_id", mssql.VarChar, specialist_id)
                // .input("status", mssql.VarChar, status)
                .execute('createApplication')).rowsAffected

                if  (result[0]>0) {
                    return res.json({ message: "Application created successfully" })
                } else {
                    return res.json({ error: "Failed to create application" })
                } 
            }else {
                return res.json({ error: "Failed to establish database connection" });
            }
        }

    } catch (error) {
        return res.json({ error });
    }
}


export const getJobApplications = async (req: Request, res: Response) =>{
    try {
        const job_id = req.params.job_id;

        const pool = await mssql.connect(sqlConfig);

        const result = await pool.request()
            .input("job_id", mssql.VarChar, job_id)
            .execute('getJobApplications');

        return res.json({
            applications: result.recordset
        });

    } catch (error) {
        return res.json({ error }); 
    }
}

export const getTalentApplications = async (req: Request, res: Response) => {
    try {
        const { talentId } = req.params;

        const pool = await mssql.connect(sqlConfig);

        const result = await pool.request()
            .input("specialist_id", mssql.VarChar, talentId)
            .execute('getTalentApplications');

        return res.json({
            applications: result.recordset
        });
    } catch (error) {
        return res.json({ error });
    }
}


export const updateApplication = async (req: Request, res: Response) => {
    try {
        const { applicationId, status } = req.body;

        const pool = await mssql.connect(sqlConfig);

        await pool.request()
            .input("apply_id", mssql.VarChar, applicationId)
            .input("status", mssql.VarChar, status)
            .execute('updateApplication');

        return res.json({ message: 'Application updated successfully' });
    } catch (error) {
        return res.json({ error });
    }
}


export const deleteApplication = async (req: Request, res: Response) => {
    try {
        const { applicationId } = req.params;

        const pool = await mssql.connect(sqlConfig);

        await pool.request()
            .input("apply_id", mssql.VarChar, applicationId)
            .execute('deleteApplication');

        return res.json({ message: 'Application deleted successfully' });
    } catch (error) {
        return res.json({ error });
    }
}