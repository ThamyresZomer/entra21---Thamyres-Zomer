const db = require("./db");

(async () => {
    try {
        await db.query(`
        CREATE TABLE IF  NOT EXISTS clientes (
            id SERIAL PRIMARY KEY,
            nome text NOT NULL,
            numero_documento text NOT NULL,
            tipo_pessoa text NOT NULL,
            pontos numeric NOT NULL
        );
        
        CREATE TABLE IF NOT EXISTS enderecos (
            id SERIAL PRIMARY KEY,
            rua text NOT NULL,
            numero integer NOT NULL,
            cidade text NOT NULL,
            estado text NOT NULL,
            cep character NOT NULL,
            id_cliente integer NOT NULL REFERENCES clientes
        );
        
        CREATE TABLE IF NOT EXISTS livros (
            isbn text PRIMARY KEY,
            nome_autor text NOT NULL,
            assunto text NOT NULL,
            quantidade_estoque numeric NOT NULL,
            preco character NOT NULL,
            id_editora text NOT NULL
        );
        
        CREATE TABLE IF NOT EXISTS compras (
            id_cliente text NOT NULL,
            id_livro text NOT NULL,
            data character NOT NULL,
            valor character NOT NULL
        );
        
        CREATE TABLE IF NOT EXISTS editoras (
            id SERIAL PRIMARY KEY,
            nome_gerente text NOT NULL,
            telefone text NOT NULL UNIQUE
        );
        `);

        console.log("Tabelas criadas com sucesso!");
    } catch (error) {
        console.log(error.message);
    }
})();