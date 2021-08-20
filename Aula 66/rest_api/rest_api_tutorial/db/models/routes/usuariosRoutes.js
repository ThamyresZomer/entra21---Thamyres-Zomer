const express = require("express");
const router = express.Router();

// Importando os controllers
const usuariosControllers = require("../controllers/usuariosControllers");

// Importando as validations
const usuariosValidations = require("../validations/usuariosValidations");

router.get("/", usuariosControllers.getAll);

router.get("/:id", usuariosValidations.get, usuariosControllers.getOne);

router.post("/", usuariosValidations.post, usuariosControllers.create);


// POST /usuarios/1412384123436481723/projetos - Criar um projeto para o usuário
// GET /usuarios/1412384123436481723/projetos - Obter os projetos de um usuário
// GET /projetos/21312312312312 - Obter um projeto pelo ID do projeto
// PUT /projeto/1231231231231 - Atualizar um projeto pelo ID
// router.delete("/:id", usuariosControllers.remove);

router.put("/:id", usuariosValidations.put, usuariosControllers.update);

module.exports = router;