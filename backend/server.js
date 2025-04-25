const express = require('express');
const cors = require('cors');
const userRoutes = require('./routes/UsersRoutes');  // Importa as rotas do usuário

const app = express();

app.use(cors());
app.use(express.json());  // Para poder processar JSON no corpo da requisição

app.use('/api/users', userRoutes);  // Define o prefixo /api/users para as rotas de usuário

app.get('/', (req, res) => {

  res.send('api no ar')


});

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
