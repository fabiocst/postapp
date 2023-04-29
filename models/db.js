const Sequelize = require('sequelize');
//Conexão com o banco de dados
const sequelize = new Sequelize('epiz_34100722_postapp','epiz_34100722','UsbpgxX9UmYowq6',{
 host: "sql304.epizy.com",
 port: "80",
 dialect: 'mysql'
});
//Vamos exportar as variáveis
module.exports = {
 Sequelize: Sequelize,
 sequelize: sequelize
}
