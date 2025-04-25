// back/models/Ferramenta.js
const { DataTypes } = require('sequelize');
const sequelize = require('../database/db');

const Ferramenta = sequelize.define('Ferramenta', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  },
  tipo: {
    type: DataTypes.STRING,
    allowNull: false
  },
  // Outras colunas
});

module.exports = Ferramenta;
