const app = require('./src/app')
const PORT = process.env.PORT;

app.get("/", (req, res) => {
    res.send({ message: "API REST CARNEIRA"})
})

app.listen(PORT, ()=>{
    console.log(`API está rodando na porta ${PORT}`);
})