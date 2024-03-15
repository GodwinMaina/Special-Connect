import express from 'express'
import cron from 'node-cron'
import { welcomeClient, welcomeSpecialist} from './mailServices/welcome'

const app = express()

const run = async () => {
    cron.schedule('*/5 * * * * *', async () => {
        console.log('checking for a new Specialist');
        // console.log('checking for a new client');

    
        await welcomeSpecialist()
    })
}



const run2 = async () => {
    cron.schedule('*/5 * * * * *', async () => {
        // console.log('checking for a new Specialist');
        console.log('checking for a new client');


        await welcomeClient()
    })
}


// const running = async () => {
//     cron.schedule('*/50 * * * * *', async () => {
//         console.log('checking for a new task');

//         await welcomeUser()
//     })
// }

run()
run2()

app.listen(4200, () => {
    console.log("server running ...");
})