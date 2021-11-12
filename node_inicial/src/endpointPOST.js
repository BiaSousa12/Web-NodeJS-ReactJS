const express = require('express');
 
const app = express();

app.use(express.json());
 
app.post('/cadastrocliente', (req, res) => {
    const {nome, telefone, idade, profissao, email} = req.body;

    res.send("cliente " + nome + telefone + idade + profissao + email + " foi recebido com sucesso!");
});

app.listen(3333, () => {
    console.log("Servidor Backend ON!");
});
