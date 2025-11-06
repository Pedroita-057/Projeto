
// Aqui é a estrutura básica do servidor 
const express = require('express');
const app = express();
const mySql = require('mysql');
const cors = require('cors'); 

// Aqui é a Configuração da conexão com o banco de dados MySQL
const db = mySql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'Pedro450',
  database: 'form_agendamento',
});

// permite que o servidor aceite requisições 
app.use(cors()); // Permite fazer integração com front-end
app.use(express.json()); // Permite que o servidor o corpo do projeto 


app.listen(3001, () => {
  console.log('Servidor rodando na porta 3001');
} );

//Aqui é a rota usada para enviar dados para o servidor
app.post('/agendar', (req, res) => {
  const { nome, horario, dia, telefone } = req.body;

// Aqui Verfica se todos os campos do imput foram preenchidos  
  if (!nome || !horario || !dia || !telefone) {
    return res.status(400).send('Todos os campos são obrigatórios.');
  }

// Aqui define o comando sql para enviar o que será executado   
  const sql = 'INSERT INTO agendamentos (nome, horario, dia, telefone) VALUES (?, ?, ?, ?)';
  db.query(sql, [nome, horario, dia, telefone], (err) => {
    if (err) {
      console.error('Erro ao inserir no banco:', err);
      return res.status(500).send('Erro ao salvar agendamento.');
    }
    res.send('Agendamento realizado com sucesso!');
  });
});
