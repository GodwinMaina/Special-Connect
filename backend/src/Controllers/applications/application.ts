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
          
                    
            const { job_id, client_id, specialist_id }: application = req.body;

            const existingApplication = await checkExistApplic(job_id, specialist_id);
            if (existingApplication) {
                return res.json({ error: "You have already applied for this job" });
            }

          //if not applied next then apply the job 
            const apply_id = v4()  
            const pool = await mssql.connect(sqlConfig);
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
            }
            
            else {
                return res.json({ error: "Failed to establish database connection" });
            }


        }

    } catch (error) {
        return res.json({ error });
    }

}


// Function to check if the user has already applied for the specified job
async function checkExistApplic(job_id: string, talent_id: string): Promise<boolean> {
    const pool = await mssql.connect(sqlConfig);

    if (pool.connected) {
        const result = (await pool.request()
            .input("job_id", mssql.VarChar, job_id)
            .input("specialist_id", mssql.VarChar, talent_id)
            .execute('checkExistingApplication')).recordset[0].count;

        // const count = result.recordset[0].count;
        return result > 0;
    } else {
        throw new Error("Failed to establish database connection");
    }
}



export const getJobApplicationsByJobID = async (req: Request, res: Response) =>{
    try {
        const job_id = req.params.job_id;

        const pool = await mssql.connect(sqlConfig);

        const result = await pool.request()
            .input("job_id", mssql.VarChar, job_id)
            .execute('getJobApplications');

        return res.json({
            message: result.recordset
        });

    } catch (error) {
        return res.json({ error }); 
    }
}



export const getSpecialistApplications = async (req: Request, res: Response) => {
    try {
        const specialist_id  = req.params.specialist_id;

        const pool = await mssql.connect(sqlConfig);

        let message = (await pool.request()
            .input("specialist_id", mssql.VarChar, specialist_id)
            .execute('getSpecialistApplications')).recordset;

        return res.json({
            message
        });
    } catch (error) {
        return res.json({ error });
    }
}



export const updateApplication = async (req: Request, res: Response) => {
    try {
        const { apply_id, status } = req.body;

        const pool = await mssql.connect(sqlConfig);

        await pool.request()
            .input("apply_id", mssql.VarChar, apply_id)
            .input("status", mssql.VarChar, status)
            .execute('updateApplication');

        return res.json({ message: 'Application updated successfully' });
    } catch (error) {
        return res.json({ error });
    }
}



export const deleteApplication = async (req: Request, res: Response) => {
    try {
        const { apply_id } = req.params;

        const pool = await mssql.connect(sqlConfig);

        await pool.request()
            .input("apply_id", mssql.VarChar, apply_id)
            .execute('deleteApplication');

        return res.json({ message: 'Application deleted successfully' });
    } catch (error) {
        return res.json({ error });
    }
}