const express = require('express');
 
const app = express();
 
app.use(express.json());
 
app.get('/dadospessoais', (req, res) => {
    res.send( { nome: 'Beatriz',
                idade: 20,
                email: 'beasouza20091@gmail.com',
                profissao: 'Recepcionista'} );
});

app.get('/formacao', (req, res) => {
    res.send( { GrauEscolar: 'Cursando o ensino superior em Ciêcia da Computação',
                AnoDeConclusão: 2023,
                Instuição: 'UNIP',} );
});

app.get('/projetos', (req, res) => {
    res.send( { Atual: 'APS2 Criptografia em Python',} );
});

app.get('/experiencia', (req, res) => {
    res.send( { Profissão: "Estagiária de 2017 até 2019 da Defensoria Pública da União e terceirizada de 2019 até os dias atuais, também na Defensoria Pública da União",} );
});

app.get('/lazer', (req, res) => {
    res.send( { Lazer: 'Ler, assistir séries, me juntar com os amigos com um violão, praia, cinema e andar de bicicleta',} );
});

app.listen(3333, () => {
    console.log('Servidor Backend em execução...');
});
