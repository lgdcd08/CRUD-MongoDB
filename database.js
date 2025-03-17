/**
 * Módulo de conexão de banco de dado
 * Uso do framework mongoose (simplifica o processo para usar o mongodb)
 */

//Importação do mongoose
const mongoose = require('moongoose')

// Configuração do acesso ao banco de dados
// é necessário um ip ou link e ua autenticação(usuário e senha)
//Observação, no caso do atlas oubter via compass(é o workband da sql)
//Para criar um banco de dados personalizado basta escolher um nome no final da String da url (ex: dbcliemtes)
const url = 'mongodb+srv//admin:123Senc@aws-cluster'

// criar uma variavel de apoio para validação
let conectado = false

//método para conectar o banco de dados
//async é executar a funçao de forma asyncrona
const conectar = async () => {
    // validação (se nao estiver conectdo, conectar)
    if (!conectado) {
        //conectar com o banco de dados
        // try catch - tratamento de exceções
        try {
            await mongoose.connect(url)
            conectado = true //setar a variavél
            console.log("MongoDB conectado")
        } catch (error) {
            console.log(error)
        }
    }
}

//método para desconectar o banco de dados
const desconectar = async () => {
    // validação (se estiver conectado, desconectar)
    if (conectado) {
        //desconectar com o banco de dados
        // try catch - tratamento de exceções
        try {
            await mongoose.disconnect(url) //desconectar
            conectado = false //setar a variavél
            console.log("MongoDB desconectado")
        } catch (error) {
            //se o codigo de erro for 8000
            if (error.code = 8000){
                console.log("Erro de autenticação")
            } else {
                console.log(error)
            }
        }
    }
}

// exportar para o main os métodos conectar e desconectar
module.exports = { conectar, desconectar }
