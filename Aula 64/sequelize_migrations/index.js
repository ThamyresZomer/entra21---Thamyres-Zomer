const { sequelize, Usuario } = require("./db/models");

(async () => {
    try {
        await sequelize.sync({ force: true });
        await sequelize.authenticate();
        console.log("Conecção bem sucedida!")

        // Inserindo um usuário:
        const pedro = await Usuario.create({
            nome: "Pedro",
            email: "pedro@gmail.com",
            senha: "123456"
        });
        console.log("Usuario criado com sucesso!");
        // Inserindo um endereço:

        await pedro.createEndereco({
            rua: "Rua 1",
            numero: 123
        });

        console.log("Endereço foi inserido com sucesso!");

        // inserindo um projeto:

        await pedro.createProjeto({
            nome: "Projeto 1 ",
            quantidadeHoras: 10
        });
        console.log("Projeto criado com sucesso!");

    } catch (error) {
        console.log("Erro", error);
    } finally {
        sequelize.close();
    }
})();