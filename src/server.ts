import express from 'express';

import "./database"

const app = express();
/* 
    GET = Buscar
    POST = Criação
    PUT = Alteração
    DELETE = Deletar
    PATCH = Alterar Info Específica
*/

app.get("/", (req, res) => {
    return res.send("Olá NLW 05");
})

app.post("/users", (req, res) => {
    return res.json({ message: "Usuario Salvo!" });
})

app.listen(3000, () => console.log('Server Rodando 3000'))