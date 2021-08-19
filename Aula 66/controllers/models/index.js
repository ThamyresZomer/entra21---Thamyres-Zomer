const express = require("express");
const app = express();
const porta = 3000;

app.use(express.json());

app.get("/", (req, res) => {
res.send("Hello World!");
});

app.post("/", (req, res) => {
res.send("post endpoint");
});

app.put("/", (req, res) => {
res.send("put endpoint");
});

app.delete("/", (req, res) => {
res.send("delete endpoint");
});

app.get("/usuarios", (req, res) => {
res.send("endpoint usuarios");
});

app.post("/usuarios", (req, res) => {
const body = req.body;

 res.send(body);
});

app.listen(porta, () => {
console.log(`Servidor está rodando em http://localhost:${porta}`);
});