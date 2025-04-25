// back/models/Movimentacao.js
const { DataTypes } = require('sequelize');
const sequelize = require('../database/db');

const Movimentacao = sequelize.define('Movimentacao', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  tipo: {  // Exemplo: "entrada" ou "saída"
    type: DataTypes.STRING,
    allowNull: false
  },
  data: {
    type: DataTypes.DATE,
    allowNull: false
  },
  // Outras colunas
});

module.exports = Movimentacao;
