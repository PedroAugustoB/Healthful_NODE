import {Client} from "../Models/ClientModel.js";

export class ClientController{

    static listarTodos(req, res){
        const clientes = new Client().SelectAll()
        return res.status(200).json(clientes)
    }

    static novoCliente(){
        const { nome , idade, cpf } = req.body;
        new Client(nome, idade, cpf).Insert();
        
    }

}