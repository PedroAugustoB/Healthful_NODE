import { CreatePoolSqlSever } from "../../pool.js";
const conexao = await CreatePoolSqlSever();

export class Client{
    constructor(nome, idade, cpf){
        this._nome = nome,
        this._idade = idade,
        this._cpf = cpf
    }

    static async SelectAll(){
        try{
            const { recordset} = await conexao.query('select * from Cliente')
            return recordset;
        }
        catch(error){
        }
    }

    Insert(){
        ClientesTable.push({
            nome : this._nome,
            idade : this._idade,
            cpf : this._cpf
        })
    }

}