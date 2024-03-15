import mssql from 'mssql'
import { sqlConfig } from '../Config/sqlConfig'
import ejs from 'ejs'
import { sendMail } from '../helpers/emailHelpers'


export const welcomeSpecialist = async () => {
    const pool = await mssql.connect(sqlConfig)

    const users = (await pool.request().execute("WELCOMESPECIALIST")).recordset

    console.log(users);

    for (let user of users) {
        ejs.renderFile('templates/welcome.ejs', { firstName: user.firstName }, async (error, data) => {
            let mailOptions = {
                from: "compgodwin@gmail.com",
                to: user.email,
                subject: "Welcome to GigBridge",
                html: data
            }

            try {
                await sendMail(mailOptions)

                await pool.request().query('UPDATE Specialist SET isWelcomed = 1 WHERE isWelcomed = 0 AND isDeleted = 0')


                console.log("Emails sent to new specialist");

            } catch (error) {
                console.log(error);

            }
        })
    }
};


export const welcomeClient = async () => {
    const pool = await mssql.connect(sqlConfig)

    const users = (await pool.request().execute("WELCOMECLIENT")).recordset

    console.log(users);

    for (let user of users) {
        ejs.renderFile('templates/welcome.ejs', { firstName: user.firstName }, async (error, data) => {
            let mailOptions = {
                from: "compgodwin@gmail.com",
                to: user.email,
                subject: "Welcome to GigBridge",
                html: data
            }

            try {
                await sendMail(mailOptions)

                await pool.request().query('UPDATE Clients SET isWelcomed = 1 WHERE isWelcomed = 0 AND isDeleted = 0')


                console.log("Emails sent to new Client");

            } catch (error) {
                console.log(error);

            }
        })
    }
}