require("dotenv").config()
const express = require("express")
const cors = require("cors")
const mongoose = require("./database/dbConnect")
const rotaPessoa = require("./routes/personRoutes")
const index = require("./routes/index")
const swaggerFile = require("../swagger/swagger_output.json")
const swaggerUi = require("swagger-ui-express")

const app = express()

app.use(express.json())
app.use(cors())
mongoose.connect()

app.use('/', index)
app.use("/carneira", rotaPessoa)
app.use("/minha-documentacao", swaggerUi.serve, swaggerUi.setup(swaggerFile))

module.exports = app;

//toda vez que eu auterar o meu codigo no terminal eu vou colocar npm run swagger-autogen