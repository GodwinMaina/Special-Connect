import * as sql from "mssql";
import dotenv from "dotenv";
import { sqlConfig } from "../Config/sqlConfig";
import mssql from "mssql";

dotenv.config();

const pool = new sql.ConnectionPool(sqlConfig);
// console.log(pool);

const poolConnect = pool.connect();

export async function query(queryString: string): Promise<sql.IResult<any>> {
  await poolConnect;

  try {
    const request = new sql.Request(pool);
    const result = await request.query(queryString);
    return result;
  } catch (error) {
    throw new Error(`Error executing SQL query: ${error}`);
  }
}

export const execute = async (
  procedureName: string,
  params: { [key: string]: any } = {}
) => {
  await poolConnect;

  try {
    const request = new sql.Request(pool);

    for (const key in params) {
      if (params.hasOwnProperty(key)) {
        request.input(key, params[key]);
      }
    }

    const result = await request.execute(procedureName);
    return result;
  } catch (error) {
    throw new Error(`Error executing stored procedure: ${error}`);
  }
};






export default class Connection{

    // private pool: Promise <mssql.ConnectionPool>

    // constructor(){
    //     this.pool = this.getConnection()
    // }

    // getConnection(): Promise<mssql.ConnectionPool>{
    //     const pool = mssql.connect(sqlConfig) as Promise<mssql.ConnectionPool>;

    //     return pool
    // }

    // createRequest(request: mssql.Request, data:{[c:string | number]:string | number}){
    //     const keys = Object.keys(data)

    //     keys.map((keyName)=>{
    //         const keyValue = data[keyName]
    //         request.input(keyName, keyValue)
    //     })

    //     return request
    // }

    // async execute(procedureName: string, data:{[c:string | number]: string| number} = {}){
    //     let pool = await this.pool

    //     let request = (await pool.request()) as mssql.Request

    //     request = this.createRequest(request, data)

    //     const result = await request.execute(procedureName)

    //     return result
    // }

    // async query(query:string){
    //     const result = (await this.pool).request().query(query)

    //     return result
    // }

    static async query(query:string){
        const pool = mssql.connect(sqlConfig) as Promise <mssql.ConnectionPool>

        let request = ((await pool).request().query(query))

        return request
    }

    static async execute(procedureName: string, data:{[c:string | number]: string| number} = {}){
        const pool = mssql.connect(sqlConfig) as Promise <mssql.ConnectionPool>

        let request = ((await pool).request()) as mssql.Request

        for(let key in data){
            request.input(key, data[key])
        }

        const result = await request.execute(procedureName)

        return result
    }

}