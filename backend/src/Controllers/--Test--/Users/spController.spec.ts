

import bcrypt from 'bcrypt'
import mssql from 'mssql'
import { getAllSpecialists, getOneSpecialist, registerSpecialist, updateSpecialist } from '../../Users/spController'




describe("specialist Registration", ()=>{

    let res: any

    beforeEach(()=>{
        res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn().mockReturnThis()
        }
    })

    it('successfully registers a specialist', async()=>{
        const req ={
            body:
            {
               firstName:"HEX",
               lastName: "ALLAN",
               email: "HXALLAN@gmail.com",
               password: "123456",
               phone: "078904560"
           }
        }
        jest.spyOn(bcrypt, 'hash').mockResolvedValueOnce("H23Pwdkjy" as never)
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
        await registerSpecialist(req as any, res)

        expect(res.json).toHaveBeenCalledWith({message: "Account for new specialist created successfully",
        id: expect.any(String)},
        
        )
        
    })


});


//test 2

//Test GETTAllProducts
describe('get all Specialist', () => {
    let res: any;

    beforeEach(() => {
        res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn().mockReturnThis()
        };
    });

    it('Successfully got all specialists', async () => {
        const mockedResult =
         [ 
            {
            specialist_id: "215da6e6-c0e7-4547-8585-ae66bc62ba10",
            firstName: "HEX",
            lastName: "ALLAN",
            email: "HXALLAN@gmail.com",
            password: "$2b$05$hMG/4iKrgchlKzTl06e.Hukip/0qga8Buf42Qq/IYSPEczmgIVqyy",
            phone: "078904560",
            isAdmin: false,
            isWelcomed: false,
            isProfiled: false,
            isDeleted: false
          }

        ]

        const mockedExecute = jest.fn().mockResolvedValue({ recordset: mockedResult });
        const mockedPool = {
            request: jest.fn().mockReturnThis(),
            execute: mockedExecute
        };

        jest.spyOn(mssql, 'connect').mockResolvedValue(mockedPool as never);

        await getAllSpecialists({} as any, res);
        
        expect(res.json).toHaveBeenCalledWith({message:mockedResult});
    });
});



// Test for getOneProduct
describe('getOneProduct', () => {
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
                specialist_id: "215da6e6-c0e7-4547-8585-ae66bc62ba10",
                firstName: "HEX",
                lastName: "ALLAN",
                email: "HXALLAN@gmail.com",
                password: "$2b$05$hMG/4iKrgchlKzTl06e.Hukip/0qga8Buf42Qq/IYSPEczmgIVqyy",
                phone: "078904560",
                isAdmin: false,
                isWelcomed: false,
                isProfiled: false,
                isDeleted: false
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

       
        await getOneSpecialist(req as any, res);

     
        expect(res.json).toHaveBeenCalledWith({ specialist: mockedResult });
    });

});


// Test for updateSpecialist
describe('updateSpecialist', () => {
    let res: any;

    beforeEach(() => {
        res = {
            json: jest.fn().mockReturnThis()
        };
    });

    it('should update a specialist successfully', async () => {
        const req = {
            params: {
                specialist_id: '215da6e6-c0e7-4547-8585-ae66bc62ba10' 
            },
            body: {
                firstName: "Updated John",
                lastName: "Doe",
                email: "godwin@gmail.com",
                password: "password",
                phone: "0112556890"
            }
        };

        const mockedRowsAffected = [1]; // Assuming one row is affected (updated) in the database
        const mockedExecute = jest.fn().mockResolvedValue({ rowsAffected: mockedRowsAffected });

        const mockedPool = {
            request: jest.fn().mockReturnThis(),
            input: jest.fn().mockReturnThis(),
            execute: mockedExecute
        };

        jest.spyOn(mssql, 'connect').mockResolvedValue(mockedPool as never);

        await updateSpecialist(req as any, res);

        expect(mockedExecute).toHaveBeenCalled();
        expect(res.json).toHaveBeenCalledWith({
            message: 'specialist updated successfully'
        });
    });
});
