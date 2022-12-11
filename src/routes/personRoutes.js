const doacaoController = require("../controllers/doacaoController")
const express = require("express")
const router = express.Router();

router.post("/criar", doacaoController.criaDoacao);
router.get('/buscar',doacaoController.findAllMedicamentos)
router.put('/atualizar',doacaoController.updateCadastro)
router.delete('/deleta',doacaoController.deleteCadastro)

module.exports = router

