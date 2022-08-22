import sql from 'mssql';
import { sqlConfig } from './src/utils/database.js';

export async function CreatePoolSqlSever(){
    try{
        const pool = new sql.ConnectionPool(sqlConfig);

        await pool.connect();

        return pool
     
    }
    catch(error){
        console.log(`error na pool: ${error}`)
        return false
    }
}