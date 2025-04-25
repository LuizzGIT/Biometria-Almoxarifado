const { Sequelize } = require('sequelize');
const dotenv = require('dotenv');

// Carrega as variáveis do arquivo .env
dotenv.config({ path: __dirname + '/.env' });

// Cria a instância do Sequelize
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
  }
);

// Exporta a instância do Sequelize para ser usada em outros arquivos
module.exports = sequelize;
