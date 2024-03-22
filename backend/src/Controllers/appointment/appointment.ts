
// controllers/appointmentController.ts

import { Request, Response } from "express";
import mssql from 'mssql';
import { sqlConfig } from "../../Config/sqlConfig";
import { v4 } from "uuid";

export const createAppointment = async (req: Request, res: Response) => {
    try {
        const { client_id, specialist_id,time, message} = req.body;

        const pool = await mssql.connect(sqlConfig);

        const id = v4();
        const query = `
            INSERT INTO Appointments (appointment_id ,client_id, specialist_id, time, message)
            VALUES (@appointment_id,@client_id, @specialist_id, @time, @message);
        `;

        const result = await pool.request()
            .input("appointment_id", mssql.VarChar(250), id)
            .input("client_id", mssql.VarChar(250), client_id)
            .input("specialist_id", mssql.VarChar(250), specialist_id)
            .input("message", mssql.Text, message)
            .input("time", mssql.DateTime, time)
            .query(query);

        if (result.rowsAffected[0] > 0) {
            return res.status(201).json({ message: "Appointment created successfully" });
        } else {
            return res.status(500).json({ error: "Failed to create appointment" });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Server error" });
    }
};
