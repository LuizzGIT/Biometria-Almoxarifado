// back/models/Funcionario.js
const { DataTypes } = require('sequelize');
const sequelize = require('../database/db');  // Importa a conexão com o banco

const Funcionario = sequelize.define('Funcionario', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  },
  cpf: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  cargo: {
    type: DataTypes.STRING,
    allowNull: false
  },
  // Outras colunas que quiser adicionar
});

// Exporta o modelo para ser usado em outras partes
module.exports = Funcionario;
