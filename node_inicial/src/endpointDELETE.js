const express = require('express');
 
const app = express();
 
app.use(express.json());

app.delete('/deletarCliente/:id', (req, res) => {
    const {id} = req.params;
 
    res.send("Cliente ID " + id + " foi deletado com sucesso!");
});

app.listen(3333, () => {
    console.log('Servidor Backend em execução...');
});
