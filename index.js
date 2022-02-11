const express = require('express');
const app = express();
const db = require('./db/db');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', express.static('public'))

app.get('/api/excavators', (req, res) => {
    let data = db.read('db.json');
    res.send(data);
})

app.get("*", (req, res) => {
    res.sendStatus(404)
})

app.listen(8080, ()=> {console.log("Listening on Port 8080")})
