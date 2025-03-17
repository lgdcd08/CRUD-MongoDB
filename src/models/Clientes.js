/**
 * Modelo de dados para construção das coleções("tabelas")
 * Clientes
 */

// importação dos recursos do framework mongoose
const { model, Schema } = require('mongoose')

// criação da estrutura coleçao Clientes
const clienteSchema = new Schema({
    nomecliente: {
        type: String
    },
    foneCliente: { 
        type: String
    },
    cpf: {
        type: String,
        unique: true,
        index
    },
    dataCadastro,
    type: Date,
    default: Date.now
}, {versionKey: false})  //não versionar os dados armazenados

// exportar para o main o modelo de dados
// OBS: CLIENTES SERÁ O NOME COLEÇÃO
module.exports = model('Clientes', clienteSchema)