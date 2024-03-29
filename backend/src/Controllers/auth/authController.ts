import { Request, Response } from "express";
import bcrypt from 'bcrypt'
import mssql from 'mssql'
import dotenv from 'dotenv'

dotenv.config();

import jwt from 'jsonwebtoken'
import { sqlConfig } from "../../Config/sqlConfig";
import { loginUserSchema } from "../../Validators/loginUserSchema";
import { ExtendedUserRequest } from "../../Middlewares/verifyToken";


const  SECRET = process.env.SECRET as string;

export const loginUser = async (req: Request, res: Response)=>{
    try {
        const {email, password} = req.body

        let {error} = loginUserSchema.validate(req.body)

        if(error){
            return res.json({
                error: error.details[0].message
            })
        }

        const pool = await mssql.connect(sqlConfig)

        let user = (await pool.request()
        .input("email" , email)
        .input("password", password)
        .execute("loginUser")).recordset

        console.log( user );
        // return res.json({
        //     user
        // })

        if(user[0]?.email == email){
            const correct_pwd = await bcrypt.compare(password, user[0].password)

            if(!correct_pwd){
                return res.json({
                    error: "Incorrect password"
                })
            }

            const loginCredentials = user.map(response =>{
                const {password, ...rest} = response

                return rest
            })

            const token = jwt.sign(loginCredentials[0], SECRET, {
                expiresIn: '126600s'
            })

            return res.json({
                message: "Logged in successfully",
                token,
             ...loginCredentials[0]
            })

        }else{
            return res.json({
                error: "User/Email not found/Email "
            })
        }
        
    } catch (error) {
        return res.sendStatus(501).json({
            error: "Internal server error"
        })
    }
}


export const checkUserDetails = async(req: ExtendedUserRequest, res: Response)=>{
    if(req.info){
        return res.json({
            info: req.info
        })
    }
}



export const resetPassword = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;
        const pool = await mssql.connect(sqlConfig);

        const checkEmail = `
            SELECT 
                CASE
                    WHEN EXISTS (SELECT 1 FROM Specialist WHERE email = @email) THEN 1
                    WHEN EXISTS (SELECT 1 FROM Clients WHERE email = @email) THEN 1
                    ELSE 0
                END AS userExists
        `;

        const emailCheckResult = await pool.request()
            .input("email", email)
            .query(checkEmail);

        const notExists = emailCheckResult.recordset[0].userExists;

        if (notExists === 0) {
            return res.json({
                message: "User not found"
            });
        }

        let hashedPwd = await bcrypt.hash(password, 5);

        const updatequery = `EXEC resetPassword @email, @password`;

        const updateResult = await pool.request()
            .input("email", email)
            .input("password", hashedPwd)
            .query(updatequery);

        if (updateResult.rowsAffected[0] < 1) {
            return res.json({
                message: "Failed to update password"
            });
        } else {
            return res.json({
                message: "Password updated successfully"
            });
        }

    } catch (error) {
        return res.json({
            error: 'error in catch block'
        });
    }
};
