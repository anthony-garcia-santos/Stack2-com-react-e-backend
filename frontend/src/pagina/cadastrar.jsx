
import './estilos/Cadastrar.css';
import { Navigate, useNavigate } from 'react-router-dom';
import PageTransition from './estilos/animação-telas';
import { useState } from "react";


export default function Cadastrar() {
  const navigate = useNavigate();
  const voltar = () => { navigate('/'); };


//react useState

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");


  const handleRegister = async (e) => {
    e.preventDefault();

    if (!password || !email) {
      setErrorMessage("Todos os campos devem ser preenchidos!");
      return;
    }


//backend

    const res = await fetch("http://localhost/backend/registrar.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ password, email }),
    });

    const data = await res.json();

    if (data.success) {
      setSuccessMessage("Registro realizado com sucesso!");
      setErrorMessage("");
    } else {
      setErrorMessage(data.message || "Erro ao registrar usuário.");
      setSuccessMessage("");
    }
  };





  return (

    <div className='tela-cadastro'> {/* Remova PageTransition temporariamente */}
      {errorMessage && <p className="error-message" style={{ color: 'red' }}>{errorMessage}</p>}

      {successMessage && <p className="success-message" style={{ color: 'green' }}>{successMessage}</p>}

      <form onSubmit={handleRegister}>


        <div className="input-groupo-registro">

          <input type="email" id="registrar-email" placeholder=" " value={email}
          onChange={(e) => setEmail(e.target.value)}/>

          <label htmlFor="registrar-email">Email</label>

        </div>



        <div className="input-groupo-registro">
          <input type="password" id="password-registro" placeholder=" " value={password}
          onChange={(e) => setPassword(e.target.value)}/>

          <label htmlFor="password-registro">Senha</label>

        </div>


        <div className="button-registro">

          <button type="submit" className="registrar-se">Registrar-se</button>

          <button type="button" onClick={voltar} className="voltar">Voltar para o início</button>

        </div>


      </form>

    </div>
  );
}
