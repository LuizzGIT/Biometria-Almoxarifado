const express = require('express');
const sequelize = require('./database/db');
const Funcionario = require('./models/Funcionario');
const Ferramenta = require('./models/Ferramenta');
const Movimentacao = require('./models/Movimentacao');

const app = express();
const PORT = 3000;

// Testa a conexão com o banco de dados
sequelize.authenticate()
  .then(() => {
    console.log('Conexão com o banco de dados foi bem-sucedida!');
    
    // Sincroniza os models com o banco de dados (cria as tabelas)
    sequelize.sync({ force: true })  // Cuidado com o `force: true`, ele apaga as tabelas antes de criar novas
      .then(() => {
        console.log('Tabelas sincronizadas!');
      })
      .catch((err) => {
        console.error('Erro ao sincronizar as tabelas:', err);
      });

  })
  .catch((error) => {
    console.error('Erro ao conectar ao banco de dados:', error);
  });

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});

