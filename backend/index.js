const express = require('express');

const app = express();

app.get ('/', (request, response) => {
    //return response.send('Hello World');
    return response.json({
        evento: 'Hello World',
        aluno: 'Junim Roberti'});
});
app.listen(3333);