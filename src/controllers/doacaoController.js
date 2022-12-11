const cadastroPessoa = require("../models/Pessoa.js")

//Criação de dados Post
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


    const findAllMedicamentos = async (req, res) => {
        try {
          const allmedicamentos = await cadastroPessoa.find();
          res.status(200).json(allmedicamentos);
        } catch {
          console.log(error);
          res.status(500).json({ message: error.message });
        };
      };
      
      
      const updateCadastro = async (req, res) => {
        try {
          const {
            nome,
            medicamentos, 
            qtd_medicamentos,
            telefone, 
            data_validade_med, 
            email, 
            senha
          } = req.body;
          const updateCadastro = await cadastroPessoa.findByIdAndUpdate(req.params.id, {
             nome,
            medicamentos, 
            qtd_medicamentos,
            telefone, 
            data_validade_med, 
            email, 
            senha
          });
          res.status(200).json({ message: "Cadastro atualizado com sucesso", updateCadastro });
        } catch {
          console.error(error);
          res.status(500).json({ message: error.message });
        };
      };
      
      const deleteCadastro = async (req, res) => {
          try {
            const { id } = req.params;
            const deleteCadastro = await cadastroPessoa.findByIdAndDelete(id);
            const message = `Cadastro de ${deleteCadastro.nome} foi  deletado com sucesso`;
            res.status(200).json({ message });
          } catch (error){
            console.error(error);
            res.status(500).json({ message: error.message });
          };
        };
        
        module.exports = {
          findAllMedicamentos,
          updateCadastro,
          deleteCadastro,
          criaDoacao,
          
          
        };
        
      
      
    