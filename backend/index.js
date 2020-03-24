const express = require('express');

const app = express();

app.use(express.json());

/*
Metodos HTTP:

    GET: busca informação
    POST: cria informação
    PUT: altera informação
    delete: deleta informação
*/

/*  
Tipos de Parametros:

    Query Params: paramentros nomeados enviados na rota apos "?" ( Filtros, paginação,..)
    Route Params: Parametros para identificar recursos
    Request Body: Corpo da requisição, utilizado para criar ou alterar recursos.
*/

app.psot ('/users', (request, response) => {
    const body = request.body;

    console.log(body);
    //return response.send('Hello World');
    return response.json({
        evento: 'Hello World',
        aluno: 'Junim Roberti'});
});
app.listen(3333);