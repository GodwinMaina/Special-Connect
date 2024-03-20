
// controllers/appointmentController.ts

import { Request, Response } from "express";
import mssql from 'mssql';
import { sqlConfig } from "../../Config/sqlConfig";

export const createAppointment = async (req: Request, res: Response) => {
    try {
        const { client_id, specialist_id, startTime, endTime } = req.body;

        const pool = await mssql.connect(sqlConfig);

        const query = `
            INSERT INTO Appointments (client_id, specialist_id, startTime)
            VALUES (@clientId, @specialistId, @startTime);
        `;

        const result = await pool.request()
            .input("clientId", mssql.VarChar(250), client_id)
            .input("specialistId", mssql.VarChar(250), specialist_id)
            .input("startTime", mssql.DateTime, startTime)
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
