
import mssql from 'mssql';
import { Request, Response } from "express";
import { v4 } from 'uuid';

import { sqlConfig } from '../../Config/sqlConfig';
import { reviewSchema } from '../../Validators/reviewsSchema';
import { review } from '../../Interfaces/review';



export const createReview = async (req: Request, res: Response) => {
    try {
        const { client_id, specialist_id, comment } = req.body;
        const review_id = v4();
        const pool = await mssql.connect(sqlConfig);
        await pool.request()
            .input("review_id", mssql.VarChar, review_id)
            .input("client_id", mssql.VarChar, client_id)
            .input("specialist_id", mssql.VarChar, specialist_id)
            .input("comment", mssql.VarChar, comment)
            .execute('addReview');
        return res.json({
            message: 'Review created successfully'
        })
    } catch (error) {
        return res.json({ error })
    }
};


export const getSpecialistReviews = async (req: Request, res: Response) => {
    try {
        const id = req.params.specialist_id
        const pool = await mssql.connect(sqlConfig);
        let message = (await pool.request().input("specialist_id", mssql.VarChar, id).execute('getSpecialistReviews')).recordset
        return res.json({
            message: message
        })
    } catch (error) {
        return res.json({ error })
    }
}