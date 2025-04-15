
import './estilos/Cadastrar.css';
import { Navigate, useNavigate } from 'react-router-dom';
import PageTransition from './estilos/animação-telas';


export default function Cadastrar() {

  const navigate = useNavigate();

  const voltar = () => {

    navigate('/');
  };

  return (
    <PageTransition>
      <div className='tela-cadastro'>


        <div className="input-groupo-registro">
          <input type="text" placeholder=" "></input>
          <label for="registrar-email">registrar-email</label>
        </div>

        <div className="input-groupo-registro">
          <input type="password" placeholder=" "></input>
          <label for="password-registro">registrar-senha</label>
        </div>

        <div className="button-registro">
          <button className="registrar-se">registrar-se</button>
          <button onClick={voltar} className="voltar">Voltar para o inicio</button>
        </div>
      </div>
    </PageTransition>
  );
}  