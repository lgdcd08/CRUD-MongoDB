/**
 * Processo Principal 
 * Estudo do Banco de dados MongoDB (CRUD)
 * @author Professor José de Assis
 */

// importação do módulo de conexão
const { conectar, desconectar } = require ('./database.js')

//importação do ,odelo de dados do cliente
const clienteModel = require('.src/models/Clientes.js')

//Função para cadastrar um novo cliente
// ATENÇÃO! Para trabalhar com banco de dados usar sempre async-await e try-catch
const salvarCliente = async (nomeCli, fonecli, cpfCli) => {
    try {
        //setar a estrutura de dados com os valores
        //OBS: Usar os mesmos nomes da estrutura
        const novoCliente = new clienteModel({
            nomeCliente: nomeCli,
            foneCliente: fonecli,
            cpf: cpfCli
        })
        // a linha abaixo salva os dados no banco de dados
        await novoCliente.save()
        console.log("Clinete salvo com sucesso")
    } catch (error) {
        console.log(error)
    }
}
//==================================================
const iniciarSistema = async () => {
    console.clear()
    console.log("Estudo do MongoDB")
    console.log("---------------------------------")
    await conectar()
    // CRUD create (inserção no banco de dados)
    await salvarCliente("Bill Gates", "9999-1234", "12345678900" )
    await desconectar()
}

iniciarSistema()