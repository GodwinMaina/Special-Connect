import mssql from 'mssql';
import { Request, Response } from "express";
import { v4 } from 'uuid';
import { sqlConfig } from '../../Config/sqlConfig';
import { jobSchema } from '../../Validators/jobsValidators';
import { JobInterface } from '../../Interfaces/jobsInterface';

// Create Job
export const createJob = async (req: Request, res: Response) => {
    try {
        const { jobName, category, description, duration, budget}: JobInterface = req.body;
        const client_id = req.params.id
        // Validate job data
        const { error } = jobSchema.validate(req.body);
        if (error) {
            return res.status(400).json({ error: error.details[0].message });
        }

        const job_id = v4();

        const pool = await mssql.connect(sqlConfig);

        await pool.request()
            .input("job_id", mssql.VarChar, job_id)
            .input("client_id", mssql.VarChar, client_id)
            .input("jobName", mssql.VarChar, jobName)
            .input("category", mssql.VarChar, category)
            .input("description", mssql.Text, description)
            .input("duration", mssql.VarChar, duration)
            .input("budget", mssql.VarChar, budget)
           
            // .input("specialist_id", mssql.VarChar, specialist_id)
            .execute('createJob');

        return res.json({ message: "Job created successfully", job_id });
    } catch (error) {
        console.error("Error creating job:", error);
        return res.status(500).json({ error: "An error occurred while creating job." });
    }
};

// Get all Jobs
export const getJobs = async (req: Request, res: Response) => {
    try {
        const pool = await mssql.connect(sqlConfig);
        let AllJobs = (await pool.request().execute('getAllJobs')).recordset
        return res.json({ 

            message:AllJobs
         })
    } catch (error) {
        console.error("Error fetching jobs:", error);
        return res.status(500).json({ error: "An error occurred while fetching jobs." });
    }
};

// Get Jobs by Category
export const getJobsByCategory = async (req: Request, res: Response) => {
    try {
        const category  = req.params.category;
        const pool = await mssql.connect(sqlConfig);
        const result = await pool.request().input("category", mssql.VarChar, category).execute('getJobsByCategory');
        const jobCategory = result.recordset;
        return res.json({ message:jobCategory });
    } catch (error) {
        console.error("Error fetching jobs by category:", error);
        return res.status(500).json({ error: "An error occurred while fetching jobs by category." });
    }
};

// Get one Job by id
export const getOneJob = async (req: Request, res: Response) => {
    try {
        const id  = req.params.job_id;
        const pool = await mssql.connect(sqlConfig)
        let message = (await pool.request().input("job_id", mssql.VarChar, id).execute('getOneJob')).recordset
        return res.json({ message})

    } catch (error) {
        console.error("Error fetching job by id:", error);
        return res.status(500).json({ error: "An error occurred while fetching job by id." });
    }
};

// Update Job
export const updateJob = async (req: Request, res: Response) => {
    try {
        const id  = req.params.job_id;
        const { jobName, category, description, duration, budget} = req.body;

        // Validate job data
        const { error } = jobSchema.validate(req.body);
        if (error) {
            return res.status(400).json({ error: error.details[0].message });
        }

        const pool = await mssql.connect(sqlConfig);
        const result = await pool.request()
            .input("job_id", mssql.VarChar, id)
            .input("jobName", mssql.VarChar, jobName)
            .input("category", mssql.VarChar, category)
            .input("duration", mssql.VarChar, duration)
            .input("budget", mssql.VarChar, budget)
            .input("description", mssql.Text, description)
            // .input("client_id", mssql.VarChar, client_id)
            // .input("specialist_id", mssql.VarChar, specialist_id)
            .execute('updateJob');

        if (result.rowsAffected[0] === 0) {
            return res.json({ error: "Job not found." });
        }
        return res.json({ message: "Job updated successfully" });
    } catch (error) {
        console.error("Error updating job:", error);
        return res.status(500).json({ error: "An error occurred while updating job." });
    }
};

// Delete Job
export const deleteJob = async (req: Request, res: Response) => {
    try {
        const id  = req.params.job_id;
        const pool = await mssql.connect(sqlConfig);
        const result = await pool.request().input("job_id", mssql.VarChar,id).execute('deleteJob');
        if (result.rowsAffected[0] === 0) {
            return res.status(404).json({ error: "Job not found." });
        }
        return res.json({ message: "Job deleted successfully" });
    } catch (error) {
        console.error("Error deleting job:", error);
        return res.status(500).json({ error: "An error occurred while deleting job." });
    }
};

// Get Jobs by client id
export const getJobsByClient = async (req: Request, res: Response) => {
    try {
        const  id  = req.params.client_id;
        const pool = await mssql.connect(sqlConfig);
        const clientJobs = (await pool.request().input("client_id", mssql.VarChar, id).execute('getJobsByClient')).recordset
        return res.json({ message:clientJobs });
    } catch (error) {
        console.error("Error fetching jobs by client id:", error);
        return res.status(500).json({ error: "An error occurred while fetching jobs by client id." });
    }
};

// Get Jobs by specialist id
export const getJobsBySpecialist = async (req: Request, res: Response) => {
    try {
        const { specialist_id } = req.params;
        const pool = await mssql.connect(sqlConfig);
        const specialistJobs = (await pool.request().input("specialist_id", mssql.VarChar, specialist_id).execute('getJobsBySpecialist')).recordset
    
        return res.json({ message:specialistJobs });
    } catch (error) {
        console.error("Error fetching jobs by specialist id:", error);
        return res.status(500).json({ error: "An error occurred while fetching jobs by specialist id." });
    }
};
