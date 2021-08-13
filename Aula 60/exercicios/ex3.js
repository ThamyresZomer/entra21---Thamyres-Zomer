// function inserirCliente(cliente) {

//     console.log(cliente);
// }

// const cliente = {
//     nome: "Pedro", 
//     numero_documento: "213.123.123-12",
//     tipo_pessoa: "PF",
//     rua: "Rua 1",
//     numero: 123,
//     cidade: "Timbó",
//     estado: "SC",
//     cep: "12322-123"
// }

// inserirCliente(cliente);



const db = require("./db");

(async () => {
    try {
        await db.query(`
        INSERT INTO enderecos (rua, numero, cidade, estado, cep) VALUES
        ('Rua 1', '123', 'Timbó', 'SC', '12322-123')
        RETURNING;

        INSERT INTO clientes (nome, numero_documento, tipo_pessoa) VALUES
        ( 'Pedro', '213.123.123-12', 'PF')
        RETURNIG;
           
        `)
        console.log("Objetos adicionados com sucesso!");
    } catch (error) {
        console.log(error.message);
    }
})();
    