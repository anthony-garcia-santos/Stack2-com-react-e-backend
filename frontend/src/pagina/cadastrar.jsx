import './estilos/Cadastrar.css';
import { useNavigate } from 'react-router-dom';
import PageTransition from './estilos/animação-telas';
import { useState } from "react";
import api from '../services/api';

export default function Cadastrar() {
  const navigate = useNavigate();
  const voltar = () => navigate('/');

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");


  // ===================== BACK (função de envio do cadastro) =====================


  const handleRegister = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setErrorMessage("Todos os campos devem ser preenchidos!");
      return;
    }

    try {
      const resposta = await api.post('/users/cadastro', { email, password });
      const data = resposta.data;

      if (resposta.status === 200 && data.success) {
        setSuccessMessage("Registro realizado com sucesso!");
        setErrorMessage("");
      } else {
        setErrorMessage(data.message || "Erro ao registrar usuário.");
        setSuccessMessage("");
      }
    } catch (error) {
      console.error(error);
      if (error.response) {
        setErrorMessage(error.response.data.message || "Erro no servidor.");
      } else {
        setErrorMessage("Erro de conexão com o servidor.");
      }
      setSuccessMessage("");
    }
  };


  // ============================================================================

  // =========================== FRONT (interface) ==============================


  return (
    <PageTransition>
      <div className='tela-cadastro'>
        {errorMessage && <p className="error-message" style={{ color: 'red' }}>{errorMessage}</p>}
        {successMessage && <p className="success-message" style={{ color: 'green' }}>{successMessage}</p>}

        <form onSubmit={handleRegister}>
          <div className="input-groupo-registro">
            <input
              type="email"
              id="registrar-email"
              placeholder=" "
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="registrar-email">Email</label>
          </div>

          <div className="input-groupo-registro">
            <input
              type="password"
              id="password-registro"
              placeholder=" "
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label htmlFor="password-registro">Senha</label>
          </div>

          <div className="button-registro">
            <button type="submit" className="registrar-se">Registrar-se</button>
            <button type="button" onClick={voltar} className="voltar">Voltar para o início</button>
          </div>
        </form>
      </div>
    </PageTransition>
  );

  // ============================================================================

}
