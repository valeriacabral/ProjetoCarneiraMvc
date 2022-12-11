const doacaoController = require("../controllers/doacaoController")
const express = require("express")
const router = express.Router();

router.post("/", doacaoController.criaDoacao);

module.exports = router

