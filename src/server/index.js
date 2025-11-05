const express = require('express');
const app = express();
const mySql = require('mysql');
const cors = require('cors');

const db = mySql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'Pedro450',
  database: 'form_agendamento',
});

app.use(cors());
app.use(express.json());

app.listen(3001, () => {
  console.log('Servidor rodando na porta 3001');
} );



// Rota para receber e salvar os dados do formulário
app.post('/agendar', (req, res) => {
  const { nome, horario, dia, telefone } = req.body;

  if (!nome || !horario || !dia || !telefone) {
    return res.status(400).send('Todos os campos são obrigatórios.');
  }

  const sql = 'INSERT INTO agendamentos (nome, horario, dia, telefone) VALUES (?, ?, ?, ?)';
  db.query(sql, [nome, horario, dia, telefone], (err) => {
    if (err) {
      console.error('Erro ao inserir no banco:', err);
      return res.status(500).send('Erro ao salvar agendamento.');
    }
    res.send('Agendamento inserido com sucesso!');
  });
});
