let ClientesTable = [
    {
        nome : 'Victor H',
        idade : '17'
    },

    {
        nome : 'Pedro Augusto',
        idade : '17'
    },

    {
        nome : 'Bruno Mendeiros',
        idade : '23'
    },
]

export class Client{
    constructor(nome, idade, cpf){
        this._nome = nome,
        this._idade = idade,
        this._cpf = cpf
    }

    SelectAll(){
        return ClientesTable;
    }

    Insert(){
        ClientesTable.push({
            nome : this._nome,
            idade : this._idade,
            cpf : this._cpf
        })
    }

}