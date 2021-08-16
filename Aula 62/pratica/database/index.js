require("dotenv").config();
const{ Sequelize } = require("sequelize")
const dbConfig = require("../config/database");

console.log(dbConfig);

const sequelize = new Sequelize(dbConfig);

module.exports = sequelize;
//  testando conecção
// (async () => {
//     try {
//         await sequelize.authenticate();
//         console.log('Conecção bem-sucedida!');
//     } catch (error) {
//         console.log('Conexão falhou!', error);
//     } finally {
//         sequelize.close();
//     }
// })();