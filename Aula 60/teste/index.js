
// const { Pool } = require("pg");
const db = require("./db");
const format = require("pg-format");

// const pool = new Pool({
// host: "localhost",
// user: "postgres",
// password: "123456",
// database: "node"
// });

(async () => {
    
    // try {
    //     await pool.query(`
    //     CREATE TABLE IF NOT EXISTS funcionarios (
    //     id SERIAL PRIMARY KEY,
    //     nome text NOT NULL,
    //     email text NOT NULL UNIQUE,
    //     telefone text NOT NULL UNIQUE
    //     );
    //     CREATE TABLE IF NOT EXISTS enderecos (
    //     id SERIAL PRIMARY KEY,
    //     rua text NOT NULL,
    //     numero integer NOT NULL,
    //     cidade text NOT NULL,
    //     estado text NOT NULL,
    //     id_funcionario integer NOT NULL REFERENCES funcionarios
    //     );`);
    //     console.log("Tabelas criadas com sucesso!");
    //     } catch (error) {
    //     console.log(error.message);
    //     } finally {
    //     pool.end();
    //     }

     

//  try {
// const funcionarios = [
// ["joão", "joão@email.com", "(47) 9 8888-8888"],
// ["maria", "maria@email.com", "(47) 9 7777-7777"]
// ];

//  const query = format("INSERT INTO funcionarios (nome, email, telefone) VALUES %L RETURNING *", funcionarios);

//  const res = await db.query(query);

//  console.log(res.rows);
// } catch (error) {
// console.log(error.message);
// } finally {
// db.end();
// }
    try {
        const {rows} = await db.query("SELECT NOW()");
        console.log(rows);
    } catch (error) {
        console.log(error.message);
    } finally {
        db.end();
    }
})();