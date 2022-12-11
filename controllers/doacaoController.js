const cadastroPessoa = require("../models/Pessoa")

//Criação de dados
const criaDoacao = async (req, res) => {

    //req.body
    
    const {nome, medicamentos, qtd_medicamentos, telefone, data_validade_med , email, senha} = req.body
    
    if (!nome) {
        res.status(422).json({error: 'O nome é obrigatório!'})
        return
    }
    
    const pessoa = {
    nome,
    medicamentos, 
    qtd_medicamentos,
    telefone, 
    data_validade_med, 
    email, 
    senha
    }
    
    
    try {
     //CREATE - criando dados
        await  cadastroPessoa.create(pessoa)
        res.status(201).json({message: 'Pessoa inserida no sistema com sucesso!'})
    
    }catch (error){
        res.status(500).json({error: error})
    }
    
    }

    module.exports = {criaDoacao}
