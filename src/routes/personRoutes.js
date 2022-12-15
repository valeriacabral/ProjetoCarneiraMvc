const doacaoController = require("../controllers/doacaoController")
const express = require("express")
const router = express.Router();

router.post("/criar", doacaoController.criaDoacao);
router.get('/buscar',doacaoController.findAllMedicamentos)
router.put('/atualizar/:id',doacaoController.updateCadastro)
router.delete('/delete/:id',doacaoController.deleteCadastro)

module.exports = router

