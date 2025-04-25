// Esse controller vai lidar com o cadastro de usuário
exports.handleRegister = async (req, res) => {
  const { email, password } = req.body;

  // Validação simples
  if (!email || !password) {
    return res.status(400).json({ success: false, message: 'Todos os campos devem ser preenchidos!' });
  }

  // Simulação de cadastro (aqui você pode interagir com o banco de dados)
  const novoUsuario = { email, password };  // Aqui você iria salvar no banco

  console.log(`usuario registrado ${email, password}`, novoUsuario)
  // Retorna uma resposta para o front
  return res.json({ success: true, message: 'Usuário registrado com sucesso!', usuario: novoUsuario });
};
