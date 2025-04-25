const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');  // Importa o controller de usuário

router.post('/cadastro', userController.handleRegister);  // Rota de cadastro

module.exports = router;
