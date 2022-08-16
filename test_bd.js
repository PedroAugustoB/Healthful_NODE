import sql from 'mssql';
import { sqlConfig } from './src/utils/database.js';

export async function test_conexao(){

    sql.on('error', err => {
        console.log('lib teste_bd.js:' + err);
        return false;
    })

    const pool = await sql.connect(sqlConfig);

    if( pool._connected == true )
    {
        console.log('conexão estabelecida');
        pool.close();
        return true
    }
    else{
        console.log('connection test_bd.js:'  + pool);
        pool.close();
        return false
    }
}