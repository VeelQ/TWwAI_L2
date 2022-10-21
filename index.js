const express = require('express');
const config = require('./config').config;

const questions = require('./questions').preQuestions;

const app = express();

app.get('/api/questions', (request, response) => {
    let res = ""
    questions.forEach(element => {
        res += "<p>" + element.question + "</p>"
    })
   response.send(res);
});

app.listen(config.port, function () {
    console.info(`Server is running at port 3000`);
});