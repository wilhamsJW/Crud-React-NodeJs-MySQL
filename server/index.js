const express = require("express");
const app = express();
const db = require("mysql")

app.get('/', (req, res) => {
    res.send("Runnig Server!")
});

app.listen(3001, () => {
    console.log('running server...');
});

// Para executar o servidos use: node index.js
// vá até http://localhost:3001 e veja a página apenas com o nome Cannot GET /