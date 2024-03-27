
import mssql from 'mssql'
import { sqlConfig } from '../../../Config/sqlConfig';
import { createApplication, getJobApplicationsByJobID, getSpecialistApplications } from '../../applications/application';


describe("Application creation", ()=>{

    let res: any

    beforeEach(()=>{
        res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn().mockReturnThis()
        }
    })

    it('successfully created Application', async()=>{
        const req ={

           body:{
            client_id: "1bc55a48-b507-4475-809f-376395ba4445",
            specialist_id: "215da6e6-c0e7-4547-8585-ae66bc62ba10",
            job_id:"666c79a4-edcc-45b9-9f24-9d346483b020"
         
           }  
        }
        const mockedInput = jest.fn().mockReturnThis() //makes it chainable
        const mockedExecute = jest.fn().mockResolvedValue({rowsAffected: [1]})

        const mockedRequest = {
            input: mockedInput,
            execute: mockedExecute
        }

        const mockedPool = {
            request: jest.fn().mockReturnValue(mockedRequest)
        }

        jest.spyOn(mssql, 'connect').mockResolvedValue(mockedPool as never)
        await createApplication(req as any, res)

        expect(res.json).toHaveBeenCalledWith({message:"Application created successfully"})
        
    })

});


//Test getJobapplicationByID

describe('getOnejOBbyID', () => {
    let res: any;

    beforeEach(() => {
        res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn().mockReturnThis()
   
   
   
        };
    });

    it('Successfully got one specialist by specialist_id', async () => {
       
        const mockedResult = [

            {
                apply_id: "40e94ada-7826-4046-8bc1-f6b61b15cafd",
                status: "ACCEPTED",
                job_id: "666c79a4-edcc-45b9-9f24-9d346483b020",
                jobName: "updated",
                specialist_id: "870e128b-f69b-42e9-b9c1-b4f9d279da7c",
                email: "danK@gmail.com",
                firstname: "Daniel",
                lastname: "k",
                client_id: "af511d51-346f-457f-9a64-465e888edd88"
              }
           
        ];

        const mockedExecute = jest.fn().mockResolvedValue({ recordset: mockedResult });


        const mockedPool = {
            request: jest.fn().mockReturnThis(),
            input: jest.fn().mockReturnThis(),
            execute: mockedExecute
        };

        jest.spyOn(mssql, 'connect').mockResolvedValue(mockedPool as never);


        const req = {
            params: {
                job_id: '666c79a4-edcc-45b9-9f24-9d346483b020' 
            }
        };

       
        await getJobApplicationsByJobID(req as any, res);

     
        expect(res.json).toHaveBeenCalledWith({ message: mockedResult });
    });

});



// Test for getSpecilaists applicatio
describe(' get a specialist application', () => {
    let res: any;

    beforeEach(() => {
        res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn().mockReturnThis()
        };
    });

    it('Successfully got applications fpr a specialist by specialist_id', async () => {
       
        const mockedResult = [

            {
                
                    apply_id: "18ca34f1-e1a3-426e-8cac-b91359674cd7",
                    job_id: "dead3464-0575-4be6-a5a3-e4d9659d5b7e",
                    jobName: "DESIGN CLEANING APP",
                    firstName: ["Godwin",
                      "af511d51-346f-457f-9a64-465e888edd88"
                    ],
                    email: "godwin@gmail.com",
                    phone: "0700064400",
                    category: "Android development",
                    budget: "$ 50,00",
                    duration: "3 months",
                    description: "design the application using kotlin",
                    status: "ACCEPTED"
              
              }
           
        ];

        const mockedExecute = jest.fn().mockResolvedValue({ recordset: mockedResult });


        const mockedPool = {
            request: jest.fn().mockReturnThis(),
            input: jest.fn().mockReturnThis(),
            execute: mockedExecute
        };

        jest.spyOn(mssql, 'connect').mockResolvedValue(mockedPool as never);


        const req = {
            params: {
                specialist_id: '215da6e6-c0e7-4547-8585-ae66bc62ba10' 
            }
        };

       
        await getSpecialistApplications(req as any, res);

     
        expect(res.json).toHaveBeenCalledWith({ message: mockedResult });
    });

});




