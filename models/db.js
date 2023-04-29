const Sequelize = require('sequelize');
//Conexão com o banco de dados
const sequelize = new Sequelize('sql10614852','sql10614852','VcMjgbVEQu',{
 host: "sql10.freemysqlhosting.net",
 port: "3306",
 dialect: 'mysql'
});
//Vamos exportar as variáveis
module.exports = {
 Sequelize: Sequelize,
 sequelize: sequelize
}
