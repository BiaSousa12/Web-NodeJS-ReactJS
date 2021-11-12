const express = require('express');
 
const app = express();

app.use(express.json());

app.put('/cliente', (req, res) => {
    const {nome, telefone, idade, profissao, email} = req.body;
 
    res.send("cliente " + nome + telefone + idade + profissao + email + " foi atualizado com sucesso!");
});

app.put('/atualizar/:id', (req, res) => {
    const {id} = req.params;
 
    res.send("Cliente ID " + id + " foi excluído com sucesso!");
});

app.listen(3333, () => {
    console.log("Servidor Backend ON!");
});
