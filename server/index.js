const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'crud'
});

app.use(cors);
app.use(express.json());

app.post("/register", (req, res) => {
    const { name } = req.body;
    const { price } = req.body;
    const { category } = req.body;

    // ( ?,?,? ) -> mandando valores dinãmicos
    let SQL = "INSERT INTO games ( name, price, category ) VALUES ( ?,?,? ) ";

    db.query(SQL, [name, price, category], (error, result) =>{
        console.log(error);
    })
});

app.get("/getCards", (req, res) => {
    let SQL = "SELECT * FROM games"

    db.query(SQL, (err, result) => {
        if (err) console.log(err);
        else res.send(result)
    })
})

app.put("/edit", (req, res) => {
    const { id } = req.body;
    const { name } = req.body;
    const { price } = req.body;
    const { category } = req.body;

    let SQL = "UPDATE games SET name = ? price = ?, category = ? WHERE idGames = ?";

    db.query(SQL, [name, price, category, id], (err, result) => {
        if(err) console.log(err);
        else res.send(result)
    })
})

app.delete("/delete/:id", (req, res) => {
    const { id } = req.params;
    let SQL = "DELETE FROM games WHERE id = ? ";
    db.query(SQL, [id], (error, result) => {
        if (error) console.log(error);
        else res.send(result)
    })
})

// app.get('/', (req, res) => {
//     let sql = 
//         "INSERT INTO games (name, price, category) VALUES ('wILHAMS', '123', 'PROGRMAADOR' ) ";

//     db.query(sql, (err, result) => {
//         console.log('erroor', err);
//     })    
// });

// Demonstração
// app.get('/', (req, res) => {
//     res.send("Runnig Server!")
// });

app.listen(8888, () => {
    console.log('running server...');
});

// Para executar o servidos use: node index.js
// vá até http://localhost:3001 e veja a página apenas com o nome Cannot GET /