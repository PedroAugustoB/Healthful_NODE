import {Client} from "../Models/ClientModel.js";

export class ClientController{

    static async listarTodos(req, res){
        try {
            const clientes = await Client.SelectAll();
            return res.status(200).json(clientes)
        }
        catch(error) {
            console.log('error no ClientController.js')
            return res.status(500).json(clientes)
        }
    }

    static novoCliente(){
        const { nome , idade, cpf } = req.body;
        new Client(nome, idade, cpf).Insert();

        
    }

}